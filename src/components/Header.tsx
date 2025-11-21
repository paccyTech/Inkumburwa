"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useLocale } from "@/context/LocaleContext";

const navLinks = [
  { href: "/", labelKey: "nav.home" },
  { href: "/about", labelKey: "nav.about" },
  { href: "/services", labelKey: "nav.services" },
  { href: "/gallery", labelKey: "nav.gallery" },
  { href: "/contact", labelKey: "nav.contact" },
];

const localeOptions = [
  { value: "en", label: "English", flag: "🇬🇧" },
  { value: "fr", label: "Français", flag: "🇫🇷" },
] as const;

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { locale, setLocale, t } = useLocale();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const handleLocaleChange = (value: (typeof localeOptions)[number]["value"]) => {
    setLocale(value);
  };

  return (
    <header className="absolute inset-x-0 top-0 z-50 bg-transparent">
      <div className="flex w-full items-center justify-between gap-6 px-4 py-5 md:px-8">
        <Link
          href="/"
          className="flex items-center gap-3 text-white drop-shadow-lg"
          onClick={() => setOpen(false)}
        >
          <span className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl bg-white/10 backdrop-blur-sm">
            <Image
              src="/logo.png"
              alt="Inkumburwa z'Ibwanacyambwe logo"
              width={44}
              height={44}
              className="h-full w-full object-contain"
              priority
            />
          </span>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-white leading-none sm:text-base sm:leading-tight">
              Inkumburwa <span className="block sm:inline">z&apos;Ibwanacyambwe</span>
            </span>
            <span className="text-[0.45rem] font-medium uppercase tracking-[0.24em] text-white/70 sm:text-[0.5rem]">
              Traditional Dance Troupe
            </span>
          </div>
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-8 text-sm font-medium text-white/80 drop-shadow-md xl:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative pb-2 transition-colors after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:scale-x-0 after:rounded-full after:bg-white after:opacity-75 after:transition-transform after:duration-200 after:ease-out ${
                isActive(link.href)
                  ? "text-white after:scale-x-100"
                  : "hover:text-white hover:after:scale-x-100"
              }`}
            >
              {t(link.labelKey)}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 xl:flex">
          <div className="relative">
            <label className="sr-only" htmlFor="locale-select-desktop">
              {t("header.toggleLabel")}
            </label>
            <select
              id="locale-select-desktop"
              value={locale}
              onChange={(event) => handleLocaleChange(event.target.value as (typeof localeOptions)[number]["value"])}
              className="appearance-none rounded-full border border-white/40 bg-white/15 px-4 py-2 pr-10 text-xs font-semibold text-white backdrop-blur-sm transition hover:bg-white/25 focus:outline-none focus:ring-2 focus:ring-white/40"
            >
              {localeOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.flag} {option.label}
                </option>
              ))}
            </select>
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-white/70">
              ▾
            </span>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 rounded-full border border-white/40 bg-white/15 px-6 py-2 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/25"
          >
            {t("header.bookNow")}
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/40 text-white transition hover:bg-white/10 xl:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="sr-only">Toggle navigation</span>
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {open ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <>
                <path d="M4 6h16" />
                <path d="M4 12h16" />
                <path d="M4 18h16" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="w-full px-4 pb-6 md:px-8 xl:hidden">
          <div className="mt-3 rounded-2xl border border-emerald-900/20 bg-emerald-950/95 px-6 py-6 text-white shadow-lg shadow-emerald-950/40">
            <div className="flex items-center justify-between pb-4">
              <span className="text-xs uppercase tracking-[0.3em] text-white/60">
                {t("header.toggleLabel")}
              </span>
              <div className="relative">
                <label className="sr-only" htmlFor="locale-select-mobile">
                  {t("header.toggleLabel")}
                </label>
                <select
                  id="locale-select-mobile"
                  value={locale}
                  onChange={(event) => handleLocaleChange(event.target.value as (typeof localeOptions)[number]["value"])}
                  className="appearance-none rounded-full border border-white/25 bg-white/10 px-4 py-2 pr-9 text-xs font-semibold text-white transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/40"
                >
                  {localeOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.flag} {option.label}
                    </option>
                  ))}
                </select>
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-white/60">
                  ▾
                </span>
              </div>
            </div>
            <nav className="flex flex-col gap-4 text-sm font-medium text-white/80">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-xl border px-4 py-3 transition ${
                    isActive(link.href)
                      ? "border-white/40 bg-white/10 text-white"
                      : "border-white/20 bg-transparent text-white/70 hover:border-white/40 hover:text-white"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {t(link.labelKey)}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-2 inline-flex items-center justify-center gap-3 rounded-full border border-white/40 bg-white/15 px-6 py-3 text-center text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/25"
                onClick={() => setOpen(false)}
              >
                {t("header.bookNow")}
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
