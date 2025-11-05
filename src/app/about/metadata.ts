import type { Metadata } from "next";

const siteUrl = "https://inkumburwa.com";

export const metadata: Metadata = {
  title: "About Inkumburwa z'Ibwanacyambwe",
  description:
    "Discover the heritage, mission, and leadership of Inkumburwa z'Ibwanacyambwe, Rwanda's premier traditional dance troupe founded in 2020.",
  keywords: [
    "Inkumburwa",
    "Rwandan culture",
    "traditional dance troupe",
    "Rwanda heritage",
    "African performing arts",
  ],
  alternates: {
    canonical: `${siteUrl}/about`,
  },
  openGraph: {
    title: "About Inkumburwa z'Ibwanacyambwe",
    description:
      "Learn how Inkumburwa z'Ibwanacyambwe preserves Rwanda's dance and musical heritage through its mission, vision, and leadership.",
    url: `${siteUrl}/about`,
  },
};
