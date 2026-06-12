"use client";

import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import { Reveal } from "../Reveal";
import { useLocale } from "@/context/LocaleContext";

const displayFont = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
});

const content = {
  en: {
    title: "Rwanda's Heritage in Motion",
    description: "Feel the pulse of traditional dance, music, and storytelling from Inkumburwa.",
    primaryCta: "Book Our Performance",
    secondaryCta: "Explore Our Services",
    mobileImageAlt: "Inkumburwa dance troupe performing",
    desktopImageAlt: "Inkumburwa dance troupe performing",
  },
  fr: {
    title: "L'héritage du Rwanda en mouvement",
    description: "Ressentez l'énergie de la danse, de la musique et des récits d'Inkumburwa.",
    primaryCta: "Réserver notre performance",
    secondaryCta: "Explorer nos services",
    mobileImageAlt: "La troupe de danse Inkumburwa en prestation",
    desktopImageAlt: "La troupe de danse Inkumburwa en prestation",
  },
} as const;

export function HeroSection() {
  const { locale } = useLocale();
  const copy = content[locale] ?? content.en;

  return (
    <section className="relative min-h-[75vh] overflow-hidden bg-[#10161a] text-white md:min-h-[90vh]">
      <div className="absolute inset-0">
        
        {/* Optimized Cloudinary Video Background */}
        <div className="relative h-full w-full overflow-hidden bg-[#10161a]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover pointer-events-none"
          >
            <source 
              src="https://res.cloudinary.com/dg55h2o1u/video/upload/q_auto,f_auto/v1781282533/bgrd_video_s4xwde.mp4" 
              type="video/mp4" 
            />
          </video>
        </div>
        
        {/* Color Overlays (Keep these so the white text is readable!) */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/80 via-emerald-900/65 to-emerald-800/45" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(6,78,59,0.28),transparent_60%),radial-gradient(circle_at_bottom_right,rgba(4,47,29,0.26),transparent_65%)]" />
      </div>

      <div className="relative mx-auto flex max-w-5xl flex-col justify-end gap-10 px-6 pb-24 pt-48 md:pb-28 md:pt-56">
        <Reveal className="max-w-2xl space-y-7">
          <h1
            className={`${displayFont.className} text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl`}
          >
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