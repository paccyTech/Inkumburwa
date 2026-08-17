"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import { useLocale } from "@/context/LocaleContext";

type ServiceCategory = "wedding" | "corporate" | "both";

type Service = {
  title: string;
  description: string;
  icon: React.ReactElement;
  image: string;
  videoUrl?: string;
  highlights: string[];
  category: ServiceCategory;
};

const content = {
  en: {
    heroTitle: "Our Services",
    heroSubtitle:
      "Dynamic performances, tailored productions, and cultural expertise designed to elevate every occasion.",
    introHeading: "Bring Rwandan Heritage to Life",
    introDescription:
      "Choose from signature performances, bespoke collaborations, and interactive cultural experiences curated for your audience.",
    backButton: "Back to Categories",
    categories: {
      wedding: {
        title: "Wedding Performances",
        subtitle: "Make your special day unforgettable with traditional bridal entries, heroic dances, and poetic recitations.",
        cta: "Explore Wedding Services",
        image: "/26.jpg",
      },
      corporate: {
        title: "Corporate & Event Performances",
        subtitle: "Elevate your professional gatherings, galas, and festivals with dynamic, high-energy cultural showcases.",
        cta: "Explore Corporate Services",
        image: "/corp.jpg.jpeg",
      }
    },
    services: [
      {
        title: "Umutagara Entry Performance (Kwinjiza abashyitsi)",
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
        category: "both",
        highlights: [
          "Thunderous Umutagara drum performances",
          "Perfect for grand entrances and official ceremonies",
          "High-energy standalone rhythmic showcases",
        ],
      },
      {
        title: "Wedding Traditional Dance Performances (Kwakira Abashyitsi)",
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
        videoUrl: "https://res.cloudinary.com/dg55h2o1u/video/upload/q_auto,f_auto/v1785611125/Entrance_ahp1ua.mp4",
        category: "wedding",
        highlights: [
          "Full troupe showcases with live drumming",
          "Live Performances of Traditional Dances for your guests",
          "Costumes handcrafted to honor heritage",
        ],
      },
      {
        title: "Intore Bridegroom Entry and Performance (Kwinjiza no gutaramira Umukwe)",
        description:
          "Experience the power and grace of Intore, Rwanda's iconic traditional dance that embodies strength, unity, and cultural pride.",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ),
        image: "/38.jpg",
        videoUrl: "https://res.cloudinary.com/dg55h2o1u/video/upload/q_auto,f_auto/v1785611706/kwinjiza_umu_c3ffzp.mov",
        category: "wedding",
        highlights: [
          "Authentic Intore dance performances",
          "Historical significance and cultural context",
          "Inspiring displays of Rwandan heritage",
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
        videoUrl: "https://res.cloudinary.com/dg55h2o1u/video/upload/v1786540349/guvid_eppdmy.mp4",
        category: "wedding",
        highlights: [
          "Authentic Ibihozo",
          "Traditional bridal entrance songs",
          "Skilled Rwandan vocals and Heartfelt Emotion",
        ],
      },
      {
        title: "Men's Corporate Event Performances",
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
        videoUrl: "https://res.cloudinary.com/dg55h2o1u/video/upload/v1786967510/Corp_Boys_rbptci.mp4",
        category: "corporate",
        highlights: [
          "Tailored entertainment for professional settings",
          "High-energy, engaging cultural immersion",
          "Punctual, seamless, and world-class execution",
        ],
      },
      {
        title: "Women's Traditional Dance Showcase",
        description:
          "Experience the elegance and grace of our female dancers. This captivating performance highlights the beauty of Rwandan women's traditional dance, adding a sophisticated and vibrant cultural touch to your corporate gatherings.",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
            <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
          </svg>
        ),
        image: "",
        videoUrl: "https://res.cloudinary.com/dg55h2o1u/video/upload/v1786964622/Girls_Corp_zzwnn6.mp4", 
        category: "corporate",
        highlights: [
          "Graceful and elegant traditional choreography",
          "Authentic and vibrant cultural attire",
          "Perfect for sophisticated corporate ambiances",
        ],
      },
      {
        title: "Men's Traditional Dance Showcase (Intore)",
        description:
          "Bring high-energy, dynamic, and powerful male traditional dances to your corporate events. Our Intore dancers deliver an awe-inspiring performance that embodies strength, teamwork, and cultural pride, leaving a lasting impression on your guests.",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ),
        image: "",
        videoUrl: "https://res.cloudinary.com/dg55h2o1u/video/upload/q_auto,f_auto/v1785611409/corporat_g88fvr.mp4", 
        category: "corporate",
        highlights: [
          "Powerful and dynamic Intore choreography",
          "Showcases strength, teamwork, and cultural unity",
          "Ideal for high-energy corporate event openers or closers",
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
        image: "",
        videoUrl: "https://res.cloudinary.com/dg55h2o1u/video/upload/q_auto,f_auto/v1783541773/Umutahir_qyzepv.mp4",
        category: "wedding",
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
        image: "",
        videoUrl: "https://res.cloudinary.com/dg55h2o1u/video/upload/q_auto,f_auto/v1783538422/Mc_Kamanzi_mj0uxn.mp4",
        category: "both",
        highlights: [
          "Seamless event coordination and crowd engagement",
          "Culturally fluent in Kinyarwanda, English, and French",
          "Dynamic, humorous, and highly professional delivery",
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
    backButton: "Retour aux Catégories",
    categories: {
      wedding: {
        title: "Performances de Mariage",
        subtitle: "Rendez votre jour spécial inoubliable avec nos entrées traditionnelles, nos danses héroïques et nos récitations poétiques.",
        cta: "Explorer les Services de Mariage",
        image: "/26.jpg",
      },
      corporate: {
        title: "Événements d'Entreprise",
        subtitle: "Sublimez vos rencontres professionnelles, galas et festivals avec des vitrines culturelles dynamiques.",
        cta: "Explorer les Services d'Entreprise",
        image: "/corp.jpg.jpeg",
      }
    },
    services: [
      {
        title: "Entrée Umutagara (Kwinjiza abashyitsi)",
        description: "Ressentez le battement de cœur du Rwanda avec nos performances exclusives de tambours Umutagara. Nos maîtres tambours apportent une énergie majestueuse à toute occasion.",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
            <ellipse cx="12" cy="9" rx="10" ry="5" />
            <path d="M2 9v6c0 2.8 4.5 5 10 5s10-2.2 10-5V9" />
            <path d="M12 22v-8" />
          </svg>
        ),
        image: "",
        videoUrl: "https://res.cloudinary.com/dg55h2o1u/video/upload/q_auto,f_auto/v1783541534/Umutagar_pkz4ns.mp4",
        category: "both",
        highlights: [
          "Performances percutantes de tambours Umutagara",
          "Idéal pour les grandes entrées et cérémonies officielles",
          "Démonstrations rythmiques intenses",
        ],
      },
      {
        title: "Danse traditionnelle de mariage (Kwakira Abashyitsi)",
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
        videoUrl: "https://res.cloudinary.com/dg55h2o1u/video/upload/q_auto,f_auto/v1785611125/Entrance_ahp1ua.mp4",
        category: "wedding",
        highlights: [
          "Spectacles de troupe avec percussions en direct",
          "Performances en direct pour divertir vos invités",
          "Costumes confectionnés dans le respect du patrimoine",
        ],
      },
      {
        title: "Entrée et performance du marié Intore (Kwinjiza no gutaramira Umukwe)",
        description:
          "Découvrez la puissance et la grâce de l'Intore, la danse traditionnelle emblématique du Rwanda qui incarne la force, l'unité et la fierté culturelle.",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ),
        image: "/38.jpg",
        videoUrl: "https://res.cloudinary.com/dg55h2o1u/video/upload/q_auto,f_auto/v1785611706/kwinjiza_umu_c3ffzp.mov",
        category: "wedding",
        highlights: [
          "Performances authentiques de danse Intore",
          "Signification historique et contexte culturel",
          "Présentations inspirantes du patrimoine rwandais",
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
        videoUrl: "https://res.cloudinary.com/dg55h2o1u/video/upload/v1786540349/guvid_eppdmy.mp4",
        category: "wedding",
        highlights: [
          "Ibihozo authentique",
          "Chants d'entrée de mariée traditionnels",
          "Voix rwandaises talentueuses et émotion sincère",
        ],
      },
      {
        title: "Performances pour Événements d'Entreprise (Hommes)",
        description:
          "Élevez vos conférences, galas et rassemblements professionnels avec des vitrines culturelles rwandaises dynamiques. Notre troupe offre une expérience de divertissement captivante et de haute qualité qui engage les participants et ajoute une touche mémorable de patrimoine à vos événements professionnels.",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
            <path d="M2 12h20" />
          </svg>
        ),
        image: "/corp.jpg.jpeg",
        videoUrl: "https://res.cloudinary.com/dg55h2o1u/video/upload/v1786967510/Corp_Boys_rbptci.mp4",
        category: "corporate",
        highlights: [
          "Divertissement sur mesure pour les cadres professionnels",
          "Immersion culturelle engageante et pleine d'énergie",
          "Exécution ponctuelle, fluide et de classe mondiale",
        ],
      },
      {
        title: "Spectacle de Danse Traditionnelle des Femmes",
        description:
          "Découvrez l'élégance et la grâce de nos danseuses. Cette performance captivante met en valeur la beauté de la danse traditionnelle des femmes rwandaises, idéale pour ajouter une touche culturelle vibrante et sophistiquée à vos événements d'entreprise.",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
            <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
          </svg>
        ),
        image: "",
        videoUrl: "https://res.cloudinary.com/dg55h2o1u/video/upload/v1786964622/Girls_Corp_zzwnn6.mp4", 
        category: "corporate",
        highlights: [
          "Chorégraphie traditionnelle élégante et gracieuse",
          "Tenues culturelles authentiques et vibrantes",
          "Parfait pour les ambiances d'entreprise sophistiquées",
        ],
      },
      {
        title: "Spectacle de Danse Traditionnelle des Hommes (Intore)",
        description:
          "Apportez des danses traditionnelles masculines dynamiques et puissantes à vos événements d'entreprise. Nos danseurs Intore livrent une performance impressionnante qui incarne la force, l'esprit d'équipe et la fierté culturelle, laissant une impression durable à vos invités.",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ),
        image: "",
        videoUrl: "https://res.cloudinary.com/dg55h2o1u/video/upload/q_auto,f_auto/v1785611409/corporat_g88fvr.mp4", 
        category: "corporate",
        highlights: [
          "Chorégraphie Intore puissante et dynamique",
          "Met en valeur la force, le travail d'équipe et l'unité culturelle",
          "Idéal pour ouvrir ou clôturer vos événements d'entreprise avec énergie",
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
        image: "",
        videoUrl: "https://res.cloudinary.com/dg55h2o1u/video/upload/q_auto,f_auto/v1783541773/Umutahir_qyzepv.mp4",
        category: "wedding",
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
        image: "",
        videoUrl: "https://res.cloudinary.com/dg55h2o1u/video/upload/q_auto,f_auto/v1783538422/Mc_Kamanzi_mj0uxn.mp4",
        category: "both",
        highlights: [
          "Coordination fluide et interaction avec le public",
          "Maîtrise du Kinyarwanda, de l'Anglais et du Français",
          "Prestation dynamique, humoristique et professionnelle",
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
  
  const [activeCategory, setActiveCategory] = useState<ServiceCategory | null>(null);

  const [mutedVideos, setMutedVideos] = useState<Set<number>>(
    new Set(Array.from({ length: 20 }, (_, i) => i))
  ); 
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const handleCategorySelect = (category: ServiceCategory | null) => {
    setActiveCategory(category);
    setMutedVideos(new Set(Array.from({ length: 20 }, (_, i) => i)));
    videoRefs.current = [];
  };

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

  useEffect(() => {
    if (!activeCategory) return; 

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      {
        threshold: 0.3, 
      }
    );

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => observer.disconnect();
  }, [activeCategory]);

  const filteredServices = (copy.services as unknown as Service[]).filter(
    (service) => service.category === activeCategory || service.category === "both"
  );

  return (
    <div className="space-y-24 pb-24">
      <PageHero
        title={copy.heroTitle}
        subtitle={copy.heroSubtitle}
        backgroundImageUrl="/amarebe.jpg"
        imagePosition="center 45%"
      />

      <section className="mx-auto max-w-7xl px-6">
        <div className="space-y-16">
          
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

          {!activeCategory ? (
            <Reveal delay={200}>
              <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                <button
                  onClick={() => handleCategorySelect("wedding")}
                  className="group relative h-[30rem] rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 text-left focus:outline-none focus:ring-4 focus:ring-emerald-500/30"
                >
                  <Image 
                    src={copy.categories.wedding.image} 
                    alt={copy.categories.wedding.title} 
                    fill 
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/95 via-emerald-900/50 to-transparent transition-colors duration-500 group-hover:from-emerald-900/95"></div>
                  <div className="absolute bottom-0 left-0 p-10 space-y-4">
                    <div className="w-12 h-1.5 bg-amber-400 rounded-full mb-6 transform origin-left transition-all duration-300 group-hover:w-20 group-hover:bg-amber-300"></div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
                      {copy.categories.wedding.title}
                    </h3>
                    <p className="text-emerald-50 text-lg line-clamp-3 leading-relaxed opacity-90">
                      {copy.categories.wedding.subtitle}
                    </p>
                    <div className="inline-flex items-center gap-3 text-amber-400 font-bold mt-4 group-hover:gap-5 transition-all duration-300 uppercase tracking-wide text-sm">
                      {copy.categories.wedding.cta} 
                      <span aria-hidden="true" className="text-xl leading-none">&rarr;</span>
                    </div>
                  </div>
                </button>

                <button
                  onClick={() => handleCategorySelect("corporate")}
                  className="group relative h-[30rem] rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 text-left focus:outline-none focus:ring-4 focus:ring-emerald-500/30"
                >
                  <Image 
                    src={copy.categories.corporate.image} 
                    alt={copy.categories.corporate.title} 
                    fill 
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/95 via-emerald-900/50 to-transparent transition-colors duration-500 group-hover:from-emerald-900/95"></div>
                  <div className="absolute bottom-0 left-0 p-10 space-y-4">
                    <div className="w-12 h-1.5 bg-amber-400 rounded-full mb-6 transform origin-left transition-all duration-300 group-hover:w-20 group-hover:bg-amber-300"></div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
                      {copy.categories.corporate.title}
                    </h3>
                    <p className="text-emerald-50 text-lg line-clamp-3 leading-relaxed opacity-90">
                      {copy.categories.corporate.subtitle}
                    </p>
                    <div className="inline-flex items-center gap-3 text-amber-400 font-bold mt-4 group-hover:gap-5 transition-all duration-300 uppercase tracking-wide text-sm">
                      {copy.categories.corporate.cta} 
                      <span aria-hidden="true" className="text-xl leading-none">&rarr;</span>
                    </div>
                  </div>
                </button>
              </div>
            </Reveal>
          ) : (
            <div className="space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-b border-emerald-100 pb-8 mb-12">
                <h3 className="text-3xl font-bold text-emerald-950">
                  {activeCategory === 'wedding' ? copy.categories.wedding.title : copy.categories.corporate.title}
                </h3>
                <button
                  onClick={() => handleCategorySelect(null)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-semibold rounded-full transition-all duration-200 hover:-translate-x-1"
                >
                  <span aria-hidden="true" className="text-lg leading-none">&larr;</span> 
                  {copy.backButton}
                </button>
              </div>

              {filteredServices.map((service, index) => (
                <Reveal key={service.title} delay={index * 100} className="group">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
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
          )}
        </div>
      </section>

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