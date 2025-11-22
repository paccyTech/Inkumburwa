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
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
            <path d="M9 18V5l12-2v13" />
            <path d="m9 9 12-2" />
            <circle cx="6" cy="18" r="3" />
            <circle cx="18" cy="16" r="3" />
          </svg>
        ),
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
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z" />
          </svg>
        ),
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
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
            <path d="M2 12h20" />
          </svg>
        ),
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
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
            <path d="M9 18V5l12-2v13" />
            <path d="m9 9 12-2" />
            <circle cx="6" cy="18" r="3" />
            <circle cx="18" cy="16" r="3" />
          </svg>
        ),
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
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z" />
          </svg>
        ),
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
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
            <path d="M2 12h20" />
          </svg>
        ),
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
    <div className="space-y-24 pb-24">
      <PageHero
        title={copy.heroTitle}
        subtitle={copy.heroSubtitle}
        backgroundImageUrl="/28.jpg"
        imagePosition="center 45%"
      />

      <section className="mx-auto max-w-7xl px-6">
        <div className="space-y-20">
          {/* Intro Section */}
          <Reveal className="text-center space-y-6 max-w-4xl mx-auto">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold tracking-tight text-emerald-950 sm:text-5xl lg:text-6xl">
                {copy.introHeading}
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-amber-400 rounded-full mx-auto"></div>
            </div>
            <p className="text-lg leading-relaxed text-emerald-900/80 text-balance">
              {copy.introDescription}
            </p>
          </Reveal>

          {/* Services List */}
          <div className="space-y-16">
            {copy.services.map((service, index) => (
              <Reveal key={service.title} delay={index * 150} className="group">
                <div className="overflow-hidden rounded-3xl bg-white shadow-xl shadow-emerald-900/10 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-900/20 hover:-translate-y-2">
                  <div className="grid md:grid-cols-2 gap-0">
                    {/* Content Section - Left */}
                    <div className="p-8 lg:p-12 space-y-6 flex flex-col justify-center">
                      {/* Icon and Title */}
                      <div className="space-y-4">
                        <div className="flex justify-center">
                          <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 shadow-lg">
                            {service.icon}
                          </div>
                        </div>
                        <h3 className="text-2xl lg:text-3xl font-bold tracking-tight text-emerald-950 text-center">
                          {service.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="text-base lg:text-lg leading-relaxed text-emerald-900/80">
                        {service.description}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-4">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-emerald-600">
                          Key Features
                        </h4>
                        <ul className="space-y-3">
                          {service.highlights.map((item, highlightIndex) => (
                            <li key={highlightIndex} className="flex items-start gap-3 text-sm text-emerald-900/75">
                              <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0"></div>
                              <span className="leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Image Section - Right */}
                    <div className="relative h-80 md:h-auto overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition duration-700 group-hover:scale-105"
                        sizes="(min-width: 768px) 50vw, 100vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-l from-black/20 via-transparent to-transparent" />
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950 via-emerald-900 to-emerald-950"></div>
        <div className="relative mx-auto max-w-6xl px-6 py-20">
          <Reveal className="text-center space-y-8">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                {copy.calloutHeading}
              </h3>
              <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
                {copy.calloutDescription}
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-amber-400 px-8 py-4 text-base font-semibold text-emerald-950 transition hover:bg-amber-300 hover:scale-105 shadow-lg shadow-amber-500/30"
              >
                <span>{copy.calloutPrimary}</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 rounded-full border-2 border-white/40 px-8 py-4 text-base font-semibold text-white transition hover:bg-white/10 hover:border-white/60 backdrop-blur-sm"
              >
                <span>{copy.calloutSecondary}</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 7.89a2 2 0 002.83 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
