import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";
import santorini from "@/assets/santorini.jpg";
import maldives from "@/assets/maldives.jpg";
import alps from "@/assets/alps.jpg";
import desert from "@/assets/desert-dawn.jpg";
import bali from "@/assets/bali.jpg";
import { Globe, Plane, ShieldCheck } from "lucide-react";
import homeData from "@/data/cloudlife-data.json";

export const Route = createFileRoute("/tour-packages")({
  head: () => ({
    meta: [
      { title: "Tour Packages — Cloud Life Travels" },
      { name: "description", content: "Curated multi-day journeys across the Maldives, Greece, the Alps, the Arabian desert and beyond." },
      { property: "og:title", content: "Tour Packages — Cloud Life Travels" },
      { property: "og:description", content: "Curated multi-day journeys, designed by hand." },
    ],
  }),
  component: TourPackages,
});

const packages = [
  { title: "Aegean Solitude", region: "Santorini & the Cyclades", nights: "7 nights", price: "From $6,400 pp", img: santorini, desc: "Private villas in Oia, sunset sailings to Anti-Paros, and tasting menus above the caldera." },
  { title: "Indian Ocean Sanctuary", region: "Maldives", nights: "6 nights", price: "From $9,200 pp", img: maldives, desc: "Overwater suite, seaplane transfers and full-board at one of two private atolls." },
  { title: "Alpine Hush", region: "Swiss & French Alps", nights: "5 nights", price: "From $7,800 pp", img: alps, desc: "Chalet stays, first-tracks skiing, and Michelin dinners after twilight." },
  { title: "Empty Quarter Expedition", region: "Rub' al Khali, UAE & Oman", nights: "4 nights", price: "From $5,200 pp", img: desert, desc: "Private camp under the stars, dune drives at dawn, and Bedouin-led storytelling." },
];

function TourPackages() {
  return (
    <>
      <SiteNav overlay />
      <main>
        <PageHero
          eyebrow="Curated Journeys"
          title={<>The world, <br /><span className="not-italic">unfolded.</span></>}
          subtitle="Multi-day journeys designed by hand. Each package is a starting point — every detail is yours to shape."
          image={bali}
          alt="Santorini at sunset"
        />

             
        <section className="py-32 px-6 md:px-10">
          <div className="max-w-7xl mx-auto space-y-24">
            {packages.map((p, i) => (
              <article key={p.title} className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""}`}>
                <div className="overflow-hidden">
                  <img src={p.img} alt={p.title} loading="lazy" className="w-full aspect-[4/5] object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div>
                  <span className="eyebrow text-accent block mb-5">{p.region}</span>
                  <h2 className="font-serif text-5xl md:text-6xl italic leading-[0.95] mb-8">{p.title}</h2>
                  <p className="text-brand/70 font-light leading-relaxed text-base max-w-md mb-8">{p.desc}</p>
                  <div className="flex gap-10 mb-10">
                    <div>
                      <div className="eyebrow text-brand/50 mb-2">Duration</div>
                      <div className="font-serif text-2xl italic">{p.nights}</div>
                    </div>
                    <div>
                      <div className="eyebrow text-brand/50 mb-2">From</div>
                      <div className="font-serif text-2xl italic">{p.price}</div>
                    </div>
                  </div>
                  <Link to="/contact" className="eyebrow text-accent border-b border-accent/40 pb-2 hover:border-accent">
                    Enquire about this journey →
                  </Link>
                </div>
              </article>
            ))}
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
                      {homeData.trendingHolidays.map((h) => (
                        <article
                          key={h.id}
                          className="group flex flex-col md:flex-row bg-white/5 border border-white/10 rounded-sm overflow-hidden transition-all duration-300 hover:border-accent/40"
                        >
                          <div className="relative md:w-1/2 aspect-[4/3] md:aspect-auto overflow-hidden">
                            <img
                              src={`/src/assets/${h.imageName}`}
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
        
                   
                  </div>
                </section>
        


      </main>
      <SiteFooter />
    </>
  );
}
