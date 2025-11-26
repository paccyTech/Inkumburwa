import type { Metadata } from "next";

const siteUrl = "https://inkumburwa.com";

export const metadata: Metadata = {
  title: "Contact Inkumburwa z'Ibwanacyambwe",
  description:
    "Reach Inkumburwa z'Ibwanacyambwe to book traditional Rwandan dance performances, cultural collaborations, or media partnerships.",
  keywords: [
    "contact Inkumburwa",
    "book Rwandan performers",
    "traditional dance bookings",
    "Inkumburwa contact",
    "Rwanda cultural troupe",
  ],
  alternates: {
    canonical: `${siteUrl}/contact`,
  },
  openGraph: {
    title: "Contact Inkumburwa z'Ibwanacyambwe",
    description:
      "Connect with Inkumburwa z'Ibwanacyambwe for performances, workshops, and cultural collaborations across Rwanda and worldwide.",
    url: `${siteUrl}/contact`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Inkumburwa z'Ibwanacyambwe",
    description:
      "Reach out to book authentic Rwandan dance performances and cultural experiences for your events.",
    images: [`${siteUrl}/logo-original.png`],
  },
};
