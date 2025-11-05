import Image from "next/image";

type PageHeroProps = {
  title: string;
  subtitle: string;
  backgroundImageUrl?: string;
};

export function PageHero({ title, subtitle, backgroundImageUrl }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-emerald-900 py-20 text-white">
      {backgroundImageUrl ? (
        <div className="absolute inset-0">
          <Image
            src={backgroundImageUrl}
            alt="Background"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/95 via-emerald-900/85 to-emerald-700/60" />
        </div>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950 via-emerald-900 to-emerald-700" />
      )}

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
          {title}
        </h1>
        <p className="mt-4 text-lg text-emerald-100/90 sm:text-xl">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
