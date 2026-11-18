import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as TreePine, c as Map, d as Dumbbell, f as Check, l as House, m as Anchor, n as UserRound, o as Trash2, p as Award, r as Trophy, s as ShieldCheck, t as Users, u as Flame } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
import { a as ResponsiveContainer, i as Bar, n as YAxis, o as Tooltip, r as XAxis, t as BarChart } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DEfhUNre.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function Btn({ className, tone = "gulf", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		className: cn("inline-flex min-h-11 items-center justify-center gap-2 rounded-2xl px-4 py-2 text-sm font-semibold transition active:scale-[0.98] disabled:opacity-50", {
			gulf: "bg-gulf text-paper hover:bg-gulf-deep",
			paper: "bg-paper text-ink border border-line hover:bg-sand",
			gold: "bg-gold text-ink hover:bg-gold-soft",
			leaf: "bg-leaf text-paper"
		}[tone], className),
		...props
	});
}
function Card({ className, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: cn("rounded-3xl border border-line bg-paper p-4 shadow-sm", className),
		children
	});
}
function Stat({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl bg-sand px-3 py-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs text-muted",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-lg font-bold text-ink",
			children: value
		})]
	});
}
var AGES = [
	{
		id: "child",
		label: "کودک",
		hint: "۷ تا ۱۲"
	},
	{
		id: "teen",
		label: "نوجوان",
		hint: "۱۳ تا ۱۶"
	},
	{
		id: "youth",
		label: "جوان",
		hint: "۱۷ تا ۳۰"
	},
	{
		id: "adult",
		label: "میان‌سال",
		hint: "۳۱ تا ۵۵"
	},
	{
		id: "elder",
		label: "سالمند",
		hint: "۵۶ به بالا"
	}
];
var HOODS = [
	{
		id: "pier",
		label: "محله اسکله"
	},
	{
		id: "hara",
		label: "محله حرا"
	},
	{
		id: "mosque",
		label: "محله مسجد"
	}
];
var HOOD_BASE = {
	hara: 860,
	pier: 790,
	mosque: 740
};
var SPORTS = [
	{
		id: "football",
		name: "فوتبال"
	},
	{
		id: "volley",
		name: "والیبال ساحلی"
	},
	{
		id: "swim",
		name: "شنا"
	},
	{
		id: "run",
		name: "دو"
	},
	{
		id: "boat",
		name: "قایق"
	},
	{
		id: "wrestle",
		name: "کشتی محلی"
	}
];
var SEED = {
	football: {
		child: 36,
		teen: 44,
		youth: 22,
		adult: 11,
		elder: 3
	},
	volley: {
		child: 18,
		teen: 27,
		youth: 19,
		adult: 8,
		elder: 2
	},
	swim: {
		child: 22,
		teen: 16,
		youth: 14,
		adult: 9,
		elder: 6
	},
	run: {
		child: 14,
		teen: 12,
		youth: 10,
		adult: 15,
		elder: 9
	},
	boat: {
		child: 8,
		teen: 11,
		youth: 17,
		adult: 13,
		elder: 7
	},
	wrestle: {
		child: 6,
		teen: 9,
		youth: 7,
		adult: 4,
		elder: 1
	}
};
var INFRA = {
	football: "زمین خاکی صاف کنار اسکله، با دو دروازه چوبی.",
	volley: "تور ساحلی جمع‌شو روی ماسه، که بعد از غروب جمع شود.",
	swim: "مسیر علامت‌دار کنار اسکله، فقط وقتی آب آرام است.",
	run: "حلقه دو کیلومتری از حرا تا مسجد، بدون آسفالت تازه.",
	boat: "سه قایق پارویی مشترک برای نوبت عصر.",
	wrestle: "تشک زیر سایبان مسجد، دو شب در هفته."
};
var LESSONS = [
	{
		id: "trash",
		title: "زباله جای خودش را دارد",
		reply: "باشه. کیسه همراهم می‌ماند."
	},
	{
		id: "hara",
		title: "ریشه حرا را له نکن",
		reply: "از لبه آب رد می‌شوم، نه از روی ریشه."
	},
	{
		id: "guest",
		title: "با گردشگر آرام حرف بزن",
		reply: "مهمان، مهمان روستا است."
	},
	{
		id: "water",
		title: "آب شیرین را هدر نده",
		reply: "شیر را می‌بندم. قول."
	}
];
var KIN_UP = [
	{
		id: "dad",
		name: "پدر"
	},
	{
		id: "mom",
		name: "مادر"
	},
	{
		id: "sib",
		name: "خواهر یا برادر بزرگ‌تر"
	}
];
var KIN_DOWN = [
	{
		id: "neighbor",
		name: "همسایه کوچک‌تر"
	},
	{
		id: "niece",
		name: "برادرزاده"
	},
	{
		id: "cousin",
		name: "پسرعموی کوچک"
	}
];
var INBOX = [
	{
		id: "n1",
		who: "سارا، ۹ ساله",
		lesson: "trash"
	},
	{
		id: "n2",
		who: "یوسف، ۱۱ ساله",
		lesson: "hara"
	},
	{
		id: "n3",
		who: "مریم، ۱۴ ساله",
		lesson: "guest"
	}
];
var TRASH = [
	{
		id: "t1",
		left: "20%",
		top: "70%"
	},
	{
		id: "t2",
		left: "46%",
		top: "76%"
	},
	{
		id: "t3",
		left: "70%",
		top: "66%"
	},
	{
		id: "t4",
		left: "32%",
		top: "56%"
	},
	{
		id: "t5",
		left: "58%",
		top: "50%"
	},
	{
		id: "t6",
		left: "24%",
		top: "42%"
	}
];
var PLACES = [
	{
		id: "lane",
		name: "کوچه",
		img: "/village/lane.jpg",
		x: "30%",
		y: "58%",
		line: "زباله این‌جا جمع می‌شود، اگر کسی برندارد.",
		go: "litter"
	},
	{
		id: "pier",
		name: "اسکله",
		img: "/village/pier.jpg",
		x: "48%",
		y: "74%",
		line: "اسکله گردشگری دهخدا. مهمان از همین‌جا می‌آید.",
		go: "event"
	},
	{
		id: "hara",
		name: "حرا",
		img: "/village/hara.jpg",
		x: "16%",
		y: "42%",
		line: "ریشه‌ها بیرون از آب‌اند. راه رفتن روی‌شان ممنوع است.",
		go: "family"
	},
	{
		id: "pitch",
		name: "زمین",
		img: "/village/pitch.jpg",
		x: "78%",
		y: "48%",
		line: "قبل از ساختن زمین نو، ببینیم مردم چه بازی می‌خواهند.",
		go: "sport"
	},
	{
		id: "mosque",
		name: "مسجد",
		img: "/village/mosque.jpg",
		x: "56%",
		y: "36%",
		line: "قرار عصر این‌جا بسته می‌شود.",
		go: "event"
	},
	{
		id: "house",
		name: "خانه",
		img: "/village/house.jpg",
		x: "64%",
		y: "56%",
		line: "درس فرهنگ از در همین خانه رد می‌شود.",
		go: "family"
	}
];
var SHOP = [
	{
		id: "shell",
		name: "دستبند صدف",
		cost: 40,
		detail: "روی کارت عضویت می‌نشیند"
	},
	{
		id: "bike",
		name: "دوچرخه چوبی",
		cost: 90,
		detail: "مسیر اسکله تا حرا"
	},
	{
		id: "wind",
		name: "بادگیر کوچک",
		cost: 70,
		detail: "سایه حیاط"
	}
];
var FAMILIES = [
	{
		name: "خانواده رئیسی",
		score: 420
	},
	{
		name: "خانواده بلوکی",
		score: 380
	},
	{
		name: "خانواده دریایی",
		score: 310
	}
];
var QUIZ = [
	{
		q: "پوست میوه در کوچه افتاده. کار درست چیست؟",
		options: [
			"ولش کن، باد می‌برد",
			"بردار و بینداز سطل",
			"هلش بده سمت ساحل"
		],
		ok: 1
	},
	{
		q: "ریشه حرا از آب بیرون است. نباید…",
		options: [
			"از کنارش آرام رد شد",
			"روی ریشه‌ها راه رفت",
			"از دور نگاه کرد"
		],
		ok: 1
	},
	{
		q: "کودک به پدر می‌گوید زباله نریز. پاسخ درست؟",
		options: [
			"مسخره‌اش کند",
			"گوش بدهد و عمل کند",
			"بگوید تو کوچکی"
		],
		ok: 1
	}
];
var RANKS = [
	"تازه‌وارد",
	"کوچه‌گرد",
	"معلم کوچه",
	"نگهبان حرا",
	"صدای روستا"
];
function fa(n) {
	return n.toLocaleString("fa-IR");
}
function dayKey(offset = 0) {
	const d = /* @__PURE__ */ new Date();
	d.setDate(d.getDate() + offset);
	const m = String(d.getMonth() + 1).padStart(2, "0");
	const day = String(d.getDate()).padStart(2, "0");
	return `${d.getFullYear()}-${m}-${day}`;
}
function levelOf(xp) {
	return 1 + Math.floor(xp / 80);
}
function rankOf(level) {
	return RANKS[Math.min(RANKS.length - 1, level - 1)] ?? RANKS[0];
}
function xpInto(xp) {
	return xp % 80;
}
function ageLabel(id) {
	return AGES.find((a) => a.id === id)?.label ?? id;
}
function teachesUp(age) {
	return age === "child" || age === "teen";
}
function isLearner(age) {
	return age === "adult" || age === "elder";
}
function kinFor(age) {
	return teachesUp(age) ? KIN_UP : KIN_DOWN;
}
function lessonById(id) {
	return LESSONS.find((l) => l.id === id);
}
function sportRows(profile, includeSelf) {
	return SPORTS.map((sport) => {
		const row = SEED[sport.id];
		const bump = includeSelf ? profile.sports[sport.id] ?? 0 : 0;
		const village = Object.values(row).reduce((sum, n) => sum + n, 0) + bump;
		const mine = row[profile.age] + bump;
		return {
			...sport,
			village,
			mine
		};
	});
}
function topSport(rows) {
	return rows.reduce((best, row) => row.village > best.village ? row : best, rows[0]);
}
function hoodBoard(profile) {
	return HOODS.map((hood) => ({
		...hood,
		score: HOOD_BASE[hood.id] + (profile.hood === hood.id ? profile.xp : 0),
		mine: profile.hood === hood.id
	})).sort((a, b) => b.score - a.score);
}
function familyBoard(profile) {
	const mine = {
		name: `خانواده ${profile.name}`,
		score: profile.xp,
		mine: true
	};
	return [...FAMILIES.map((f) => ({
		...f,
		mine: false
	})), mine].sort((a, b) => b.score - a.score);
}
function syncBadges(profile) {
	const have = new Set(profile.badges);
	if (profile.cleans > 0) have.add("pak");
	if (profile.teaches > 0) have.add("ostad");
	if (profile.sportsSent) have.add("seda");
	if (profile.streak >= 3) have.add("payvast");
	if (profile.house >= 2) have.add("khane");
	if (profile.kind === "golden") have.add("tala");
	if (profile.kind === "citizen") have.add("shora");
	const badges = [...have];
	if (badges.length === profile.badges.length && badges.every((id) => profile.badges.includes(id))) return profile;
	return {
		...profile,
		badges
	};
}
function rollDay(profile) {
	const today = dayKey();
	if (profile.lastDay === today) return syncBadges(profile);
	const streak = profile.lastDay === dayKey(-1) ? profile.streak + 1 : 1;
	return syncBadges({
		...profile,
		lastDay: today,
		streak,
		done: [],
		litter: []
	});
}
var BADGE_COPY = {
	pak: "کوچه پاک",
	ostad: "معلم خانه",
	seda: "صدای ورزش",
	payvast: "سه روز پیوسته",
	khane: "خانه بزرگ‌تر",
	tala: "کارت طلایی",
	shora: "تأیید شورا"
};
function missionCopy(age) {
	return {
		litter: "شش تکه زباله کوچه را بردار",
		teach: isLearner(age) ? "درس یک کودک را بپذیر" : "یک درس را به خانواده برسان",
		sport: "علاقه ورزشی‌ات را ثبت کن",
		event: "در قرار عصر اسکله حاضر شو"
	};
}
function blank(input) {
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
		badges: []
	});
}
function award(profile, xp, coins, patch) {
	const before = levelOf(profile.xp);
	const next = syncBadges({
		...profile,
		...patch,
		xp: profile.xp + xp,
		coins: profile.coins + coins
	});
	const after = levelOf(next.xp);
	return {
		profile: next,
		text: after > before ? `سطح ${fa(after)} · ${rankOf(after)} · ${fa(coins)} سکه` : `${fa(xp)} امتیاز و ${fa(coins)} سکه`
	};
}
var toastSeq = 1;
var useVillage = create()(persist((set, get) => ({
	profile: null,
	hydrated: false,
	toast: null,
	boot: () => {
		const profile = get().profile;
		set({
			hydrated: true,
			profile: profile ? rollDay(profile) : null
		});
	},
	dismiss: () => set({ toast: null }),
	start: (input) => {
		const profile = blank(input);
		const text = input.kind === "golden" ? "کارت طلایی فعال شد. ۲۰ سکه خوش‌آمد." : "شورا تأیید کرد. شهروند دهخدا شدی.";
		set({
			profile,
			toast: {
				id: ++toastSeq,
				text
			}
		});
	},
	collect: (id) => {
		const profile = get().profile;
		if (!profile || profile.done.includes("litter") || profile.litter.includes(id)) return;
		const litter = [...profile.litter, id];
		const finished = litter.length >= 6;
		const result = award(profile, finished ? 26 : 4, finished ? 22 : 4, {
			litter,
			cleans: profile.cleans + (finished ? 1 : 0),
			done: finished ? [...profile.done, "litter"] : profile.done
		});
		set({
			profile: result.profile,
			toast: {
				id: ++toastSeq,
				text: finished ? `کوچه تمیز شد. ${result.text}` : result.text
			}
		});
	},
	finishEvent: () => {
		const profile = get().profile;
		if (!profile || profile.done.includes("event")) return;
		const result = award(profile, 22, 16, { done: [...profile.done, "event"] });
		set({
			profile: result.profile,
			toast: {
				id: ++toastSeq,
				text: `قرار عصر ثبت شد. ${result.text}`
			}
		});
	},
	setSport: (id, value) => {
		const profile = get().profile;
		if (!profile || profile.sportsSent) return;
		set({ profile: {
			...profile,
			sports: {
				...profile.sports,
				[id]: value
			}
		} });
	},
	sendSports: () => {
		const profile = get().profile;
		if (!profile || profile.sportsSent) return;
		if (!Object.values(profile.sports).some((n) => n > 0)) {
			set({ toast: {
				id: ++toastSeq,
				text: "دست‌کم یک رشته را انتخاب کن."
			} });
			return;
		}
		const result = award(profile, 32, 18, {
			sportsSent: true,
			done: profile.done.includes("sport") ? profile.done : [...profile.done, "sport"]
		});
		set({
			profile: result.profile,
			toast: {
				id: ++toastSeq,
				text: `رأی ثبت شد. ${result.text}`
			}
		});
	},
	teach: (whoId, whoName, lessonId) => {
		const profile = get().profile;
		const lesson = lessonById(lessonId);
		if (!profile || !lesson) return;
		const key = `${whoId}:${lessonId}`;
		if (profile.teachings.some((item) => item.id === key)) return;
		const log = {
			id: key,
			who: whoName,
			lesson: lesson.title,
			reply: lesson.reply,
			at: Date.now()
		};
		const first = !profile.done.includes("teach");
		const result = award(profile, first ? 42 : 10, first ? 24 : 8, {
			teachings: [log, ...profile.teachings],
			teaches: profile.teaches + 1,
			done: first ? [...profile.done, "teach"] : profile.done
		});
		set({
			profile: result.profile,
			toast: {
				id: ++toastSeq,
				text: `${whoName} شنید. ${result.text}`
			}
		});
	},
	acceptLesson: (id) => {
		const profile = get().profile;
		if (!profile || profile.learned.includes(id)) return;
		const first = !profile.done.includes("teach");
		const result = award(profile, first ? 36 : 8, first ? 20 : 6, {
			learned: [...profile.learned, id],
			teaches: profile.teaches + 1,
			done: first ? [...profile.done, "teach"] : profile.done
		});
		set({
			profile: result.profile,
			toast: {
				id: ++toastSeq,
				text: `درس را پذیرفتی. ${result.text}`
			}
		});
	},
	buy: (id, cost) => {
		const profile = get().profile;
		if (!profile || profile.owned.includes(id)) return;
		if (profile.coins < cost) {
			set({ toast: {
				id: ++toastSeq,
				text: "سکه کم است. یک ماموریت دیگر."
			} });
			return;
		}
		set({
			profile: syncBadges({
				...profile,
				coins: profile.coins - cost,
				owned: [...profile.owned, id]
			}),
			toast: {
				id: ++toastSeq,
				text: "به خانه مجازی اضافه شد."
			}
		});
	},
	upgradeHouse: () => {
		const profile = get().profile;
		if (!profile || profile.house >= 3) return;
		const cost = 80 * profile.house;
		if (profile.coins < cost) {
			set({ toast: {
				id: ++toastSeq,
				text: "برای اتاق تازه سکه کم است."
			} });
			return;
		}
		const next = syncBadges({
			...profile,
			coins: profile.coins - cost,
			house: profile.house + 1
		});
		set({
			profile: next,
			toast: {
				id: ++toastSeq,
				text: `خانه سطح ${fa(next.house)} شد.`
			}
		});
	},
	reset: () => set({
		profile: null,
		toast: null
	})
}), {
	name: "dehkhoda-v1",
	skipHydration: true,
	partialize: (state) => ({ profile: state.profile })
}));
function Onboarding() {
	const start = useVillage((s) => s.start);
	const [step, setStep] = (0, import_react.useState)("welcome");
	const [name, setName] = (0, import_react.useState)("");
	const [age, setAge] = (0, import_react.useState)("teen");
	const [hood, setHood] = (0, import_react.useState)("pier");
	const [kind, setKind] = (0, import_react.useState)("golden");
	const [qi, setQi] = (0, import_react.useState)(0);
	const [score, setScore] = (0, import_react.useState)(0);
	const [miss, setMiss] = (0, import_react.useState)(false);
	const ready = name.trim().length >= 2;
	function commit(nextKind) {
		start({
			name,
			age,
			kind: nextKind,
			hood
		});
	}
	function answer(index) {
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto flex min-h-dvh w-full max-w-lg flex-col bg-sand",
		children: [
			step === "welcome" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rise-in flex flex-1 flex-col",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative h-[52dvh] min-h-64 overflow-hidden",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/village/map.jpg",
							alt: "",
							className: "h-full w-full object-cover"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hero-fade absolute inset-0" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute right-5 bottom-6 left-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold text-gulf-deep",
								children: "قشم · غرب جزیره"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-1 text-4xl font-bold text-ink",
								children: "دهخدا"
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-1 flex-col gap-4 px-5 pb-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-base leading-7 text-ink",
							children: "زندگی روستا این‌جا جریان دارد. کوچه را تمیز می‌کنی، به بزرگ‌تر یاد می‌دهی، و رأی ورزشی‌ات مشخص می‌کند زمین بعدی کجا ساخته شود."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-3 gap-2 text-center text-xs text-muted",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-2xl bg-paper px-2 py-3",
									children: "پاکی کوچه"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-2xl bg-paper px-2 py-3",
									children: "درس خانه"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-2xl bg-paper px-2 py-3",
									children: "رأی ورزش"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
							className: "mt-auto w-full",
							onClick: () => setStep("identity"),
							children: "ورود به روستا"
						})
					]
				})]
			}) : null,
			step === "identity" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "rise-in flex flex-1 flex-col gap-5 px-5 py-6",
				onSubmit: (event) => {
					event.preventDefault();
					if (!ready) return;
					if (kind === "golden") commit("golden");
					else setStep("oath");
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: "شناسنامه بازی"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl font-bold",
						children: "تو کیستی در دهخدا؟"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "grid gap-2 text-sm font-semibold",
						children: ["نام", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: name,
							onChange: (event) => setName(event.target.value),
							placeholder: "مثلاً یاسین",
							className: "min-h-12 rounded-2xl border border-line bg-paper px-4 text-base font-medium outline-none focus:border-gulf",
							autoComplete: "nickname"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
						className: "grid gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
							className: "text-sm font-semibold",
							children: "سن"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-2 gap-2",
							children: AGES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setAge(item.id),
								className: cn("min-h-14 rounded-2xl border px-3 py-2 text-right", age === item.id ? "border-gulf bg-gulf text-paper" : "border-line bg-paper text-ink"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-sm font-bold",
									children: item.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: cn("text-xs", age === item.id ? "text-gold-soft" : "text-muted"),
									children: item.hint
								})]
							}, item.id))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
						className: "grid gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
							className: "text-sm font-semibold",
							children: "محله"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-2",
							children: HOODS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setHood(item.id),
								className: cn("min-h-11 rounded-full px-4 text-sm font-semibold", hood === item.id ? "bg-leaf text-paper" : "bg-paper text-ink border border-line"),
								children: item.label
							}, item.id))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Choice, {
							active: kind === "golden",
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-5" }),
							title: "ساکن دهخدا",
							text: "کارت طلایی، رایگان",
							onClick: () => setKind("golden")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Choice, {
							active: kind === "citizen",
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Anchor, { className: "size-5" }),
							title: "مهمان",
							text: "سه پرسش شورا، بعد شهروندی",
							onClick: () => setKind("citizen")
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
						type: "submit",
						className: "mt-auto w-full",
						disabled: !ready,
						children: kind === "golden" ? "گرفتن کارت طلایی" : "رفتن پیش شورا"
					})
				]
			}) : null,
			step === "oath" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rise-in flex flex-1 flex-col gap-5 px-5 py-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid size-11 place-items-center rounded-2xl bg-leaf text-paper",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TreePine, { className: "size-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted",
							children: "شورای مرکزی"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "text-2xl font-bold",
							children: [
								"پرسش ",
								[
									"یک",
									"دو",
									"سه"
								][qi],
								" از سه"
							]
						})] })]
					}),
					miss ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "rounded-2xl bg-gold-soft px-4 py-3 text-sm text-ink",
						children: "شورا گفت یک دور دیگر. دو پاسخ درست کافی است."
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-lg leading-8 font-semibold",
						children: QUIZ[qi].q
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-2",
						children: QUIZ[qi].options.map((option, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
							tone: "paper",
							className: "w-full justify-start text-right",
							onClick: () => answer(index),
							children: option
						}, option))
					})
				]
			}) : null
		]
	});
}
function Choice({ active, icon, title, text, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick,
		className: cn("flex min-h-16 items-center gap-3 rounded-2xl border px-4 text-right", active ? "border-gold bg-gold-soft" : "border-line bg-paper"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: cn("grid size-10 place-items-center rounded-xl", active ? "bg-gold text-ink" : "bg-sand text-gulf"),
			children: icon
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "block font-bold",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-sm text-muted",
			children: text
		})] })]
	});
}
function World({ tab, setTab }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-4 px-4 pt-4 pb-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hud, {}),
			tab === "map" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapScreen, { setTab }) : null,
			tab === "path" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PathScreen, { setTab }) : null,
			tab === "sport" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SportScreen, {}) : null,
			tab === "family" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FamilyScreen, {}) : null,
			tab === "me" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MeScreen, {}) : null
		]
	});
}
function Hud() {
	const profile = useVillage((s) => s.profile);
	const level = levelOf(profile.xp);
	const into = xpInto(profile.xp);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative grid size-14 place-items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
					viewBox: "0 0 48 48",
					className: "absolute inset-0 size-14 -rotate-90",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "24",
						cy: "24",
						r: "18",
						className: "fill-none stroke-line",
						strokeWidth: "4"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "24",
						cy: "24",
						r: "18",
						className: "fill-none stroke-gulf",
						strokeWidth: "4",
						strokeLinecap: "round",
						strokeDasharray: `${into / 80 * 113} 113`
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-sm font-bold",
					children: fa(level)
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0 flex-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "truncate font-bold",
					children: profile.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs text-muted",
					children: [
						rankOf(level),
						" · ",
						ageLabel(profile.age)
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, {
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, { className: "size-4 text-gold" }),
				text: fa(profile.streak)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, {
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-gold" }),
				text: fa(profile.coins)
			})
		]
	});
}
function Pill({ icon, text }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "inline-flex min-h-10 items-center gap-1 rounded-full bg-paper px-3 text-sm font-bold shadow-sm",
		children: [icon, text]
	});
}
function MapScreen({ setTab }) {
	const profile = useVillage((s) => s.profile);
	const [placeId, setPlaceId] = (0, import_react.useState)(null);
	const place = PLACES.find((item) => item.id === placeId) ?? null;
	const week = Math.min(100, 38 + (profile.done.includes("litter") ? 28 : 0) + Math.min(profile.teaches, 3) * 8);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rise-in grid gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative overflow-hidden rounded-3xl border border-line",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/village/map.jpg",
					alt: "نمای روستای دهخدا",
					className: "aspect-video w-full object-cover"
				}), PLACES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setPlaceId(item.id),
					style: {
						left: item.x,
						top: item.y
					},
					className: cn("absolute grid min-h-11 min-w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-2 px-2 text-xs font-bold shadow-sm", placeId === item.id ? "border-gold bg-gold text-ink" : "border-paper bg-gulf text-paper"),
					children: item.name
				}, item.id))]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: "چالش این هفته"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-bold",
					children: "کوچه‌های آرام‌تر"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm font-bold text-gulf",
					children: [fa(week), "٪"]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 h-2 overflow-hidden rounded-full bg-sand-deep",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-full rounded-full bg-leaf",
					style: { width: `${week}%` }
				})
			})] }),
			place ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "grid gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: place.img,
						alt: "",
						className: "size-20 rounded-2xl object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-lg font-bold",
						children: place.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm leading-6 text-muted",
						children: place.line
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
					onClick: () => {
						if (place.go === "litter" || place.go === "event") setTab("path");
						else setTab(place.go);
						setPlaceId(null);
					},
					children: "برو سر کار این‌جا"
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "روی یک نقطه از نقشه بزن تا کار همان‌جا باز شود."
			})
		]
	});
}
function PathScreen({ setTab }) {
	const profile = useVillage((s) => s.profile);
	const copy = missionCopy(profile.age);
	const nodes = [
		{
			id: "litter",
			title: "کوچه",
			text: copy.litter,
			icon: Trash2
		},
		{
			id: "teach",
			title: "خانه",
			text: copy.teach,
			icon: Users
		},
		{
			id: "sport",
			title: "ورزش",
			text: copy.sport,
			icon: Dumbbell
		},
		{
			id: "event",
			title: "عصر",
			text: copy.event,
			icon: Anchor
		}
	];
	const current = nodes.find((node) => !profile.done.includes(node.id))?.id;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rise-in grid gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "text-2xl font-bold",
			children: "راه امروز"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-muted",
			children: "هر تمام‌کردن، عادت فردا را سبک‌تر می‌کند."
		})] }), nodes.map((node) => {
			const done = profile.done.includes(node.id);
			const Icon = node.icon;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: cn("rounded-3xl border bg-paper p-4", done ? "border-leaf" : current === node.id ? "border-gulf" : "border-line"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cn("grid size-11 shrink-0 place-items-center rounded-2xl", done ? "bg-leaf text-paper" : "bg-sand text-gulf"),
							children: done ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-bold",
								children: node.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm leading-6 text-muted",
								children: node.text
							})]
						})]
					}),
					node.id === "litter" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LitterBlock, {}) : null,
					node.id === "event" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventBlock, {}) : null,
					node.id === "teach" && !done ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
						className: "mt-3 w-full",
						tone: "paper",
						onClick: () => setTab("family"),
						children: "برو به خانواده"
					}) : null,
					node.id === "sport" && !done ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
						className: "mt-3 w-full",
						tone: "paper",
						onClick: () => setTab("sport"),
						children: "ثبت علاقه"
					}) : null
				]
			}, node.id);
		})]
	});
}
function LitterBlock() {
	const profile = useVillage((s) => s.profile);
	const collect = useVillage((s) => s.collect);
	const done = profile.done.includes("litter");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative mt-3 overflow-hidden rounded-2xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/village/lane.jpg",
				alt: "",
				className: "h-56 w-full object-cover"
			}),
			done ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 grid place-items-center bg-leaf/80 text-paper",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-lg font-bold",
					children: "کوچه امروز تمیز است"
				})
			}) : TRASH.map((piece) => profile.litter.includes(piece.id) ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				"aria-label": "برداشتن زباله",
				onClick: () => collect(piece.id),
				style: {
					left: piece.left,
					top: piece.top
				},
				className: "absolute grid size-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-paper text-gulf shadow-sm",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4" })
			}, piece.id)),
			!done ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "absolute right-3 bottom-3 rounded-full bg-paper px-3 py-1 text-xs font-bold",
				children: [
					fa(profile.litter.length),
					" از ",
					fa(6)
				]
			}) : null
		]
	});
}
function EventBlock() {
	const profile = useVillage((s) => s.profile);
	const finishEvent = useVillage((s) => s.finishEvent);
	if (profile.done.includes("event")) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
		className: "mt-3 w-full",
		onClick: finishEvent,
		children: "حاضرم در غروب اسکله"
	});
}
function SportScreen() {
	const profile = useVillage((s) => s.profile);
	const setSport = useVillage((s) => s.setSport);
	const sendSports = useVillage((s) => s.sendSports);
	const rows = sportRows(profile, profile.sportsSent);
	const lead = topSport(rows);
	const mineLead = [...rows].sort((a, b) => b.mine - a.mine)[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rise-in grid gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-2xl font-bold",
				children: "ورزش دهخدا"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm leading-6 text-muted",
				children: "اول می‌پرسیم. بعد زمین می‌سازیم. رأی گروه سنی تو جدا شمرده می‌شود."
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "grid gap-3",
				children: [SPORTS.map((sport) => {
					const value = profile.sports[sport.id] ?? 0;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-semibold",
							children: sport.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex gap-1",
							children: [
								1,
								2,
								3
							].map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								disabled: profile.sportsSent,
								"aria-label": `${sport.name} درجه ${step}`,
								onClick: () => setSport(sport.id, value === step ? 0 : step),
								className: cn("size-11 rounded-xl border", value >= step ? "border-gold bg-gold" : "border-line bg-sand")
							}, step))
						})]
					}, sport.id);
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
					className: "w-full",
					disabled: profile.sportsSent,
					onClick: sendSports,
					children: profile.sportsSent ? "رأی تو داخل جمع است" : "ثبت رأی"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-bold",
				children: "تقاضای روستا"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 h-56",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
					width: "100%",
					height: "100%",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
						data: rows,
						layout: "vertical",
						margin: {
							right: 8,
							left: 8
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
								type: "number",
								hide: true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
								type: "category",
								dataKey: "name",
								width: 92,
								tick: {
									fill: "var(--color-ink)",
									fontSize: 12
								}
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
								cursor: { fill: "transparent" },
								contentStyle: {
									background: "var(--color-paper)",
									border: "1px solid var(--color-line)",
									borderRadius: 12,
									fontFamily: "Vazirmatn"
								}
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
								dataKey: "village",
								name: "کل روستا",
								fill: "var(--color-gulf)",
								radius: 6
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
								dataKey: "mine",
								name: "سن تو",
								fill: "var(--color-gold)",
								radius: 6
							})
						]
					})
				})
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "bg-gulf text-paper",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-gold-soft",
						children: "پیشنهاد زیرساخت"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-1 text-xl font-bold",
						children: lead.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 leading-7",
						children: INFRA[lead.id]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-sm text-gold-soft",
						children: [
							"در سن ",
							ageLabel(profile.age),
							"، ",
							mineLead.name,
							" جلوتر است."
						]
					})
				]
			})
		]
	});
}
function FamilyScreen() {
	const profile = useVillage((s) => s.profile);
	const teach = useVillage((s) => s.teach);
	const acceptLesson = useVillage((s) => s.acceptLesson);
	const [lessonId, setLessonId] = (0, import_react.useState)(LESSONS[0].id);
	const learner = isLearner(profile.age);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rise-in grid gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-2xl font-bold",
				children: learner ? "درس بچه‌ها" : "یاد بده"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm leading-6 text-muted",
				children: teachesUp(profile.age) ? "تو به پدر و مادر و بزرگ‌تر یاد می‌دهی. آن‌ها با پذیرفتن، امتیاز خانواده را هم می‌گیرند." : learner ? "یک کودک درس فرستاده. پذیرفتن، خودش فرهنگ است." : "تو پل هستی: چیزی که بلدی را به کوچک‌تر برسان."
			})] }),
			learner ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3",
				children: INBOX.map((item) => {
					const lesson = lessonById(item.lesson);
					const taken = profile.learned.includes(item.id);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "grid gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted",
								children: item.who
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-bold",
								children: lesson?.title
							}),
							taken ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "rounded-2xl bg-gold-soft px-3 py-2 text-sm",
								children: lesson?.reply
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
								onClick: () => acceptLesson(item.id),
								children: "می‌پذیرم"
							})
						]
					}, item.id);
				})
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-2 overflow-x-auto pb-1",
				children: LESSONS.map((lesson) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setLessonId(lesson.id),
					className: cn("min-h-11 shrink-0 rounded-full px-4 text-sm font-semibold", lessonId === lesson.id ? "bg-gulf text-paper" : "border border-line bg-paper text-ink"),
					children: lesson.title
				}, lesson.id))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3",
				children: kinFor(profile.age).map((person) => {
					const sent = profile.teachings.find((item) => item.id === `${person.id}:${lessonId}`);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "grid gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-bold",
								children: person.name
							}), sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-5 text-leaf" }) : null]
						}), sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "rounded-2xl bg-gold-soft px-3 py-2 text-sm",
							children: sent.reply
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
							onClick: () => teach(person.id, person.name, lessonId),
							children: "این درس را بگو"
						})]
					}, person.id);
				})
			})] }),
			profile.teachings.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-bold",
				children: "درس‌هایی که رفته"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-2 grid gap-2 text-sm",
				children: profile.teachings.slice(0, 4).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "text-muted",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-semibold text-ink",
						children: [item.who, ": "]
					}), item.lesson]
				}, item.id))
			})] }) : null
		]
	});
}
var HOODS_LABEL = {
	pier: "محله اسکله",
	hara: "محله حرا",
	mosque: "محله مسجد"
};
function MeScreen() {
	const profile = useVillage((s) => s.profile);
	const buy = useVillage((s) => s.buy);
	const upgradeHouse = useVillage((s) => s.upgradeHouse);
	const reset = useVillage((s) => s.reset);
	const hoods = hoodBoard(profile);
	const families = familyBoard(profile);
	const houseCost = 80 * profile.house;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rise-in grid gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "overflow-hidden rounded-3xl bg-gulf text-paper",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-4 p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/village/portrait.jpg",
						alt: "",
						className: "size-20 rounded-2xl object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-gold-soft",
								children: profile.kind === "golden" ? "کارت طلایی" : "شهروند شورا"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "truncate text-2xl font-bold",
								children: profile.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm",
								children: HOODS_LABEL[profile.hood]
							})
						]
					})]
				}), profile.owned.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-2 px-4 pb-4",
					children: profile.owned.map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-full bg-gulf-deep px-3 py-1 text-xs",
						children: SHOP.find((item) => item.id === id)?.name
					}, id))
				}) : null]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "سطح",
						value: fa(levelOf(profile.xp))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "خانه",
						value: `${fa(profile.house)} از ${fa(3)}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "پاک‌سازی",
						value: fa(profile.cleans)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "درس",
						value: fa(profile.teaches)
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mb-2 font-bold",
				children: "نشان‌ها"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-2",
				children: Object.entries(BADGE_COPY).map(([id, label]) => {
					const on = profile.badges.includes(id);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: cn("inline-flex min-h-9 items-center gap-1 rounded-full px-3 text-xs font-semibold", on ? "bg-gold-soft text-ink" : "bg-sand text-muted"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "size-3.5" }), label]
					}, id);
				})
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "grid gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-bold",
						children: "بازار روستا"
					}),
					SHOP.map((item) => {
						const owned = profile.owned.includes(item.id);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-semibold",
								children: item.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted",
								children: item.detail
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
								tone: owned ? "leaf" : "paper",
								disabled: owned,
								onClick: () => buy(item.id, item.cost),
								children: owned ? "داری" : `${fa(item.cost)} سکه`
							})]
						}, item.id);
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-3 border-t border-line pt-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-semibold",
							children: "اتاق اضافه"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-muted",
							children: ["خانه مجازی، سطح ", fa(profile.house)]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
							tone: "gold",
							disabled: profile.house >= 3,
							onClick: upgradeHouse,
							children: profile.house >= 3 ? "کامل" : `${fa(houseCost)} سکه`
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
				className: "mb-2 flex items-center gap-2 font-bold",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, { className: "size-4 text-gold" }), "محله‌ها"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "grid gap-2",
				children: hoods.map((hood, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-center justify-between text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: hood.mine ? "font-bold text-gulf" : "",
						children: [
							fa(index + 1),
							". ",
							hood.label
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-semibold",
						children: fa(hood.score)
					})]
				}, hood.id))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mb-2 font-bold",
					children: "خانواده‌ها"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "grid gap-2",
					children: families.map((family, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-center justify-between text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: family.mine ? "font-bold text-gulf" : "",
							children: [
								fa(index + 1),
								". ",
								family.name
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-semibold",
							children: fa(family.score)
						})]
					}, family.name))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-xs text-muted",
					children: "امتیاز خانواده تو همان پیشرفتت در روستا است. بقیه، همسایه‌های نمونه هستند."
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: reset,
				className: "text-sm text-muted underline",
				children: "خروج و شروع دوباره"
			})
		]
	});
}
var NAV = [
	{
		id: "map",
		label: "نقشه",
		icon: Map
	},
	{
		id: "path",
		label: "راه",
		icon: TreePine
	},
	{
		id: "sport",
		label: "ورزش",
		icon: Dumbbell
	},
	{
		id: "family",
		label: "خانه",
		icon: House
	},
	{
		id: "me",
		label: "من",
		icon: UserRound
	}
];
function VillageApp() {
	const hydrated = useVillage((s) => s.hydrated);
	const profile = useVillage((s) => s.profile);
	const toast = useVillage((s) => s.toast);
	const dismiss = useVillage((s) => s.dismiss);
	const boot = useVillage((s) => s.boot);
	const [tab, setTab] = (0, import_react.useState)("map");
	(0, import_react.useEffect)(() => {
		const unsub = useVillage.persist.onFinishHydration(() => {
			useVillage.getState().boot();
		});
		useVillage.persist.rehydrate();
		return unsub;
	}, [boot]);
	(0, import_react.useEffect)(() => {
		if (!toast) return;
		const timer = window.setTimeout(dismiss, 2400);
		return () => window.clearTimeout(timer);
	}, [toast, dismiss]);
	if (!hydrated) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "grid min-h-dvh place-items-center bg-sand px-6 text-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm font-semibold text-gulf",
			children: "قشم"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "text-4xl font-bold",
			children: "دهخدا"
		})] })
	});
	if (!profile) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Onboarding, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "min-h-dvh bg-sand text-ink",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex min-h-dvh w-full max-w-lg flex-col",
			children: [
				toast ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "toast-in sticky top-3 z-20 mx-4 rounded-2xl bg-ink px-4 py-3 text-sm font-semibold text-paper shadow-sm",
					children: toast.text
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(World, {
						tab,
						setTab
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "sticky bottom-0 grid grid-cols-5 border-t border-line bg-paper px-1 pt-1 pb-[max(0.4rem,env(safe-area-inset-bottom))]",
					children: NAV.map((item) => {
						const Icon = item.icon;
						const on = tab === item.id;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setTab(item.id),
							className: cn("grid min-h-14 place-items-center rounded-2xl text-xs font-semibold", on ? "text-gulf" : "text-muted"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-5" }), item.label]
						}, item.id);
					})
				})
			]
		})
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VillageApp, {});
}
//#endregion
export { Home as component };
