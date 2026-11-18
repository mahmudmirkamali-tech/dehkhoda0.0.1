import { useState, type ReactNode } from "react";
import { Anchor, ShieldCheck, TreePine } from "lucide-react";
import { Btn } from "./ui";
import { AGES, HOODS, QUIZ, type AgeId, type HoodId, type MemberKind } from "@/lib/village/model";
import { useVillage } from "@/lib/village/store";
import { cn } from "@/lib/cn";

type Step = "welcome" | "identity" | "oath";

export function Onboarding() {
  const start = useVillage((s) => s.start);
  const [step, setStep] = useState<Step>("welcome");
  const [name, setName] = useState("");
  const [age, setAge] = useState<AgeId>("teen");
  const [hood, setHood] = useState<HoodId>("pier");
  const [kind, setKind] = useState<MemberKind>("golden");
  const [qi, setQi] = useState(0);
  const [score, setScore] = useState(0);
  const [miss, setMiss] = useState(false);

  const ready = name.trim().length >= 2;

  function commit(nextKind: MemberKind) {
    start({ name, age, kind: nextKind, hood });
  }

  function answer(index: number) {
    const correct = index === QUIZ[qi].ok;
    const nextScore = score + (correct ? 1 : 0);
    if (qi < QUIZ.length - 1) {
      setScore(nextScore);
      setQi(qi + 1);
      setMiss(false);
      return;
    }
    if (nextScore >= 2) {
      commit("citizen");
      return;
    }
    setScore(0);
    setQi(0);
    setMiss(true);
  }

  return (
    <div className="mx-auto flex min-h-dvh w-full max-w-lg flex-col bg-sand">
      {step === "welcome" ? (
        <div className="rise-in flex flex-1 flex-col">
          <div className="relative h-[52dvh] min-h-64 overflow-hidden">
            <img src="/village/map.jpg" alt="" className="h-full w-full object-cover" />
            <div className="hero-fade absolute inset-0" />
            <div className="absolute right-5 bottom-6 left-5">
              <p className="text-sm font-semibold text-gulf-deep">قشم · غرب جزیره</p>
              <h1 className="mt-1 text-4xl font-bold text-ink">دهخدا</h1>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-4 px-5 pb-8">
            <p className="text-base leading-7 text-ink">
              زندگی روستا این‌جا جریان دارد. کوچه را تمیز می‌کنی، به بزرگ‌تر یاد می‌دهی، و رأی
              ورزشی‌ات مشخص می‌کند زمین بعدی کجا ساخته شود.
            </p>
            <div className="grid grid-cols-3 gap-2 text-center text-xs text-muted">
              <span className="rounded-2xl bg-paper px-2 py-3">پاکی کوچه</span>
              <span className="rounded-2xl bg-paper px-2 py-3">درس خانه</span>
              <span className="rounded-2xl bg-paper px-2 py-3">رأی ورزش</span>
            </div>
            <Btn className="mt-auto w-full" onClick={() => setStep("identity")}>
              ورود به روستا
            </Btn>
          </div>
        </div>
      ) : null}

      {step === "identity" ? (
        <form
          className="rise-in flex flex-1 flex-col gap-5 px-5 py-6"
          onSubmit={(event) => {
            event.preventDefault();
            if (!ready) return;
            if (kind === "golden") commit("golden");
            else setStep("oath");
          }}
        >
          <div>
            <p className="text-sm text-muted">شناسنامه بازی</p>
            <h2 className="text-2xl font-bold">تو کیستی در دهخدا؟</h2>
          </div>
          <label className="grid gap-2 text-sm font-semibold">
            نام
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="مثلاً یاسین"
              className="min-h-12 rounded-2xl border border-line bg-paper px-4 text-base font-medium outline-none focus:border-gulf"
              autoComplete="nickname"
            />
          </label>
          <fieldset className="grid gap-2">
            <legend className="text-sm font-semibold">سن</legend>
            <div className="grid grid-cols-2 gap-2">
              {AGES.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setAge(item.id)}
                  className={cn(
                    "min-h-14 rounded-2xl border px-3 py-2 text-right",
                    age === item.id ? "border-gulf bg-gulf text-paper" : "border-line bg-paper text-ink",
                  )}
                >
                  <span className="block text-sm font-bold">{item.label}</span>
                  <span className={cn("text-xs", age === item.id ? "text-gold-soft" : "text-muted")}>
                    {item.hint}
                  </span>
                </button>
              ))}
            </div>
          </fieldset>
          <fieldset className="grid gap-2">
            <legend className="text-sm font-semibold">محله</legend>
            <div className="flex flex-wrap gap-2">
              {HOODS.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setHood(item.id)}
                  className={cn(
                    "min-h-11 rounded-full px-4 text-sm font-semibold",
                    hood === item.id ? "bg-leaf text-paper" : "bg-paper text-ink border border-line",
                  )}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </fieldset>
          <div className="grid gap-2">
            <Choice
              active={kind === "golden"}
              icon={<ShieldCheck className="size-5" />}
              title="ساکن دهخدا"
              text="کارت طلایی، رایگان"
              onClick={() => setKind("golden")}
            />
            <Choice
              active={kind === "citizen"}
              icon={<Anchor className="size-5" />}
              title="مهمان"
              text="سه پرسش شورا، بعد شهروندی"
              onClick={() => setKind("citizen")}
            />
          </div>
          <Btn type="submit" className="mt-auto w-full" disabled={!ready}>
            {kind === "golden" ? "گرفتن کارت طلایی" : "رفتن پیش شورا"}
          </Btn>
        </form>
      ) : null}

      {step === "oath" ? (
        <div className="rise-in flex flex-1 flex-col gap-5 px-5 py-6">
          <div className="flex items-center gap-3">
            <span className="grid size-11 place-items-center rounded-2xl bg-leaf text-paper">
              <TreePine className="size-5" />
            </span>
            <div>
              <p className="text-sm text-muted">شورای مرکزی</p>
              <h2 className="text-2xl font-bold">
                پرسش {["یک", "دو", "سه"][qi]} از سه
              </h2>
            </div>
          </div>
          {miss ? (
            <p className="rounded-2xl bg-gold-soft px-4 py-3 text-sm text-ink">
              شورا گفت یک دور دیگر. دو پاسخ درست کافی است.
            </p>
          ) : null}
          <p className="text-lg leading-8 font-semibold">{QUIZ[qi].q}</p>
          <div className="grid gap-2">
            {QUIZ[qi].options.map((option, index) => (
              <Btn key={option} tone="paper" className="w-full justify-start text-right" onClick={() => answer(index)}>
                {option}
              </Btn>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}

function Choice({
  active,
  icon,
  title,
  text,
  onClick,
}: {
  active: boolean;
  icon: ReactNode;
  title: string;
  text: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex min-h-16 items-center gap-3 rounded-2xl border px-4 text-right",
        active ? "border-gold bg-gold-soft" : "border-line bg-paper",
      )}
    >
      <span className={cn("grid size-10 place-items-center rounded-xl", active ? "bg-gold text-ink" : "bg-sand text-gulf")}>
        {icon}
      </span>
      <span>
        <span className="block font-bold">{title}</span>
        <span className="text-sm text-muted">{text}</span>
      </span>
    </button>
  );
}
