"use client";

import Link from "next/link";
import { useLocale } from "@/context/LocaleContext";

const content = {
  en: {
    heading: "Ready to Experience Our Culture?",
    description:
      "Book Inkumburwa z'Ibwanacyambwe for your next event and create unforgettable memories with authentic Rwandan traditional dance.",
    primaryCta: "Book Performance",
    secondaryCta: "Learn More",
  },
  fr: {
    heading: "Prêt à vivre notre culture ?",
    description:
      "Réservez Inkumburwa z'Ibwanacyambwe pour votre prochain événement et créez des souvenirs inoubliables avec la danse traditionnelle rwandaise authentique.",
    primaryCta: "Réserver une performance",
    secondaryCta: "En savoir plus",
  },
} as const;

export function CTASection() {
  const { locale } = useLocale();
  const copy = content[locale] ?? content.en;

  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500" />
      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 text-center text-emerald-950">
        <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
          {copy.heading}
        </h2>
        <p className="max-w-3xl text-base leading-relaxed text-emerald-900/85">
          {copy.description}
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-emerald-950 px-7 py-3 text-sm font-semibold text-white shadow-xl shadow-emerald-900/30 transition hover:bg-emerald-900"
          >
            {copy.primaryCta}
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-3 rounded-full border border-emerald-900/20 bg-white/70 px-7 py-3 text-sm font-semibold text-emerald-950 transition hover:border-emerald-900/40 hover:bg-white"
          >
            {copy.secondaryCta}
          </Link>
        </div>
      </div>
    </section>
  );
}
