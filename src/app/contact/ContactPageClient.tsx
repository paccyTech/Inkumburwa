"use client";

import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { useLocale } from "@/context/LocaleContext";

type ContactDetail = {
  title: string;
  description: string;
  primary: {
    label: string;
    href?: string;
  };
  secondary?: {
    label: string;
    href?: string;
  };
};

const content = {
  en: {
    heroTitle: "Contact Us",
    heroSubtitle:
      "We would love to collaborate with you. Reach out and let’s create an unforgettable cultural experience together.",
    form: {
      heading: "Send Us a Message",
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
    connect: {
      heading: "Connect With Us",
      description: "Follow our journey and stay updated with upcoming performances and workshops.",
    },
    contactDetails: [
      {
        title: "Book a Performance",
        description: "Let us bring the rhythm of Rwanda to your stage, festival, or celebration.",
        primary: {
          label: "bookings@inkumburwa.com",
          href: "mailto:bookings@inkumburwa.com",
        },
        secondary: {
          label: "+250788992367",
          href: "tel:+250788992367",
        },
      },
      {
        title: "Media & Partnerships",
        description: "Collaborate on cultural projects, tours, and documentaries celebrating Rwandan heritage.",
        primary: {
          label: "media@inkumburwa.com",
          href: "mailto:media@inkumburwa.com",
        },
        secondary: {
          label: "+250788992368",
          href: "tel:+250788992368",
        },
      },
      {
        title: "Visit Our Center",
        description: "Experience rehearsals, exhibitions, and workshops at the Inkumburwa Cultural Arts Center.",
        primary: {
          label: "Kimironko Cultural Arts Center",
        },
        secondary: {
          label: "Mon – Sat · 09:00 to 18:00",
        },
      },
    ] satisfies ContactDetail[],
  },
  fr: {
    heroTitle: "Contactez-nous",
    heroSubtitle:
      "Nous serions ravis de collaborer avec vous. Prenez contact et créons ensemble une expérience culturelle inoubliable.",
    form: {
      heading: "Envoyez-nous un message",
      nameLabel: "Nom complet",
      namePlaceholder: "Votre nom",
      emailLabel: "Adresse e-mail",
      emailPlaceholder: "vous@example.com",
      phoneLabel: "Numéro de téléphone",
      phonePlaceholder: "+250788992367",
      serviceLabel: "Intéressé par",
      serviceOptions: {
        performances: "Performances culturelles",
        workshops: "Ateliers & résidences",
        consulting: "Conseil en patrimoine",
        other: "Autre collaboration",
      },
      messageLabel: "Message",
      messagePlaceholder: "Parlez-nous de votre événement ou de votre demande",
      submit: "Envoyer la demande",
      consent:
        "En envoyant ce formulaire, vous acceptez d'être contacté par Inkumburwa z'Ibwanacyambwe au sujet de votre demande.",
    },
    connect: {
      heading: "Restez connectés",
      description:
        "Suivez notre parcours et soyez informés de nos prochaines performances et ateliers.",
    },
    contactDetails: [
      {
        title: "Réserver une performance",
        description: "Nous apportons le rythme du Rwanda sur votre scène, festival ou célébration.",
        primary: {
          label: "bookings@inkumburwa.com",
          href: "mailto:bookings@inkumburwa.com",
        },
        secondary: {
          label: "+250788992367",
          href: "tel:+250788992367",
        },
      },
      {
        title: "Médias & partenariats",
        description:
          "Collaborez sur des projets culturels, des tournées et des documentaires célébrant l'héritage rwandais.",
        primary: {
          label: "media@inkumburwa.com",
          href: "mailto:media@inkumburwa.com",
        },
        secondary: {
          label: "+250788992368",
          href: "tel:+250788992368",
        },
      },
      {
        title: "Visitez notre centre",
        description:
          "Découvrez nos répétitions, expositions et ateliers au centre culturel Inkumburwa.",
        primary: {
          label: "Centre culturel de Kimironko",
        },
        secondary: {
          label: "Lun – Sam · 09h00 à 18h00",
        },
      },
    ] satisfies ContactDetail[],
  },
} as const;

export default function ContactPageClient() {
  const { locale } = useLocale();
  const copy = content[locale] ?? content.en;
  return (
    <div className="space-y-16 pb-24">
      <PageHero
        title={copy.heroTitle}
        subtitle={copy.heroSubtitle}
        backgroundImageUrl="/28.jpg"
        imagePosition="center 35%"
      />

      <section className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="space-y-8 rounded-3xl bg-white/95 p-8 backdrop-blur">
            <h2 className="text-2xl font-semibold text-emerald-900 sm:text-3xl">
              {copy.form.heading}
            </h2>
            <form action="#" method="post" className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-emerald-900/90">
                    {copy.form.nameLabel}
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="rounded-xl border border-emerald-900/20 bg-white px-4 py-3 text-sm text-emerald-900 outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
                    placeholder={copy.form.namePlaceholder}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-emerald-900/90">
                    {copy.form.emailLabel}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="rounded-xl border border-emerald-900/20 bg-white px-4 py-3 text-sm text-emerald-900 outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
                    placeholder={copy.form.emailPlaceholder}
                  />
                </div>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-sm font-medium text-emerald-900/90">
                    {copy.form.phoneLabel}
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="rounded-xl border border-emerald-900/20 bg-white px-4 py-3 text-sm text-emerald-900 outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
                    placeholder={copy.form.phonePlaceholder}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="service" className="text-sm font-medium text-emerald-900/90">
                    {copy.form.serviceLabel}
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="rounded-xl border border-emerald-900/20 bg-white px-4 py-3 text-sm text-emerald-900 outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
                  >
                    <option value="performances">{copy.form.serviceOptions.performances}</option>
                    <option value="workshops">{copy.form.serviceOptions.workshops}</option>
                    <option value="consulting">{copy.form.serviceOptions.consulting}</option>
                    <option value="other">{copy.form.serviceOptions.other}</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-emerald-900/90">
                  {copy.form.messageLabel}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="rounded-xl border border-emerald-900/20 bg-white px-4 py-3 text-sm text-emerald-900 outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
                  placeholder={copy.form.messagePlaceholder}
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-amber-500/30 transition hover:bg-amber-400"
              >
                {copy.form.submit}
              </button>
              <p className="text-xs text-emerald-800/70">
                {copy.form.consent}
              </p>
            </form>
          </Reveal>
          <Reveal delay={120} className="space-y-8">
            <div className="rounded-3xl bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900 p-8 text-white shadow-xl shadow-emerald-900/40">
              <h3 className="text-xl font-semibold">{copy.connect.heading}</h3>
              <p className="mt-3 text-sm text-white/80">
                {copy.connect.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="https://www.instagram.com/itorero_inkumburwa/"
                  aria-label="Instagram"
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 text-sm font-semibold text-white transition hover:bg-white hover:text-emerald-900"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="currentColor">
                    <path d="M7 3C4.243 3 2 5.243 2 8v8c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V8c0-2.757-2.243-5-5-5H7Zm0 2h10c1.654 0 3 1.346 3 3v8c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V8c0-1.654 1.346-3 3-3Zm10 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z" />
                  </svg>
                  Instagram
                </Link>
                <Link
                  href="https://wa.me/250788992367"
                  aria-label="WhatsApp"
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 text-sm font-semibold text-white transition hover:bg-white hover:text-emerald-900"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="currentColor">
                    <path d="M12.04 2.01a9.95 9.95 0 0 0-8.5 15.21L2 22l4.92-1.47a9.97 9.97 0 0 0 5.12 1.4h.01a10 10 0 0 0-.01-19.98Zm3.97 14.25c-.17.49-1.02.93-1.43.99-.37.05-.83.07-1.34-.08-.31-.1-.71-.23-1.22-.48-2.15-1.03-3.55-3.43-3.66-3.59-.1-.15-.87-1.16-.87-2.21 0-1.05.55-1.56.74-1.78.17-.21.38-.27.5-.27.12 0 .25 0 .37.01.12.01.28-.04.44.33.17.39.58 1.34.62 1.44.05.1.08.22.02.36-.06.15-.09.23-.18.35-.1.12-.2.27-.29.36-.1.12-.2.24-.09.46.1.21.44.72.94 1.16.65.58 1.2.76 1.41.85.15.05.33.04.44-.06.14-.15.31-.4.48-.64.12-.17.27-.19.44-.13.17.06 1.08.51 1.27.6.19.09.31.14.36.22.04.08.04.48-.13.97Z" />
                  </svg>
                  WhatsApp
                </Link>
                <Link
                  href="https://www.youtube.com/@inkumbura"
                  aria-label="YouTube"
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 text-sm font-semibold text-white transition hover:bg-white hover:text-emerald-900"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="currentColor">
                    <path d="M21.543 6.498a2.704 2.704 0 0 0-1.9-1.915C17.864 4 12 4 12 4s-5.864 0-7.643.583a2.704 2.704 0 0 0-1.9 1.915C2 8.29 2 12 2 12s0 3.71.457 5.502a2.704 2.704 0 0 0 1.9 1.915C6.136 20 12 20 12 20s5.864 0 7.643-.583a2.704 2.704 0 0 0 1.9-1.915C22 15.71 22 12 22 12s0-3.71-.457-5.502ZM10 15.5v-7l6 3.5-6 3.5Z" />
                  </svg>
                  YouTube
                </Link>
              </div>
            </div>
            <div className="grid gap-6">
              {copy.contactDetails.map((detail, index) => (
                <Reveal key={detail.title} delay={180 + index * 80} className="space-y-2 rounded-3xl border border-emerald-900/10 bg-white/95 p-6 shadow-sm shadow-emerald-900/5 backdrop-blur">
                  <h4 className="text-lg font-semibold text-emerald-900">
                    {detail.title}
                  </h4>
                  <p className="text-sm text-emerald-900/80">
                    {detail.description}
                  </p>
                  <div className="text-sm font-semibold text-emerald-800">
                    {detail.primary.href ? (
                      <Link href={detail.primary.href} className="underline decoration-emerald-500/40 underline-offset-4 transition hover:text-emerald-600">
                        {detail.primary.label}
                      </Link>
                    ) : (
                      <span>{detail.primary.label}</span>
                    )}
                  </div>
                  {detail.secondary ? (
                    <div className="text-xs uppercase tracking-[0.25em] text-emerald-700">
                      {detail.secondary.href ? (
                        <Link href={detail.secondary.href} className="transition hover:text-emerald-600">
                          {detail.secondary.label}
                        </Link>
                      ) : (
                        <span>{detail.secondary.label}</span>
                      )}
                    </div>
                  ) : null}
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
