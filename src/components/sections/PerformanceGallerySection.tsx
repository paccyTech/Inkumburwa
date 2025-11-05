"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "@/context/LocaleContext";

type CategoryId = "all" | "wedding" | "corporate" | "festivals";

const categories: CategoryId[] = ["all", "wedding", "corporate", "festivals"];

const content = {
  en: {
    heading: "Performance Gallery",
    description:
      "Discover the spirit, color, and unity that light up every Inkumbura performance around the world.",
    buttonLabel: "View Full Gallery",
    categoryLabels: {
      all: "All events",
      wedding: "Wedding",
      corporate: "Corporate",
      festivals: "Festivals",
    } satisfies Record<CategoryId, string>,
    photos: [
      {
        id: "wedding-chantal-eric",
        src: "/1.jpg",
        alt: "Bride and groom celebrating with the troupe",
        category: "wedding" as const,
        caption: "Joyful entrance parade for Chantal & Eric",
        takenAt: "July 2024 · Kigali",
      },
      {
        id: "corporate-leadership-summit",
        src: "/3.jpg",
        alt: "Corporate gala with Inkumburwa on stage",
        category: "corporate" as const,
        caption: "Annual leadership summit cultural showcase",
        takenAt: "March 2024 · Kigali Convention Centre",
      },
      {
        id: "festival-inganzo-call-response",
        src: "/4.jpg",
        alt: "Festival headliner leading the crowd in song",
        category: "festivals" as const,
        caption: "Intore call-and-response at Inganzo Festival",
        takenAt: "August 2024 · Huye",
      },
    ],
  },
  fr: {
    heading: "Galerie de performances",
    description:
      "Découvrez l'esprit, les couleurs et l'unité qui illuminent chaque performance d'Inkumbura dans le monde.",
    buttonLabel: "Voir toute la galerie",
    categoryLabels: {
      all: "Tous les événements",
      wedding: "Mariage",
      corporate: "Entreprise",
      festivals: "Festivals",
    } satisfies Record<CategoryId, string>,
    photos: [
      {
        id: "wedding-chantal-eric",
        src: "/1.jpg",
        alt: "Mariés célébrant avec la troupe",
        category: "wedding" as const,
        caption: "Défilé d'entrée joyeux pour Chantal et Eric",
        takenAt: "Juillet 2024 · Kigali",
      },
      {
        id: "corporate-leadership-summit",
        src: "/3.jpg",
        alt: "Gala d'entreprise avec Inkumburwa sur scène",
        category: "corporate" as const,
        caption: "Spectacle culturel au sommet du leadership annuel",
        takenAt: "Mars 2024 · Kigali Convention Centre",
      },
      {
        id: "festival-inganzo-call-response",
        src: "/4.jpg",
        alt: "Artiste principal menant la foule en chant",
        category: "festivals" as const,
        caption: "Appel-réponse Intore au festival Inganzo",
        takenAt: "Août 2024 · Huye",
      },
    ],
  },
} as const;

export function PerformanceGallerySection() {
  const { locale } = useLocale();
  const copy = content[locale] ?? content.en;

  return (
    <section className="mx-auto max-w-6xl px-6 pb-24 pt-16">
      <div className="space-y-3 text-center">
        <h2 className="text-3xl font-bold text-emerald-950 sm:text-4xl">
          {copy.heading}
        </h2>
        <p className="mx-auto max-w-2xl text-base leading-relaxed text-emerald-900/80">
          {copy.description}
        </p>
      </div>
      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {copy.photos.map((image) => (
          <div
            key={image.id}
            className="group relative aspect-[3/4] overflow-hidden rounded-[2rem] border border-emerald-900/10 bg-white shadow-xl shadow-emerald-900/10"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 1024px) 30vw, (min-width: 768px) 33vw, 100vw"
              className="object-cover object-center transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/25 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
            <div className="absolute inset-x-0 bottom-0 translate-y-full bg-emerald-950/85 px-4 py-3 text-left text-white transition group-hover:translate-y-0">
              <p className="text-sm font-semibold">{image.caption}</p>
              <p className="text-xs uppercase tracking-[0.2em] text-white/70">{image.takenAt}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-14 flex justify-center">
        <Link
          href="/gallery"
          className="inline-flex items-center justify-center gap-3 rounded-full bg-emerald-900 px-7 py-3 text-sm font-semibold text-white shadow-xl shadow-emerald-900/30 transition hover:bg-emerald-800"
        >
          {copy.buttonLabel}
        </Link>
      </div>
    </section>
  );
}
