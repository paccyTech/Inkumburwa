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
          label: "inkumburwazibwanacyambwe@gmail.com",
          href: "mailto:inkumburwazibwanacyambwe@gmail.com",
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
          label: "inkumburwazibwanacyambwe@gmail.com",
          href: "mailto:inkumburwazibwanacyambwe@gmail.com",
        },
        secondary: {
          label: "+250788992367",
          href: "tel:+250788992367",
        },
      },
      {
        title: "Visit Our Center",
        description: "Experience rehearsals, exhibitions, and workshops at the Inkumburwa Cultural Arts Center at UR College of Science and Technology.",
        primary: {
          label: "UR College of Science and Technology, KN 7 Ave, Kigali, Rwanda (Former KIST)",
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
          label: "inkumburwazibwanacyambwe@gmail.com",
          href: "mailto:inkumburwazibwanacyambwe@gmail.com",
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
          label: "inkumburwazibwanacyambwe@gmail.com",
          href: "mailto:inkumburwazibwanacyambwe@gmail.com",
        },
        secondary: {
          label: "+250788992367",
          href: "tel:+250788992367",
        },
      },
      {
        title: "Visitez notre centre",
        description:
          "Découvrez nos répétitions, expositions et ateliers au centre culturel Inkumburwa à l'Université du Rwanda, Collège des Sciences et Technologies.",
        primary: {
          label: "Université du Rwanda, Collège des Sciences et Technologies, KN 7 Ave, Kigali, Rwanda (Ancien KIST)",
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50/30">
      <div className="space-y-24 pb-24">
        {/* Hero Section */}
        <PageHero
          title={copy.heroTitle}
          subtitle={copy.heroSubtitle}
          backgroundImageUrl="/28.jpg"
          imagePosition="center 35%"
        />

        {/* Contact Section */}
        <section className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr] xl:gap-24">
            {/* Contact Form */}
            <div className="space-y-8">
              <Reveal className="space-y-4">
                <div className="space-y-3">
                  <h2 className="text-4xl font-bold tracking-tight text-emerald-950 sm:text-5xl">
                    {copy.form.heading}
                  </h2>
                  <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-amber-400 rounded-full"></div>
                  <p className="text-lg text-emerald-900/80 leading-relaxed">
                    Ready to collaborate? Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={100} className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-emerald-50/50 rounded-3xl"></div>
                <div className="relative rounded-3xl border border-emerald-100/50 bg-white/80 backdrop-blur-sm p-8 lg:p-10 shadow-2xl shadow-emerald-900/10">
                  <form className="space-y-8">
                    {/* Name and Email Row */}
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-3">
                        <label htmlFor="name" className="block text-sm font-semibold text-emerald-900">
                          {copy.form.nameLabel}
                        </label>
                        <div className="relative">
                          <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            className="w-full rounded-2xl border-2 border-emerald-100 bg-white px-6 py-4 text-base text-emerald-900 placeholder:text-emerald-400 outline-none transition-all duration-300 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 hover:border-emerald-300"
                            placeholder={copy.form.namePlaceholder}
                          />
                          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500/5 to-transparent opacity-0 transition-opacity duration-300 peer-focus:opacity-100 pointer-events-none"></div>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <label htmlFor="email" className="block text-sm font-semibold text-emerald-900">
                          {copy.form.emailLabel}
                        </label>
                        <div className="relative">
                          <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            className="w-full rounded-2xl border-2 border-emerald-100 bg-white px-6 py-4 text-base text-emerald-900 placeholder:text-emerald-400 outline-none transition-all duration-300 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 hover:border-emerald-300"
                            placeholder={copy.form.emailPlaceholder}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Phone and Service Row */}
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-3">
                        <label htmlFor="phone" className="block text-sm font-semibold text-emerald-900">
                          {copy.form.phoneLabel}
                        </label>
                        <div className="relative">
                          <input
                            id="phone"
                            name="phone"
                            type="tel"
                            className="w-full rounded-2xl border-2 border-emerald-100 bg-white px-6 py-4 text-base text-emerald-900 placeholder:text-emerald-400 outline-none transition-all duration-300 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 hover:border-emerald-300"
                            placeholder={copy.form.phonePlaceholder}
                          />
                        </div>
                      </div>
                      <div className="space-y-3">
                        <label htmlFor="service" className="block text-sm font-semibold text-emerald-900">
                          {copy.form.serviceLabel}
                        </label>
                        <div className="relative">
                          <select
                            id="service"
                            name="service"
                            className="w-full rounded-2xl border-2 border-emerald-100 bg-white px-6 py-4 text-base text-emerald-900 outline-none transition-all duration-300 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 hover:border-emerald-300 appearance-none"
                          >
                            <option value="performances">{copy.form.serviceOptions.performances}</option>
                            <option value="workshops">{copy.form.serviceOptions.workshops}</option>
                            <option value="consulting">{copy.form.serviceOptions.consulting}</option>
                            <option value="other">{copy.form.serviceOptions.other}</option>
                          </select>
                          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                            <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-3">
                      <label htmlFor="message" className="block text-sm font-semibold text-emerald-900">
                        {copy.form.messageLabel}
                      </label>
                      <div className="relative">
                        <textarea
                          id="message"
                          name="message"
                          rows={6}
                          required
                          className="w-full rounded-2xl border-2 border-emerald-100 bg-white px-6 py-4 text-base text-emerald-900 placeholder:text-emerald-400 outline-none transition-all duration-300 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 hover:border-emerald-300 resize-none"
                          placeholder={copy.form.messagePlaceholder}
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                      <button
                        type="submit"
                        className="group relative w-full overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-600 to-emerald-700 px-8 py-5 text-base font-bold text-white shadow-xl shadow-emerald-600/30 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-600/40 hover:-translate-y-0.5"
                      >
                        <span className="relative z-10 flex items-center justify-center gap-3">
                          {copy.form.submit}
                          <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-emerald-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                      </button>
                    </div>

                    {/* Consent */}
                    <p className="text-sm text-emerald-700/80 leading-relaxed">
                      {copy.form.consent}
                    </p>
                  </form>
                </div>
              </Reveal>
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-8">
              {/* Social Connect Card */}
              <Reveal delay={200}>
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-950 p-8 text-white shadow-2xl shadow-emerald-900/40">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/10 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="relative space-y-6">
                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold">{copy.connect.heading}</h3>
                      <p className="text-emerald-100 leading-relaxed">
                        {copy.connect.description}
                      </p>
                    </div>

                    <div className="grid gap-3">
                      <Link
                        href="https://www.instagram.com/itorero_inkumburwa/"
                        className="group flex items-center gap-4 rounded-2xl bg-white/10 p-4 backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-emerald-900 hover:scale-105"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-orange-500">
                          <svg viewBox="0 0 24 24" className="h-6 w-6 text-white" fill="currentColor">
                            <path d="M7 3C4.243 3 2 5.243 2 8v8c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V8c0-2.757-2.243-5-5-5H7Zm0 2h10c1.654 0 3 1.346 3 3v8c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V8c0-1.654 1.346-3 3-3Zm10 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z" />
                          </svg>
                        </div>
                        <div>
                          <div className="font-semibold">Instagram</div>
                          <div className="text-sm opacity-80">@itorero_inkumburwa</div>
                        </div>
                      </Link>

                      <Link
                        href="https://wa.me/250788992367"
                        className="group flex items-center gap-4 rounded-2xl bg-white/10 p-4 backdrop-blur-sm transition-all duration-300 hover:bg-green-500 hover:text-white hover:scale-105"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500">
                          <svg viewBox="0 0 24 24" className="h-6 w-6 text-white" fill="currentColor">
                            <path d="M12.04 2.01a9.95 9.95 0 0 0-8.5 15.21L2 22l4.92-1.47a9.97 9.97 0 0 0 5.12 1.4h.01a10 10 0 0 0-.01-19.98Zm3.97 14.25c-.17.49-1.02.93-1.43.99-.37.05-.83.07-1.34-.08-.31-.1-.71-.23-1.22-.48-2.15-1.03-3.55-3.43-3.66-3.59-.1-.15-.87-1.16-.87-2.21 0-1.05.55-1.56.74-1.78.17-.21.38-.27.5-.27.12 0 .25 0 .37.01.12.01.28-.04.44.33.17.39.58 1.34.62 1.44.05.1.08.22.02.36-.06.15-.09.23-.18.35-.1.12-.2.27-.29.36-.1.12-.2.24-.09.46.1.21.44.72.94 1.16.65.58 1.2.76 1.41.85.15.05.33.04.44-.06.14-.15.31-.4.48-.64.12-.17.27-.19.44-.13.17.06 1.08.51 1.27.6.19.09.31.14.36.22.04.08.04.48-.13.97Z" />
                          </svg>
                        </div>
                        <div>
                          <div className="font-semibold">WhatsApp</div>
                          <div className="text-sm opacity-80">Direct Message</div>
                        </div>
                      </Link>

                      <Link
                        href="https://www.youtube.com/@Itorero_inkumburwa"
                        className="group flex items-center gap-4 rounded-2xl bg-white/10 p-4 backdrop-blur-sm transition-all duration-300 hover:bg-red-500 hover:text-white hover:scale-105"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500">
                          <svg viewBox="0 0 24 24" className="h-6 w-6 text-white" fill="currentColor">
                            <path d="M21.543 6.498a2.704 2.704 0 0 0-1.9-1.915C17.864 4 12 4 12 4s-5.864 0-7.643.583a2.704 2.704 0 0 0-1.9 1.915C2 8.29 2 12 2 12s0 3.71.457 5.502a2.704 2.704 0 0 0 1.9 1.915C6.136 20 12 20 12 20s5.864 0 7.643-.583a2.704 2.704 0 0 0 1.9-1.915C22 15.71 22 12 22 12s0-3.71-.457-5.502ZM10 15.5v-7l6 3.5-6 3.5Z" />
                          </svg>
                        </div>
                        <div>
                          <div className="font-semibold">YouTube</div>
                          <div className="text-sm opacity-80">@Itorero_inkumburwa</div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Contact Details Cards */}
              <div className="space-y-6">
                {copy.contactDetails.map((detail, index) => (
                  <Reveal key={detail.title} delay={300 + index * 100}>
                    <div className="group relative overflow-hidden rounded-3xl border border-emerald-100/50 bg-white/90 backdrop-blur-sm p-6 shadow-xl shadow-emerald-900/10 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-900/20 hover:-translate-y-1">
                      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-emerald-400/20 to-amber-400/20 rounded-full -translate-y-10 translate-x-10"></div>
                      <div className="relative space-y-4">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0">
                            {index === 0 && (
                              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-lg">
                                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v13M9 19l12-3M9 19V6l12-3v13M9 19l12-3M9 19V6l12-3v13M9 19l12-3" />
                                </svg>
                              </div>
                            )}
                            {index === 1 && (
                              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 text-white shadow-lg">
                                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 9.95 0 0121 8.618v6.764a1 9.97 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                </svg>
                              </div>
                            )}
                            {index === 2 && (
                              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-lg">
                                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                              </div>
                            )}
                          </div>
                          <div className="flex-1 space-y-2">
                            <h4 className="text-xl font-bold text-emerald-950 group-hover:text-emerald-700 transition-colors">
                              {detail.title}
                            </h4>
                            <p className="text-sm text-emerald-900/75 leading-relaxed">
                              {detail.description}
                            </p>
                          </div>
                        </div>

                        <div className="space-y-2 border-t border-emerald-100/50 pt-4">
                          <div className="text-base font-semibold text-emerald-800">
                            {detail.primary.href ? (
                              <Link href={detail.primary.href} className="group/link flex items-center gap-2 hover:text-emerald-600 transition-colors">
                                {detail.primary.label}
                                <svg className="w-4 h-4 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                              </Link>
                            ) : (
                              <span>{detail.primary.label}</span>
                            )}
                          </div>
                          {detail.secondary && (
                            <div className="text-sm font-medium text-emerald-700/80">
                              {detail.secondary.href ? (
                                <Link href={detail.secondary.href} className="hover:text-emerald-600 transition-colors">
                                  {detail.secondary.label}
                                </Link>
                              ) : (
                                <span>{detail.secondary.label}</span>
                              )}
                            </div>
                          )}
                          {index === 2 && (
                            <div className="mt-4">
                              <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.494!2d30.0644!3d-1.9579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1sChIJV21Oyyuk3BkR26oTGUrG2hQ!2sUR%20College%20of%20Science%20and%20Technology!5e0!3m2!1sen!2srw!4v1699999999!5m2!1sen!2srw"
                                width="100%"
                                height="200"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="UR College of Science and Technology Location"
                              ></iframe>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
