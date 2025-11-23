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
      "Based at UR College of Science and Technology, from the hills of Ibwanacyambwe to stages around the globe, our troupe carries forward the centuries-old traditions of Rwandan dance. We believe that movement, music, and storytelling can heal, inspire, and unite communities. Our mission is to keep these traditions alive while elevating new voices and choreographies that speak to today's audiences.",
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
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
            <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        ),
        title: "Authentic Storytelling",
        description:
          "Every performance highlights the narratives, rituals, and symbolism at the heart of Rwandan culture.",
      },
      {
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
            <path d="M17 20h5v-2a3 3 0 0 0-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 0 1 5.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 0 1 9.288 0M15 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-6 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
          </svg>
        ),
        title: "Community Empowerment",
        description:
          "We cultivate young talent and celebrate the elders who have safeguarded our dance traditions for generations.",
      },
      {
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
            <path d="M2 12h20" />
          </svg>
        ),
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
      "Basé à l'Université du Rwanda, Collège des Sciences et Technologies, des collines d'Ibwanacyambwe aux scènes du monde entier, notre troupe perpétue les traditions séculaires de la danse rwandaise. Nous croyons que le mouvement, la musique et le récit peuvent guérir, inspirer et rassembler les communautés. Notre mission est de maintenir ces traditions vivantes tout en mettant en lumière de nouvelles voix et chorégraphies adaptées aux publics d'aujourd'hui.",
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
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
            <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        ),
        title: "Récits authentiques",
        description:
          "Chaque performance met en lumière les récits, rituels et symboles au cœur de la culture rwandaise.",
      },
      {
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
            <path d="M17 20h5v-2a3 3 0 0 0-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 0 1 5.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 0 1 9.288 0M15 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-6 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
          </svg>
        ),
        title: "Autonomisation des communautés",
        description:
          "Nous accompagnons les jeunes talents et honorons les aînés qui ont préservé nos traditions chorégraphiques.",
      },
      {
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
            <path d="M2 12h20" />
          </svg>
        ),
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50/30">
      <div className="space-y-24 pb-24">
        {/* Hero Section */}
        <PageHero
          title={copy.heroTitle}
          subtitle={copy.heroSubtitle}
          backgroundImageUrl="/28.jpg"
          imagePosition="center 35%"
        />

        {/* Mission & Vision Section */}
        <section className="mx-auto max-w-7xl px-6">
          <div className="grid gap-20 lg:grid-cols-[1.2fr_0.8fr] xl:gap-24">
            {/* Content */}
            <div className="space-y-12">
              <Reveal className="space-y-6">
                <div className="space-y-4">
                  <h2 className="text-4xl font-bold tracking-tight text-emerald-950 sm:text-5xl lg:text-6xl">
                    {copy.missionHeading}
                  </h2>
                  <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-amber-400 rounded-full"></div>
                </div>
                <div className="space-y-6">
                  {missionMainParagraphs.map((paragraph, index) => (
                    <p key={index} className="text-lg leading-relaxed text-emerald-900/80 text-balance">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </Reveal>

              {/* Highlights */}
              <Reveal delay={100}>
                <div className="grid gap-8 sm:grid-cols-3">
                  {copy.highlights.map((item, index) => (
                    <div key={item.label} className="group text-center">
                      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white to-emerald-50/50 p-8 shadow-xl shadow-emerald-900/10 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-900/20 hover:-translate-y-1">
                        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-emerald-400/20 to-amber-400/20 rounded-full -translate-y-8 translate-x-8"></div>
                        <div className="relative space-y-3">
                          <div className="text-5xl font-bold text-emerald-900 group-hover:text-emerald-700 transition-colors">
                            {item.number}
                          </div>
                          <div className="text-xs uppercase tracking-wider font-semibold text-emerald-700">
                            {item.label}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>

              {/* Conclusion */}
              {missionConclusion && (
                <Reveal delay={200}>
                  <div className="rounded-3xl bg-gradient-to-r from-emerald-900 to-emerald-800 p-8 text-white shadow-2xl shadow-emerald-900/40">
                    <p className="text-lg leading-relaxed">{missionConclusion}</p>
                  </div>
                </Reveal>
              )}
            </div>

            {/* Image */}
            <Reveal delay={150} className="lg:col-span-1">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-emerald-900/20">
                <div className="relative h-[600px]">
                  <Image
                    src="/11.jpg"
                    alt="Inkumburwa troupe rehearsing"
                    fill
                    className="object-cover transition duration-700 hover:scale-105"
                    sizes="(min-width: 1024px) 480px, 100vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/50 via-emerald-950/20 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <div className="rounded-2xl bg-white/95 backdrop-blur-sm px-6 py-3 shadow-lg">
                      <span className="text-sm font-bold uppercase tracking-wider text-emerald-900">
                        {copy.sinceLabel}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Pillars Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-950"></div>
          <div className="relative mx-auto max-w-7xl px-6 py-24">
            <Reveal className="text-center space-y-6 mb-16">
              <div className="space-y-4">
                <span className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm font-semibold uppercase tracking-wider text-emerald-100">
                  {copy.pillarsLabel}
                </span>
                <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                  {copy.pillarsHeading}
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-emerald-400 rounded-full mx-auto"></div>
              </div>
              <p className="text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
                {copy.pillarsDescription}
              </p>
            </Reveal>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {copy.pillars.map((pillar, index) => (
                <Reveal key={pillar.title} delay={index * 150}>
                  <div className="group relative overflow-hidden rounded-3xl bg-white/10 backdrop-blur-sm p-8 text-white transition-all duration-500 hover:bg-white/20 hover:-translate-y-2">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-amber-400/20 to-emerald-400/20 rounded-full -translate-y-10 translate-x-10"></div>
                    <div className="relative space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="flex-shrink-0">
                          <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm text-emerald-400 group-hover:bg-white/30 transition-colors">
                            {pillar.icon}
                          </div>
                        </div>
                        <h3 className="text-2xl font-bold tracking-tight group-hover:text-emerald-200 transition-colors">
                          {pillar.title}
                        </h3>
                      </div>
                      <p className="text-emerald-100 leading-relaxed group-hover:text-white transition-colors">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Portrait Gallery Section */}
        <section className="mx-auto max-w-7xl px-6">
          <div className="space-y-12">
            <Reveal className="text-center space-y-6">
              <div className="space-y-4">
                <span className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-emerald-100 text-sm font-semibold uppercase tracking-wider text-emerald-800">
                  {copy.portraitLabel}
                </span>
                <h2 className="text-4xl font-bold tracking-tight text-emerald-950 sm:text-5xl">
                  {copy.portraitHeading}
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-amber-400 rounded-full mx-auto"></div>
              </div>
              <p className="text-lg text-emerald-900/80 max-w-2xl mx-auto leading-relaxed">
                {copy.portraitDescription}
              </p>
            </Reveal>

            <Reveal delay={100}>
              <div
                className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl shadow-2xl shadow-emerald-900/20"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onTouchStart={() => setIsPaused(true)}
                onTouchEnd={() => setIsPaused(false)}
              >
                <div className="relative h-[500px] lg:h-[600px]">
                  <img
                    key={portraitGallery[currentSlide]}
                    src={portraitGallery[currentSlide]}
                    alt={`${copy.portraitAltPrefix} ${currentSlide + 1}`}
                    className="h-full w-full object-cover transition-opacity duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                  {/* Navigation Arrows */}
                  <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-6">
                    <button
                      type="button"
                      className="group flex h-14 w-14 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm text-white transition-all duration-300 hover:bg-white/30 hover:scale-110"
                      aria-label={copy.portraitPrevious}
                      onClick={() => {
                        setIsPaused(true);
                        setCurrentSlide((prev) => (prev - 1 + portraitGallery.length) % portraitGallery.length);
                      }}
                    >
                      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                      </svg>
                    </button>
                    <button
                      type="button"
                      className="group flex h-14 w-14 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm text-white transition-all duration-300 hover:bg-white/30 hover:scale-110"
                      aria-label={copy.portraitNext}
                      onClick={() => {
                        setIsPaused(true);
                        setCurrentSlide((prev) => (prev + 1) % portraitGallery.length);
                      }}
                    >
                      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.59 16.59 10 18l6-6-6-6-1.41 1.41L13.17 12z" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Indicators */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-3 rounded-full bg-black/20 backdrop-blur-sm px-4 py-2">
                    {portraitGallery.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setIsPaused(true);
                          setCurrentSlide(index);
                        }}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          currentSlide === index
                            ? "w-8 bg-white"
                            : "w-2 bg-white/40 hover:bg-white/60"
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Executive Team Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-white to-emerald-50/50"></div>
          <div className="relative mx-auto max-w-7xl px-6 py-24">
            <Reveal className="text-center space-y-6 mb-16">
              <div className="space-y-4">
                <span className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-amber-100 text-sm font-semibold uppercase tracking-wider text-amber-800">
                  {copy.executiveLabel}
                </span>
                <h2 className="text-4xl font-bold tracking-tight text-emerald-950 sm:text-5xl">
                  {copy.executiveHeading}
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-amber-400 rounded-full mx-auto"></div>
              </div>
              <p className="text-lg text-emerald-900/80 max-w-3xl mx-auto leading-relaxed">
                {copy.executiveDescription}
              </p>
            </Reveal>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
              {copy.executiveMembers.map((member, index) => (
                <Reveal key={`${member.name}-${index}`} delay={index * 120}>
                  <div className="group relative overflow-hidden rounded-3xl bg-white shadow-xl shadow-emerald-900/10 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-900/20 hover:-translate-y-3">
                    {/* Image */}
                    <div className="relative h-72 overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover transition duration-700 group-hover:scale-110"
                        sizes="(min-width: 1280px) 260px, (min-width: 768px) 50vw, 100vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/60 via-emerald-950/20 to-transparent" />

                      {/* Overlay with name on hover */}
                      <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="text-white">
                          <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                          <p className="text-sm text-emerald-200 font-medium">{member.role}</p>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-3">
                      <div>
                        <h3 className="text-lg font-bold text-emerald-950 group-hover:text-emerald-700 transition-colors">
                          {member.name}
                        </h3>
                        <p className="text-xs uppercase tracking-wider font-semibold text-emerald-600 mt-1">
                          {member.role}
                        </p>
                      </div>
                      <p className="text-sm leading-relaxed text-emerald-900/75">
                        {member.bio}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
