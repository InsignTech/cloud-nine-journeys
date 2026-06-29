import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";
import heroMarina from "@/assets/hero-marina.jpg";
import desertDawn from "@/assets/desert-dawn.jpg";
import skyline from "@/assets/skyline-gastronomy.jpg";
import yacht from "@/assets/yacht.jpg";
import santorini from "@/assets/santorini.jpg";
import maldives from "@/assets/maldives.jpg";
import alps from "@/assets/alps.jpg";
import passport from "@/assets/passport.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Travel Gallery — Cloud Life Travels" },
      {
        name: "description",
        content:
          "Explore photos of luxury destinations, desert safaris, private yachts, and custom tours offered by Cloud Life Travels.",
      },
    ],
  }),
  component: Gallery,
});

const images = [
  { src: heroMarina, title: "Dubai Marina", category: "City Luxury" },
  { src: desertDawn, title: "Empty Quarter Desert", category: "Expedition" },
  { src: skyline, title: "Burj Khalifa Skyline", category: "Gastronomy" },
  { src: yacht, title: "Private Yacht Cruising", category: "Marine Voyages" },
  { src: santorini, title: "Oia Caldera", category: "Greece Escapes" },
  { src: maldives, title: "Overwater Villas", category: "Island Paradise" },
  { src: alps, title: "Alpine Chalets", category: "Mountain Retreats" },
  { src: passport, title: "Bespoke Concierge", category: "VIP Services" },
];

function Gallery() {
  return (
    <>
      <SiteNav overlay />
      <main className="bg-canvas text-brand">
        <PageHero
          eyebrow="Visual Odyssey"
          title={
            <>
              Moments of <br />
              <span className="not-italic">Inspiration.</span>
            </>
          }
          subtitle="A handpicked curation of destinations, luxury experiences, and beautiful travel backdrops."
          image={skyline}
          alt="Burj Khalifa Skyline"
        />

        <section className="py-32 px-6 md:px-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <span className="eyebrow text-accent block mb-3">Immersive Views</span>
              <h2 className="font-serif text-4xl md:text-5xl">Our Gallery</h2>
              <div className="h-0.5 w-16 bg-accent mx-auto mt-6" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {images.map((img, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden aspect-[4/5] bg-brand/5 border border-brand/10 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.02)] cursor-pointer"
                >
                  <img
                    src={img.src}
                    alt={img.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-750 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand/90 via-brand/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6" />

                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col">
                    <span className="text-[8px] tracking-[0.2em] uppercase text-accent font-bold mb-1.5">
                      {img.category}
                    </span>
                    <h3 className="font-serif text-lg md:text-xl italic leading-tight">
                      {img.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="bg-brand text-white py-24 px-6 md:px-10 text-center">
          <p className="font-serif italic text-3xl md:text-5xl max-w-3xl mx-auto leading-tight">
            See yourself in the frame?
          </p>
          <Link
            to="/contact"
            className="inline-block mt-10 bg-accent text-brand px-12 py-5 eyebrow hover:brightness-110 transition-all"
          >
            Plan Your Journey
          </Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
