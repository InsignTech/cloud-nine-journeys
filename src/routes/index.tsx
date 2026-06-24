import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { getAssetUrl } from "@/lib/asset-utils";
// import heroMarina from "@/assets/hero-marina.jpg";
import dubai1 from "@/assets/duabi1-v2-high-quality.jpg";
import desertDawn from "@/assets/desert-dawn.jpg";
import skyline from "@/assets/skyline-gastronomy.jpg";
import downtownDubai from "@/assets/downtown-dubai.jpg";
import passport from "@/assets/passport.jpg";
import georgiaTour from "@/assets/georgia-tour.jpg";
import sriLankaTour from "@/assets/sri-lanka-tour.jpg";
import thailandTour from "@/assets/thailand-tour.jpg";
import dubaiTour from "@/assets/dubai-tour.jpg";
import abuDhabiTour from "@/assets/abu-dhabi-tour.jpg";
import rakTour from "@/assets/rak-tour.jpg";
import alAinTour from "@/assets/al-ain-tour.jpg";

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
  "georgia-summer": georgiaTour,
  "bali-retreat": sriLankaTour,
  "singapore-malaysia": skyline,
  "swiss-paris": thailandTour,
};

const activities = [
  { title: "Celestial Desert Safaris", tag: "Activities / Private Tour", img: desertDawn, alt: "Hot air balloons over Arabian dunes at dawn" },
  { title: "Dubai City Tours", tag: "Activities / Guided Tour", img: skyline, alt: "Tourists visiting iconic Dubai landmarks like Museum of the Future", offset: true },
  { title: "Downtown Dubai", tag: "Sightseeing / Iconic", img: downtownDubai, alt: "Burj Khalifa and Dubai Fountain at twilight" },
];

const tourPackages = [
  {
    id: "dubai-tour",
    title: "Dubai Tour",
    destination: "Dubai, UAE",
    duration: "Customizable Itinerary",
    tag: "City Scenic / Luxury",
    img: dubaiTour,
    inclusions: [
      "Burj Khalifa & Downtown",
      "Dubai Marina Yacht Cruise",
      "Traditional Souks & Creek Tour",
      "Chauffeur Service Included"
    ]
  },
  {
    id: "abu-dhabi-tour",
    title: "Abu Dhabi Tour",
    destination: "Abu Dhabi, UAE",
    duration: "Customizable Itinerary",
    tag: "Culture / Sightseeing",
    img: abuDhabiTour,
    inclusions: [
      "Sheikh Zayed Grand Mosque",
      "Louvre Abu Dhabi Museum",
      "Emirates Palace Guided Visit",
      "Yas Island Photo Stops"
    ]
  },
  {
    id: "rak-tour",
    title: "Ras Al Khaimah Tour",
    destination: "Ras Al Khaimah, UAE",
    duration: "Customizable Itinerary",
    tag: "Adventure / Resort",
    img: rakTour,
    inclusions: [
      "Jebel Jais Mountain Road Drive",
      "High Altitude Adventure Parks",
      "Luxury Beachfront Resort Access",
      "Desert Dunes Photo Session"
    ]
  },
  {
    id: "al-ain-tour",
    title: "Al Ain Tour",
    destination: "Al Ain, UAE",
    duration: "Customizable Itinerary",
    tag: "Heritage / Oasis",
    img: alAinTour,
    inclusions: [
      "Al Jahili Mudbrick Fort",
      "UNESCO Al Ain Oasis Walk",
      "Jebel Hafeet Mountain Drive",
      "Traditional Camel Market Visit"
    ]
  }
];

const destinations = [
  { title: "Georgia", region: "Caucasus Mountains", img: georgiaTour },
  { title: "Sri Lanka", region: "South Asia", img: sriLankaTour },
  { title: "Thailand", region: "Southeast Asia", img: thailandTour },
];

function Index() {
  return (
    <>
      <SiteNav overlay />
      <main>
        <section className="relative h-screen flex flex-col justify-end pb-24 px-6 md:px-10 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src={dubai1} alt="Aerial view of Dubai Marina at sunset with luxury yachts" className="w-full h-full object-cover kenburns" width={1920} height={1080} />
            <div className="absolute inset-0 bg-gradient-to-t from-brand/70 via-brand/10 to-brand/40" />
          </div>
          <div className="relative z-10 max-w-5xl">
            <span className="eyebrow text-accent block mb-8 reveal hidden md:block">Cloud Life Travels · Est. Dubai</span>
            <h1 className="font-serif text-[clamp(4rem,11vw,9rem)] leading-[0.85] text-white italic mb-10 reveal reveal-delay-1">
              World <br /><span className="not-italic">Awaits.</span>
            </h1>
            <div className="flex flex-col md:flex-row gap-10 items-start reveal reveal-delay-2">
              <p className="text-white/85 max-w-md text-base leading-relaxed font-light">
                Unique experiences, seamless planning, unforgettable memories.
              </p>
              <Link to="/contact" className="bg-accent text-brand px-10 py-5 text-[10px] uppercase tracking-[0.25em] font-bold hover:brightness-110 transition-all whitespace-nowrap">
                Plan Your Journey
              </Link>
            </div>
          </div>
          <div className="absolute bottom-8 right-8 z-10 flex flex-col items-end gap-2 text-white/60">
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
                  { n: "01", t: "UAE Tourist Visas", d: "48 & 96 hrs transit visas, 30 & 60 days single/multiple entry visas, with 24/7 support." },
                  { n: "02", t: "Visa change and extensions", d: "By flight / By bus / Inside country" },
                  { n: "03", t: "GCC and Global Tourist Visas", d: "Oman, Qatar, KSA, Bahrain, Kuwait and all other international countries" },
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


        <section className="py-25 px-6 md:px-10">
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
                  Tour Packages <br />
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {tourPackages.map((h) => (
                <article
                  key={h.id}
                  className="group flex flex-col md:flex-row bg-white/5 border border-white/10 rounded-sm overflow-hidden transition-all duration-300 hover:border-accent/40"
                >
                  <div className="relative md:w-1/2 aspect-[4/3] md:aspect-auto overflow-hidden">
                    <img
                      src={h.img}
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

                    <div className="border-t border-white/10 pt-6 flex justify-end items-center mt-auto">
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
