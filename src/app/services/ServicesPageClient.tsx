"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import { useLocale } from "@/context/LocaleContext";

type Service = {
  title: string;
  description: string;
  icon: React.ReactElement;
  image: string;
  videoUrl?: string;
  highlights: string[];
};

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
        title: "Wedding Traditional Dance Performances",
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
        videoUrl: "",
        highlights: [
          "Full troupe showcases with live drumming",
          "Intore Dance alongside the Bridegroom upon entrance",
          "Costumes handcrafted to honor heritage",
        ],
      },
      {
        title: "Gusohora Umugeni",
        description:
          "We bring the beauty of Rwandan tradition to life through authentic Ibihozo performance, emotional bridal entrance songs performed by skilled voices to celebrate the bride's journey with elegance, culture and heartfelt emotion.",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z" />
          </svg>
        ),
        image: "/gus.jpg.jpeg",
        videoUrl: "",
        highlights: [
          "Authentic Ibihozo",
          "Traditioonal bridal entrance songs",
          "Skilled Rwandan vocals and Heartfelt Emotion",
        ],
      },
      {
        title: "Corporate Event Performances",
        description:
          "Elevate your conferences, galas, and professional gatherings with dynamic Rwandan cultural showcases. Our troupe provides a captivating, high-quality entertainment experience that engages attendees and adds a memorable touch of heritage to your professional events.",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
            <path d="M2 12h20" />
          </svg>
        ),
        image: "/corp.jpg.jpeg",
        videoUrl: "",
        highlights: [
          "Tailored entertainment for professional settings",
          "High-energy, engaging cultural immersion",
          "Punctual, seamless, and world-class execution",
        ],
      },
      {
        title: "Intore Dance Highlights",
        description:
          "Experience the power and grace of Intore, Rwanda's iconic traditional dance that embodies strength, unity, and cultural pride.",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ),
        image: "/38.jpg",
        videoUrl: "",
        highlights: [
          "Authentic Intore dance performances",
          "Historical significance and cultural context",
          "Inspiring displays of Rwandan heritage",
        ],
      },
      {
        title: "Abatahira (Traditional Pastoral Poets)",
        description: "Authentic traditional poets who perform the deeply cultural recitation of dowry cows (Amazina y'Inka) during Rwandan weddings, honoring both families with eloquence, history, and heritage.",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        ),
        image: "/placeholder.jpg",
        videoUrl: "https://res.cloudinary.com/dg55h2o1u/video/upload/q_auto,f_auto/v1783541773/Umutahir_qyzepv.mp4",
        highlights: [
          "Authentic Amazina y'Inka recitations",
          "Deep cultural storytelling and historical context",
          "Honors both the bride's and groom's families",
        ],
      },
      {
        title: "Professional Event MCs",
        description: "Charismatic and culturally fluent Masters of Ceremonies who guide your weddings and corporate events with elegance, humor, and perfect timing, ensuring a seamless flow from start to finish.",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
            <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
            <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
            <line x1="12" x2="12" y1="19" y2="22" />
          </svg>
        ),
        image: "/placeholder.jpg",
        videoUrl: "https://res.cloudinary.com/dg55h2o1u/video/upload/q_auto,f_auto/v1783538422/Mc_Kamanzi_mj0uxn.mp4",
        highlights: [
          "Seamless event coordination and crowd engagement",
          "Culturally fluent in Kinyarwanda, English, and French",
          "Dynamic, humorous, and highly professional delivery",
        ],
      },
      {
        title: "Live Saxophone Performances",
        description: "Add a touch of modern romance with our live saxophonists. Perfect for breathtaking bridal entrances, the couple's first dance, or sophisticated background music during your reception.",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
            <path d="M11 12.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z" />
            <path d="M22 12.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z" />
            <path d="M12.5 4v13" />
            <path d="M15.5 4v13" />
            <path d="M14 4h-3" />
          </svg>
        ),
        image: "/placeholder.jpg",
        videoUrl: "https://res.cloudinary.com/dg55h2o1u/video/upload/q_auto,f_auto/v1781518758/Saxophn_rqkemb.mp4",
        highlights: [
          "Romantic serenades for the first dance",
          "Dynamic and engaging bridal entrance performances",
          "Sophisticated jazz and contemporary reception ambiance",
        ],
      },
      {
        title: "Ingoma (Traditional Drumming)",
        description: "Feel the heartbeat of Rwanda with our standalone Umutagara drumming performances. Our master drummers deliver powerful, rhythmic showcases that bring majestic energy to any occasion.",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
            <ellipse cx="12" cy="9" rx="10" ry="5" />
            <path d="M2 9v6c0 2.8 4.5 5 10 5s10-2.2 10-5V9" />
            <path d="M12 22v-8" />
          </svg>
        ),
        image: "/placeholder.jpg",
        videoUrl: "https://res.cloudinary.com/dg55h2o1u/video/upload/q_auto,f_auto/v1783541534/Umutagar_pkz4ns.mp4",
        highlights: [
          "Thunderous Umutagara drum performances",
          "Perfect for grand entrances and official ceremonies",
          "High-energy standalone rhythmic showcases",
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
        title: "Performances de danse traditionnelle de mariage",
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
        videoUrl: "https://res.cloudinary.com/dg55h2o1u/video/upload/q_auto,f_auto/v1781282533/bgrd_video_s4xwde.mp4",
        highlights: [
          "Spectacles de troupe avec percussions en direct",
          "Récits traditionnels intégrés à chaque tableau",
          "Costumes confectionnés dans le respect du patrimoine",
        ],
      },
      {
        title: "Gusohora Umugeni",
        description:
          "Nous donnons vie à la beauté de la tradition rwandaise à travers une performance authentique d'Ibihozo, des chants d'entrée de mariée émouvants interprétés par des voix talentueuses.",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z" />
          </svg>
        ),
        image: "/gus.jpg.jpeg",
        videoUrl: "",
        highlights: [
          "Ibihozo authentique",
          "Chants d'entrée de mariée traditionnels",
          "Voix rwandaises talentueuses et émotion sincère",
        ],
      },
      {
        title: "Performances pour Événements d'Entreprise",
        description:
          "Élevez vos conférences, galas et rassemblements professionnels avec des vitrines culturelles rwandaises dynamiques. Notre troupe offre une expérience de divertissement captivante et de haute qualité.",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
            <path d="M2 12h20" />
          </svg>
        ),
        image: "/corp.jpg.jpeg",
        videoUrl: "",
        highlights: [
          "Divertissement sur mesure pour les cadres professionnels",
          "Immersion culturelle engageante et pleine d'énergie",
          "Exécution ponctuelle, fluide et de classe mondiale",
        ],
      },
      {
        title: "Points forts de la danse Intore",
        description:
          "Découvrez la puissance et la grâce de l'Intore, la danse traditionnelle emblématique du Rwanda qui incarne la force, l'unité et la fierté culturelle.",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ),
        image: "/38.jpg",
        videoUrl: "",
        highlights: [
          "Performances authentiques de danse Intore",
          "Signification historique et contexte culturel",
          "Présentations inspirantes du patrimoine rwandais",
        ],
      },
      {
        title: "Abatahira (Poètes Pastoraux)",
        description: "D'authentiques poètes traditionnels qui déclament avec éloquence les louanges des vaches de dot (Amazina y'Inka) lors des mariages rwandais, honorant l'histoire et le patrimoine des deux familles.",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        ),
        image: "/placeholder.jpg",
        videoUrl: "",
        highlights: [
          "Récitations authentiques d'Amazina y'Inka",
          "Récits culturels profonds et contexte historique",
          "Mise à l'honneur des familles des mariés",
        ],
      },
      {
        title: "Maîtres de Cérémonie (MC)",
        description: "Des animateurs charismatiques et culturellement bilingues qui guident vos mariages et événements d'entreprise avec élégance, humour et un timing parfait.",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
            <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
            <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
            <line x1="12" x2="12" y1="19" y2="22" />
          </svg>
        ),
        image: "/placeholder.jpg",
        videoUrl: "",
        highlights: [
          "Coordination fluide et interaction avec le public",
          "Maîtrise du Kinyarwanda, de l'Anglais et du Français",
          "Prestation dynamique, humoristique et professionnelle",
        ],
      },
      {
        title: "Ingoma (Tambours Traditionnels)",
        description: "Ressentez le battement de cœur du Rwanda avec nos performances exclusives de tambours Umutagara. Nos maîtres tambours apportent une énergie majestueuse à toute occasion.",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
            <ellipse cx="12" cy="9" rx="10" ry="5" />
            <path d="M2 9v6c0 2.8 4.5 5 10 5s10-2.2 10-5V9" />
            <path d="M12 22v-8" />
          </svg>
        ),
        image: "/placeholder.jpg",
        videoUrl: "",
        highlights: [
          "Performances percutantes de tambours Umutagara",
          "Idéal pour les grandes entrées et cérémonies officielles",
          "Démonstrations rythmiques intenses",
        ],
      },
      {
        title: "Inanga (Cithare Traditionnelle)",
        description: "Des mélodies envoûtantes jouées sur l'Inanga, l'ancienne cithare rwandaise. Cette expérience musicale intime mêle poésie traditionnelle et sons apaisants.",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
            <path d="M9 18V5l12-2v13" />
            <path d="m9 9 12-2" />
            <circle cx="6" cy="18" r="3" />
            <circle cx="18" cy="16" r="3" />
          </svg>
        ),
        image: "/placeholder.jpg",
        videoUrl: "",
        highlights: [
          "Instrumentistes et chanteurs d'Inanga authentiques",
          "Intégration de la poésie et des chants rwandais",
          "Ambiance acoustique apaisante et intime",
        ],
      },
      {
        title: "Sonorisation Premium",
        description: "Équipement audio haute fidélité et services d'ingénierie professionnels. Nous garantissons une diffusion sonore cristalline pour les discours, les groupes live et la musique d'ambiance.",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
            <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
            <circle cx="12" cy="14" r="4" />
            <line x1="12" x2="12.01" y1="6" y2="6" />
          </svg>
        ),
        image: "/placeholder.jpg",
        videoUrl: "",
        highlights: [
          "Équipement audio et enceintes de pointe",
          "Ingénierie du son professionnelle sur place",
          "Configurations adaptables pour l'intérieur et l'extérieur",
        ],
      },
      {
        title: "Saxophone en Direct",
        description: "Ajoutez une touche de romance moderne avec nos saxophonistes. Parfait pour les entrées de mariés, la première danse ou une musique d'ambiance sophistiquée.",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
            <path d="M11 12.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z" />
            <path d="M22 12.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z" />
            <path d="M12.5 4v13" />
            <path d="M15.5 4v13" />
            <path d="M14 4h-3" />
          </svg>
        ),
        image: "/placeholder.jpg",
        videoUrl: "https://res.cloudinary.com/dg55h2o1u/video/upload/q_auto,f_auto/v1781518758/Saxophn_rqkemb.mp4",
        highlights: [
          "Sérénades romantiques pour la première danse",
          "Performances dynamiques pour l'entrée des mariés",
          "Ambiance jazz et contemporaine pour la réception",
        ],
      },
      {
        title: "Groupe de Musique en Direct",
        description: "Un groupe de musique polyvalent et énergique dédié à divertir vos invités. Des classiques traditionnels rwandais aux succès contemporains, nous créons l'ambiance parfaite.",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
            <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
            <circle cx="12" cy="13" r="3" />
          </svg>
        ),
        image: "/placeholder.jpg",
        videoUrl: "",
        highlights: [
          "Répertoire varié de tubes traditionnels et modernes",
          "Chanteurs et instrumentistes débordants d'énergie",
          "Listes de chansons personnalisées pour votre public",
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
  
  // Track which videos are explicitly muted. We initialize with all 11 indexes so they start muted.
  const [mutedVideos, setMutedVideos] = useState<Set<number>>(
    new Set(Array.from({ length: 11 }, (_, i) => i))
  ); 
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Smooth Native Mute Toggle
  const toggleMute = (index: number) => {
    const video = videoRefs.current[index];
    if (video) {
      video.muted = !video.muted;
      setMutedVideos(prev => {
        const newSet = new Set(prev);
        if (video.muted) {
          newSet.add(index);
        } else {
          newSet.delete(index);
        }
        return newSet;
      });
    }
  };

  // High-Performance Auto Play/Pause on Scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) {
            video.play().catch(() => {}); // Autoplay safely
          } else {
            video.pause(); // Pause when user scrolls away
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of card is visible
      }
    );

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="space-y-24 pb-24">
      <PageHero
        title={copy.heroTitle}
        subtitle={copy.heroSubtitle}
        backgroundImageUrl="/amarebe.jpg"
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
            {(copy.services as unknown as Service[]).map((service, index) => (
              <Reveal key={service.title} delay={index * 150} className="group">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Content Section - Left */}
                  <div className="p-8 lg:p-12 space-y-6 flex flex-col justify-center">
                    <div className="space-y-4">
                      <div className="flex justify-center md:justify-start">
                        <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 shadow-lg">
                          {service.icon}
                        </div>
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold tracking-tight text-emerald-950 text-center md:text-left">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-base lg:text-lg leading-relaxed text-emerald-900/80">
                      {service.description}
                    </p>

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

                  {/* High-Performance Native Video/Image Container - Right */}
                  <div className="relative overflow-hidden h-80 md:h-[28rem] rounded-3xl bg-emerald-950/10 shadow-xl shadow-emerald-900/5 group-hover:shadow-2xl transition-all duration-500">
                    {service.videoUrl ? (
                      <div className="relative w-full h-full">
                        <video
                          ref={(el) => {
                            if (el) videoRefs.current[index] = el;
                          }}
                          autoPlay
                          loop
                          muted
                          playsInline
                          preload="auto"
                          className="w-full h-full object-cover"
                        >
                          <source src={service.videoUrl} type="video/mp4" />
                        </video>
                        
                        {/* Interactive Sound Control Overlays */}
                        <div className="absolute bottom-4 left-4 z-20">
                          <button
                            onClick={() => toggleMute(index)}
                            className="bg-black/70 hover:bg-black/90 text-white p-3 rounded-full transition-all duration-200 hover:scale-110 shadow-lg"
                            aria-label={mutedVideos.has(index) ? 'Unmute video' : 'Mute video'}
                          >
                            {mutedVideos.has(index) ? (
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v4.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
                              </svg>
                            ) : (
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                              </svg>
                            )}
                          </button>
                        </div>
                      </div>
                    ) : (
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition duration-700 group-hover:scale-105"
                        sizes="(min-width: 768px) 50vw, 100vw"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-l from-black/10 via-transparent to-transparent pointer-events-none" />
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