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
        title: "Interactive Entertainment",
        description:
          "Engage guests with interactive segments, cultural education, and high-energy crowd moments.",
        icon: "🎤",
        image: "/24.jpg",
        highlights: [
          "Audience participation and dance circles",
          "Cultural insights from troupe leaders",
          "Flexible staging for any venue",
        ],
      },
      {
        title: "Collaborations & Special Events",
        description:
          "Partner with Inkumburwa for large-scale productions, brand activations, and international showcases.",
        icon: "🤝",
        image: "/25.jpg",
        highlights: [
          "Festival, corporate, and diplomatic appearances",
          "Co-produced performances with other creatives",
          "Consultation on cultural curation and staging",
        ],
      },
    ],
    ctaBadge: "Partner With Us",
    ctaHeading: "Ready to Bring Culture to Your Event?",
    ctaDescription:
      "Connect with our team to plan performances, workshops, and collaborations tailored to your audience.",
    ctaBullets: [
      "Flexible scheduling for local and international events",
      "Tailored performances crafted around your story",
    ],
    ctaPrimary: "Book Our Performance",
    ctaSecondary: "View Gallery Highlights",
  },
  fr: {
    heroTitle: "Nos services",
    heroSubtitle:
      "Des performances dynamiques, des productions sur mesure et une expertise culturelle pour sublimer chaque événement.",
    introHeading: "Faites vibrer l'héritage rwandais",
    introDescription:
      "Choisissez parmi nos prestations emblématiques, nos collaborations sur mesure et nos expériences culturelles interactives pensées pour votre public.",
    services: [
      {
        title: "Spectacles de danse traditionnelle",
        description:
          "Des productions immersives mettant en scène la chorégraphie, les rythmes et les parures emblématiques de la culture rwandaise.",
        icon: "🪘",
        image: "/26.jpg",
        highlights: [
          "Performances complètes avec percussions en direct",
          "Récits traditionnels intégrés à chaque tableau",
          "Costumes artisanaux honorant le patrimoine",
        ],
      },
      {
        title: "Chorégraphies personnalisées",
        description:
          "Collaborez avec nos directeurs artistiques pour créer des performances inoubliables adaptées à votre célébration.",
        icon: "🎭",
        image: "/6.jpg",
        highlights: [
          "Routines sur mesure pour mariages et galas",
          "Ateliers et répétitions pour les participants",
          "Narrations conçues autour de votre thème",
        ],
      },
      {
        title: "Animations interactives",
        description:
          "Faites vivre à vos invités des moments interactifs, une immersion culturelle et une énergie collective mémorable.",
        icon: "🎤",
        image: "/4.jpg",
        highlights: [
          "Participation du public et cercles de danse",
          "Regards culturels partagés par nos leaders",
          "Mise en scène adaptable à tout lieu",
        ],
      },
      {
        title: "Collaborations & événements spéciaux",
        description:
          "Associez-vous à Inkumburwa pour des productions d'envergure, des activations de marque et des tournées internationales.",
        icon: "🤝",
        image: "/25.jpg",
        highlights: [
          "Présences lors d'événements festifs, d'entreprise ou diplomatiques",
          "Performances co-produites avec d'autres créateurs",
          "Conseil en curation culturelle et mise en scène",
        ],
      },
    ],
    ctaBadge: "Collaborez avec nous",
    ctaHeading: "Prêts à insuffler la culture à votre événement ?",
    ctaDescription:
      "Contactez notre équipe pour organiser des performances, ateliers et collaborations adaptés à votre audience.",
    ctaBullets: [
      "Planification flexible pour vos événements locaux et internationaux",
      "Performances personnalisées conçues autour de votre histoire",
    ],
    ctaPrimary: "Réserver notre performance",
    ctaSecondary: "Voir nos moments forts",
  },
} as const;

export default function ServicesPage() {
  const { locale } = useLocale();
  const copy = content[locale] ?? content.en;

  return (
    <div className="pb-24">
      <PageHero
        title={copy.heroTitle}
        subtitle={copy.heroSubtitle}
        backgroundImageUrl="/28.jpg"
        imagePosition="center 35%"
      />

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 pb-24 pt-24">
          <Reveal className="mx-auto max-w-3xl space-y-4 text-center">
            <h2 className="text-3xl font-bold text-emerald-950 sm:text-4xl">
              {copy.introHeading}
            </h2>
            <p className="text-base leading-relaxed text-emerald-900/80">
              {copy.introDescription}
            </p>
          </Reveal>

          <div className="mt-16 space-y-10">
            {copy.services.map((service, index) => (
              <Reveal
                key={service.title}
                delay={index * 120}
                className="overflow-hidden rounded-[2.5rem] bg-white text-emerald-950"
              >
                <div
                  className={`flex flex-col md:flex-row ${
                    index % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div
                    className={`relative h-64 w-full md:w-1/2 ${
                      index === 2 ? "md:h-[420px]" : "md:h-auto"
                    }`}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 480px, (min-width: 768px) 50vw, 100vw"
                      priority={index === 0}
                    />
                  </div>
                  <div className="flex w-full flex-col gap-6 p-6 md:w-1/2 md:p-10">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-2xl text-amber-500">
                        {service.icon}
                      </span>
                      <h3 className="text-2xl font-semibold sm:text-3xl">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-base leading-relaxed text-emerald-900/80">
                      {service.description}
                    </p>
                    <ul className="space-y-3 text-sm text-emerald-900/80">
                      {service.highlights.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-xs font-semibold text-emerald-700">
                            ✓
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <span className="mt-auto h-1 w-16 rounded-full bg-amber-400" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={250} className="mt-20 overflow-hidden rounded-[2.5rem] border border-amber-500/30 bg-gradient-to-br from-amber-200 via-amber-100 to-amber-200 px-8 py-12 text-emerald-950">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl space-y-5">
                <span className="inline-flex items-center justify-center gap-2 rounded-full bg-white/60 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-emerald-800">
                  {copy.ctaBadge}
                </span>
                <h3 className="text-2xl font-semibold sm:text-3xl">
                  {copy.ctaHeading}
                </h3>
                <p className="text-base leading-relaxed text-emerald-900/85">
                  {copy.ctaDescription}
                </p>
                <ul className="grid gap-3 text-sm text-emerald-900/80 sm:grid-cols-2">
                  {copy.ctaBullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/70 text-sm font-semibold text-emerald-900">
                        ✓
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:flex-col lg:items-start">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-emerald-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-900"
                >
                  {copy.ctaPrimary}
                </Link>
                <Link
                  href="/gallery"
                  className="inline-flex items-center justify-center rounded-full border border-emerald-900/40 px-6 py-3 text-sm font-semibold text-emerald-950 transition hover:border-emerald-900 hover:bg-emerald-900/10"
                >
                  {copy.ctaSecondary}
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
