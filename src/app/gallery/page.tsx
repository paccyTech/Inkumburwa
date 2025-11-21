"use client";

import { useState } from "react";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { useLocale } from "@/context/LocaleContext";

const filters = ["all", "wedding", "corporate", "festivals"] as const;

type FilterKey = (typeof filters)[number];
type CategoryKey = Exclude<FilterKey, "all">;

const basePhotos = [
  {
    id: "wedding-chantal-eric",
    src: "/1.jpg",
    category: "wedding",
  },
  {
    id: "wedding-reception-gate",
    src: "/5.jpg",
    category: "wedding",
  },
  {
    id: "wedding-intore-finale",
    src: "/7.jpg",
    category: "wedding",
  },
  {
    id: "wedding-golden-hour",
    src: "/Home1.jpg",
    category: "wedding",
  },
  {
    id: "corporate-leadership-summit",
    src: "/3.jpg",
    category: "corporate",
  },
  {
    id: "corporate-retreat-percussion",
    src: "/6.jpg",
    category: "corporate",
  },
  {
    id: "corporate-closing-remarks",
    src: "/10.jpg",
    category: "corporate",
  },
  {
    id: "corporate-photo-moment",
    src: "/Home-mobile1.jpg",
    category: "corporate",
  },
  {
    id: "festival-inganzo-call-response",
    src: "/4.jpg",
    category: "festivals",
  },
  {
    id: "festival-sunset-drumline",
    src: "/8.jpg",
    category: "festivals",
  },
  {
    id: "festival-grand-finale",
    src: "/9.jpg",
    category: "festivals",
  },
  {
    id: "festival-intore-leap",
    src: "/intore.jpg",
    category: "festivals",
  },
  {
    id: "festival-nightfall-encore",
    src: "/Home1.jpg",
    category: "festivals",
  },
  {
    id: "wedding-procession-gourd",
    src: "/30.jpeg",
    category: "wedding",
  },
  {
    id: "corporate-cultural-night",
    src: "/31.jpeg",
    category: "corporate",
  },
  {
    id: "festival-drumline",
    src: "/32.jpeg",
    category: "festivals",
  },
  {
    id: "wedding-bride-entrance",
    src: "/33.jpeg",
    category: "wedding",
  },
  {
    id: "corporate-tribute",
    src: "/34.jpeg",
    category: "corporate",
  },
  {
    id: "festival-sunset-show",
    src: "/35.jpeg",
    category: "festivals",
  },
  {
    id: "community-outreach",
    src: "/36.jpeg",
    category: "corporate",
  },
  {
    id: "festival-grand-finale-2025",
    src: "/37.jpeg",
    category: "festivals",
  },
] as const;

type BasePhoto = (typeof basePhotos)[number];
type PhotoId = BasePhoto["id"];

type LocalizedPhotoMeta = {
  caption: string;
  takenAt: string;
  alt: string;
};

type LocalizedCopy = {
  heroTitle: string;
  heroSubtitle: string;
  categories: Record<FilterKey, string>;
  photos: Record<PhotoId, LocalizedPhotoMeta>;
};

const content: Record<"en" | "fr", LocalizedCopy> = {
  en: {
    heroTitle: "Gallery",
    heroSubtitle:
      "Moments of rhythm, color, and storytelling captured from our performances across Rwanda and the world.",
    categories: {
      all: "All events",
      wedding: "Wedding",
      corporate: "Corporate",
      festivals: "Festivals",
    },
    photos: {
      "wedding-chantal-eric": {
        caption: "Joyful entrance parade for Chantal & Eric",
        takenAt: "July 2024 · Kigali",
        alt: "Bride and groom celebrating with the troupe",
      },
      "wedding-reception-gate": {
        caption: "Traditional welcome dance at the reception gate",
        takenAt: "May 2024 · Rubavu",
        alt: "Couple welcomed with a traditional dance arch",
      },
      "wedding-intore-finale": {
        caption: "Guests invited to join the Intore finale",
        takenAt: "September 2023 · Huye",
        alt: "Guests joining the dancers during a wedding reception",
      },
      "wedding-golden-hour": {
        caption: "Golden hour performance as the newlyweds arrive",
        takenAt: "January 2024 · Kigali",
        alt: "Reception stage set for a candlelit wedding celebration",
      },
      "corporate-leadership-summit": {
        caption: "Annual leadership summit cultural showcase",
        takenAt: "March 2024 · Kigali Convention Centre",
        alt: "Corporate gala with Inkumburwa on stage",
      },
      "corporate-retreat-percussion": {
        caption: "Team-building drumming workshop breakout",
        takenAt: "November 2023 · Musanze",
        alt: "Percussion showcase at a corporate retreat",
      },
      "corporate-closing-remarks": {
        caption: "Closing remarks with troupe leaders and partners",
        takenAt: "February 2024 · Kigali",
        alt: "Executives greeting performers after a presentation",
      },
      "corporate-photo-moment": {
        caption: "Team leaders gather for photos after the showcase",
        takenAt: "April 2024 · Kigali",
        alt: "Executives capturing memories with the troupe",
      },
      "festival-inganzo-call-response": {
        caption: "Intore call-and-response at Inganzo Festival",
        takenAt: "August 2024 · Huye",
        alt: "Festival headliner leading the crowd in song",
      },
      "festival-sunset-drumline": {
        caption: "Sunset drumline set against the Virunga skyline",
        takenAt: "June 2024 · Musanze",
        alt: "Sunset performance at an outdoor festival",
      },
      "festival-grand-finale": {
        caption: "Grand finale featuring 20 performers in sync",
        takenAt: "December 2023 · Kigali",
        alt: "High-energy finale with full troupe at a cultural festival",
      },
      "festival-intore-leap": {
        caption: "Solo Intore leap captured mid-air",
        takenAt: "October 2023 · Nyamagabe",
        alt: "Intore dancer in full regalia mid-flight",
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
      "festival-sunset-show": {
        caption: "Sunset showcase at the cultural exchange festival",
        takenAt: "February 2025 · Gisenyi",
        alt: "Festival performance at sunset",
      },
      "community-outreach": {
        caption: "Community outreach and dance workshop",
        takenAt: "March 2025 · Kigali",
        alt: "Community outreach dance workshop",
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
      "Moments de rythme, de couleur et de récit capturés lors de nos performances à travers le Rwanda et le monde.",
    categories: {
      all: "Tous les événements",
      wedding: "Mariage",
      corporate: "Entreprise",
      festivals: "Festivals",
    },
    photos: {
      "wedding-chantal-eric": {
        caption: "Défilé d'entrée joyeux pour Chantal et Eric",
        takenAt: "Juillet 2024 · Kigali",
        alt: "Les mariés célébrant avec la troupe",
      },
      "wedding-reception-gate": {
        caption: "Danse traditionnelle d'accueil à l'entrée",
        takenAt: "Mai 2024 · Rubavu",
        alt: "Couple accueilli sous une arche de danse traditionnelle",
      },
      "wedding-intore-finale": {
        caption: "Finale Intore invitant les invités à participer",
        takenAt: "Septembre 2023 · Huye",
        alt: "Invités rejoignant les danseurs lors d'une réception",
      },
      "wedding-golden-hour": {
        caption: "Performance au coucher du soleil pour l'arrivée des mariés",
        takenAt: "Janvier 2024 · Kigali",
        alt: "Scène de réception illuminée pour une célébration",
      },
      "corporate-leadership-summit": {
        caption: "Spectacle culturel du sommet annuel des dirigeants",
        takenAt: "Mars 2024 · Centre de conférences de Kigali",
        alt: "Gala d'entreprise avec Inkumburwa sur scène",
      },
      "corporate-retreat-percussion": {
        caption: "Atelier de percussions pour le renforcement d'équipe",
        takenAt: "Novembre 2023 · Musanze",
        alt: "Démonstration de percussions lors d'une retraite d'entreprise",
      },
      "corporate-closing-remarks": {
        caption: "Clôture avec la troupe et les partenaires",
        takenAt: "Février 2024 · Kigali",
        alt: "Dirigeants saluant les artistes après une prestation",
      },
      "corporate-photo-moment": {
        caption: "Photo souvenir avec les leaders après le spectacle",
        takenAt: "Avril 2024 · Kigali",
        alt: "Dirigeants immortalisant l'instant avec la troupe",
      },
      "festival-inganzo-call-response": {
        caption: "Appel-réponse Intore au festival Inganzo",
        takenAt: "Août 2024 · Huye",
        alt: "Artiste principal menant la foule en chanson",
      },
      "festival-sunset-drumline": {
        caption: "Tambours au coucher du soleil face aux Virunga",
        takenAt: "Juin 2024 · Musanze",
        alt: "Performance au coucher du soleil lors d'un festival en plein air",
      },
      "festival-grand-finale": {
        caption: "Finale grandiose avec 20 artistes synchronisés",
        takenAt: "Décembre 2023 · Kigali",
        alt: "Finale énergique avec toute la troupe",
      },
      "festival-intore-leap": {
        caption: "Saut d'un danseur Intore capturé en plein vol",
        takenAt: "Octobre 2023 · Nyamagabe",
        alt: "Danseur Intore en plein saut avec son costume traditionnel",
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
      "festival-sunset-show": {
        caption: "Spectacle au coucher du soleil lors du festival culturel",
        takenAt: "Février 2025 · Gisenyi",
        alt: "Performance de festival au coucher du soleil",
      },
      "community-outreach": {
        caption: "Sensibilisation communautaire et atelier de danse",
        takenAt: "Mars 2025 · Kigali",
        alt: "Atelier de danse pour la communauté",
      },
      "festival-grand-finale-2025": {
        caption: "Salut final au festival Inkumburwa",
        takenAt: "Avril 2025 · Muhanga",
        alt: "Finale avec les danseurs saluant",
      },
    },
  },
} as const;

export default function GalleryPage() {
  const { locale } = useLocale();
  const copy = content[locale] ?? content.en;
  const localizedPhotos = basePhotos.map((photo) => ({
    ...photo,
    ...copy.photos[photo.id],
  }));

  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");

  const filteredPhotos =
    activeFilter === "all"
      ? localizedPhotos
      : localizedPhotos.filter((photo) => photo.category === activeFilter);

  return (
    <div className="space-y-16 pb-24">
      <PageHero
        title={copy.heroTitle}
        subtitle={copy.heroSubtitle}
        backgroundImageUrl="/28.jpg"
        imagePosition="center 35%"
      />

      <section className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap justify-center gap-3">
          {filters.map((filter) => {
            const isActive = activeFilter === filter;

            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full border px-5 py-2 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 ${
                  isActive
                    ? "border-emerald-900 bg-emerald-900 text-white shadow-sm shadow-emerald-900/30"
                    : "border-emerald-900/20 bg-white text-emerald-950 hover:border-emerald-900/50 hover:bg-emerald-900/5"
                }`}
                aria-pressed={isActive}
              >
                {copy.categories[filter]}
              </button>
            );
          })}
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPhotos.map((photo, index) => (
            <Reveal key={photo.id} delay={index * 80}>
              <div className="group relative aspect-[4/5] overflow-hidden rounded-3xl border border-emerald-900/10 bg-white shadow-sm shadow-emerald-900/10">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  priority={index < 3}
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-emerald-950/70 via-emerald-950/20 to-transparent opacity-0 transition group-hover:opacity-100">
                  <div className="space-y-1 px-5 pb-5">
                    <p className="text-sm font-semibold text-white">{photo.caption}</p>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/70">{photo.takenAt}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
