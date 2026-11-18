import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
  dayKey,
  lessonById,
  levelOf,
  rankOf,
  rollDay,
  syncBadges,
  fa,
  type AgeId,
  type HoodId,
  type MemberKind,
  type Profile,
  type TeachLog,
} from "./model";

interface Toast {
  id: number;
  text: string;
}

interface StartInput {
  name: string;
  age: AgeId;
  kind: MemberKind;
  hood: HoodId;
}

interface VillageState {
  profile: Profile | null;
  hydrated: boolean;
  toast: Toast | null;
  boot: () => void;
  dismiss: () => void;
  start: (input: StartInput) => void;
  collect: (id: string) => void;
  finishEvent: () => void;
  setSport: (id: string, value: number) => void;
  sendSports: () => void;
  teach: (whoId: string, whoName: string, lessonId: string) => void;
  acceptLesson: (id: string) => void;
  buy: (id: string, cost: number) => void;
  upgradeHouse: () => void;
  reset: () => void;
}

function blank(input: StartInput): Profile {
  return syncBadges({
    name: input.name.trim(),
    age: input.age,
    kind: input.kind,
    hood: input.hood,
    xp: 0,
    coins: input.kind === "golden" ? 20 : 10,
    streak: 1,
    lastDay: dayKey(),
    done: [],
    litter: [],
    cleans: 0,
    teaches: 0,
    sports: {},
    sportsSent: false,
    teachings: [],
    learned: [],
    owned: [],
    house: 1,
    badges: [],
  });
}

function award(
  profile: Profile,
  xp: number,
  coins: number,
  patch: Partial<Profile>,
): { profile: Profile; text: string } {
  const before = levelOf(profile.xp);
  const next = syncBadges({
    ...profile,
    ...patch,
    xp: profile.xp + xp,
    coins: profile.coins + coins,
  });
  const after = levelOf(next.xp);
  const text =
    after > before
      ? `سطح ${fa(after)} · ${rankOf(after)} · ${fa(coins)} سکه`
      : `${fa(xp)} امتیاز و ${fa(coins)} سکه`;
  return { profile: next, text };
}

let toastSeq = 1;

export const useVillage = create<VillageState>()(
  persist(
    (set, get) => ({
      profile: null,
      hydrated: false,
      toast: null,
      boot: () => {
        const profile = get().profile;
        set({ hydrated: true, profile: profile ? rollDay(profile) : null });
      },
      dismiss: () => set({ toast: null }),
      start: (input) => {
        const profile = blank(input);
        const text =
          input.kind === "golden"
            ? "کارت طلایی فعال شد. ۲۰ سکه خوش‌آمد."
            : "شورا تأیید کرد. شهروند دهخدا شدی.";
        set({ profile, toast: { id: ++toastSeq, text } });
      },
      collect: (id) => {
        const profile = get().profile;
        if (!profile || profile.done.includes("litter") || profile.litter.includes(id)) return;
        const litter = [...profile.litter, id];
        const finished = litter.length >= 6;
        const result = award(profile, finished ? 26 : 4, finished ? 22 : 4, {
          litter,
          cleans: profile.cleans + (finished ? 1 : 0),
          done: finished ? [...profile.done, "litter"] : profile.done,
        });
        set({
          profile: result.profile,
          toast: {
            id: ++toastSeq,
            text: finished ? `کوچه تمیز شد. ${result.text}` : result.text,
          },
        });
      },
      finishEvent: () => {
        const profile = get().profile;
        if (!profile || profile.done.includes("event")) return;
        const result = award(profile, 22, 16, { done: [...profile.done, "event"] });
        set({
          profile: result.profile,
          toast: { id: ++toastSeq, text: `قرار عصر ثبت شد. ${result.text}` },
        });
      },
      setSport: (id, value) => {
        const profile = get().profile;
        if (!profile || profile.sportsSent) return;
        set({ profile: { ...profile, sports: { ...profile.sports, [id]: value } } });
      },
      sendSports: () => {
        const profile = get().profile;
        if (!profile || profile.sportsSent) return;
        const picked = Object.values(profile.sports).some((n) => n > 0);
        if (!picked) {
          set({ toast: { id: ++toastSeq, text: "دست‌کم یک رشته را انتخاب کن." } });
          return;
        }
        const done = profile.done.includes("sport") ? profile.done : [...profile.done, "sport"];
        const result = award(profile, 32, 18, { sportsSent: true, done });
        set({
          profile: result.profile,
          toast: { id: ++toastSeq, text: `رأی ثبت شد. ${result.text}` },
        });
      },
      teach: (whoId, whoName, lessonId) => {
        const profile = get().profile;
        const lesson = lessonById(lessonId);
        if (!profile || !lesson) return;
        const key = `${whoId}:${lessonId}`;
        if (profile.teachings.some((item) => item.id === key)) return;
        const log: TeachLog = {
          id: key,
          who: whoName,
          lesson: lesson.title,
          reply: lesson.reply,
          at: Date.now(),
        };
        const first = !profile.done.includes("teach");
        const result = award(profile, first ? 42 : 10, first ? 24 : 8, {
          teachings: [log, ...profile.teachings],
          teaches: profile.teaches + 1,
          done: first ? [...profile.done, "teach"] : profile.done,
        });
        set({
          profile: result.profile,
          toast: { id: ++toastSeq, text: `${whoName} شنید. ${result.text}` },
        });
      },
      acceptLesson: (id) => {
        const profile = get().profile;
        if (!profile || profile.learned.includes(id)) return;
        const first = !profile.done.includes("teach");
        const result = award(profile, first ? 36 : 8, first ? 20 : 6, {
          learned: [...profile.learned, id],
          teaches: profile.teaches + 1,
          done: first ? [...profile.done, "teach"] : profile.done,
        });
        set({
          profile: result.profile,
          toast: { id: ++toastSeq, text: `درس را پذیرفتی. ${result.text}` },
        });
      },
      buy: (id, cost) => {
        const profile = get().profile;
        if (!profile || profile.owned.includes(id)) return;
        if (profile.coins < cost) {
          set({ toast: { id: ++toastSeq, text: "سکه کم است. یک ماموریت دیگر." } });
          return;
        }
        set({
          profile: syncBadges({
            ...profile,
            coins: profile.coins - cost,
            owned: [...profile.owned, id],
          }),
          toast: { id: ++toastSeq, text: "به خانه مجازی اضافه شد." },
        });
      },
      upgradeHouse: () => {
        const profile = get().profile;
        if (!profile || profile.house >= 3) return;
        const cost = 80 * profile.house;
        if (profile.coins < cost) {
          set({ toast: { id: ++toastSeq, text: "برای اتاق تازه سکه کم است." } });
          return;
        }
        const next = syncBadges({
          ...profile,
          coins: profile.coins - cost,
          house: profile.house + 1,
        });
        set({
          profile: next,
          toast: { id: ++toastSeq, text: `خانه سطح ${fa(next.house)} شد.` },
        });
      },
      reset: () => set({ profile: null, toast: null }),
    }),
    {
      name: "dehkhoda-v1",
      skipHydration: true,
      partialize: (state) => ({ profile: state.profile }),
    },
  ),
);
