"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Reveal } from "../Reveal";
import { useLocale } from "@/context/LocaleContext";

const content = {
  en: {
    title: "Who We Are",
    description:
      "Inkumbura z'Ibwanacyambwe is a renowned cultural troupe dedicated to preserving and sharing the vibrancy of traditional Rwandan dance and music. Our passionate performers bring centuries-old traditions to life with authentic choreography, storytelling, and costume design.",
    stats: [
      { value: "5+", label: "Years of Performances" },
      { value: "300+", label: "Events & Festivals" },
      { value: "50", label: "Talented Artists" },
    ],
    slideshow: [
      { src: "/7.jpg", alt: "Traditional Rwandan dancers" },
      { src: "/10.jpg", alt: "Inkumbura troupe performing on stage" },
      { src: "/3.jpg", alt: "Cultural performance moment" },
      { src: "/29.jpeg", alt: "Inkumbura performer carrying a traditional gourd" },
    ],
    goToSlide: "Go to slide",
  },
  fr: {
    title: "Qui nous sommes",
    description:
      "Inkumbura z'Ibwanacyambwe est une troupe culturelle renommée dédiée à la préservation et au partage de la richesse de la danse et de la musique traditionnelles rwandaises. Nos artistes passionnés font revivre des traditions séculaires grâce à des chorégraphies authentiques, des récits et des costumes d'époque.",
    stats: [
      { value: "25+", label: "Années de spectacles" },
      { value: "300+", label: "Événements et festivals" },
      { value: "50", label: "Artistes talentueux" },
    ],
    slideshow: [
      { src: "/7.jpg", alt: "Danseurs rwandais traditionnels" },
      { src: "/10.jpg", alt: "La troupe Inkumbura sur scène" },
      { src: "/3.jpg", alt: "Moment de performance culturelle" },
      { src: "/29.jpeg", alt: "Artiste d'Inkumbura portant une calebasse traditionnelle" },
    ],
    goToSlide: "Aller à la diapositive",
  },
} as const;

export function WhoWeAreSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { locale } = useLocale();
  const copy = content[locale] ?? content.en;
  const slideshowLength = copy.slideshow.length;

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slideshowLength);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [locale, slideshowLength]);

  useEffect(() => {
    setCurrentIndex(0);
  }, [locale, slideshowLength]);

  return (
    <section className="relative bg-emerald-50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-20 lg:grid-cols-[1.2fr_1fr]">
          <Reveal className="space-y-8">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold text-emerald-950 sm:text-4xl">
                {copy.title}
              </h2>
            </div>
            <p className="text-lg leading-8 text-emerald-900/85">
              {copy.description}
            </p>
            <div className="grid gap-6 sm:grid-cols-3">
              {copy.stats.map((item, index) => (
                <Reveal key={item.label} delay={index * 120} className="flex flex-col gap-3 text-left">
                  <span className="text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-emerald-600/80">
                    {item.label}
                  </span>
                  <span className="text-4xl font-semibold text-emerald-950">
                    {item.value}
                  </span>
                  <span className="h-[3px] w-12 rounded-full bg-emerald-500/70" />
                </Reveal>
              ))}
            </div>
          </Reveal>
          <Reveal delay={200} className="relative h-[460px] overflow-hidden rounded-[2.5rem] border border-white/40 shadow-2xl shadow-emerald-900/10">
            {copy.slideshow.map((image, index) => (
              <Image
                key={image.src}
                src={image.src}
                alt={image.alt}
                fill
                className={`absolute inset-0 object-cover transition-opacity duration-700 ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
                sizes="(min-width: 1024px) 500px, 100vw"
                priority={index === 0}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/20 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
              {copy.slideshow.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 w-2 rounded-full transition ${
                    index === currentIndex
                      ? "bg-white"
                      : "bg-white/40 hover:bg-white/70"
                  }`}
                  aria-label={`${copy.goToSlide} ${index + 1}`}
                />
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
