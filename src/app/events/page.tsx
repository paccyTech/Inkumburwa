import type { Metadata } from "next";
import EventsPageClient from "./EventsPageClient";

const siteUrl = "https://inkumburwa.com";

export const metadata: Metadata = {
  title: "Events | Inkumburwa z'Ibwanacyambwe",
  description:
    "Stay updated with upcoming performances, concerts, and events by Inkumburwa z'Ibwanacyambwe, Rwanda's premier traditional dance troupe.",
  keywords: [
    "Inkumburwa events",
    "Rwandan traditional concerts",
    "cultural performances",
    "Rwanda dance events",
    "African heritage concerts",
  ],
  alternates: {
    canonical: `${siteUrl}/events`,
  },
  openGraph: {
    title: "Events | Inkumburwa z'Ibwanacyambwe",
    description:
      "Discover upcoming traditional concerts and cultural events featuring Inkumburwa z'Ibwanacyambwe's authentic Rwandan performances.",
    url: `${siteUrl}/events`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Events | Inkumburwa z'Ibwanacyambwe",
    description:
      "Stay updated with upcoming traditional Rwandan dance performances and cultural events.",
    images: [`${siteUrl}/logo-original.png`],
  },
};

export default function EventsPage() {
  return <EventsPageClient />;
}
