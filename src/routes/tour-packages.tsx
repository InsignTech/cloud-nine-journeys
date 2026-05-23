import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";
import santorini from "@/assets/santorini.jpg";
import maldives from "@/assets/maldives.jpg";
import alps from "@/assets/alps.jpg";
import desert from "@/assets/desert-dawn.jpg";

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
          image={santorini}
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
      </main>
      <SiteFooter />
    </>
  );
}
