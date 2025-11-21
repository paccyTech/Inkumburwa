import Script from "next/script";
import type { Metadata } from "next";
import { Poppins, Fira_Mono } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LocaleProvider } from "@/context/LocaleContext";
import "./globals.css";

const bodyFont = Poppins({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const codeFont = Fira_Mono({
  variable: "--font-code",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const siteUrl = "https://inkumburwa.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Inkumburwa z'Ibwanacyambwe",
    template: "%s | Inkumburwa z'Ibwanacyambwe",
  },
  description:
    "Experience the authentic beauty of traditional Rwandan culture with Inkumburwa z'Ibwanacyambwe.",
  keywords: [
    "Inkumburwa",
    "Rwandan dance troupe",
    "traditional Rwandan dance",
    "Rwanda cultural performances",
    "African heritage",
    "Rwandan music and dance",
    "cultural troupe",
    "Kigali performers",
  ],
  authors: [{ name: "Inkumburwa z'Ibwanacyambwe" }],
  creator: "Inkumburwa z'Ibwanacyambwe",
  publisher: "Inkumburwa z'Ibwanacyambwe",
  applicationName: "Inkumburwa z'Ibwanacyambwe",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Inkumburwa z'Ibwanacyambwe | Traditional Dance Troupe",
    description:
      "Immerse yourself in traditional Rwandan dance, music, and storytelling with Inkumburwa z'Ibwanacyambwe.",
    siteName: "Inkumburwa z'Ibwanacyambwe",
    locale: "en_US",
    images: [
      {
        url: `${siteUrl}/logo-original.png`,
        width: 512,
        height: 512,
        alt: "Inkumburwa z'Ibwanacyambwe emblem",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@inkumburwa",
    title: "Inkumburwa z'Ibwanacyambwe | Traditional Dance Troupe",
    description:
      "Discover the movement and music of Rwanda with Inkumburwa z'Ibwanacyambwe, a premier cultural troupe.",
    images: [`${siteUrl}/logo-original.png`],
  },
  icons: {
    icon: "/logo-original.png",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "PerformingGroup",
  name: "Inkumburwa z'Ibwanacyambwe",
  url: siteUrl,
  logo: `${siteUrl}/logo-original.png`,
  sameAs: [
    "https://www.instagram.com/itorero_inkumburwa/",
    "https://www.youtube.com/@inkumbura",
  ],
  foundingDate: "2020",
  address: {
    "@type": "PostalAddress",
    addressCountry: "RW",
    addressLocality: "Kigali",
    addressRegion: "Kigali City",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "hello@inkumbura.com",
    telephone: "+250788992367",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bodyFont.variable} ${codeFont.variable} min-h-screen bg-emerald-50 text-emerald-950 antialiased`}
      >
        <Script id="organization-schema" type="application/ld+json" strategy="beforeInteractive">
          {JSON.stringify(organizationJsonLd)}
        </Script>
        <LocaleProvider>
          <Header />
          <main className="bg-white">
            {children}
          </main>
          <Footer />
        </LocaleProvider>
      </body>
    </html>
  );
}
