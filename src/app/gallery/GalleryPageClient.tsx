"use client";

import { useState } from "react";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { useLocale } from "@/context/LocaleContext";

const filters = ["all", "wedding", "corporate", "festivals"] as const;

type FilterKey = (typeof filters)[number];
type CategoryKey = Exclude<FilterKey, "all">;

type BasePhoto = {
  id: string;
  src: string;
  category: FilterKey;
};

type PhotoCopy = {
  caption: string;
  takenAt: string;
  alt: string;
};

type GalleryCopy = {
  heroTitle: string;
  heroSubtitle: string;
  filterLabel: string;
  filterAll: string;
  empty: string;
  photos: Record<string, PhotoCopy>;
  basePhotos: BasePhoto[];
};

const galleryContent: Record<string, GalleryCopy> = {
  en: {
    heroTitle: "Performance Gallery",
    heroSubtitle:
      "Moments of rhythm, colour, and storytelling captured across our performances in Rwanda and around the world.",
    filterLabel: "Filter by category",
    filterAll: "All moments",
    empty: "No photos available in this category yet. Check back soon!",
    basePhotos: [
      { id: "wedding-chantal-eric", src: "/1.jpg", category: "wedding" },
      { id: "corporate-leadership-summit", src: "/3.jpg", category: "corporate" },
      { id: "festival-inganzo-call-response", src: "/8.jpg", category: "festivals" },
      { id: "festival-nightfall-encore", src: "/12.jpg", category: "festivals" },
      { id: "wedding-procession-gourd", src: "/30.jpeg", category: "wedding" },
      { id: "corporate-cultural-night", src: "/31.jpeg", category: "corporate" },
      { id: "festival-drumline", src: "/32.jpeg", category: "festivals" },
      { id: "wedding-bride-entrance", src: "/33.jpeg", category: "wedding" },
      { id: "corporate-tribute", src: "/34.jpeg", category: "corporate" },
      { id: "community-outreach", src: "/35.jpeg", category: "corporate" },
      { id: "festival-sunset-show", src: "/36.jpeg", category: "festivals" },
      { id: "festival-grand-finale-2025", src: "/37.jpeg", category: "festivals" },
    ],
    photos: {
      "wedding-chantal-eric": {
        caption: "Joyful entrance parade for Chantal & Eric",
        takenAt: "July 2024 · Kigali",
        alt: "Bride and groom celebrating with the troupe",
      },
      "corporate-leadership-summit": {
        caption: "Annual leadership summit cultural showcase",
        takenAt: "March 2024 · Kigali Convention Centre",
        alt: "Corporate gala with Inkumburwa on stage",
      },
      "festival-inganzo-call-response": {
        caption: "Intore call-and-response at Inganzo Festival",
        takenAt: "August 2024 · Huye",
        alt: "Festival headliner leading the crowd in song",
      },
      "festival-nightfall-encore": {
        caption: "Nightfall encore with torches and drums",
        takenAt: "June 2023 · Kigali",
        alt: "Crowd illuminated during the festival finale",
      },
      "wedding-procession-gourd": {
        caption: "Graceful bridal procession honoring tradition",
        takenAt: "September 2024 · Rwamagana",
        alt: "Procession of Inkumburwa performers carrying gourds",
      },
      "corporate-cultural-night": {
        caption: "Corporate partners celebrating with Inkumburwa",
        takenAt: "October 2024 · Kigali",
        alt: "Dancers performing at a corporate cultural night",
      },
      "festival-drumline": {
        caption: "Royal drumline opening the cultural festival",
        takenAt: "November 2024 · Rubavu",
        alt: "Festival drumline energizing the crowd",
      },
      "wedding-bride-entrance": {
        caption: "Bride welcomed with elegant choreography",
        takenAt: "December 2024 · Nyanza",
        alt: "Bride entering with traditional dancers",
      },
      "corporate-tribute": {
        caption: "Tribute dance for corporate honorees",
        takenAt: "January 2025 · Kigali",
        alt: "Inkumburwa troupe giving a tribute performance",
      },
      "community-outreach": {
        caption: "Community outreach and dance workshop",
        takenAt: "March 2025 · Kigali",
        alt: "Community outreach dance workshop",
      },
      "festival-sunset-show": {
        caption: "Sunset showcase at the cultural exchange festival",
        takenAt: "February 2025 · Gisenyi",
        alt: "Festival performance at sunset",
      },
      "festival-grand-finale-2025": {
        caption: "Grand finale bow at the Inkumburwa festival",
        takenAt: "April 2025 · Muhanga",
        alt: "Grand finale with dancers bowing",
      },
    },
  },
  fr: {
    heroTitle: "Galerie",
    heroSubtitle:
      "Moments de rythme, de couleur et de récit capturés lors de nos performances au Rwanda et dans le monde.",
    filterLabel: "Filtrer par catégorie",
    filterAll: "Tous les moments",
    empty: "Aucune photo disponible pour cette catégorie. Revenez bientôt !",
    basePhotos: [
      { id: "wedding-chantal-eric", src: "/1.jpg", category: "wedding" },
      { id: "corporate-leadership-summit", src: "/3.jpg", category: "corporate" },
      { id: "festival-inganzo-call-response", src: "/8.jpg", category: "festivals" },
      { id: "festival-nightfall-encore", src: "/12.jpg", category: "festivals" },
      { id: "wedding-procession-gourd", src: "/30.jpeg", category: "wedding" },
      { id: "corporate-cultural-night", src: "/31.jpeg", category: "corporate" },
      { id: "festival-drumline", src: "/32.jpeg", category: "festivals" },
      { id: "wedding-bride-entrance", src: "/33.jpeg", category: "wedding" },
      { id: "corporate-tribute", src: "/34.jpeg", category: "corporate" },
      { id: "community-outreach", src: "/35.jpeg", category: "corporate" },
      { id: "festival-sunset-show", src: "/36.jpeg", category: "festivals" },
      { id: "festival-grand-finale-2025", src: "/37.jpeg", category: "festivals" },
    ],
    photos: {
      "wedding-chantal-eric": {
        caption: "Défilé d'entrée joyeux pour Chantal et Eric",
        takenAt: "Juillet 2024 · Kigali",
        alt: "Mariés célébrant avec la troupe",
      },
      "corporate-leadership-summit": {
        caption: "Spectacle culturel au sommet du leadership annuel",
        takenAt: "Mars 2024 · Kigali Convention Centre",
        alt: "Gala d'entreprise avec Inkumburwa sur scène",
      },
      "festival-inganzo-call-response": {
        caption: "Appel-réponse Intore au festival Inganzo",
        takenAt: "Août 2024 · Huye",
        alt: "Artiste principal menant la foule en chant",
      },
      "festival-nightfall-encore": {
        caption: "Encore nocturne aux torches et tambours",
        takenAt: "Juin 2023 · Kigali",
        alt: "Foule illuminée pendant la finale du festival",
      },
      "wedding-procession-gourd": {
        caption: "Procession nuptiale gracieuse honorant la tradition",
        takenAt: "Septembre 2024 · Rwamagana",
        alt: "Procession d'artistes Inkumburwa portant des calebasses",
      },
      "corporate-cultural-night": {
        caption: "Partenaires d'entreprise célébrant avec Inkumburwa",
        takenAt: "Octobre 2024 · Kigali",
        alt: "Danseurs lors d'une soirée culturelle d'entreprise",
      },
      "festival-drumline": {
        caption: "Tambours royaux ouvrant le festival culturel",
        takenAt: "Novembre 2024 · Rubavu",
        alt: "Tambours ouvrant le festival",
      },
      "wedding-bride-entrance": {
        caption: "Entrée de la mariée accompagnée d'une chorégraphie élégante",
        takenAt: "Décembre 2024 · Nyanza",
        alt: "Mariée entrant avec des danseurs traditionnels",
      },
      "corporate-tribute": {
        caption: "Danse hommage pour les partenaires d'entreprise",
        takenAt: "Janvier 2025 · Kigali",
        alt: "La troupe Inkumburwa rendant hommage",
      },
      "community-outreach": {
        caption: "Sensibilisation communautaire et atelier de danse",
        takenAt: "Mars 2025 · Kigali",
        alt: "Atelier de danse pour la communauté",
      },
      "festival-sunset-show": {
        caption: "Spectacle au coucher du soleil lors du festival culturel",
        takenAt: "Février 2025 · Gisenyi",
        alt: "Performance de festival au coucher du soleil",
      },
      "festival-grand-finale-2025": {
        caption: "Salut final au festival Inkumburwa",
        takenAt: "Avril 2025 · Muhanga",
        alt: "Finale avec les danseurs saluant",
      },
    },
  },
};

const filterLabels: Record<string, Record<FilterKey, string>> = {
  en: {
    all: "All",
    wedding: "Wedding",
    corporate: "Corporate",
    festivals: "Festivals",
  },
  fr: {
    all: "Tous",
    wedding: "Mariage",
    corporate: "Entreprise",
    festivals: "Festivals",
  },
};

export default function GalleryPageClient() {
  const { locale } = useLocale();
  const copy = galleryContent[locale] ?? galleryContent.en;
  const labels = filterLabels[locale] ?? filterLabels.en;
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");

  const filteredPhotos = copy.basePhotos.filter((photo) =>
    activeFilter === "all" ? true : photo.category === activeFilter
  );

  return (
    <div className="space-y-16 pb-24">
      <PageHero
        title={copy.heroTitle}
        subtitle={copy.heroSubtitle}
        backgroundImageUrl="/27.jpg"
        imagePosition="center 45%"
      />

      <section className="mx-auto max-w-6xl px-6">
        <div className="rounded-[2.5rem] border border-emerald-900/10 bg-white p-6 shadow-lg shadow-emerald-900/10">
          <Reveal className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-600">
                {copy.filterLabel}
              </span>
              <h2 className="text-2xl font-semibold text-emerald-950 sm:text-3xl">
                {copy.filterAll}
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  className={`inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium transition ${
                    activeFilter === filter
                      ? "border-emerald-900 bg-emerald-900 text-white"
                      : "border-emerald-900/20 bg-white text-emerald-900 hover:border-emerald-900/50"
                  }`}
                  onClick={() => setActiveFilter(filter)}
                >
                  {labels[filter]}
                </button>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6">
        {filteredPhotos.length === 0 ? (
          <Reveal className="rounded-[2.5rem] border border-emerald-900/10 bg-white p-12 text-center text-sm text-emerald-900/70 shadow-lg shadow-emerald-900/10">
            {copy.empty}
          </Reveal>
        ) : (
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPhotos.map((photo, index) => {
              const photoCopy = copy.photos[photo.id];
              return (
                <Reveal key={photo.id} delay={index * 80} className="group overflow-hidden rounded-[2.5rem] border border-emerald-900/10 bg-white shadow-lg shadow-emerald-900/10">
                  <div className="relative h-[420px]">
                    <Image
                      src={photo.src}
                      alt={photoCopy?.alt ?? photo.id}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                      sizes="(min-width: 1280px) 360px, (min-width: 768px) 50vw, 100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/40 via-transparent to-transparent" />
                  </div>
                  <div className="space-y-2 px-6 pb-6 pt-5">
                    <p className="text-sm font-semibold text-emerald-950">
                      {photoCopy?.caption ?? photo.id}
                    </p>
                    <p className="text-xs uppercase tracking-[0.3em] text-emerald-700">
                      {photoCopy?.takenAt ?? "Inkumburwa"}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}
