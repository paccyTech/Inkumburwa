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
        icon: "🪘",
      },
      {
        label: "Wedding Celebrations",
        description:
          "Special choreographed performances to honor couples and celebrate love in traditional style.",
        icon: "💍",
      },
      {
        label: "Cultural Events",
        description:
          "Professional performances for festivals, corporate events, and cultural celebrations.",
        icon: "🎉",
      },
      {
        label: "Collaborations",
        description:
          "Partnership opportunities with other artists and cultural organizations.",
        icon: "🤝",
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
        icon: "🪘",
      },
      {
        label: "Célébrations de mariage",
        description:
          "Des chorégraphies spéciales pour honorer les couples et célébrer l'amour dans la pure tradition rwandaise.",
        icon: "💍",
      },
      {
        label: "Événements culturels",
        description:
          "Des performances professionnelles pour festivals, événements d'entreprise et célébrations culturelles.",
        icon: "🎉",
      },
      {
        label: "Collaborations",
        description:
          "Des opportunités de partenariat avec d'autres artistes et organisations culturelles.",
        icon: "🤝",
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
            className="group relative flex flex-col gap-4 p-6 text-left transition hover:-translate-y-2"
          >
            <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100" />
            <span className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-900 text-xl">
              {service.icon}
            </span>
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
    </section>
  );
}
