import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Btn({
  className,
  tone = "gulf",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { tone?: "gulf" | "paper" | "gold" | "leaf" }) {
  const tones = {
    gulf: "bg-gulf text-paper hover:bg-gulf-deep",
    paper: "bg-paper text-ink border border-line hover:bg-sand",
    gold: "bg-gold text-ink hover:bg-gold-soft",
    leaf: "bg-leaf text-paper",
  };
  return (
    <button
      type="button"
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-2xl px-4 py-2 text-sm font-semibold transition active:scale-[0.98] disabled:opacity-50",
        tones[tone],
        className,
      )}
      {...props}
    />
  );
}

export function Card({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <section className={cn("rounded-3xl border border-line bg-paper p-4 shadow-sm", className)}>
      {children}
    </section>
  );
}

export function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-sand px-3 py-2">
      <p className="text-xs text-muted">{label}</p>
      <p className="text-lg font-bold text-ink">{value}</p>
    </div>
  );
}
