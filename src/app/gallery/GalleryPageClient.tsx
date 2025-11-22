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
      { id: "wedding-traditional-dance", src: "/4.jpg", category: "wedding" },
      { id: "wedding-reception-celebration", src: "/5.jpg", category: "wedding" },
      { id: "corporate-team-building", src: "/6.jpg", category: "corporate" },
      { id: "wedding-ceremony-performance", src: "/7.jpg", category: "wedding" },
      { id: "corporate-leadership-summit", src: "/3.jpg", category: "corporate" },
      { id: "wedding-intimate-moment", src: "/9.jpg", category: "wedding" },
      { id: "wedding-family-gathering", src: "/10.jpg", category: "wedding" },
      { id: "festival-inganzo-call-response", src: "/8.jpg", category: "festivals" },
      { id: "corporate-workshop-session", src: "/11.jpg", category: "corporate" },
      { id: "festival-nightfall-encore", src: "/12.jpg", category: "festivals" },
      { id: "corporate-cultural-training", src: "/13.jpg", category: "corporate" },
      { id: "corporate-team-celebration", src: "/14.jpg", category: "corporate" },
      { id: "corporate-executive-gathering", src: "/15.jpg", category: "corporate" },
      { id: "corporate-partnership-event", src: "/16.jpg", category: "corporate" },
      { id: "corporate-annual-meeting", src: "/17.jpg", category: "corporate" },
      { id: "corporate-awards-ceremony", src: "/18.jpg", category: "corporate" },
      { id: "corporate-innovation-summit", src: "/19.jpg", category: "corporate" },
      { id: "corporate-leadership-retreat", src: "/20.jpg", category: "corporate" },
      { id: "festival-cultural-festival", src: "/21.jpg", category: "festivals" },
      { id: "festival-community-gathering", src: "/22.jpg", category: "festivals" },
      { id: "festival-traditional-performance", src: "/23.jpg", category: "festivals" },
      { id: "festival-evening-showcase", src: "/24.jpg", category: "festivals" },
      { id: "festival-drum-circle", src: "/25.jpg", category: "festivals" },
      { id: "festival-crowd-engagement", src: "/26.jpg", category: "festivals" },
      { id: "wedding-procession-gourd", src: "/30.jpeg", category: "wedding" },
      { id: "corporate-cultural-night", src: "/31.jpeg", category: "corporate" },
      { id: "festival-opening-ceremony", src: "/28.jpg", category: "festivals" },
      { id: "festival-grand-performance", src: "/29.jpeg", category: "festivals" },
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
      "wedding-traditional-dance": {
        caption: "Traditional wedding dance performance",
        takenAt: "August 2024 · Kigali",
        alt: "Cultural wedding dance celebration",
      },
      "wedding-reception-celebration": {
        caption: "Wedding reception cultural showcase",
        takenAt: "September 2024 · Musanze",
        alt: "Wedding guests enjoying traditional performance",
      },
      "corporate-team-building": {
        caption: "Corporate team building through cultural activities",
        takenAt: "October 2024 · Kigali",
        alt: "Corporate team participating in cultural workshop",
      },
      "wedding-ceremony-performance": {
        caption: "Wedding ceremony traditional performance",
        takenAt: "November 2024 · Huye",
        alt: "Wedding ceremony with traditional dancers",
      },
      "corporate-leadership-summit": {
        caption: "Annual leadership summit cultural showcase",
        takenAt: "March 2024 · Kigali Convention Centre",
        alt: "Corporate gala with Inkumburwa on stage",
      },
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
      "festival-inganzo-call-response": {
        caption: "Intore call-and-response at Inganzo Festival",
        takenAt: "August 2024 · Huye",
        alt: "Festival headliner leading the crowd in song",
      },
      "corporate-workshop-session": {
        caption: "Corporate workshop on cultural heritage",
        takenAt: "February 2025 · Kigali",
        alt: "Corporate employees learning traditional dance",
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
      "corporate-executive-gathering": {
        caption: "Executive gathering featuring cultural presentation",
        takenAt: "May 2024 · Kigali",
        alt: "Corporate executives at cultural event",
      },
      "corporate-partnership-event": {
        caption: "Corporate partnership celebration event",
        takenAt: "June 2024 · Kigali",
        alt: "Business partners celebrating with traditional performance",
      },
      "corporate-annual-meeting": {
        caption: "Annual corporate meeting with cultural entertainment",
        takenAt: "July 2024 · Kigali",
        alt: "Corporate annual meeting featuring Inkumburwa",
      },
      "corporate-awards-ceremony": {
        caption: "Corporate awards ceremony with traditional dance",
        takenAt: "August 2024 · Kigali",
        alt: "Corporate awards event with cultural performance",
      },
      "corporate-innovation-summit": {
        caption: "Innovation summit featuring cultural showcase",
        takenAt: "September 2024 · Kigali",
        alt: "Innovation summit with traditional Rwandan performance",
      },
      "corporate-leadership-retreat": {
        caption: "Leadership retreat with cultural activities",
        takenAt: "October 2024 · Musanze",
        alt: "Corporate leaders participating in cultural retreat",
      },
      "festival-cultural-festival": {
        caption: "Cultural festival performance showcase",
        takenAt: "November 2024 · Kigali",
        alt: "Festival crowd enjoying cultural performance",
      },
      "festival-community-gathering": {
        caption: "Community gathering at cultural festival",
        takenAt: "December 2024 · Huye",
        alt: "Community members at festival event",
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
      { id: "wedding-traditional-dance", src: "/4.jpg", category: "wedding" },
      { id: "wedding-reception-celebration", src: "/5.jpg", category: "wedding" },
      { id: "corporate-team-building", src: "/6.jpg", category: "corporate" },
      { id: "wedding-ceremony-performance", src: "/7.jpg", category: "wedding" },
      { id: "corporate-leadership-summit", src: "/3.jpg", category: "corporate" },
      { id: "wedding-intimate-moment", src: "/9.jpg", category: "wedding" },
      { id: "wedding-family-gathering", src: "/10.jpg", category: "wedding" },
      { id: "festival-inganzo-call-response", src: "/8.jpg", category: "festivals" },
      { id: "corporate-workshop-session", src: "/11.jpg", category: "corporate" },
      { id: "festival-nightfall-encore", src: "/12.jpg", category: "festivals" },
      { id: "corporate-cultural-training", src: "/13.jpg", category: "corporate" },
      { id: "corporate-team-celebration", src: "/14.jpg", category: "corporate" },
      { id: "corporate-executive-gathering", src: "/15.jpg", category: "corporate" },
      { id: "corporate-partnership-event", src: "/16.jpg", category: "corporate" },
      { id: "corporate-annual-meeting", src: "/17.jpg", category: "corporate" },
      { id: "corporate-awards-ceremony", src: "/18.jpg", category: "corporate" },
      { id: "corporate-innovation-summit", src: "/19.jpg", category: "corporate" },
      { id: "corporate-leadership-retreat", src: "/20.jpg", category: "corporate" },
      { id: "festival-cultural-festival", src: "/21.jpg", category: "festivals" },
      { id: "festival-community-gathering", src: "/22.jpg", category: "festivals" },
      { id: "festival-traditional-performance", src: "/23.jpg", category: "festivals" },
      { id: "festival-evening-showcase", src: "/24.jpg", category: "festivals" },
      { id: "festival-drum-circle", src: "/25.jpg", category: "festivals" },
      { id: "festival-crowd-engagement", src: "/26.jpg", category: "festivals" },
      { id: "wedding-procession-gourd", src: "/30.jpeg", category: "wedding" },
      { id: "corporate-cultural-night", src: "/31.jpeg", category: "corporate" },
      { id: "festival-opening-ceremony", src: "/28.jpg", category: "festivals" },
      { id: "festival-grand-performance", src: "/29.jpeg", category: "festivals" },
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
      "wedding-traditional-dance": {
        caption: "Performance de danse traditionnelle de mariage",
        takenAt: "Août 2024 · Kigali",
        alt: "Célébration de danse de mariage culturelle",
      },
      "wedding-reception-celebration": {
        caption: "Vitrine culturelle de réception de mariage",
        takenAt: "Septembre 2024 · Musanze",
        alt: "Invités de mariage profitant de la performance traditionnelle",
      },
      "corporate-team-building": {
        caption: "Renforcement d'équipe d'entreprise par des activités culturelles",
        takenAt: "Octobre 2024 · Kigali",
        alt: "Équipe d'entreprise participant à un atelier culturel",
      },
      "wedding-ceremony-performance": {
        caption: "Performance traditionnelle de cérémonie de mariage",
        takenAt: "Novembre 2024 · Huye",
        alt: "Cérémonie de mariage avec des danseurs traditionnels",
      },
      "corporate-leadership-summit": {
        caption: "Spectacle culturel au sommet du leadership annuel",
        takenAt: "Mars 2024 · Kigali Convention Centre",
        alt: "Gala d'entreprise avec Inkumburwa sur scène",
      },
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
      "festival-inganzo-call-response": {
        caption: "Appel-réponse Intore au festival Inganzo",
        takenAt: "Août 2024 · Huye",
        alt: "Artiste principal menant la foule en chant",
      },
      "corporate-workshop-session": {
        caption: "Atelier d'entreprise sur le patrimoine culturel",
        takenAt: "Février 2025 · Kigali",
        alt: "Employés d'entreprise apprenant la danse traditionnelle",
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
      "corporate-executive-gathering": {
        caption: "Rassemblement exécutif avec présentation culturelle",
        takenAt: "Mai 2024 · Kigali",
        alt: "Cadres d'entreprise à un événement culturel",
      },
      "corporate-partnership-event": {
        caption: "Événement de célébration de partenariat d'entreprise",
        takenAt: "Juin 2024 · Kigali",
        alt: "Partenaires d'affaires célébrant avec performance traditionnelle",
      },
      "corporate-annual-meeting": {
        caption: "Réunion annuelle d'entreprise avec divertissement culturel",
        takenAt: "Juillet 2024 · Kigali",
        alt: "Réunion annuelle d'entreprise avec Inkumburwa",
      },
      "corporate-awards-ceremony": {
        caption: "Cérémonie de récompenses d'entreprise avec danse traditionnelle",
        takenAt: "Août 2024 · Kigali",
        alt: "Événement de récompenses d'entreprise avec performance culturelle",
      },
      "corporate-innovation-summit": {
        caption: "Sommet d'innovation avec vitrine culturelle",
        takenAt: "Septembre 2024 · Kigali",
        alt: "Sommet d'innovation avec performance rwandaise traditionnelle",
      },
      "corporate-leadership-retreat": {
        caption: "Retraite de leadership avec activités culturelles",
        takenAt: "Octobre 2024 · Musanze",
        alt: "Leaders d'entreprise participant à une retraite culturelle",
      },
      "festival-cultural-festival": {
        caption: "Vitrine de performance de festival culturel",
        takenAt: "Novembre 2024 · Kigali",
        alt: "Foule de festival profitant de performance culturelle",
      },
      "festival-community-gathering": {
        caption: "Rassemblement communautaire au festival culturel",
        takenAt: "Décembre 2024 · Huye",
        alt: "Membres de communauté à un événement de festival",
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
