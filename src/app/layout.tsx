import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LocaleProvider } from "@/context/LocaleContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Inkumburwa z'Ibwanacyambwe | Traditional Dance Troupe",
  description:
    "Experience the authentic beauty of traditional Rwandan culture with Inkumbura z'Ibwanacyambwe.",
  icons: {
    icon: "/logo-original.png",
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
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-emerald-50 text-emerald-950 antialiased`}
      >
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
