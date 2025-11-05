"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "../Reveal";
import { useLocale } from "@/context/LocaleContext";

const content = {
  en: {
    title: "Preserving Rwanda's Heritage Through Dance",
    description:
      "Experience the vibrance of traditional Rwandan culture through choreography, music, and storytelling that connects communities across generations.",
    primaryCta: "Book Our Performance",
    secondaryCta: "Explore Our Services",
    mobileImageAlt: "Inkumbura dance troupe performing",
    desktopImageAlt: "Inkumbura dance troupe performing",
  },
  fr: {
    title: "Préserver l'héritage du Rwanda par la danse",
    description:
      "Vivez l'énergie de la culture rwandaise à travers des chorégraphies, de la musique et des récits qui relient les communautés à travers les générations.",
    primaryCta: "Réserver notre performance",
    secondaryCta: "Explorer nos services",
    mobileImageAlt: "La troupe de danse Inkumbura en prestation",
    desktopImageAlt: "La troupe de danse Inkumbura en prestation",
  },
} as const;

export function HeroSection() {
  const { locale } = useLocale();
  const copy = content[locale] ?? content.en;

  return (
    <section className="relative min-h-[75vh] overflow-hidden bg-[#10161a] text-white md:min-h-[90vh]">
      <div className="absolute inset-0">
        <Image
          src="/Home-mobile1.jpg"
          alt={copy.mobileImageAlt}
          fill
          className="object-cover object-bottom md:hidden"
          priority
          quality={100}
        />
        <Image
          src="/Home1.jpg"
          alt={copy.desktopImageAlt}
          fill
          className="hidden object-cover md:block"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/95 via-emerald-900/85 to-emerald-800/60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(6,78,59,0.45),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(4,47,29,0.4),transparent_60%)]" />
      </div>

      <div className="relative mx-auto flex max-w-5xl flex-col justify-end gap-10 px-6 pb-24 pt-48 md:pb-28 md:pt-56">
        <Reveal className="max-w-2xl space-y-7">
          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            {copy.title}
          </h1>
          <p className="text-lg leading-8 text-white/80 sm:text-xl">
            {copy.description}
          </p>
        </Reveal>
        <Reveal delay={150} className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-amber-400 px-7 py-3 text-sm font-semibold text-emerald-950 shadow-xl shadow-amber-500/30 transition hover:bg-amber-300"
          >
            {copy.primaryCta}
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-3 rounded-full border border-white/40 bg-white/5 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
          >
            {copy.secondaryCta}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
