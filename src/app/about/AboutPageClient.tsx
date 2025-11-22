"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { useLocale } from "@/context/LocaleContext";

const content = {
  en: {
    heroTitle: "About Inkumburwa z'Ibwanacyambwe",
    heroSubtitle:
      "We are custodians of Rwanda's artistic legacy, sharing the spirit of our ancestors with audiences worldwide.",
    missionHeading: "Our Mission & Vision",
    missionParagraphs: [
      "From the hills of Ibwanacyambwe to stages around the globe, our troupe carries forward the centuries-old traditions of Rwandan dance. We believe that movement, music, and storytelling can heal, inspire, and unite communities. Our mission is to keep these traditions alive while elevating new voices and choreographies that speak to today’s audiences.",
      "Today, Inkumburwa z'Ibwanacyambwe leads cultural education initiatives, performance residencies, and collaborative workshops with schools, museums, and cultural institutions across Africa, Europe, and North America.",
    ],
    highlights: [
      { number: "2020", label: "Founded" },
      { number: "12", label: "International Tours" },
      { number: "40+", label: "Original Choreographies" },
    ],
    sinceLabel: "Since 2020",
    pillarsLabel: "Pillars",
    pillarsHeading: "The Foundations of Our Practice",
    pillarsDescription:
      "Each performance, workshop, and partnership is guided by core principles that keep our heritage vibrant and relevant.",
    pillars: [
      {
        icon: "✶",
        title: "Authentic Storytelling",
        description:
          "Every performance highlights the narratives, rituals, and symbolism at the heart of Rwandan culture.",
      },
      {
        icon: "✦",
        title: "Community Empowerment",
        description:
          "We cultivate young talent and celebrate the elders who have safeguarded our dance traditions for generations.",
      },
      {
        icon: "✺",
        title: "Cultural Exchange",
        description:
          "Through international tours and workshops we build bridges across cultures while honoring our roots.",
      },
    ],
    portraitLabel: "Portrait Series",
    portraitHeading: "Moments of Movement & Heritage",
    portraitDescription:
      "Swipe through highlights from recent performances, cultural exchanges, and workshop residencies.",
    portraitAltPrefix: "Inkumburwa portrait",
    portraitPrevious: "Previous portrait",
    portraitNext: "Next portrait",
    executiveLabel: "Executive Committee",
    executiveHeading: "Leadership Guiding the Troupe Forward",
    executiveDescription:
      "Our executive committee blends artistic mastery, cultural stewardship, and operational excellence to bring every performance to life.",
    executiveMembers: [
      {
        name: "Kayitare Jean",
        role: "Chief Executive Officer",
        bio: "Guides the troupe's strategic vision and international partnerships while safeguarding cultural authenticity.",
        image: "/team.jpeg",
      },
      {
        name: "Kayitare Jean",
        role: "Artistic Director",
        bio: "Leads choreography development, music composition, and performer mentorship across all productions.",
        image: "/team.jpeg",
      },
      {
        name: "Kayitare Jean",
        role: "Community Engagement Lead",
        bio: "Coordinates education programs, workshops, and outreach initiatives with schools and cultural partners.",
        image: "/team.jpeg",
      },
      {
        name: "Kayitare Jean",
        role: "Operations & Touring Manager",
        bio: "Oversees logistics, touring schedules, and production operations for local and international showcases.",
        image: "/team.jpeg",
      },
    ],
  },
  fr: {
    heroTitle: "À propos d'Inkumburwa z'Ibwanacyambwe",
    heroSubtitle:
      "Nous sommes les gardiens de l'héritage artistique du Rwanda, partageant l'esprit de nos ancêtres avec des publics du monde entier.",
    missionHeading: "Notre mission et notre vision",
    missionParagraphs: [
      "Des collines d'Ibwanacyambwe aux scènes du monde entier, notre troupe perpétue les traditions séculaires de la danse rwandaise. Nous croyons que le mouvement, la musique et le récit peuvent guérir, inspirer et rassembler les communautés. Notre mission est de maintenir ces traditions vivantes tout en mettant en lumière de nouvelles voix et chorégraphies adaptées aux publics d'aujourd'hui.",
      "Aujourd'hui, Inkumburwa z'Ibwanacyambwe mène des initiatives d'éducation culturelle, des résidences de création et des ateliers collaboratifs avec des écoles, des musées et des institutions culturelles en Afrique, en Europe et en Amérique du Nord.",
    ],
    highlights: [
      { number: "2020", label: "Fondation" },
      { number: "12", label: "Tournées internationales" },
      { number: "40+", label: "Chorégraphies originales" },
    ],
    sinceLabel: "Depuis 2020",
    pillarsLabel: "Piliers",
    pillarsHeading: "Les fondements de notre pratique",
    pillarsDescription:
      "Chaque représentation, atelier et partenariat est guidé par des principes qui maintiennent notre patrimoine vivant et pertinent.",
    pillars: [
      {
        icon: "✶",
        title: "Récits authentiques",
        description:
          "Chaque performance met en lumière les récits, rituels et symboles au cœur de la culture rwandaise.",
      },
      {
        icon: "✦",
        title: "Autonomisation des communautés",
        description:
          "Nous accompagnons les jeunes talents et honorons les aînés qui ont préservé nos traditions chorégraphiques.",
      },
      {
        icon: "✺",
        title: "Échanges culturels",
        description:
          "Grâce aux tournées et ateliers internationaux, nous créons des ponts entre les cultures tout en respectant nos racines.",
      },
    ],
    portraitLabel: "Série de portraits",
    portraitHeading: "Moments de mouvement et de patrimoine",
    portraitDescription:
      "Faites défiler les moments forts de nos performances récentes, échanges culturels et résidences artistiques.",
    portraitAltPrefix: "Portrait Inkumburwa",
    portraitPrevious: "Portrait précédent",
    portraitNext: "Portrait suivant",
    executiveLabel: "Comité exécutif",
    executiveHeading: "Une direction qui guide la troupe",
    executiveDescription:
      "Notre comité exécutif allie maîtrise artistique, préservation culturelle et excellence opérationnelle pour donner vie à chaque spectacle.",
    executiveMembers: [
      {
        name: "Kayitare Jean",
        role: "Directeur général",
        bio: "Oriente la vision stratégique de la troupe et les partenariats internationaux tout en protégeant l'authenticité culturelle.",
        image: "/team.jpeg",
      },
      {
        name: "Jean Bosco Nkurunziza",
        role: "Directeur artistique",
        bio: "Supervise la création chorégraphique, la composition musicale et le mentorat des interprètes sur toutes les productions.",
        image: "/team.jpeg",
      },
      {
        name: "Claudine Mukamana",
        role: "Responsable de l'engagement communautaire",
        bio: "Coordonne les programmes éducatifs, ateliers et actions de sensibilisation avec les écoles et partenaires culturels.",
        image: "/team.jpeg",
      },
      {
        name: "Emmanuel Habimana",
        role: "Gestionnaire des opérations et tournées",
        bio: "Supervise la logistique, les calendriers de tournée et la production des représentations locales et internationales.",
        image: "/team.jpeg",
      },
    ],
  },
} as const;

const portraitGallery = [
  "/13.jpg",
  "/14.jpg",
  "/15.jpg",
  "/16.jpg",
  "/17.jpg",
  "/18.jpg",
  "/19.jpg",
  "/20.jpg",
  "/21.jpg",
  "/22.jpg",
  "/23.jpg",
];

export default function AboutPageClient() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<number | null>(null);
  const { locale } = useLocale();
  const copy = content[locale] ?? content.en;
  const missionMainParagraphs = copy.missionParagraphs.slice(0, -1);
  const missionConclusion = copy.missionParagraphs[copy.missionParagraphs.length - 1];

  useEffect(() => {
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
    }

    if (!isPaused) {
      intervalRef.current = window.setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % portraitGallery.length);
      }, 9000);
    }

    return () => {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
      }
    };
  }, [isPaused]);

  return (
    <div className="space-y-20 pb-24">
      <PageHero
        title={copy.heroTitle}
        subtitle={copy.heroSubtitle}
        backgroundImageUrl="/28.jpg"
        imagePosition="center 35%"
      />

      <section className="mx-auto max-w-6xl px-6 space-y-12 border-b border-emerald-900/10 pb-16">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <Reveal className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-emerald-950 sm:text-4xl">
              {copy.missionHeading}
            </h2>
            {missionMainParagraphs.map((paragraph) => (
              <p key={paragraph} className="text-lg leading-relaxed text-emerald-900/80 text-balance">
                {paragraph}
              </p>
            ))}
            <div className="grid gap-8">
              <div className="grid gap-6 sm:grid-cols-3">
                {copy.highlights.map((item) => (
                  <Reveal key={item.label} delay={120} className="space-y-1 text-center">
                    <span className="text-4xl font-semibold text-emerald-900">
                      {item.number}
                    </span>
                    <p className="text-xs uppercase tracking-[0.35em] text-emerald-700">
                      {item.label}
                    </p>
                  </Reveal>
                ))}
              </div>
              {missionConclusion ? (
                <p className="text-sm text-emerald-800/80">{missionConclusion}</p>
              ) : null}
            </div>
          </Reveal>
          <Reveal delay={160} className="relative h-[520px] overflow-hidden rounded-[2.5rem]">
            <Image
              src="/11.jpg"
              alt="Inkumburwa troupe rehearsing"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 480px, 100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-950/30 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-emerald-900">
              {copy.sinceLabel}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 space-y-12 border-b border-emerald-900/10 py-16">
        <Reveal className="mx-auto max-w-3xl text-center space-y-3">
          <span className="inline-flex items-center justify-center gap-2 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-emerald-600">
            {copy.pillarsLabel}
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-emerald-950 sm:text-4xl">
            {copy.pillarsHeading}
          </h2>
          <p className="text-base text-emerald-900/70 text-balance">
            {copy.pillarsDescription}
          </p>
        </Reveal>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {copy.pillars.map((pillar, index) => (
            <Reveal key={pillar.title} delay={index * 80} className="flex flex-col items-center space-y-4 text-center">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-2xl text-emerald-700">
                {pillar.icon}
              </span>
              <h3 className="text-xl font-semibold tracking-tight text-emerald-950">
                {pillar.title}
              </h3>
              <p className="text-sm leading-relaxed text-emerald-900/75">
                {pillar.description}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16">
          <div className="flex flex-col gap-8">
            <div className="text-center">
              <span className="inline-flex items-center justify-center gap-2 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-emerald-600">
                {copy.portraitLabel}
              </span>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-emerald-950 sm:text-3xl">
                {copy.portraitHeading}
              </h3>
              <p className="mt-2 text-sm text-emerald-900/70 text-balance">
                {copy.portraitDescription}
              </p>
            </div>

            <div
              className="relative mx-auto max-w-xl overflow-hidden"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onTouchStart={() => setIsPaused(true)}
              onTouchEnd={() => setIsPaused(false)}
            >
              <div className="relative h-[440px] w-full overflow-hidden rounded-[2rem]">
                <img
                  key={portraitGallery[currentSlide]}
                  src={portraitGallery[currentSlide]}
                  alt={`${copy.portraitAltPrefix} ${currentSlide + 1}`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/30 via-transparent to-transparent" />
              </div>

              <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4">
                <button
                  type="button"
                  className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/70 text-emerald-900 transition hover:bg-white"
                  aria-label={copy.portraitPrevious}
                  onClick={() => {
                    setIsPaused(true);
                    setCurrentSlide((prev) => (prev - 1 + portraitGallery.length) % portraitGallery.length);
                  }}
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="currentColor">
                    <path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                  </svg>
                </button>
                <button
                  type="button"
                  className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/70 text-emerald-900 transition hover:bg-white"
                  aria-label={copy.portraitNext}
                  onClick={() => {
                    setIsPaused(true);
                    setCurrentSlide((prev) => (prev + 1) % portraitGallery.length);
                  }}
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="currentColor">
                    <path d="M8.59 16.59 10 18l6-6-6-6-1.41 1.41L13.17 12z" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="flex items-center gap-2 rounded-full bg-emerald-950/40 px-4 py-2 backdrop-blur">
                {portraitGallery.map((_, index) => (
                  <span
                    key={index}
                    className={`h-2 w-2 rounded-full transition ${
                      currentSlide === index ? "bg-white" : "bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-6 space-y-12 pt-16">
        <Reveal className="mx-auto max-w-3xl text-center space-y-3">
          <span className="inline-flex items-center justify-center gap-2 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-amber-600">
            {copy.executiveLabel}
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-emerald-950 sm:text-4xl">
            {copy.executiveHeading}
          </h2>
          <p className="text-base text-emerald-900/70 text-balance">
            {copy.executiveDescription}
          </p>
        </Reveal>
        <div className="grid gap-12 md:grid-cols-2 xl:grid-cols-4">
          {copy.executiveMembers.map((member, index) => (
            <Reveal key={`${member.name}-${index}`} delay={index * 90} className="group overflow-hidden">
              <div className="relative h-64 w-full overflow-hidden rounded-3xl">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(min-width: 1280px) 260px, (min-width: 768px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/40 via-transparent to-transparent" />
              </div>
              <div className="space-y-3 pb-6 pt-5">
                <h3 className="text-lg font-semibold tracking-tight text-emerald-950">
                  {member.name}
                </h3>
                <p className="text-xs uppercase tracking-[0.35em] text-emerald-600">
                  {member.role}
                </p>
                <p className="text-sm leading-relaxed text-emerald-900/75 text-balance">
                  {member.bio}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
