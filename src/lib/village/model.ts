export type AgeId = "child" | "teen" | "youth" | "adult" | "elder";
export type MemberKind = "golden" | "citizen";
export type HoodId = "pier" | "hara" | "mosque";

export interface TeachLog {
  id: string;
  who: string;
  lesson: string;
  reply: string;
  at: number;
}

export interface Profile {
  name: string;
  age: AgeId;
  kind: MemberKind;
  hood: HoodId;
  xp: number;
  coins: number;
  streak: number;
  lastDay: string;
  done: string[];
  litter: string[];
  cleans: number;
  teaches: number;
  sports: Record<string, number>;
  sportsSent: boolean;
  teachings: TeachLog[];
  learned: string[];
  owned: string[];
  house: number;
  badges: string[];
}

export const AGES: { id: AgeId; label: string; hint: string }[] = [
  { id: "child", label: "کودک", hint: "۷ تا ۱۲" },
  { id: "teen", label: "نوجوان", hint: "۱۳ تا ۱۶" },
  { id: "youth", label: "جوان", hint: "۱۷ تا ۳۰" },
  { id: "adult", label: "میان‌سال", hint: "۳۱ تا ۵۵" },
  { id: "elder", label: "سالمند", hint: "۵۶ به بالا" },
];

export const HOODS: { id: HoodId; label: string }[] = [
  { id: "pier", label: "محله اسکله" },
  { id: "hara", label: "محله حرا" },
  { id: "mosque", label: "محله مسجد" },
];

export const HOOD_BASE: Record<HoodId, number> = {
  hara: 860,
  pier: 790,
  mosque: 740,
};

export const SPORTS: { id: string; name: string }[] = [
  { id: "football", name: "فوتبال" },
  { id: "volley", name: "والیبال ساحلی" },
  { id: "swim", name: "شنا" },
  { id: "run", name: "دو" },
  { id: "boat", name: "قایق" },
  { id: "wrestle", name: "کشتی محلی" },
];

export const SEED: Record<string, Record<AgeId, number>> = {
  football: { child: 36, teen: 44, youth: 22, adult: 11, elder: 3 },
  volley: { child: 18, teen: 27, youth: 19, adult: 8, elder: 2 },
  swim: { child: 22, teen: 16, youth: 14, adult: 9, elder: 6 },
  run: { child: 14, teen: 12, youth: 10, adult: 15, elder: 9 },
  boat: { child: 8, teen: 11, youth: 17, adult: 13, elder: 7 },
  wrestle: { child: 6, teen: 9, youth: 7, adult: 4, elder: 1 },
};

export const INFRA: Record<string, string> = {
  football: "زمین خاکی صاف کنار اسکله، با دو دروازه چوبی.",
  volley: "تور ساحلی جمع‌شو روی ماسه، که بعد از غروب جمع شود.",
  swim: "مسیر علامت‌دار کنار اسکله، فقط وقتی آب آرام است.",
  run: "حلقه دو کیلومتری از حرا تا مسجد، بدون آسفالت تازه.",
  boat: "سه قایق پارویی مشترک برای نوبت عصر.",
  wrestle: "تشک زیر سایبان مسجد، دو شب در هفته.",
};

export const LESSONS: { id: string; title: string; reply: string }[] = [
  {
    id: "trash",
    title: "زباله جای خودش را دارد",
    reply: "باشه. کیسه همراهم می‌ماند.",
  },
  {
    id: "hara",
    title: "ریشه حرا را له نکن",
    reply: "از لبه آب رد می‌شوم، نه از روی ریشه.",
  },
  {
    id: "guest",
    title: "با گردشگر آرام حرف بزن",
    reply: "مهمان، مهمان روستا است.",
  },
  {
    id: "water",
    title: "آب شیرین را هدر نده",
    reply: "شیر را می‌بندم. قول.",
  },
];

export const KIN_UP = [
  { id: "dad", name: "پدر" },
  { id: "mom", name: "مادر" },
  { id: "sib", name: "خواهر یا برادر بزرگ‌تر" },
];

export const KIN_DOWN = [
  { id: "neighbor", name: "همسایه کوچک‌تر" },
  { id: "niece", name: "برادرزاده" },
  { id: "cousin", name: "پسرعموی کوچک" },
];

export const INBOX = [
  { id: "n1", who: "سارا، ۹ ساله", lesson: "trash" },
  { id: "n2", who: "یوسف، ۱۱ ساله", lesson: "hara" },
  { id: "n3", who: "مریم، ۱۴ ساله", lesson: "guest" },
];

export const TRASH = [
  { id: "t1", left: "20%", top: "70%" },
  { id: "t2", left: "46%", top: "76%" },
  { id: "t3", left: "70%", top: "66%" },
  { id: "t4", left: "32%", top: "56%" },
  { id: "t5", left: "58%", top: "50%" },
  { id: "t6", left: "24%", top: "42%" },
];

export const PLACES = [
  {
    id: "lane",
    name: "کوچه",
    img: "/village/lane.jpg",
    x: "30%",
    y: "58%",
    line: "زباله این‌جا جمع می‌شود، اگر کسی برندارد.",
    go: "litter" as const,
  },
  {
    id: "pier",
    name: "اسکله",
    img: "/village/pier.jpg",
    x: "48%",
    y: "74%",
    line: "اسکله گردشگری دهخدا. مهمان از همین‌جا می‌آید.",
    go: "event" as const,
  },
  {
    id: "hara",
    name: "حرا",
    img: "/village/hara.jpg",
    x: "16%",
    y: "42%",
    line: "ریشه‌ها بیرون از آب‌اند. راه رفتن روی‌شان ممنوع است.",
    go: "family" as const,
  },
  {
    id: "pitch",
    name: "زمین",
    img: "/village/pitch.jpg",
    x: "78%",
    y: "48%",
    line: "قبل از ساختن زمین نو، ببینیم مردم چه بازی می‌خواهند.",
    go: "sport" as const,
  },
  {
    id: "mosque",
    name: "مسجد",
    img: "/village/mosque.jpg",
    x: "56%",
    y: "36%",
    line: "قرار عصر این‌جا بسته می‌شود.",
    go: "event" as const,
  },
  {
    id: "house",
    name: "خانه",
    img: "/village/house.jpg",
    x: "64%",
    y: "56%",
    line: "درس فرهنگ از در همین خانه رد می‌شود.",
    go: "family" as const,
  },
];

export const SHOP = [
  { id: "shell", name: "دستبند صدف", cost: 40, detail: "روی کارت عضویت می‌نشیند" },
  { id: "bike", name: "دوچرخه چوبی", cost: 90, detail: "مسیر اسکله تا حرا" },
  { id: "wind", name: "بادگیر کوچک", cost: 70, detail: "سایه حیاط" },
];

export const FAMILIES = [
  { name: "خانواده رئیسی", score: 420 },
  { name: "خانواده بلوکی", score: 380 },
  { name: "خانواده دریایی", score: 310 },
];

export const QUIZ = [
  {
    q: "پوست میوه در کوچه افتاده. کار درست چیست؟",
    options: ["ولش کن، باد می‌برد", "بردار و بینداز سطل", "هلش بده سمت ساحل"],
    ok: 1,
  },
  {
    q: "ریشه حرا از آب بیرون است. نباید…",
    options: ["از کنارش آرام رد شد", "روی ریشه‌ها راه رفت", "از دور نگاه کرد"],
    ok: 1,
  },
  {
    q: "کودک به پدر می‌گوید زباله نریز. پاسخ درست؟",
    options: ["مسخره‌اش کند", "گوش بدهد و عمل کند", "بگوید تو کوچکی"],
    ok: 1,
  },
];

export const RANKS = ["تازه‌وارد", "کوچه‌گرد", "معلم کوچه", "نگهبان حرا", "صدای روستا"];

export function fa(n: number) {
  return n.toLocaleString("fa-IR");
}

export function dayKey(offset = 0) {
  const d = new Date();
  d.setDate(d.getDate() + offset);
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${d.getFullYear()}-${m}-${day}`;
}

export function levelOf(xp: number) {
  return 1 + Math.floor(xp / 80);
}

export function rankOf(level: number) {
  return RANKS[Math.min(RANKS.length - 1, level - 1)] ?? RANKS[0];
}

export function xpInto(xp: number) {
  return xp % 80;
}

export function ageLabel(id: AgeId) {
  return AGES.find((a) => a.id === id)?.label ?? id;
}

export function teachesUp(age: AgeId) {
  return age === "child" || age === "teen";
}

export function isLearner(age: AgeId) {
  return age === "adult" || age === "elder";
}

export function kinFor(age: AgeId) {
  return teachesUp(age) ? KIN_UP : KIN_DOWN;
}

export function lessonById(id: string) {
  return LESSONS.find((l) => l.id === id);
}

export function sportRows(profile: Profile, includeSelf: boolean) {
  return SPORTS.map((sport) => {
    const row = SEED[sport.id];
    const bump = includeSelf ? (profile.sports[sport.id] ?? 0) : 0;
    const village = Object.values(row).reduce((sum, n) => sum + n, 0) + bump;
    const mine = row[profile.age] + bump;
    return { ...sport, village, mine };
  });
}

export function topSport(rows: { id: string; name: string; village: number }[]) {
  return rows.reduce((best, row) => (row.village > best.village ? row : best), rows[0]);
}

export function hoodBoard(profile: Profile) {
  return HOODS.map((hood) => ({
    ...hood,
    score: HOOD_BASE[hood.id] + (profile.hood === hood.id ? profile.xp : 0),
    mine: profile.hood === hood.id,
  })).sort((a, b) => b.score - a.score);
}

export function familyBoard(profile: Profile) {
  const mine = { name: `خانواده ${profile.name}`, score: profile.xp, mine: true };
  return [...FAMILIES.map((f) => ({ ...f, mine: false })), mine].sort((a, b) => b.score - a.score);
}

export function syncBadges(profile: Profile): Profile {
  const have = new Set(profile.badges);
  if (profile.cleans > 0) have.add("pak");
  if (profile.teaches > 0) have.add("ostad");
  if (profile.sportsSent) have.add("seda");
  if (profile.streak >= 3) have.add("payvast");
  if (profile.house >= 2) have.add("khane");
  if (profile.kind === "golden") have.add("tala");
  if (profile.kind === "citizen") have.add("shora");
  const badges = [...have];
  if (badges.length === profile.badges.length && badges.every((id) => profile.badges.includes(id))) {
    return profile;
  }
  return { ...profile, badges };
}

export function rollDay(profile: Profile): Profile {
  const today = dayKey();
  if (profile.lastDay === today) return syncBadges(profile);
  const streak = profile.lastDay === dayKey(-1) ? profile.streak + 1 : 1;
  return syncBadges({
    ...profile,
    lastDay: today,
    streak,
    done: [],
    litter: [],
  });
}

export const BADGE_COPY: Record<string, string> = {
  pak: "کوچه پاک",
  ostad: "معلم خانه",
  seda: "صدای ورزش",
  payvast: "سه روز پیوسته",
  khane: "خانه بزرگ‌تر",
  tala: "کارت طلایی",
  shora: "تأیید شورا",
};

export function missionCopy(age: AgeId) {
  return {
    litter: "شش تکه زباله کوچه را بردار",
    teach: isLearner(age) ? "درس یک کودک را بپذیر" : "یک درس را به خانواده برسان",
    sport: "علاقه ورزشی‌ات را ثبت کن",
    event: "در قرار عصر اسکله حاضر شو",
  };
}
