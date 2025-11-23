"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "@/context/LocaleContext";

type CategoryId = "all" | "wedding" | "corporate" | "festivals";

type Photo = {
  id: string;
  src: string;
  alt: string;
  category: CategoryId;
  caption: string;
  takenAt: string;
  videoUrl?: string;
};

const categories: CategoryId[] = ["all", "wedding", "corporate", "festivals"];

const content = {
  en: {
    heading: "Performance Gallery",
    description:
      "Discover the spirit, color, and unity that light up every Inkumburwa performance around the world.",
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
        src: "/8.jpg",
        alt: "Festival headliner leading the crowd in song",
        category: "festivals" as const,
        caption: "Intore call-and-response at Inganzo Festival",
        takenAt: "August 2024 · Huye",
      },
      {
        id: "girls-dance-kinyarwanda",
        src: "/30.jpeg",
        alt: "Girls Dance Kinyarwanda performance video",
        category: "all" as const,
        caption: "Vibrant Kinyarwanda girls' dance performance",
        takenAt: "Recent · Kigali",
        videoUrl: "KtO2i-ICsk8",
      },
      {
        id: "rwandan-dance-performances",
        src: "/33.jpeg",
        alt: "Rwandan Dance Performances video",
        category: "all" as const,
        caption: "Grace and power of authentic Rwandan dance",
        takenAt: "Recent · Kigali",
        videoUrl: "vCPnOaPBpEM",
      },
      {
        id: "intore-dance-highlights",
        src: "/38.jpg",
        alt: "Intore Dance Highlights video",
        category: "all" as const,
        caption: "Intore traditional dance highlights",
        takenAt: "Recent · Kigali",
        videoUrl: "XOjVUrFKCQ8",
      },
    ],
  },
  fr: {
    heading: "Galerie de performances",
    description:
      "Découvrez l'esprit, les couleurs et l'unité qui illuminent chaque performance d'Inkumburwa dans le monde.",
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
        src: "/8.jpg",
        alt: "Artiste principal menant la foule en chant",
        category: "festivals" as const,
        caption: "Appel-réponse Intore au festival Inganzo",
        takenAt: "Août 2024 · Huye",
      },
      {
        id: "girls-dance-kinyarwanda",
        src: "/30.jpeg",
        alt: "Vidéo de performance Danse des Filles Kinyarwanda",
        category: "all" as const,
        caption: "Performance vibrante de danse des filles Kinyarwanda",
        takenAt: "Récent · Kigali",
        videoUrl: "KtO2i-ICsk8",
      },
      {
        id: "rwandan-dance-performances",
        src: "/33.jpeg",
        alt: "Vidéo Performances de Danse Rwandaise",
        category: "all" as const,
        caption: "Grâce et puissance de la danse rwandaise authentique",
        takenAt: "Récent · Kigali",
        videoUrl: "vCPnOaPBpEM",
      },
      {
        id: "intore-dance-highlights",
        src: "/38.jpg",
        alt: "Vidéo Points forts de la danse Intore",
        category: "all" as const,
        caption: "Points forts de la danse traditionnelle Intore",
        takenAt: "Récent · Kigali",
        videoUrl: "XOjVUrFKCQ8",
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
        {(copy.photos as unknown as Photo[]).map((image) => (
          <div
            key={image.id}
            className={`group relative overflow-hidden rounded-[2rem] border border-emerald-900/10 bg-white shadow-xl shadow-emerald-900/10 ${image.videoUrl ? 'aspect-[9/16] max-h-[30rem]' : 'aspect-[3/4]'}`}
          >
            {image.videoUrl ? (
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${image.videoUrl}?autoplay=1&mute=1&loop=1&playlist=${image.videoUrl}&controls=0&rel=0&showinfo=0&modestbranding=1&playsinline=1`}
                title={image.alt}
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1024px) 30vw, (min-width: 768px) 33vw, 100vw"
                className="object-cover object-center transition duration-500 group-hover:scale-105"
              />
            )}
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
