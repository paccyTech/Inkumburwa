"use client";

import { useLocale } from "@/context/LocaleContext";

const content = {
  en: {
    quote:
      "Culture is the soul of a nation. Through our dances, we keep the heartbeat of Rwanda alive, sharing our stories, our joy, and our unity with the world.",
    author: "Kayitare Jean",
    title: "Founder & CEO",
  },
  fr: {
    quote:
      "La culture est l'âme d'une nation. Par nos danses, nous gardons le cœur du Rwanda vivant, partageant nos histoires, notre joie et notre unité avec le monde.",
    author: "Kayitare Jean",
    title: "Fondateur & PDG",
  },
} as const;

export function QuoteSection() {
  const { locale } = useLocale();
  const copy = content[locale] ?? content.en;

  return (
    <section className="relative overflow-hidden bg-emerald-950 py-24 text-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/95 via-emerald-950/80 to-emerald-900/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,128,0.18),transparent_60%)]" />
      </div>
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-amber-300/40 bg-amber-300/10 text-3xl text-amber-300">
          “
        </div>
        <blockquote className="mt-10 space-y-6">
          <p className="text-2xl leading-relaxed text-white/85 sm:text-[28px]">
            &quot;{copy.quote}&quot;
          </p>
          <footer className="space-y-1 text-sm uppercase tracking-[0.45em] text-amber-200/80">
            <div>{copy.author}</div>
            <div className="text-xs text-white/60">{copy.title}</div>
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
