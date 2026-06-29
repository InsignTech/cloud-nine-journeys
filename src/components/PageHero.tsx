interface PageHeroProps {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  image: string;
  alt: string;
}

export function PageHero({ eyebrow, title, subtitle, image, alt }: PageHeroProps) {
  return (
    <section className="relative h-[80vh] min-h-[560px] flex items-end pb-20 px-6 md:px-10 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={image} alt={alt} className="w-full h-full object-cover kenburns" />
        {/* Strong bottom-up dark gradient to protect text */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand/95 via-brand/50 to-brand/20" />
        {/* Left-side vignette so text area is always dark enough */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand/70 via-brand/10 to-transparent" />
      </div>
      <div className="relative z-10 max-w-5xl reveal">
        <span className="eyebrow text-white/70 block mb-6 tracking-[0.25em]">{eyebrow}</span>
        <h1
          className="font-serif text-[clamp(3rem,8vw,6.5rem)] leading-[0.9] text-white italic"
          style={{ textShadow: "0 2px 20px rgba(0,0,0,0.55)" }}
        >
          {title}
        </h1>
        {subtitle && (
          <p className="text-white/80 max-w-xl mt-8 text-base leading-relaxed font-light">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
