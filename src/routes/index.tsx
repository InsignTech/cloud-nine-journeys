import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { getAssetUrl } from "@/lib/asset-utils";
import { ShimmerImage } from "@/components/ShimmerImage";
import heroImg from "@/assets/hero-marina.jpg";
import baliImg from "@/assets/bali.jpg";
import santoriniImg from "@/assets/singapore-image.jpg";

import { useState, useEffect, useCallback } from "react";
import homeData from "@/data/cloudlife-data.json";
import { ArrowRight, Globe, Plane, ShieldCheck, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cloud Life Travels — Global Visas & Minimalist Journeys" },
      { name: "description", content: "Effortless visa processing and curated global journeys." },
    ],
  }),
  component: Index,
});

const HERO_SLIDES = [
  {
    image: heroImg,
    tagline: "Cloud Life Travels",
    title: "Effortless Global",
    italicWord: "Journeys",
    description: "We streamline your travel with rapid visa processing and curated itineraries. Minimal friction, maximum exploration.",
    primaryBtn: { text: "Explore Visas", link: "/visas" },
    secondaryBtn: { text: "View Packages", link: "/tour-packages" }
  },
  {
    image: baliImg,
    tagline: "Visa Concierge",
    title: "Fast-Track Entry",
    italicWord: "Worldwide",
    description: "Skip the complex paperwork. Our expert visa concierge service secures your entry documents quickly and reliably.",
    primaryBtn: { text: "Explore Visas", link: "/visas" },
    secondaryBtn: { text: "View Packages", link: "/tour-packages" }
  },
  {
    image: santoriniImg,
    tagline: "Curated Travel",
    title: "Bespoke Hand-Crafted",
    italicWord: "Itineraries",
    description: "Discover boutique luxury and hand-crafted travel packages designed to let you explore the world on your own terms.",
    primaryBtn: { text: "Explore Visas", link: "/visas" },
    secondaryBtn: { text: "View Packages", link: "/tour-packages" }
  }
];

function Index() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(handleNext, 6000);
    return () => clearInterval(timer);
  }, [handleNext]);

  return (
    <div className="bg-canvas min-h-screen font-sans text-brand">
      <SiteNav />
      <main className="pt-[72px] md:pt-[80px]">
        {/* Hero Section */}
        <section className="relative w-full h-[75vh] md:h-[70vh] lg:h-[80vh] flex flex-col justify-end pb-16 md:pb-28 overflow-hidden">
          
          {/* Custom Crossfade Background Slideshow */}
          <div className="absolute inset-0 w-full h-full bg-black overflow-hidden">
            {HERO_SLIDES.map((slide, i) => (
              <div
                key={i}
                className={cn(
                  "absolute inset-0 w-full h-full transition-all duration-[1800ms] ease-in-out",
                  currentIndex === i
                    ? "opacity-80 scale-100 z-10"
                    : "opacity-0 scale-105 pointer-events-none z-0"
                )}
              >
                <img
                  src={slide.image}
                  alt="Cloud Life Travels Destination"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="absolute bottom-6 right-6 md:bottom-8 md:right-16 z-20 flex gap-3">
            <button
              onClick={handlePrev}
              className="flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm transition-all duration-300 active:scale-95 cursor-pointer"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
            </button>
            <button
              onClick={handleNext}
              className="flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm transition-all duration-300 active:scale-95 cursor-pointer"
              aria-label="Next image"
            >
              <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </div>

          {/* Optional Indicator Dots */}
          <div className="absolute bottom-6 left-6 md:bottom-8 md:left-16 z-20 flex gap-2">
            {HERO_SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-500 cursor-pointer",
                  currentIndex === i
                    ? "w-8 bg-white"
                    : "w-2 bg-white/45 hover:bg-white/75"
                )}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Dynamic Animated Text Content */}
          <div key={currentIndex} className="w-full px-6 md:px-12 relative z-10 text-left pointer-events-none">
            <span className="text-accent text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase mb-3 md:mb-6 block drop-shadow-md reveal text-white">
              {HERO_SLIDES[currentIndex].tagline}
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-normal tracking-tight mb-4 md:mb-8 leading-[1.15] md:leading-[1.1] text-white drop-shadow-lg pointer-events-auto reveal reveal-delay-1">
              {HERO_SLIDES[currentIndex].title}{" "}
              <span className="text-accent italic font-medium drop-shadow-md text-white">
                {HERO_SLIDES[currentIndex].italicWord}
              </span>
            </h1>
            <p className="text-white/90 text-sm md:text-xl font-normal mb-8 md:mb-12 max-w-2xl leading-relaxed drop-shadow-md pointer-events-auto reveal reveal-delay-2">
              {HERO_SLIDES[currentIndex].description}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-start items-stretch sm:items-center pointer-events-auto reveal reveal-delay-3">
              <Link to={HERO_SLIDES[currentIndex].primaryBtn.link} className="bg-accent text-white px-6 py-3 md:px-8 md:py-4 text-[11px] md:text-xs font-bold uppercase tracking-wider hover:bg-brand transition-colors w-full sm:w-auto shadow-xl shadow-black/20 text-center rounded">
                {HERO_SLIDES[currentIndex].primaryBtn.text}
              </Link>
              <Link to={HERO_SLIDES[currentIndex].secondaryBtn.link} className="bg-transparent border border-white/40 text-white px-6 py-3 md:px-8 md:py-4 text-[11px] md:text-xs font-bold uppercase tracking-wider hover:bg-brand hover:border-brand transition-colors w-full sm:w-auto shadow-sm text-center rounded">
                {HERO_SLIDES[currentIndex].secondaryBtn.text}
              </Link>
            </div>
          </div>

          {/* Scroll Indicator */}
          {/* <div className="absolute bottom-8 right-6 md:right-12 z-10 flex flex-col items-center gap-4 text-white/60">
            <span className="text-[9px] md:text-[10px] tracking-[0.3em] uppercase rotate-90 mb-4 origin-bottom">Scroll</span>
            <span className="block w-px h-16 bg-white/40" />
          </div> */}
        </section>

        {/* Global Visas Section */}
        <section className="py-24 px-6 md:px-10 bg-white border-y border-brand/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-4">Fast-Track Visas</h2>
              <p className="text-brand/60 font-light">Secure your entry with our rapid concierge processing.</p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
              {[...homeData.popularVisas]
                .slice(0, 4)
                .map((v) => {
                  let cleanCountry = v.country;
                  if (cleanCountry.toLowerCase().endsWith("visa")) {
                    cleanCountry = cleanCountry.substring(0, cleanCountry.toLowerCase().lastIndexOf("visa")).trim();
                  }
                  
                  return (
                    <Link
                      to="/contact"
                      key={v.id}
                      className="group flex flex-col bg-canvas border border-brand/10 rounded-xl overflow-hidden hover:border-accent/40 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="p-4 sm:p-6 flex flex-col h-full">
                        <div className="w-8 h-5 sm:w-12 sm:h-8 rounded shadow-sm overflow-hidden mb-3 sm:mb-6 border border-brand/5 shrink-0">
                          <img
                            src={`https://flagcdn.com/w160/${v.countryCode.toLowerCase()}.png`}
                            alt={`${v.country} flag`}
                            loading="lazy"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h3 className="font-bold text-sm sm:text-lg mb-1 sm:mb-2 group-hover:text-accent transition-colors line-clamp-1">{cleanCountry}</h3>
                        <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-sm text-brand/60 mb-4 sm:mb-6">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>
                          <span className="line-clamp-1">{v.processingTime}</span>
                        </div>
                        <div className="pt-3 sm:pt-4 border-t border-brand/10 flex flex-col xl:flex-row xl:justify-between xl:items-baseline mt-auto gap-0.5 sm:gap-1">
                          <span className="text-[8px] sm:text-[10px] text-brand/40 uppercase tracking-wider font-bold">Starting at</span>
                          <span className="font-bold text-sm sm:text-lg">{v.price}</span>
                        </div>
                      </div>
                    </Link>
                  );
                })}
            </div>
            <div className="mt-12 text-center">
              <Link to="/visas" className="inline-flex items-center gap-2 text-accent text-sm font-bold tracking-wide hover:opacity-80 transition-opacity">
                View All Destinations <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Curated Journeys Section */}
        <section className="py-24 px-6 md:px-10 bg-canvas">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-4">Curated Journeys</h2>
              <p className="text-brand/60 font-light">Minimalist itineraries focused on quality over quantity.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
              {[...homeData.trendingHolidays]
                .slice(0, 3)
                .map((h) => (
                  <Link to="/tour-packages" key={h.id} className="group block">
                    <ShimmerImage 
                      src={getAssetUrl(h.imageName)} 
                      alt={h.title} 
                      className="aspect-[4/5] rounded-xl sm:rounded-2xl mb-4 sm:mb-6"
                      imgClassName="group-hover:scale-105"
                    />
                    <div className="flex flex-col sm:flex-row justify-between items-start gap-1">
                      <div>
                        <h3 className="text-sm sm:text-xl font-bold mb-0.5 sm:mb-1">{h.destination}</h3>
                        <p className="text-[10px] sm:text-sm text-brand/50">{h.duration}</p>
                      </div>
                      <div className="text-left sm:text-right mt-1 sm:mt-0">
                        <span className="block text-[10px] text-brand/40 uppercase tracking-wider font-bold mb-1">From</span>
                        <span className="font-bold text-accent">{h.price}</span>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
            
            <div className="mt-16 text-center">
              <Link
                to="/tour-packages"
                className="inline-flex items-center gap-2 text-accent text-sm font-bold tracking-wide hover:opacity-80 transition-opacity"
              >
                Explore all curated itineraries <Globe className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
