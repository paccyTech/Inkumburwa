import Image from "next/image";

type PageHeroProps = {
  title: string;
  subtitle: string;
  backgroundImageUrl?: string;
  imagePosition?: string;
};

export function PageHero({ title, subtitle, backgroundImageUrl, imagePosition }: PageHeroProps) {
  return (
    <section className="relative flex min-h-[70vh] items-end overflow-hidden bg-emerald-900 pt-16 pb-10 text-white sm:pt-20 sm:pb-12 md:min-h-[75vh] md:pt-28 md:pb-16">
      {backgroundImageUrl ? (
        <div className="absolute inset-0">
          <Image
            src={backgroundImageUrl}
            alt="Background"
            fill
            className="object-cover"
            sizes="100vw"
            priority
            style={imagePosition ? { objectPosition: imagePosition } : undefined}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/95 via-emerald-900/85 to-emerald-700/60" />
        </div>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950 via-emerald-900 to-emerald-700" />
      )}

      <div className="relative mx-auto w-full max-w-4xl px-5 pb-6 text-center sm:px-6 sm:pb-10">
        <h1 className="text-2xl font-bold leading-tight sm:text-4xl md:text-5xl">
          {title}
        </h1>
        <p className="mt-2 text-sm text-emerald-100/90 sm:mt-3 sm:text-base md:mt-4 md:text-lg">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
