"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

type Locale = "en" | "fr";

interface TranslationRecord {
  [key: string]: string | TranslationRecord;
}

const translations: Record<Locale, TranslationRecord> = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      gallery: "Gallery",
      contact: "Contact",
    },
    header: {
      bookNow: "Book Now",
      toggleLabel: "Switch language",
    },
    footer: {
      description:
        "Preserving Rwanda's cultural heritage through traditional dance, music, and storytelling for communities across the globe.",
      quickLinks: "Quick Links",
      getInTouch: "Get in Touch",
      location: "Kigali, Rwanda",
      phone: "Phone: +250788992367",
      email: "Email: hello@inkumburwa.com",
      bookings: "Bookings: bookings@inkumburwa.com",
      crafted: "Crafted with passion for Rwanda's heritage.",
      rights: "All rights reserved.",
    },
    hero: {
      title: "Preserving Rwanda's Heritage Through Dance",
      description:
        "Experience the vibrance of traditional Rwandan culture through choreography, music, and storytelling that connects communities across generations.",
      primaryCta: "Book Our Performance",
      secondaryCta: "Explore Our Services",
    },
    whoWeAre: {
      title: "Who We Are",
      description:
        "Inkumburwa z'Ibwanacyambwe is a renowned cultural troupe dedicated to preserving and sharing the vibrancy of traditional Rwandan dance and music. Our passionate performers bring centuries-old traditions to life with authentic choreography, storytelling, and costume design.",
      stats: {
        years: "Years of Performances",
        events: "Events & Festivals",
        artists: "Talented Artists",
      },
      slideshowAlt: {
        first: "Traditional Rwandan dancers",
        second: "Inkumburwa troupe performing on stage",
        third: "Cultural performance moment",
      },
      goToSlide: "Go to slide",
    },
    servicesOverview: {
      heading: "Our Cultural Services",
      description:
        "Bringing authentic Rwandan traditions to your special events with professional performances that captivate and inspire.",
      services: {
        traditionalDance: {
          label: "Traditional Dance",
          description:
            "Authentic performances featuring classic Rwandan dances with traditional music and costumes.",
        },
        wedding: {
          label: "Wedding Celebrations",
          description:
            "Special choreographed performances to honor couples and celebrate love in traditional style.",
        },
        culturalEvents: {
          label: "Cultural Events",
          description:
            "Professional performances for festivals, corporate events, and cultural celebrations.",
        },
        collaborations: {
          label: "Collaborations",
          description:
            "Partnership opportunities with other artists and cultural organizations.",
        },
      },
    },
    cta: {
      heading: "Ready to Experience Our Culture?",
      description:
        "Book Inkumburwa z'Ibwanacyambwe for your next event and create unforgettable memories with authentic Rwandan traditional dance.",
      primaryCta: "Book Performance",
      secondaryCta: "Learn More",
    },
    quote: {
      text:
        "Culture is the soul of a nation. Through our dances, we keep the heartbeat of Rwanda alive, sharing our stories, our joy, and our unity with the world.",
      author: "Kayitare Jean",
      title: "Founder & CEO",
    },
    performanceGallery: {
      heading: "Performance Gallery",
      description:
        "Discover the spirit, color, and unity that light up every Inkumburwa performance around the world.",
      button: "View Full Gallery",
      categories: {
        all: "All events",
        wedding: "Wedding",
        corporate: "Corporate",
        festivals: "Festivals",
      },
      photos: {
        chantalEric: {
          caption: "Joyful entrance parade for Chantal & Eric",
          takenAt: "July 2024 · Kigali",
          alt: "Bride and groom celebrating with the troupe",
        },
        leadershipSummit: {
          caption: "Annual leadership summit cultural showcase",
          takenAt: "March 2024 · Kigali Convention Centre",
          alt: "Corporate gala with Inkumburwa on stage",
        },
        inganzoFestival: {
          caption: "Intore call-and-response at Inganzo Festival",
          takenAt: "August 2024 · Huye",
          alt: "Festival headliner leading the crowd in song",
        },
      },
    },
    pageHero: {
      aboutTitle: "About Inkumburwa z'Ibwanacyambwe",
      aboutSubtitle:
        "We are custodians of Rwanda's artistic legacy, sharing the spirit of our ancestors with audiences worldwide.",
      servicesTitle: "Our Services",
      servicesSubtitle:
        "Dynamic performances, tailored productions, and cultural expertise designed to elevate every occasion.",
      contactTitle: "Contact Us",
      contactSubtitle:
        "We would love to collaborate with you. Reach out and let’s create an unforgettable cultural experience together.",
    },
    contact: {
      sendMessage: "Send Us a Message",
      form: {
        nameLabel: "Full Name",
        namePlaceholder: "Your name",
        emailLabel: "Email Address",
        emailPlaceholder: "you@example.com",
        phoneLabel: "Phone Number",
        phonePlaceholder: "+250788992367",
        serviceLabel: "Interested In",
        serviceOptions: {
          performances: "Cultural Performances",
          workshops: "Workshops & Residencies",
          consulting: "Heritage Consulting",
          other: "Other Collaboration",
        },
        messageLabel: "Message",
        messagePlaceholder: "Tell us about your event or request",
        submit: "Submit Request",
        consent:
          "By submitting this form you agree to be contacted by Inkumburwa z'Ibwanacyambwe about your inquiry.",
      },
      connectHeading: "Connect With Us",
      connectDescription:
        "Follow our journey and stay updated with upcoming performances and workshops.",
      contactCards: {
        bookPerformance: {
          title: "Book a Performance",
          description:
            "Let us bring the rhythm of Rwanda to your stage, festival, or celebration.",
        },
        media: {
          title: "Media & Partnerships",
          description:
            "Collaborate on cultural projects, tours, and documentaries celebrating Rwandan heritage.",
        },
        visit: {
          title: "Visit Our Center",
          description:
            "Experience rehearsals, exhibitions, and workshops at the Inkumburwa Cultural Arts Center.",
        },
        primaryLabels: {
          bookings: "bookings@inkumburwa.com",
          media: "media@inkumburwa.com",
          center: "Kimironko Cultural Arts Center",
        },
        secondaryLabels: {
          bookings: "+250788992367",
          media: "+250788992368",
          center: "Mon – Sat · 09:00 to 18:00",
        },
      },
    },
    gallery: {
      title: "Gallery",
      subtitle:
        "Moments of rhythm, color, and storytelling captured from our performances across Rwanda and the world.",
      filters: {
        all: "All events",
        wedding: "Wedding",
        corporate: "Corporate",
        festivals: "Festivals",
      },
      photo: {
        chantalEric: {
          caption: "Joyful entrance parade for Chantal & Eric",
          takenAt: "July 2024 · Kigali",
          alt: "Bride and groom celebrating with the troupe",
        },
        receptionGate: {
          caption: "Traditional welcome dance at the reception gate",
          takenAt: "May 2024 · Rubavu",
          alt: "Couple welcomed with a traditional dance arch",
        },
        intoreFinale: {
          caption: "Guests invited to join the Intore finale",
          takenAt: "September 2023 · Huye",
          alt: "Guests joining the dancers during a wedding reception",
        },
        goldenHour: {
          caption: "Golden hour performance as the newlyweds arrive",
          takenAt: "January 2024 · Kigali",
          alt: "Reception stage set for a candlelit wedding celebration",
        },
        leadershipSummit: {
          caption: "Annual leadership summit cultural showcase",
          takenAt: "March 2024 · Kigali Convention Centre",
          alt: "Corporate gala with Inkumburwa on stage",
        },
        retreatPercussion: {
          caption: "Team-building drumming workshop breakout",
          takenAt: "November 2023 · Musanze",
          alt: "Percussion showcase at a corporate retreat",
        },
        closingRemarks: {
          caption: "Closing remarks with troupe leaders and partners",
          takenAt: "February 2024 · Kigali",
          alt: "Executives greeting performers after a presentation",
        },
        photoMoment: {
          caption: "Team leaders gather for photos after the showcase",
          takenAt: "April 2024 · Kigali",
          alt: "Executives capturing memories with the troupe",
        },
        inganzoCall: {
          caption: "Intore call-and-response at Inganzo Festival",
          takenAt: "August 2024 · Huye",
          alt: "Festival headliner leading the crowd in song",
        },
        sunsetDrumline: {
          caption: "Sunset drumline set against the Virunga skyline",
          takenAt: "June 2024 · Musanze",
          alt: "Sunset performance at an outdoor festival",
        },
        grandFinale: {
          caption: "Grand finale featuring 20 performers in sync",
          takenAt: "December 2023 · Kigali",
          alt: "High-energy finale with full troupe at a cultural festival",
        },
        intoreLeap: {
          caption: "Solo Intore leap captured mid-air",
          takenAt: "October 2023 · Nyamagabe",
          alt: "Intore dancer in full regalia mid-flight",
        },
        nightfallEncore: {
          caption: "Nightfall encore with torches and drums",
          takenAt: "June 2023 · Kigali",
          alt: "Crowd illuminated during the festival finale",
        },
      },
    },
    about: {
      pillarsLabel: "Pillars",
      pillarsHeading: "The Foundations of Our Practice",
      pillarsDescription:
        "Each performance, workshop, and partnership is guided by core principles that keep our heritage vibrant and relevant.",
      pillars: {
        storytelling: {
          title: "Authentic Storytelling",
          description:
            "Every performance highlights the narratives, rituals, and symbolism at the heart of Rwandan culture.",
        },
        community: {
          title: "Community Empowerment",
        },
      },
    },
  },
  fr: {
    nav: {
      home: "Accueil",
      about: "À propos",
      services: "Services",
      gallery: "Galerie",
      contact: "Contact",
    },
    header: {
      bookNow: "Réserver",
      toggleLabel: "Changer de langue",
    },
    footer: {
      description:
        "Préserver le patrimoine culturel du Rwanda à travers la danse traditionnelle, la musique et le conte pour des communautés du monde entier.",
      quickLinks: "Liens rapides",
      getInTouch: "Nous contacter",
      location: "Kigali, Rwanda",
      phone: "Téléphone : +250788992367",
      email: "E-mail : hello@inkumburwa.com",
      bookings: "Réservations : bookings@inkumburwa.com",
      crafted: "Conçu avec passion pour le patrimoine rwandais.",
      rights: "Tous droits réservés.",
    },
  },
};

type LocaleContextValue = {
  locale: Locale;
  setLocale: (value: Locale) => void;
  t: (key: string) => string;
};

const LocaleContext = createContext<LocaleContextValue | undefined>(undefined);

function resolvePath(dictionary: TranslationRecord, path: string): string | undefined {
  return path.split(".").reduce<string | TranslationRecord | undefined>((acc, segment) => {
    if (acc && typeof acc === "object" && segment in acc) {
      return acc[segment];
    }
    return undefined;
  }, dictionary) as string | undefined;
}

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem("inkumbura_locale");
    if (stored === "fr" || stored === "en") {
      setLocale(stored);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("inkumbura_locale", locale);
  }, [locale]);

  const value = useMemo<LocaleContextValue>(() => {
    const t = (key: string) => {
      const entry = resolvePath(translations[locale], key);
      if (typeof entry === "string") {
        return entry;
      }
      return resolvePath(translations.en, key) ?? key;
    };

    return {
      locale,
      setLocale,
      t,
    };
  }, [locale]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const context = useContext(LocaleContext);

  if (!context) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }

  return context;
}
