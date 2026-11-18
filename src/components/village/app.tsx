import { useEffect, useState } from "react";
import { Onboarding } from "./onboarding";
import { NAV, World, type TabId } from "./world";
import { useVillage } from "@/lib/village/store";
import { cn } from "@/lib/cn";

export function VillageApp() {
  const hydrated = useVillage((s) => s.hydrated);
  const profile = useVillage((s) => s.profile);
  const toast = useVillage((s) => s.toast);
  const dismiss = useVillage((s) => s.dismiss);
  const boot = useVillage((s) => s.boot);
  const [tab, setTab] = useState<TabId>("map");

  useEffect(() => {
    const unsub = useVillage.persist.onFinishHydration(() => {
      useVillage.getState().boot();
    });
    void useVillage.persist.rehydrate();
    return unsub;
  }, [boot]);

  useEffect(() => {
    if (!toast) return;
    const timer = window.setTimeout(dismiss, 2400);
    return () => window.clearTimeout(timer);
  }, [toast, dismiss]);

  if (!hydrated) {
    return (
      <main className="grid min-h-dvh place-items-center bg-sand px-6 text-center">
        <div>
          <p className="text-sm font-semibold text-gulf">قشم</p>
          <h1 className="text-4xl font-bold">دهخدا</h1>
        </div>
      </main>
    );
  }

  if (!profile) return <Onboarding />;

  return (
    <main className="min-h-dvh bg-sand text-ink">
      <div className="mx-auto flex min-h-dvh w-full max-w-lg flex-col">
        {toast ? (
          <div className="toast-in sticky top-3 z-20 mx-4 rounded-2xl bg-ink px-4 py-3 text-sm font-semibold text-paper shadow-sm">
            {toast.text}
          </div>
        ) : null}
        <div className="flex-1">
          <World tab={tab} setTab={setTab} />
        </div>
        <nav className="sticky bottom-0 grid grid-cols-5 border-t border-line bg-paper px-1 pt-1 pb-[max(0.4rem,env(safe-area-inset-bottom))]">
          {NAV.map((item) => {
            const Icon = item.icon;
            const on = tab === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setTab(item.id)}
                className={cn(
                  "grid min-h-14 place-items-center rounded-2xl text-xs font-semibold",
                  on ? "text-gulf" : "text-muted",
                )}
              >
                <Icon className="size-5" />
                {item.label}
              </button>
            );
          })}
        </nav>
      </div>
    </main>
  );
}
