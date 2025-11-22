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
        {/* Mobile: Static image as primary, video as overlay that may not load */}
        <div className="relative h-full w-full overflow-hidden md:hidden">
          {/* Fallback image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/Home-mobile1.jpg')" }}
          />
          {/* Video overlay - will only show if YouTube allows it */}
          <iframe
            className="absolute left-1/2 top-1/2 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 opacity-0"
            src="https://www.youtube.com/embed/KtO2i-ICsk8?autoplay=1&mute=1&loop=1&playlist=KtO2i-ICsk8&controls=0&rel=0&showinfo=0&modestbranding=1&playsinline=1&start=6&end=60"
            title={copy.mobileImageAlt}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            onLoad={(e) => {
              // If video loads successfully, make it visible
              e.currentTarget.style.opacity = '1';
            }}
            onError={() => {
              // Video failed to load, keep fallback image visible
              console.log('Mobile video failed to load, showing fallback image');
            }}
          />
        </div>
        {/* Desktop: Video with fallback */}
        <div className="relative hidden h-full w-full overflow-hidden md:block">
          <iframe
            className="absolute left-1/2 top-1/2 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2"
            src="https://www.youtube.com/embed/vxc4ymgi3U4?autoplay=1&mute=1&loop=1&playlist=vxc4ymgi3U4&controls=0&rel=0&showinfo=0&modestbranding=1&playsinline=1&start=7&end=42"
            title={copy.desktopImageAlt}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            onError={() => {
              // If desktop video fails, could add fallback here too
              console.log('Desktop video failed to load');
            }}
          />
        </div>
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
