"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import { useLocale } from "@/context/LocaleContext";

const content = {
  en: {
    heroTitle: "Our Services",
    heroSubtitle:
      "Dynamic performances, tailored productions, and cultural expertise designed to elevate every occasion.",
    introHeading: "Bring Rwandan Heritage to Life",
    introDescription:
      "Choose from signature performances, bespoke collaborations, and interactive cultural experiences curated for your audience.",
    services: [
      {
        title: "Traditional Dance Performances",
        description:
          "Immersive productions featuring the dynamic choreography, rhythms, and regalia at the heart of Rwanda's culture.",
        icon: "🪘",
        image: "/26.jpg",
        highlights: [
          "Full troupe showcases with live drumming",
          "Traditional storytelling woven into every set",
          "Costumes handcrafted to honor heritage",
        ],
      },
      {
        title: "Customized Choreography",
        description:
          "Collaborate with our creative directors to craft unforgettable performances tailored to your celebration.",
        icon: "🎭",
        image: "/6.jpg",
        highlights: [
          "Tailored routines for weddings and galas",
          "Workshops and rehearsals for participants",
          "Narratives designed around your theme",
        ],
      },
      {
        title: "Cultural Immersion Workshops",
        description:
          "Interactive experiences that teach traditional movements, rhythms, and cultural storytelling to your guests or teams.",
        icon: "🌍",
        image: "/31.jpeg",
        highlights: [
          "Hands-on sessions led by master performers",
          "Educational talks on history and symbolism",
          "Adaptable formats for schools and enterprises",
        ],
      },
    ],
    calloutHeading: "Need something unforgettable?",
    calloutDescription:
      "Tell us about your event and we’ll craft a performance or workshop that brings the spirit of Rwanda to your audience.",
    calloutPrimary: "Book Our Performance",
    calloutSecondary: "Contact Our Team",
  },
  fr: {
    heroTitle: "Nos services",
    heroSubtitle:
      "Des performances dynamiques, des productions sur mesure et une expertise culturelle pour sublimer chaque événement.",
    introHeading: "Faites vivre l'héritage rwandais",
    introDescription:
      "Choisissez parmi nos performances signatures, nos collaborations sur mesure et nos expériences culturelles interactives.",
    services: [
      {
        title: "Performances de danse traditionnelle",
        description:
          "Des productions immersives mettant en valeur la chorégraphie, les rythmes et les costumes emblématiques du Rwanda.",
        icon: "🪘",
        image: "/26.jpg",
        highlights: [
          "Spectacles de troupe avec percussions en direct",
          "Récits traditionnels intégrés à chaque tableau",
          "Costumes confectionnés dans le respect du patrimoine",
        ],
      },
      {
        title: "Chorégraphies personnalisées",
        description:
          "Collaborez avec nos directeurs artistiques pour créer des performances inoubliables adaptées à votre événement.",
        icon: "🎭",
        image: "/6.jpg",
        highlights: [
          "Routines sur mesure pour mariages et galas",
          "Ateliers et répétitions pour les participants",
          "Narrations conçues autour de votre thème",
        ],
      },
      {
        title: "Ateliers d'immersion culturelle",
        description:
          "Des expériences interactives pour découvrir mouvements, rythmes et récits culturels avec vos invités ou équipes.",
        icon: "🌍",
        image: "/31.jpeg",
        highlights: [
          "Sessions pratiques animées par des maîtres",
          "Conférences pédagogiques sur l'histoire et les symboles",
          "Formats adaptables pour écoles et entreprises",
        ],
      },
    ],
    calloutHeading: "Besoin d'une expérience inoubliable ?",
    calloutDescription:
      "Parlez-nous de votre événement et nous créerons une performance ou un atelier qui fera vibrer l'esprit du Rwanda.",
    calloutPrimary: "Réserver une performance",
    calloutSecondary: "Contactez notre équipe",
  },
} as const;

export default function ServicesPageClient() {
  const { locale } = useLocale();
  const copy = content[locale] ?? content.en;

  return (
    <div className="space-y-20 pb-24">
      <PageHero
        title={copy.heroTitle}
        subtitle={copy.heroSubtitle}
        backgroundImageUrl="/27.jpg"
        imagePosition="center 45%"
      />

      <section className="mx-auto max-w-6xl px-6 space-y-10 border-b border-emerald-900/10 pb-16">
        <Reveal className="mx-auto max-w-3xl text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tight text-emerald-950 sm:text-4xl">
            {copy.introHeading}
          </h2>
          <p className="text-base text-emerald-900/75 text-balance">
            {copy.introDescription}
          </p>
        </Reveal>

        <div className="grid gap-10 md:grid-cols-3">
          {copy.services.map((service, index) => (
            <Reveal key={service.title} delay={index * 100} className="flex flex-col space-y-6 rounded-3xl bg-white p-6 shadow-lg shadow-emerald-900/10">
              <div className="space-y-3">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-2xl text-emerald-700">
                  {service.icon}
                </span>
                <h3 className="text-xl font-semibold tracking-tight text-emerald-950">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-emerald-900/75">
                  {service.description}
                </p>
              </div>

              <div className="relative h-44 overflow-hidden rounded-2xl">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(min-width: 1024px) 280px, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/25 via-transparent to-transparent" />
              </div>

              <ul className="space-y-2 text-sm text-emerald-900/75">
                {service.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6">
        <Reveal className="rounded-3xl bg-emerald-950 px-8 py-10 text-white shadow-xl shadow-emerald-900/40">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="space-y-3">
              <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
                {copy.calloutHeading}
              </h3>
              <p className="text-sm text-white/80 md:text-base">
                {copy.calloutDescription}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-emerald-950 transition hover:bg-amber-300"
              >
                {copy.calloutPrimary}
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
              >
                {copy.calloutSecondary}
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
