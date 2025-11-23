"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale } from "@/context/LocaleContext";

export function Footer() {
  const pathname = usePathname();
  const { t } = useLocale();

  // Don't render footer on admin routes
  if (pathname.startsWith('/admin')) {
    return null;
  }

  return (
    <footer className="bg-emerald-950 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-3">
        <div className="space-y-3">
          <span className="inline-flex items-center gap-3 text-lg font-semibold">
            <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-white/20 bg-white">
              <Image
                src="/logo.png"
                alt="Inkumburwa z'Ibwanacyambwe logo"
                width={40}
                height={40}
                className="h-full w-full object-contain"
              />
            </span>
            Inkumburwa z&apos;Ibwanacyambwe
          </span>
          <p className="text-sm text-white/80">{t("footer.description")}</p>
        </div>
        <div className="space-y-3">
          <h4 className="text-sm font-semibold uppercase tracking-wide text-amber-400">
            {t("footer.quickLinks")}
          </h4>
          <nav className="flex flex-col gap-2 text-sm text-white/80">
            <Link href="/about" className="hover:text-white">
              {t("nav.about")}
            </Link>
            <Link href="/services" className="hover:text-white">
              {t("nav.services")}
            </Link>
            <Link href="/gallery" className="hover:text-white">
              {t("nav.gallery")}
            </Link>
            <Link href="/contact" className="hover:text-white">
              {t("nav.contact")}
            </Link>
          </nav>
        </div>
        <div className="space-y-4 text-sm text-white/80">
          <h4 className="text-sm font-semibold uppercase tracking-wide text-amber-400">
            {t("footer.getInTouch")}
          </h4>
          <p>{t("footer.location")}</p>
          <p>{t("footer.phone")}</p>
          <p>{t("footer.email")}</p>
          <p>{t("footer.bookings")}</p>
          <div className="flex items-center gap-3 pt-2 text-white">
            <Link
              href="https://wa.me/250788992367"
              aria-label="Chat with us on WhatsApp"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/10 transition hover:bg-white hover:text-emerald-900"
              target="_blank"
              rel="noreferrer"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="currentColor">
                <path d="M12.04 2.01a9.95 9.95 0 0 0-8.5 15.21L2 22l4.92-1.47a9.97 9.97 0 0 0 5.12 1.4h.01a10 10 0 0 0-.01-19.98Zm3.97 14.25c-.17.49-1.02.93-1.43.99-.37.05-.83.07-1.34-.08-.31-.1-.71-.23-1.22-.48-2.15-1.03-3.55-3.43-3.66-3.59-.1-.15-.87-1.16-.87-2.21 0-1.05.55-1.56.74-1.78.17-.21.38-.27.5-.27.12 0 .25 0 .37.01.12.01.28-.04.44.33.17.39.58 1.34.62 1.44.05.1.08.22.02.36-.06.15-.09.23-.18.35-.1.12-.2.27-.29.36-.1.12-.2.24-.09.46.1.21.44.72.94 1.16.65.58 1.2.76 1.41.85.15.05.33.04.44-.06.14-.15.31-.4.48-.64.12-.17.27-.19.44-.13.17.06 1.08.51 1.27.6.19.09.31.14.36.22.04.08.04.48-.13.97Z" />
              </svg>
            </Link>
            <Link
              href="https://www.instagram.com/itorero_inkumburwa/"
              aria-label="Follow us on Instagram"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/10 transition hover:bg-white hover:text-emerald-900"
              target="_blank"
              rel="noreferrer"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="currentColor">
                <path d="M7 3C4.243 3 2 5.243 2 8v8c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V8c0-2.757-2.243-5-5-5H7Zm0 2h10c1.654 0 3 1.346 3 3v8c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V8c0-1.654 1.346-3 3-3Zm10 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 bg-emerald-950/80">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-center text-xs text-white/60 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Inkumburwa z&apos;Ibwanacyambwe. All rights reserved.</p>
          <p>{t("footer.crafted")}</p>
        </div>
      </div>
    </footer>
  );
}
