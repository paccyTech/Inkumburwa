import type { Metadata } from "next";

const siteUrl = "https://inkumburwa.com";

export const metadata: Metadata = {
  title: "Performance Gallery",
  description:
    "View highlights from Inkumburwa z'Ibwanacyambwe's traditional Rwandan performances, cultural exchanges, and festival showcases.",
  keywords: [
    "Inkumburwa gallery",
    "Rwandan dance photos",
    "traditional performance images",
    "African cultural troupe",
  ],
  alternates: {
    canonical: `${siteUrl}/gallery`,
  },
  openGraph: {
    title: "Inkumburwa Performance Gallery",
    description:
      "Explore photos from Inkumburwa z'Ibwanacyambwe's performances and cultural celebrations across Rwanda and beyond.",
    url: `${siteUrl}/gallery`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Performance Gallery | Inkumburwa z'Ibwanacyambwe",
    description:
      "View stunning photos from Inkumburwa z'Ibwanacyambwe's traditional Rwandan dance performances and cultural events.",
    images: [`${siteUrl}/logo-original.png`],
  },
};
