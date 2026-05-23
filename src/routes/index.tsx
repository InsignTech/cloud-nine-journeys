import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import heroMarina from "@/assets/hero-marina.jpg";
import desertDawn from "@/assets/desert-dawn.jpg";
import skyline from "@/assets/skyline-gastronomy.jpg";
import yacht from "@/assets/yacht.jpg";
import passport from "@/assets/passport.jpg";
import santorini from "@/assets/santorini.jpg";
import maldives from "@/assets/maldives.jpg";
import alps from "@/assets/alps.jpg";

// Import Go Kite static data
import homeData from "@/data/cloudlife-data.json";

// Import Lucide icons for premium detail
import { ArrowRight, ShieldCheck, Plane, Globe } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cloud Life Travels — Bespoke Luxury Travel & Visas" },
      { name: "description", content: "Bespoke Dubai experiences, curated tour packages and visa concierge for the discerning global traveler." },
      { property: "og:title", content: "Cloud Life Travels" },
      { property: "og:description", content: "Bespoke Dubai experiences and curated journeys worldwide." },
    ],
  }),
  component: Index,
});

// Mapping for placeholder images
const holidayPlaceholderImages: Record<string, string> = {
  "georgia-summer": santorini,
  "bali-retreat": maldives,
  "singapore-malaysia": skyline,
  "swiss-paris": alps,
};

const activities = [
  { title: "Celestial Desert Safaris", tag: "Activities / Private Tour", img: desertDawn, alt: "Hot air balloons over Arabian dunes at dawn" },
  { title: "Skyline Gastronomy", tag: "Dining / Exclusive", img: skyline, alt: "Burj Khalifa skyline at dusk", offset: true },
  { title: "Private Marine Voyages", tag: "Yachting / Bespoke", img: yacht, alt: "Luxury yacht deck with champagne" },
];

const destinations = [
  { title: "Santorini", region: "Cyclades, Greece", img: santorini },
  { title: "Maldives", region: "Indian Ocean", img: maldives },
  { title: "The Alps", region: "Switzerland", img: alps },
];

function Index() {
  return (
    <>
      <SiteNav overlay />
      <main>
        <section className="relative h-screen flex flex-col justify-end pb-24 px-6 md:px-10 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src={heroMarina} alt="Aerial view of Dubai Marina at sunset with luxury yachts" className="w-full h-full object-cover kenburns" width={1920} height={1080} />
            <div className="absolute inset-0 bg-gradient-to-t from-brand/70 via-brand/10 to-brand/40" />
          </div>
          <div className="relative z-10 max-w-5xl">
            <span className="eyebrow text-accent block mb-8 reveal">Cloud Life Travels · Est. Dubai</span>
            <h1 className="font-serif text-[clamp(4rem,11vw,9rem)] leading-[0.85] text-white italic mb-10 reveal reveal-delay-1">
              Curated <br /><span className="not-italic">Wanderlust.</span>
            </h1>
            <div className="flex flex-col md:flex-row gap-10 items-start reveal reveal-delay-2">
              <p className="text-white/85 max-w-md text-base leading-relaxed font-light">
                Transcending ordinary tourism. We craft bespoke Middle Eastern experiences for the discerning global traveler — from seamless visa logistics to private desert sanctuaries.
              </p>
              <Link to="/contact" className="bg-accent text-brand px-10 py-5 text-[10px] uppercase tracking-[0.25em] font-bold hover:brightness-110 transition-all whitespace-nowrap">
                Plan Your Journey
              </Link>
            </div>
          </div>
          <div className="absolute bottom-8 right-8 z-10 hidden md:flex flex-col items-end gap-2 text-white/60">
            <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
            <span className="block w-px h-12 bg-white/40" />
          </div>
        </section>

        <section className="py-32 px-6 md:px-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-baseline mb-20 gap-8">
              <div className="max-w-2xl">
                <span className="eyebrow text-accent block mb-5">The Collection</span>
                <h2 className="font-serif text-5xl md:text-7xl leading-[0.95]">Dubai through a <br /><span className="italic">different lens</span></h2>
              </div>
              <p className="text-brand/60 text-sm max-w-xs font-light">Our activities are hand-selected for authenticity, exclusivity, and that rare sense of wonder.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {activities.map((a) => (
                <Link to="/dubai-activities" key={a.title} className={`group block ${a.offset ? "md:mt-16" : ""}`}>
                  <div className="overflow-hidden mb-6">
                    <img src={a.img} alt={a.alt} loading="lazy" className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <h3 className="font-serif text-2xl italic">{a.title}</h3>
                  <p className="eyebrow text-brand/40 mt-3">{a.tag}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-brand text-white py-32 px-6 md:px-10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-24 items-center">
            <div>
              <span className="eyebrow text-accent block mb-5">Visa Concierge</span>
              <h2 className="font-serif text-5xl md:text-6xl mb-10 leading-[0.95]">Seamless transitions <br /><span className="italic opacity-70 font-light">to the Emirates</span></h2>
              <div className="space-y-10">
                {[
                  { n: "01", t: "Tourist Visas", d: "Rapid 30 & 60-day processing for all nationalities with 24/7 concierge support." },
                  { n: "02", t: "Corporate Relocation", d: "Executive entry permits and logistical management for global teams." },
                  { n: "03", t: "Luxury Meet & Greet", d: "Private terminal transfers and fast-track clearance for a frictionless arrival." },
                ].map((s, i, arr) => (
                  <div key={s.n} className={`flex gap-6 ${i < arr.length - 1 ? "border-b border-white/10 pb-8" : ""}`}>
                    <span className="text-accent font-serif text-2xl shrink-0">{s.n}</span>
                    <div>
                      <h4 className="text-lg mb-2 font-sans font-medium">{s.t}</h4>
                      <p className="text-white/60 text-sm leading-relaxed font-light">{s.d}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/visas" className="inline-block mt-12 eyebrow text-accent border-b border-accent/40 pb-2 hover:border-accent">Explore Visa Services →</Link>
            </div>
            <div className="relative">
              <img src={passport} alt="Luxury passport holder on marble" loading="lazy" className="w-full aspect-[4/5] object-cover" />
              <div className="absolute -bottom-8 -left-8 bg-accent text-brand p-10 hidden md:block max-w-xs">
                <p className="font-serif text-2xl italic leading-tight">"Everything was handled before I even landed."</p>
                <p className="eyebrow mt-4 opacity-70">— A. Pavlova, Geneva</p>
              </div>
            </div>
          </div>
        </section>

        {/* NEW: Popular Global Visas Section - Matches Go Kite Flag Design */}
        <section className="bg-canvas py-32 px-6 md:px-10 border-b border-brand/5">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-baseline mb-20 gap-8">
              <div className="max-w-2xl">
                <span className="eyebrow text-accent block mb-5">Global Entry</span>
                <h2 className="font-serif text-5xl md:text-7xl leading-[0.95]">
                  Popular Global <br /><span className="italic">Visa Services</span>
                </h2>
              </div>
              <p className="text-brand/60 text-sm max-w-xs font-light">
                Secure your tourist or visitor visa with our rapid concierge processing and unmatched document coordination.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              {[...homeData.popularVisas] // create copy to avoid mutating original
    .sort(() => Math.random() - 0.5)
    .slice(0, 4)
    .map((v) => {
                // Ensure all headings follow standard "[Country] Visa From Dubai"
                let cleanCountry = v.country;
                if (cleanCountry.toLowerCase().endsWith("visa")) {
                  cleanCountry = cleanCountry.substring(0, cleanCountry.toLowerCase().lastIndexOf("visa")).trim();
                }
                const displayHeading = `${cleanCountry} Visa From Dubai`;

                return (
                  <Link
                    to="/contact"
                    key={v.id}
                    className="group flex flex-col bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1"
                  >
                    {/* Top flag image with overlay gradient and capsule badge */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-50 border-b border-gray-100">
                      <img
                        src={`https://flagcdn.com/w640/${v.countryCode.toLowerCase()}.png`}
                        alt={`${v.country} flag`}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                      
                      {/* Overlay capsule - Displays processing timeline */}
                      <div className="absolute bottom-2.5 left-2.5 sm:bottom-4 sm:left-4 bg-white px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-lg sm:rounded-xl flex flex-col shadow-sm">
                        <span className="text-[7px] sm:text-[8px] font-sans tracking-widest text-gray-400 font-bold uppercase leading-none mb-0.5">
                          {v.badge || "FAST TRACK"}
                        </span>
                        <span className="text-[9px] sm:text-[10px] font-sans text-sky-600 font-bold leading-none">
                          {v.processingTime}
                        </span>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-4 sm:p-6 flex flex-col flex-grow justify-between">
                      <div>
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1.5 sm:gap-2 mb-2">
                          <h3 className="font-sans text-sm sm:text-base font-bold text-gray-900 tracking-tight leading-tight group-hover:text-accent transition-colors">
                            {displayHeading}
                          </h3>
                          <span className="bg-sky-50 text-sky-500 text-[8px] sm:text-[9px] font-sans font-bold tracking-wider px-1.5 py-0.5 rounded-md self-start shrink-0">
                            VISA
                          </span>
                        </div>
                        
                        {/* Timeline bullet - Get in [processingTime] */}
                        <div className="flex items-center gap-1.5 text-[10px] sm:text-xs text-gray-500 font-light mt-2 sm:mt-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>
                          <span>Get in {v.processingTime}</span>
                        </div>
                      </div>

                      {/* Bottom Price: starting price tag */}
                      <div className="flex flex-wrap items-baseline gap-1 sm:gap-2 mt-4 sm:mt-5 pt-3 sm:pt-4 border-t border-gray-100/60">
                        <span className="text-base sm:text-xl font-bold text-gray-900 font-sans">{v.price}</span>
                        <span className="text-[8px] sm:text-[9px] font-sans tracking-widest text-gray-400 font-bold uppercase">
                          STARTING PRICE
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
            
            <div className="mt-16 text-center">
              <Link
                to="/visas"
                className="inline-flex items-center gap-2 eyebrow text-brand/60 hover:text-accent border-b border-brand/10 pb-1 hover:border-accent transition-colors"
              >
                View all supported destinations & requirements <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>

        <section className="py-32 px-6 md:px-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-end mb-16 gap-8">
              <div>
                <span className="eyebrow text-accent block mb-5">Tour Packages</span>
                <h2 className="font-serif text-5xl md:text-7xl leading-[0.95]">The world, <span className="italic">unfolded</span>.</h2>
              </div>
              <Link to="/tour-packages" className="eyebrow text-brand/60 hover:text-accent hidden md:block">View all →</Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {destinations.map((d) => (
                <Link to="/tour-packages" key={d.title} className="group block relative overflow-hidden">
                  <img src={d.img} alt={d.title} loading="lazy" className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h3 className="font-serif text-3xl italic">{d.title}</h3>
                    <p className="eyebrow opacity-70 mt-2">{d.region}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* NEW: Trending Holidays Section */}
        <section className="bg-brand text-white py-32 px-6 md:px-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-baseline mb-20 gap-8">
              <div className="max-w-2xl">
                <span className="eyebrow text-accent block mb-5">Trending Escapes</span>
                <h2 className="font-serif text-5xl md:text-6xl mb-6 leading-[0.95]">
                  Holiday Packages <br />
                </h2>
              </div>
              {/* <p className="text-white/60 text-sm max-w-xs font-light">
                Handpicked global journeys combining luxury flights, bespoke tours, and boutique lodging.
              </p> */}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {[...homeData.trendingHolidays] // create copy to avoid mutating original
    .sort(() => Math.random() - 0.5)
    .slice(0, 4)
    .map((h) => (
                <article
                  key={h.id}
                  className="group flex flex-col md:flex-row bg-white/5 border border-white/10 rounded-sm overflow-hidden transition-all duration-300 hover:border-accent/40"
                >
                  <div className="relative md:w-1/2 aspect-[4/3] md:aspect-auto overflow-hidden">
                    <img
                      src={holidayPlaceholderImages[h.id] || santorini}
                      alt={h.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-accent text-brand text-[9px] uppercase tracking-widest font-bold px-3 py-1 rounded-sm">
                      {h.tag}
                    </div>
                  </div>
                  
                  <div className="md:w-1/2 p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-1.5 text-accent eyebrow mb-3 text-[10px]">
                        <Plane className="w-3.5 h-3.5" />
                        <span>{h.destination}</span>
                      </div>
                      <h3 className="font-serif text-2xl italic mb-3 leading-tight text-white">{h.title}</h3>
                      <p className="text-white/40 text-[11px] tracking-widest uppercase font-sans font-light mb-6">
                        {h.duration}
                      </p>

                      <div className="space-y-2 mb-8">
                        {h.inclusions.map((inc, i) => (
                          <div key={i} className="flex items-center gap-2 text-[12px] text-white/70 font-sans font-light">
                            <ShieldCheck className="w-3.5 h-3.5 text-accent shrink-0" />
                            <span>{inc}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="border-t border-white/10 pt-6 flex justify-between items-center mt-auto">
                      <div>
                        <div className="text-[9px] eyebrow text-white/40 mb-1">Starting From</div>
                        <div className="font-serif text-2xl italic text-accent">{h.price}</div>
                      </div>
                      <Link
                        to="/contact"
                        className="bg-accent text-brand px-6 py-3.5 text-[9px] uppercase tracking-wider font-bold hover:bg-white hover:text-brand transition-colors"
                      >
                        Enquire
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-16 text-center">
              <Link
                to="/tour-packages"
                className="inline-flex items-center gap-2 eyebrow text-accent border-b border-accent/20 pb-1 hover:border-accent transition-colors"
              >
                Explore all curated tour itineraries <Globe className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-canvas py-32 px-6 md:px-10 border-t border-brand/10">
          <div className="max-w-5xl mx-auto text-center">
            <span className="eyebrow text-accent block mb-8">Our Promise</span>
            <p className="font-serif text-4xl md:text-6xl italic leading-[1.05] text-brand">
              "Travel, when done well, is not movement — it is transformation measured in quiet mornings and improbable horizons."
            </p>
            <Link to="/contact" className="inline-block mt-16 bg-brand text-canvas px-12 py-5 eyebrow hover:bg-accent hover:text-brand transition-all">
              Begin Your Journey
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
