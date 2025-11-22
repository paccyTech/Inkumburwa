"use client";

import { Reveal } from "../Reveal";
import { useLocale } from "@/context/LocaleContext";

const content = {
  en: {
    heading: "What Our Clients Say",
    description: "Hear from event organizers and couples who have experienced the magic of Inkumburwa performances.",
    testimonials: [
      {
        quote: "Inkumburwa transformed our wedding into a celebration of culture and joy. Their energy was infectious, and every guest left with unforgettable memories.",
        author: "Chantal Uwimana",
        role: "Bride",
        event: "Wedding Reception",
      },
      {
        quote: "For our corporate gala, Inkumburwa delivered a performance that perfectly captured the spirit of Rwandan heritage. Our international guests were mesmerized.",
        author: "Pierre Nkurunziza",
        role: "Event Manager",
        event: "Corporate Event",
      },
      {
        quote: "As festival organizers, we've worked with many performers, but Inkumburwa stands out. Their professionalism and authenticity bring our events to life.",
        author: "Marie Claire Mukamana",
        role: "Festival Director",
        event: "Cultural Festival",
      },
    ],
  },
  fr: {
    heading: "Ce que disent nos clients",
    description: "Écoutez les organisateurs d'événements et les couples qui ont vécu la magie des performances d'Inkumburwa.",
    testimonials: [
      {
        quote: "Inkumburwa a transformé notre mariage en une célébration de culture et de joie. Leur énergie était contagieuse, et chaque invité est reparti avec des souvenirs inoubliables.",
        author: "Chantal Uwimana",
        role: "Mariée",
        event: "Réception de mariage",
      },
      {
        quote: "Pour notre gala d'entreprise, Inkumburwa a offert une performance qui capturait parfaitement l'esprit de l'héritage rwandais. Nos invités internationaux étaient fascinés.",
        author: "Pierre Nkurunziza",
        role: "Responsable d'événement",
        event: "Événement d'entreprise",
      },
      {
        quote: "En tant qu'organisateurs de festival, nous avons travaillé avec de nombreux artistes, mais Inkumburwa se distingue. Leur professionnalisme et leur authenticité donnent vie à nos événements.",
        author: "Marie Claire Mukamana",
        role: "Directrice de festival",
        event: "Festival culturel",
      },
    ],
  },
} as const;

export function TestimonialsSection() {
  const { locale } = useLocale();
  const copy = content[locale] ?? content.en;

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="space-y-4 text-center">
          <h2 className="text-3xl font-bold text-emerald-950 sm:text-4xl">
            {copy.heading}
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-emerald-900/80">
            {copy.description}
          </p>
        </Reveal>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {copy.testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.author} delay={index * 120} className="flex flex-col">
              <div className="flex flex-1 flex-col rounded-2xl border border-emerald-900/10 bg-emerald-50/50 p-8 shadow-sm shadow-emerald-900/5">
                <div className="mb-6 flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="mb-6 flex-1 text-emerald-900/85">
                  <p className="text-lg leading-relaxed italic">"{testimonial.quote}"</p>
                </blockquote>
                <footer className="space-y-1">
                  <div className="font-semibold text-emerald-950">{testimonial.author}</div>
                  <div className="text-sm text-emerald-600">{testimonial.role}</div>
                  <div className="text-xs uppercase tracking-wider text-emerald-500/80">{testimonial.event}</div>
                </footer>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
