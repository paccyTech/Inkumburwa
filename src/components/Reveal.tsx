"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function Reveal({ children, className, delay }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = (event: MediaQueryListEvent | MediaQueryList) => {
      setPrefersReducedMotion(event.matches);
    };

    updatePreference(mediaQuery);

    const listener = (event: MediaQueryListEvent) => updatePreference(event);
    mediaQuery.addEventListener("change", listener);

    return () => mediaQuery.removeEventListener("change", listener);
  }, []);

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }

    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  return (
    <div
      ref={ref}
      style={!prefersReducedMotion && delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={`transform-gpu will-change-[opacity,transform] transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,0.68,0,1)] ${
        prefersReducedMotion || isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-12"
      }${className ? ` ${className}` : ""}`}
    >
      {children}
    </div>
  );
}
