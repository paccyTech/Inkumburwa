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
      { id: "wedding-intimate-moment", src: "/9.jpg", category: "wedding" },
      { id: "wedding-family-gathering", src: "/10.jpg", category: "wedding" },
      { id: "festival-nightfall-encore", src: "/12.jpg", category: "festivals" },
      { id: "corporate-cultural-training", src: "/13.jpg", category: "corporate" },
      { id: "corporate-team-celebration", src: "/14.jpg", category: "corporate" },
      { id: "corporate-annual-meeting", src: "/17.jpg", category: "corporate" },
      { id: "festival-cultural-festival", src: "/21.jpg", category: "festivals" },
      { id: "festival-traditional-performance", src: "/23.jpg", category: "festivals" },
      { id: "festival-evening-showcase", src: "/24.jpg", category: "festivals" },
      { id: "festival-drum-circle", src: "/25.jpg", category: "festivals" },
      { id: "festival-crowd-engagement", src: "/26.jpg", category: "festivals" },
      { id: "festival-opening-ceremony", src: "/28.jpg", category: "festivals" },
      { id: "festival-grand-performance", src: "/29.jpeg", category: "festivals" },
      { id: "corporate-tribute", src: "/34.jpeg", category: "corporate" },
      { id: "community-outreach", src: "/35.jpeg", category: "corporate" },
      { id: "festival-sunset-show", src: "/36.jpeg", category: "festivals" },
      { id: "festival-grand-finale-2025", src: "/37.jpeg", category: "festivals" },
      { id: "wedding-amasunzu", src: "/amasunzu.jpeg", category: "wedding" },
      { id: "wedding-wararaye", src: "/wararaye.jpeg", category: "wedding" },
      { id: "wedding-ellen", src: "/ellen.jpeg", category: "wedding" },
      { id: "festival-lili-elen", src: "/lili_elen.jpeg", category: "festivals" },
    ],
    photos: {
      "wedding-intimate-moment": {
        caption: "Intimate wedding moment with traditional music",
        takenAt: "December 2024 · Rubavu",
        alt: "Couple sharing special wedding dance moment",
      },
      "wedding-family-gathering": {
        caption: "Family gathering at wedding celebration",
        takenAt: "January 2025 · Nyamagabe",
        alt: "Wedding family celebration with performers",
      },
      "festival-nightfall-encore": {
        caption: "Nightfall encore with torches and drums",
        takenAt: "June 2023 · Kigali",
        alt: "Crowd illuminated during the festival finale",
      },
      "corporate-cultural-training": {
        caption: "Cultural training session for corporate clients",
        takenAt: "March 2025 · Kigali",
        alt: "Corporate team learning Rwandan cultural traditions",
      },
      "corporate-team-celebration": {
        caption: "Corporate team celebration with traditional performance",
        takenAt: "April 2025 · Kigali",
        alt: "Corporate team enjoying cultural celebration",
      },
      "corporate-annual-meeting": {
        caption: "Annual corporate meeting with cultural entertainment",
        takenAt: "July 2024 · Kigali",
        alt: "Corporate annual meeting featuring Inkumburwa",
      },
      "festival-cultural-festival": {
        caption: "Cultural festival performance showcase",
        takenAt: "November 2024 · Kigali",
        alt: "Festival crowd enjoying cultural performance",
      },
      "festival-traditional-performance": {
        caption: "Traditional performance at cultural festival",
        takenAt: "January 2025 · Musanze",
        alt: "Traditional dance performance at festival",
      },
      "festival-evening-showcase": {
        caption: "Evening showcase at cultural festival",
        takenAt: "February 2025 · Rubavu",
        alt: "Evening festival performance under lights",
      },
      "festival-drum-circle": {
        caption: "Festival drum circle gathering",
        takenAt: "March 2025 · Nyamagabe",
        alt: "Festival attendees in drum circle",
      },
      "festival-crowd-engagement": {
        caption: "Crowd engagement during festival performance",
        takenAt: "April 2025 · Kigali",
        alt: "Festival crowd actively participating",
      },
      "festival-opening-ceremony": {
        caption: "Festival opening ceremony performance",
        takenAt: "May 2024 · Kigali",
        alt: "Opening ceremony with traditional performance",
      },
      "festival-grand-performance": {
        caption: "Grand festival performance showcase",
        takenAt: "June 2024 · Kigali",
        alt: "Large-scale festival performance",
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
      "wedding-amasunzu": {
        caption: "Amasunzu traditional wedding celebration",
        takenAt: "May 2025 · Kigali",
        alt: "Wedding performance with traditional amasunzu celebration",
      },
      "wedding-wararaye": {
        caption: "Wararaye performance at wedding ceremony",
        takenAt: "May 2025 · Kigali",
        alt: "Traditional wararaye dance at wedding celebration",
      },
      "wedding-ellen": {
        caption: "Ellen's wedding celebration with Inkumburwa",
        takenAt: "May 2025 · Kigali",
        alt: "Wedding ceremony featuring traditional performance",
      },
      "festival-lili-elen": {
        caption: "Lili Elen festival performance showcase",
        takenAt: "May 2025 · Kigali",
        alt: "Festival performance featuring lili elen traditions",
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
      { id: "wedding-intimate-moment", src: "/9.jpg", category: "wedding" },
      { id: "wedding-family-gathering", src: "/10.jpg", category: "wedding" },
      { id: "festival-nightfall-encore", src: "/12.jpg", category: "festivals" },
      { id: "corporate-cultural-training", src: "/13.jpg", category: "corporate" },
      { id: "corporate-team-celebration", src: "/14.jpg", category: "corporate" },
      { id: "corporate-annual-meeting", src: "/17.jpg", category: "corporate" },
      { id: "festival-cultural-festival", src: "/21.jpg", category: "festivals" },
      { id: "festival-traditional-performance", src: "/23.jpg", category: "festivals" },
      { id: "festival-evening-showcase", src: "/24.jpg", category: "festivals" },
      { id: "festival-drum-circle", src: "/25.jpg", category: "festivals" },
      { id: "festival-crowd-engagement", src: "/26.jpg", category: "festivals" },
      { id: "festival-opening-ceremony", src: "/28.jpg", category: "festivals" },
      { id: "festival-grand-performance", src: "/29.jpeg", category: "festivals" },
      { id: "corporate-tribute", src: "/34.jpeg", category: "corporate" },
      { id: "community-outreach", src: "/35.jpeg", category: "corporate" },
      { id: "festival-sunset-show", src: "/36.jpeg", category: "festivals" },
      { id: "festival-grand-finale-2025", src: "/37.jpeg", category: "festivals" },
      { id: "wedding-amasunzu", src: "/amasunzu.jpg", category: "wedding" },
      { id: "wedding-wararaye", src: "/wararaye.jpg", category: "wedding" },
      { id: "wedding-ellen", src: "/ellen.jpg", category: "wedding" },
      { id: "festival-lili-elen", src: "/lili_elen.jpg", category: "festivals" },
    ],
    photos: {
      "wedding-intimate-moment": {
        caption: "Moment intime de mariage avec musique traditionnelle",
        takenAt: "Décembre 2024 · Rubavu",
        alt: "Couple partageant un moment spécial de danse de mariage",
      },
      "wedding-family-gathering": {
        caption: "Rassemblement familial lors de célébration de mariage",
        takenAt: "Janvier 2025 · Nyamagabe",
        alt: "Célébration familiale de mariage avec artistes",
      },
      "festival-nightfall-encore": {
        caption: "Encore nocturne aux torches et tambours",
        takenAt: "Juin 2023 · Kigali",
        alt: "Foule illuminée pendant la finale du festival",
      },
      "corporate-cultural-training": {
        caption: "Session de formation culturelle pour clients d'entreprise",
        takenAt: "Mars 2025 · Kigali",
        alt: "Équipe d'entreprise apprenant les traditions culturelles rwandaises",
      },
      "corporate-team-celebration": {
        caption: "Célébration d'équipe d'entreprise avec performance traditionnelle",
        takenAt: "Avril 2025 · Kigali",
        alt: "Équipe d'entreprise profitant de célébration culturelle",
      },
      "corporate-annual-meeting": {
        caption: "Réunion annuelle d'entreprise avec divertissement culturel",
        takenAt: "Juillet 2024 · Kigali",
        alt: "Réunion annuelle d'entreprise avec Inkumburwa",
      },
      "festival-cultural-festival": {
        caption: "Vitrine de performance de festival culturel",
        takenAt: "Novembre 2024 · Kigali",
        alt: "Foule de festival profitant de performance culturelle",
      },
      "festival-traditional-performance": {
        caption: "Performance traditionnelle au festival culturel",
        takenAt: "Janvier 2025 · Musanze",
        alt: "Performance de danse traditionnelle au festival",
      },
      "festival-evening-showcase": {
        caption: "Vitrine du soir au festival culturel",
        takenAt: "Février 2025 · Rubavu",
        alt: "Performance de festival du soir sous les lumières",
      },
      "festival-drum-circle": {
        caption: "Rassemblement de cercle de tambour de festival",
        takenAt: "Mars 2025 · Nyamagabe",
        alt: "Participants au festival dans un cercle de tambour",
      },
      "festival-crowd-engagement": {
        caption: "Engagement de foule pendant la performance de festival",
        takenAt: "Avril 2025 · Kigali",
        alt: "Foule de festival participant activement",
      },
      "festival-opening-ceremony": {
        caption: "Performance de cérémonie d'ouverture de festival",
        takenAt: "Mai 2024 · Kigali",
        alt: "Cérémonie d'ouverture avec performance traditionnelle",
      },
      "festival-grand-performance": {
        caption: "Grande vitrine de performance de festival",
        takenAt: "Juin 2024 · Kigali",
        alt: "Performance de festival à grande échelle",
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
      "wedding-amasunzu": {
        caption: "Célébration de mariage traditionnel Amasunzu",
        takenAt: "Mai 2025 · Kigali",
        alt: "Performance de mariage avec célébration amasunzu traditionnelle",
      },
      "wedding-wararaye": {
        caption: "Performance Wararaye à la cérémonie de mariage",
        takenAt: "Mai 2025 · Kigali",
        alt: "Danse traditionnelle wararaye à la célébration de mariage",
      },
      "wedding-ellen": {
        caption: "Célébration de mariage d'Ellen avec Inkumburwa",
        takenAt: "Mai 2025 · Kigali",
        alt: "Cérémonie de mariage présentant une performance traditionnelle",
      },
      "festival-lili-elen": {
        caption: "Vitrine de performance du festival Lili Elen",
        takenAt: "Mai 2025 · Kigali",
        alt: "Performance de festival mettant en avant les traditions lili elen",
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
        backgroundImageUrl="/28.jpg"
        imagePosition="center 45%"
      />

      <section className="mx-auto max-w-6xl px-6">
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
                <Reveal key={photo.id} delay={index * 80} className="group overflow-hidden rounded-3xl bg-white shadow-xl shadow-emerald-900/10 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-900/20 hover:-translate-y-2">
                  <div className="relative h-[360px] overflow-hidden">
                    <Image
                      src={photo.src}
                      alt={photoCopy?.alt ?? photo.id}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-110"
                      sizes="(min-width: 1280px) 360px, (min-width: 768px) 50vw, 100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full transition-transform duration-500 group-hover:translate-y-0">
                      <h3 className="text-lg font-bold text-white mb-2 leading-tight">
                        Inkumburwa in action
                      </h3>
                      <p className="text-sm text-white/90 font-medium">
                        Inkumburwa
                      </p>
                    </div>
                  </div>
                  <div className="p-6 bg-gradient-to-br from-white to-emerald-50/30">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
                          {labels[photo.category]}
                        </span>
                      </div>
                      <div className="text-xs text-emerald-600 font-medium">
                        {photo.category === 'wedding' ? '💒' : photo.category === 'corporate' ? '🏢' : '🎪'}
                      </div>
                    </div>
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