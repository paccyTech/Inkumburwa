"use client";

import { useLocale } from "@/context/LocaleContext";

const content = {
  en: {
    heading: "Our Cultural Services",
    description:
      "Bringing authentic Rwandan traditions to your special events with professional performances that captivate and inspire.",
    services: [
      {
        label: "Traditional Dance",
        description:
          "Authentic performances featuring classic Rwandan dances with traditional music and costumes.",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
            <path d="M9 18V5l12-2v13" />
            <path d="m9 9 12-2" />
            <circle cx="6" cy="18" r="3" />
            <circle cx="18" cy="16" r="3" />
          </svg>
        ),
      },
      {
        label: "Wedding Celebrations",
        description:
          "Special choreographed performances to honor couples and celebrate love in traditional style.",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z" />
          </svg>
        ),
      },
      {
        label: "Cultural Events",
        description:
          "Professional performances for festivals, corporate events, and cultural celebrations.",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
            <path d="M5.8 11.3 2 22l10.7-3.79" />
            <path d="M4 3h.01" />
            <path d="M22 8h.01" />
            <path d="M15 2h.01" />
            <path d="M22 20h.01" />
            <path d="m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12v0c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10" />
            <path d="m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11v0c-.11.7-.72 1.22-1.43 1.22H17" />
            <path d="m11 2 .33.82c.34.86-.2 1.82-1.11 1.98v0C9.52 4.9 9 5.52 9 6.23V7" />
            <path d="M11 13c1.93 1.93 2.83 4.17 2.5 6.5-.47 3.32-2.91 6.19-3.91 7.31-.81.81-2.37.81-3.17 0C6.43 25.69 4 22.82 3.5 19.5c-.33-2.33.57-4.57 2.5-6.5l7-7Z" />
          </svg>
        ),
      },
      {
        label: "Collaborations",
        description:
          "Partnership opportunities with other artists and cultural organizations.",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        ),
      },
    ],
  },
  fr: {
    heading: "Nos services culturels",
    description:
      "Apportez les traditions authentiques du Rwanda à vos événements grâce à des prestations professionnelles qui captivent et inspirent.",
    services: [
      {
        label: "Danse traditionnelle",
        description:
          "Des performances authentiques mettant en valeur les danses rwandaises classiques avec musique et costumes traditionnels.",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
            <path d="M9 18V5l12-2v13" />
            <path d="m9 9 12-2" />
            <circle cx="6" cy="18" r="3" />
            <circle cx="18" cy="16" r="3" />
          </svg>
        ),
      },
      {
        label: "Célébrations de mariage",
        description:
          "Des chorégraphies spéciales pour honorer les couples et célébrer l'amour dans la pure tradition rwandaise.",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z" />
          </svg>
        ),
      },
      {
        label: "Événements culturels",
        description:
          "Des performances professionnelles pour festivals, événements d'entreprise et célébrations culturelles.",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
            <path d="M5.8 11.3 2 22l10.7-3.79" />
            <path d="M4 3h.01" />
            <path d="M22 8h.01" />
            <path d="M15 2h.01" />
            <path d="M22 20h.01" />
            <path d="m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12v0c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10" />
            <path d="m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11v0c-.11.7-.72 1.22-1.43 1.22H17" />
            <path d="m11 2 .33.82c.34.86-.2 1.82-1.11 1.98v0C9.52 4.9 9 5.52 9 6.23V7" />
            <path d="M11 13c1.93 1.93 2.83 4.17 2.5 6.5-.47 3.32-2.91 6.19-3.91 7.31-.81.81-2.37.81-3.17 0C6.43 25.69 4 22.82 3.5 19.5c-.33-2.33.57-4.57 2.5-6.5l7-7Z" />
          </svg>
        ),
      },
      {
        label: "Collaborations",
        description:
          "Des opportunités de partenariat avec d'autres artistes et organisations culturelles.",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        ),
      },
    ],
  },
} as const;

export function ServicesOverviewSection() {
  const { locale } = useLocale();
  const copy = content[locale] ?? content.en;

  return (
    <section className="mx-auto max-w-6xl px-6 pb-24 pt-16">
      <div className="mx-auto max-w-3xl space-y-4 text-center">
        <h2 className="text-3xl font-bold text-emerald-950 sm:text-4xl">
          {copy.heading}
        </h2>
        <p className="text-base leading-relaxed text-emerald-900/80">
          {copy.description}
        </p>
      </div>
      <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {copy.services.map((service) => (
          <div
            key={service.label}
            className="group relative flex flex-col gap-4 rounded-2xl border border-emerald-900/10 bg-white p-6 text-center shadow-sm shadow-emerald-900/5 transition hover:-translate-y-2 hover:shadow-lg hover:shadow-emerald-900/10"
          >
            <div className="flex justify-center">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full text-emerald-600">
                {service.icon}
              </span>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-emerald-900">
                {service.label}
              </h3>
              <p className="text-sm leading-relaxed text-emerald-900/80">
                {service.description}
              </p>
            </div>
            <span className="mt-auto h-0.5 w-12 rounded-full bg-amber-400 transition group-hover:w-16" />
          </div>
        ))}
      </div>

      {/* Cultural Services Video */}
      <div className="mt-16">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-emerald-950 mb-2">
              Experience Our Cultural Heritage
            </h3>
            <p className="text-emerald-900/80">
              Watch our traditional performances in action
            </p>
          </div>
          <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
            <iframe
              src="https://youtube.com/shorts/kL-n446FCDs?feature=shared"
              title="Traditional Rwandan Cultural Performance"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
