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
        highlights: [
          "Authentic Intore dance performances",
          "Historical significance and cultural context",
          "Inspiring displays of Rwandan heritage",
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
        highlights: [
          "Spectacles de troupe avec percussions en direct",
          "Récits traditionnels intégrés à chaque tableau",
          "Costumes confectionnés dans le respect du patrimoine",
        ],
      },
      {
        title: "Danse des Filles Kinyarwanda",
        description:
          "Découvrez l'énergie vibrante et les récits culturels des performances de danse des filles Kinyarwanda, mêlant rythmes traditionnels et passion juvénile.",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z" />
          </svg>
        ),
        image: "/30.jpeg",
        highlights: [
          "Traditions de danse Kinyarwanda authentiques",
          "Interprètes jeunes apportant une énergie fraîche",
          "Narratifs culturels à travers le mouvement",
        ],
      },
      {
        title: "Performances de Danse Rwandaise",
        description:
          "Témoin de la grâce et de la puissance des performances de danse rwandaise authentiques, mettant en valeur le riche patrimoine culturel et les récits à travers le mouvement.",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
            <path d="M2 12h20" />
          </svg>
        ),
        image: "/33.jpeg",
        highlights: [
          "Traditions de danse rwandaise authentiques",
          "Mouvements gracieux et rythmes puissants",
          "Patrimoine culturel pris vie",
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
        highlights: [
          "Performances authentiques de danse Intore",
          "Signification historique et contexte culturel",
          "Présentations inspirantes du patrimoine rwandais",
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
  const [mutedVideos, setMutedVideos] = useState<Set<number>>(new Set([0, 1, 2, 3])); // All start muted
  const videoRefs = useRef<(HTMLIFrameElement | null)[]>([]);

  const toggleMute = (index: number) => {
    const iframe = videoRefs.current[index];
    if (iframe) {
      const currentSrc = iframe.src;
      if (mutedVideos.has(index)) {
        // Unmute - change mute=1 to mute=0
        iframe.src = currentSrc.replace('mute=1', 'mute=0');
        setMutedVideos(prev => {
          const newSet = new Set(prev);
          newSet.delete(index);
          return newSet;
        });
      } else {
        // Mute - change mute=0 to mute=1
        iframe.src = currentSrc.replace('mute=0', 'mute=1');
        setMutedVideos(prev => new Set(prev).add(index));
      }
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const iframe = entry.target as HTMLIFrameElement;
          
          if (entry.isIntersecting) {
            // Video is in view, unmute it
            const currentSrc = iframe.src;
            if (currentSrc.includes('mute=1')) {
              iframe.src = currentSrc.replace('mute=1', 'mute=0');
            }
          } else {
            // Video is out of view, mute it
            const currentSrc = iframe.src;
            if (currentSrc.includes('mute=0')) {
              iframe.src = currentSrc.replace('mute=0', 'mute=1');
            }
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the video is visible
        rootMargin: '50px' // Start/stop a bit before/after entering/leaving viewport
      }
    );

    // Observe all video iframes
    videoRefs.current.forEach((iframe) => {
      if (iframe) {
        observer.observe(iframe);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

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
            {(copy.services as unknown as Service[]).map((service, index) => (
              <Reveal key={service.title} delay={index * 150} className="group">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Content Section - Left */}
                  <div className={`${service.videoUrl?.includes('vxc4ymgi3U4') ? 'pt-0 pb-8 lg:pt-0 lg:pb-12' : 'p-8 lg:p-12'} space-y-6 flex flex-col ${service.videoUrl?.includes('vxc4ymgi3U4') ? 'justify-start md:min-h-[20rem]' : 'justify-center md:min-h-[28rem]'}`}>
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

                    {/* Image/Video Section - Right */}
                    <div className={`relative overflow-hidden ${service.videoUrl ? (service.videoUrl.includes('vxc4ymgi3U4') ? 'aspect-video md:aspect-video' : 'aspect-[9/16] md:aspect-[9/16] max-h-[30rem]') : 'h-80 md:h-auto'}`}>
                      {service.videoUrl ? (
                        <div className="relative w-full h-full">
                          <iframe
                            ref={(el) => {
                              if (el) videoRefs.current[index] = el;
                            }}
                            data-video-id={service.videoUrl?.split('/embed/')[1]?.split('?')[0]}
                            className="w-full h-full"
                            src={service.videoUrl}
                            title={`${service.title} promotional video`}
                            allow="autoplay; fullscreen; picture-in-picture"
                            allowFullScreen
                          />
                          
                          {/* Audio Control */}
                          <div className="absolute bottom-2 left-2 md:bottom-4 md:left-4">
                            <button
                              onClick={() => toggleMute(index)}
                              className="bg-black/80 md:bg-black/70 hover:bg-black/90 text-white p-2 md:p-3 rounded-full transition-all duration-200 hover:scale-110 shadow-lg touch-manipulation"
                              aria-label={mutedVideos.has(index) ? 'Unmute video' : 'Mute video'}
                            >
                              {mutedVideos.has(index) ? (
                                <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v4.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
                                </svg>
                              ) : (
                                <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
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
                      <div className="absolute inset-0 bg-gradient-to-l from-black/20 via-transparent to-transparent" />
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
