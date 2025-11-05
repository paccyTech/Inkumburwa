import type { Metadata } from "next";

const siteUrl = "https://inkumburwa.com";

export const metadata: Metadata = {
  title: "Cultural Performance Services",
  description:
    "Explore Inkumburwa z'Ibwanacyambwe's traditional dance performances, custom choreography, and cultural experiences available for events worldwide.",
  keywords: [
    "Inkumburwa services",
    "Rwandan dance performances",
    "cultural entertainment",
    "traditional choreography",
    "heritage workshops",
  ],
  alternates: {
    canonical: `${siteUrl}/services`,
  },
  openGraph: {
    title: "Inkumburwa Performance Services",
    description:
      "Book Inkumburwa z'Ibwanacyambwe for cultural performances, custom productions, and interactive heritage workshops.",
    url: `${siteUrl}/services`,
  },
};
