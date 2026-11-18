import { useState, type ReactNode } from "react";
import {
  Anchor,
  Award,
  Check,
  Dumbbell,
  Flame,
  Home,
  Map as MapIcon,
  Trash2,
  TreePine,
  Trophy,
  UserRound,
  Users,
} from "lucide-react";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Btn, Card, Stat } from "./ui";
import { cn } from "@/lib/cn";
import {
  BADGE_COPY,
  INFRA,
  INBOX,
  LESSONS,
  PLACES,
  SHOP,
  SPORTS,
  TRASH,
  ageLabel,
  fa,
  familyBoard,
  hoodBoard,
  isLearner,
  kinFor,
  lessonById,
  levelOf,
  missionCopy,
  rankOf,
  sportRows,
  teachesUp,
  topSport,
  xpInto,
} from "@/lib/village/model";
import { useVillage } from "@/lib/village/store";

export type TabId = "map" | "path" | "sport" | "family" | "me";

export function World({ tab, setTab }: { tab: TabId; setTab: (tab: TabId) => void }) {
  return (
    <div className="flex flex-col gap-4 px-4 pt-4 pb-6">
      <Hud />
      {tab === "map" ? <MapScreen setTab={setTab} /> : null}
      {tab === "path" ? <PathScreen setTab={setTab} /> : null}
      {tab === "sport" ? <SportScreen /> : null}
      {tab === "family" ? <FamilyScreen /> : null}
      {tab === "me" ? <MeScreen /> : null}
    </div>
  );
}

function Hud() {
  const profile = useVillage((s) => s.profile)!;
  const level = levelOf(profile.xp);
  const into = xpInto(profile.xp);
  return (
    <div className="flex items-center gap-3">
      <div className="relative grid size-14 place-items-center">
        <svg viewBox="0 0 48 48" className="absolute inset-0 size-14 -rotate-90">
          <circle cx="24" cy="24" r="18" className="fill-none stroke-line" strokeWidth="4" />
          <circle
            cx="24"
            cy="24"
            r="18"
            className="fill-none stroke-gulf"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray={`${(into / 80) * 113} 113`}
          />
        </svg>
        <span className="text-sm font-bold">{fa(level)}</span>
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate font-bold">{profile.name}</p>
        <p className="text-xs text-muted">
          {rankOf(level)} · {ageLabel(profile.age)}
        </p>
      </div>
      <Pill icon={<Flame className="size-4 text-gold" />} text={fa(profile.streak)} />
      <Pill icon={<span className="size-2 rounded-full bg-gold" />} text={fa(profile.coins)} />
    </div>
  );
}

function Pill({ icon, text }: { icon: ReactNode; text: string }) {
  return (
    <span className="inline-flex min-h-10 items-center gap-1 rounded-full bg-paper px-3 text-sm font-bold shadow-sm">
      {icon}
      {text}
    </span>
  );
}

function MapScreen({ setTab }: { setTab: (tab: TabId) => void }) {
  const profile = useVillage((s) => s.profile)!;
  const [placeId, setPlaceId] = useState<string | null>(null);
  const place = PLACES.find((item) => item.id === placeId) ?? null;
  const week = Math.min(100, 38 + (profile.done.includes("litter") ? 28 : 0) + Math.min(profile.teaches, 3) * 8);

  return (
    <div className="rise-in grid gap-4">
      <div className="relative overflow-hidden rounded-3xl border border-line">
        <img src="/village/map.jpg" alt="نمای روستای دهخدا" className="aspect-video w-full object-cover" />
        {PLACES.map((item) => (
          <button
            key={item.id}
            type="button"
            aria-label={item.name}
            onClick={() => setPlaceId(item.id)}
            style={{ left: item.x, top: item.y }}
            className={cn(
              "absolute size-11 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 shadow-sm",
              placeId === item.id ? "border-gold bg-gold" : "border-paper bg-gulf",
            )}
          />
        ))}
      </div>
      <div className="flex gap-2 overflow-x-auto pb-1">
        {PLACES.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setPlaceId(item.id)}
            className={cn(
              "min-h-11 shrink-0 rounded-full px-4 text-sm font-semibold",
              placeId === item.id ? "bg-gulf text-paper" : "border border-line bg-paper text-ink",
            )}
          >
            {item.name}
          </button>
        ))}
      </div>
      <Card>
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-sm text-muted">چالش این هفته</p>
            <p className="font-bold">کوچه‌های آرام‌تر</p>
          </div>
          <p className="text-sm font-bold text-gulf">{fa(week)}٪</p>
        </div>
        <div className="mt-3 h-2 overflow-hidden rounded-full bg-sand-deep">
          <div className="h-full rounded-full bg-leaf" style={{ width: `${week}%` }} />
        </div>
      </Card>
      {place ? (
        <Card className="grid gap-3">
          <div className="flex gap-3">
            <img src={place.img} alt="" className="size-20 rounded-2xl object-cover" />
            <div>
              <h3 className="text-lg font-bold">{place.name}</h3>
              <p className="text-sm leading-6 text-muted">{place.line}</p>
            </div>
          </div>
          <Btn
            onClick={() => {
              if (place.go === "litter" || place.go === "event") setTab("path");
              else setTab(place.go);
              setPlaceId(null);
            }}
          >
            برو سر کار این‌جا
          </Btn>
        </Card>
      ) : (
        <p className="text-sm text-muted">روی یک نقطه از نقشه بزن تا کار همان‌جا باز شود.</p>
      )}
    </div>
  );
}

function PathScreen({ setTab }: { setTab: (tab: TabId) => void }) {
  const profile = useVillage((s) => s.profile)!;
  const copy = missionCopy(profile.age);
  const nodes = [
    { id: "litter", title: "کوچه", text: copy.litter, icon: Trash2 },
    { id: "teach", title: "خانه", text: copy.teach, icon: Users },
    { id: "sport", title: "ورزش", text: copy.sport, icon: Dumbbell },
    { id: "event", title: "عصر", text: copy.event, icon: Anchor },
  ];
  const current = nodes.find((node) => !profile.done.includes(node.id))?.id;

  return (
    <div className="rise-in grid gap-3">
      <div>
        <h2 className="text-2xl font-bold">راه امروز</h2>
        <p className="text-sm text-muted">هر تمام‌کردن، عادت فردا را سبک‌تر می‌کند.</p>
      </div>
      {nodes.map((node) => {
        const done = profile.done.includes(node.id);
        const Icon = node.icon;
        return (
          <article
            key={node.id}
            className={cn(
              "rounded-3xl border bg-paper p-4",
              done ? "border-leaf" : current === node.id ? "border-gulf" : "border-line",
            )}
          >
            <div className="flex items-start gap-3">
              <span
                className={cn(
                  "grid size-11 shrink-0 place-items-center rounded-2xl",
                  done ? "bg-leaf text-paper" : "bg-sand text-gulf",
                )}
              >
                {done ? <Check className="size-5" /> : <Icon className="size-5" />}
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="font-bold">{node.title}</h3>
                <p className="text-sm leading-6 text-muted">{node.text}</p>
              </div>
            </div>
            {node.id === "litter" ? <LitterBlock /> : null}
            {node.id === "event" ? <EventBlock /> : null}
            {node.id === "teach" && !done ? (
              <Btn className="mt-3 w-full" tone="paper" onClick={() => setTab("family")}>
                برو به خانواده
              </Btn>
            ) : null}
            {node.id === "sport" && !done ? (
              <Btn className="mt-3 w-full" tone="paper" onClick={() => setTab("sport")}>
                ثبت علاقه
              </Btn>
            ) : null}
          </article>
        );
      })}
    </div>
  );
}

function LitterBlock() {
  const profile = useVillage((s) => s.profile)!;
  const collect = useVillage((s) => s.collect);
  const done = profile.done.includes("litter");
  return (
    <div className="relative mt-3 overflow-hidden rounded-2xl">
      <img src="/village/lane.jpg" alt="" className="h-56 w-full object-cover" />
      {done ? (
        <div className="absolute inset-0 grid place-items-center bg-leaf/80 text-paper">
          <p className="text-lg font-bold">کوچه امروز تمیز است</p>
        </div>
      ) : (
        TRASH.map((piece) =>
          profile.litter.includes(piece.id) ? null : (
            <button
              key={piece.id}
              type="button"
              aria-label="برداشتن زباله"
              onClick={() => collect(piece.id)}
              style={{ left: piece.left, top: piece.top }}
              className="absolute grid size-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-paper text-gulf shadow-sm"
            >
              <Trash2 className="size-4" />
            </button>
          ),
        )
      )}
      {!done ? (
        <p className="absolute right-3 bottom-3 rounded-full bg-paper px-3 py-1 text-xs font-bold">
          {fa(profile.litter.length)} از {fa(6)}
        </p>
      ) : null}
    </div>
  );
}

function EventBlock() {
  const profile = useVillage((s) => s.profile)!;
  const finishEvent = useVillage((s) => s.finishEvent);
  if (profile.done.includes("event")) return null;
  return (
    <Btn className="mt-3 w-full" onClick={finishEvent}>
      حاضرم در غروب اسکله
    </Btn>
  );
}

function SportScreen() {
  const profile = useVillage((s) => s.profile)!;
  const setSport = useVillage((s) => s.setSport);
  const sendSports = useVillage((s) => s.sendSports);
  const rows = sportRows(profile, profile.sportsSent);
  const lead = topSport(rows);
  const mineLead = [...rows].sort((a, b) => b.mine - a.mine)[0];

  return (
    <div className="rise-in grid gap-4">
      <div>
        <h2 className="text-2xl font-bold">ورزش دهخدا</h2>
        <p className="text-sm leading-6 text-muted">
          اول می‌پرسیم. بعد زمین می‌سازیم. رأی گروه سنی تو جدا شمرده می‌شود.
        </p>
      </div>
      <Card className="grid gap-3">
        {SPORTS.map((sport) => {
          const value = profile.sports[sport.id] ?? 0;
          return (
            <div key={sport.id} className="flex items-center justify-between gap-3">
              <p className="font-semibold">{sport.name}</p>
              <div className="flex gap-1">
                {[1, 2, 3].map((step) => (
                  <button
                    key={step}
                    type="button"
                    disabled={profile.sportsSent}
                    aria-label={`${sport.name} درجه ${step}`}
                    onClick={() => setSport(sport.id, value === step ? 0 : step)}
                    className={cn(
                      "size-11 rounded-xl border",
                      value >= step ? "border-gold bg-gold" : "border-line bg-sand",
                    )}
                  />
                ))}
              </div>
            </div>
          );
        })}
        <Btn className="w-full" disabled={profile.sportsSent} onClick={sendSports}>
          {profile.sportsSent ? "رأی تو داخل جمع است" : "ثبت رأی"}
        </Btn>
      </Card>
      <Card>
        <h3 className="font-bold">تقاضای روستا</h3>
        <div className="mt-3 h-56">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={rows} layout="vertical" margin={{ right: 8, left: 8 }}>
              <XAxis type="number" hide />
              <YAxis
                type="category"
                dataKey="name"
                width={92}
                tick={{ fill: "var(--color-ink)", fontSize: 12 }}
              />
              <Tooltip
                cursor={{ fill: "transparent" }}
                contentStyle={{
                  background: "var(--color-paper)",
                  border: "1px solid var(--color-line)",
                  borderRadius: 12,
                  fontFamily: "Vazirmatn",
                }}
              />
              <Bar dataKey="village" name="کل روستا" fill="var(--color-gulf)" radius={6} />
              <Bar dataKey="mine" name="سن تو" fill="var(--color-gold)" radius={6} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>
      <Card className="bg-gulf text-paper">
        <p className="text-sm text-gold-soft">پیشنهاد زیرساخت</p>
        <h3 className="mt-1 text-xl font-bold">{lead.name}</h3>
        <p className="mt-2 leading-7">{INFRA[lead.id]}</p>
        <p className="mt-3 text-sm text-gold-soft">
          در سن {ageLabel(profile.age)}، {mineLead.name} جلوتر است.
        </p>
      </Card>
    </div>
  );
}

function FamilyScreen() {
  const profile = useVillage((s) => s.profile)!;
  const teach = useVillage((s) => s.teach);
  const acceptLesson = useVillage((s) => s.acceptLesson);
  const [lessonId, setLessonId] = useState(LESSONS[0].id);
  const learner = isLearner(profile.age);

  return (
    <div className="rise-in grid gap-4">
      <div>
        <h2 className="text-2xl font-bold">{learner ? "درس بچه‌ها" : "یاد بده"}</h2>
        <p className="text-sm leading-6 text-muted">
          {teachesUp(profile.age)
            ? "تو به پدر و مادر و بزرگ‌تر یاد می‌دهی. آن‌ها با پذیرفتن، امتیاز خانواده را هم می‌گیرند."
            : learner
              ? "یک کودک درس فرستاده. پذیرفتن، خودش فرهنگ است."
              : "تو پل هستی: چیزی که بلدی را به کوچک‌تر برسان."}
        </p>
      </div>
      {learner ? (
        <div className="grid gap-3">
          {INBOX.map((item) => {
            const lesson = lessonById(item.lesson);
            const taken = profile.learned.includes(item.id);
            return (
              <Card key={item.id} className="grid gap-2">
                <p className="text-sm text-muted">{item.who}</p>
                <p className="font-bold">{lesson?.title}</p>
                {taken ? (
                  <p className="rounded-2xl bg-gold-soft px-3 py-2 text-sm">{lesson?.reply}</p>
                ) : (
                  <Btn onClick={() => acceptLesson(item.id)}>می‌پذیرم</Btn>
                )}
              </Card>
            );
          })}
        </div>
      ) : (
        <>
          <div className="flex gap-2 overflow-x-auto pb-1">
            {LESSONS.map((lesson) => (
              <button
                key={lesson.id}
                type="button"
                onClick={() => setLessonId(lesson.id)}
                className={cn(
                  "min-h-11 shrink-0 rounded-full px-4 text-sm font-semibold",
                  lessonId === lesson.id ? "bg-gulf text-paper" : "border border-line bg-paper text-ink",
                )}
              >
                {lesson.title}
              </button>
            ))}
          </div>
          <div className="grid gap-3">
            {kinFor(profile.age).map((person) => {
              const sent = profile.teachings.find((item) => item.id === `${person.id}:${lessonId}`);
              return (
                <Card key={person.id} className="grid gap-2">
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-bold">{person.name}</p>
                    {sent ? <Check className="size-5 text-leaf" /> : null}
                  </div>
                  {sent ? (
                    <p className="rounded-2xl bg-gold-soft px-3 py-2 text-sm">{sent.reply}</p>
                  ) : (
                    <Btn onClick={() => teach(person.id, person.name, lessonId)}>این درس را بگو</Btn>
                  )}
                </Card>
              );
            })}
          </div>
        </>
      )}
      {profile.teachings.length > 0 ? (
        <Card>
          <h3 className="font-bold">درس‌هایی که رفته</h3>
          <ul className="mt-2 grid gap-2 text-sm">
            {profile.teachings.slice(0, 4).map((item) => (
              <li key={item.id} className="text-muted">
                <span className="font-semibold text-ink">{item.who}: </span>
                {item.lesson}
              </li>
            ))}
          </ul>
        </Card>
      ) : null}
    </div>
  );
}

const HOODS_LABEL: Record<string, string> = {
  pier: "محله اسکله",
  hara: "محله حرا",
  mosque: "محله مسجد",
};

function MeScreen() {
  const profile = useVillage((s) => s.profile)!;
  const buy = useVillage((s) => s.buy);
  const upgradeHouse = useVillage((s) => s.upgradeHouse);
  const reset = useVillage((s) => s.reset);
  const hoods = hoodBoard(profile);
  const families = familyBoard(profile);
  const houseCost = 80 * profile.house;

  return (
    <div className="rise-in grid gap-4">
      <article className="overflow-hidden rounded-3xl bg-gulf text-paper">
        <div className="flex gap-4 p-4">
          <img src="/village/portrait.jpg" alt="" className="size-20 rounded-2xl object-cover" />
          <div className="min-w-0">
            <p className="text-sm text-gold-soft">{profile.kind === "golden" ? "کارت طلایی" : "شهروند شورا"}</p>
            <h2 className="truncate text-2xl font-bold">{profile.name}</h2>
            <p className="text-sm">{HOODS_LABEL[profile.hood]}</p>
          </div>
        </div>
        {profile.owned.length > 0 ? (
          <div className="flex flex-wrap gap-2 px-4 pb-4">
            {profile.owned.map((id) => (
              <span key={id} className="rounded-full bg-gulf-deep px-3 py-1 text-xs">
                {SHOP.find((item) => item.id === id)?.name}
              </span>
            ))}
          </div>
        ) : null}
      </article>
      <div className="grid grid-cols-2 gap-2">
        <Stat label="سطح" value={fa(levelOf(profile.xp))} />
        <Stat label="خانه" value={`${fa(profile.house)} از ${fa(3)}`} />
        <Stat label="پاک‌سازی" value={fa(profile.cleans)} />
        <Stat label="درس" value={fa(profile.teaches)} />
      </div>
      <Card>
        <h3 className="mb-2 font-bold">نشان‌ها</h3>
        <div className="flex flex-wrap gap-2">
          {Object.entries(BADGE_COPY).map(([id, label]) => {
            const on = profile.badges.includes(id);
            return (
              <span
                key={id}
                className={cn(
                  "inline-flex min-h-9 items-center gap-1 rounded-full px-3 text-xs font-semibold",
                  on ? "bg-gold-soft text-ink" : "bg-sand text-muted",
                )}
              >
                <Award className="size-3.5" />
                {label}
              </span>
            );
          })}
        </div>
      </Card>
      <Card className="grid gap-3">
        <h3 className="font-bold">بازار روستا</h3>
        {SHOP.map((item) => {
          const owned = profile.owned.includes(item.id);
          return (
            <div key={item.id} className="flex items-center justify-between gap-3">
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-xs text-muted">{item.detail}</p>
              </div>
              <Btn tone={owned ? "leaf" : "paper"} disabled={owned} onClick={() => buy(item.id, item.cost)}>
                {owned ? "داری" : `${fa(item.cost)} سکه`}
              </Btn>
            </div>
          );
        })}
        <div className="flex items-center justify-between gap-3 border-t border-line pt-3">
          <div>
            <p className="font-semibold">اتاق اضافه</p>
            <p className="text-xs text-muted">خانه مجازی، سطح {fa(profile.house)}</p>
          </div>
          <Btn tone="gold" disabled={profile.house >= 3} onClick={upgradeHouse}>
            {profile.house >= 3 ? "کامل" : `${fa(houseCost)} سکه`}
          </Btn>
        </div>
      </Card>
      <Card>
        <h3 className="mb-2 flex items-center gap-2 font-bold">
          <Trophy className="size-4 text-gold" />
          محله‌ها
        </h3>
        <ol className="grid gap-2">
          {hoods.map((hood, index) => (
            <li key={hood.id} className="flex items-center justify-between text-sm">
              <span className={hood.mine ? "font-bold text-gulf" : ""}>
                {fa(index + 1)}. {hood.label}
              </span>
              <span className="font-semibold">{fa(hood.score)}</span>
            </li>
          ))}
        </ol>
      </Card>
      <Card>
        <h3 className="mb-2 font-bold">خانواده‌ها</h3>
        <ol className="grid gap-2">
          {families.map((family, index) => (
            <li key={family.name} className="flex items-center justify-between text-sm">
              <span className={family.mine ? "font-bold text-gulf" : ""}>
                {fa(index + 1)}. {family.name}
              </span>
              <span className="font-semibold">{fa(family.score)}</span>
            </li>
          ))}
        </ol>
        <p className="mt-2 text-xs text-muted">
          امتیاز خانواده تو همان پیشرفتت در روستا است. بقیه، همسایه‌های نمونه هستند.
        </p>
      </Card>
      <button type="button" onClick={reset} className="text-sm text-muted underline">
        خروج و شروع دوباره
      </button>
    </div>
  );
}

export const NAV: { id: TabId; label: string; icon: typeof MapIcon }[] = [
  { id: "map", label: "نقشه", icon: MapIcon },
  { id: "path", label: "راه", icon: TreePine },
  { id: "sport", label: "ورزش", icon: Dumbbell },
  { id: "family", label: "خانه", icon: Home },
  { id: "me", label: "من", icon: UserRound },
];
