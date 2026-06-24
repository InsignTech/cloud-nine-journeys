import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";
import alps from "@/assets/alps.jpg";
import { Star, Quote } from "lucide-react";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Client Stories & Reviews — Cloud Life Travels" },
      { name: "description", content: "Read testimonials from travelers who experienced bespoke Middle Eastern journeys, visa concierge, and private travel services." },
    ],
  }),
  component: Testimonials,
});

const reviews = [
  {
    name: "A. Pavlova",
    origin: "Geneva, Switzerland",
    quote: "Everything was handled before I even landed in Dubai. The meet and greet, visa verification, and hotel transfers were absolute perfection. Cloud Life is the only agency I trust with my family's itineraries.",
    rating: 5,
  },
  {
    name: "Marcus Sterling",
    origin: "London, UK",
    quote: "Our bespoke tour of the Empty Quarter desert camp was an unforgettable experience. The Bedouin storytelling session under the stars, combined with modern luxury amenities, is exactly what we wanted.",
    rating: 5,
  },
  {
    name: "Hassan Al-Mansoori",
    origin: "Riyadh, Saudi Arabia",
    quote: "Extremely professional visa concierge team. I needed visa changes for our business group on an urgent basis and they delivered in under 24 hours. Reliable and discreet.",
    rating: 5,
  },
  {
    name: "Elena Rostova",
    origin: "Munich, Germany",
    quote: "The Swiss Alps & Paris Classic tour package was seamlessly organized. From train tickets to private guides and Michelin-starred dining reservations, they didn't miss a single detail.",
    rating: 5,
  },
];

function Testimonials() {
  return (
    <>
      <SiteNav overlay />
      <main className="bg-canvas text-brand">
        <PageHero
          eyebrow="Guest Reviews"
          title={<>Stories of <br /><span className="not-italic">Journeys.</span></>}
          subtitle="Discover feedback from global travelers who entrust their luxury experiences and journeys to Cloud Life."
          image={alps}
          alt="Luxury travel scene"
        />

        <section className="py-32 px-6 md:px-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <span className="eyebrow text-accent block mb-3">Feedback</span>
              <h2 className="font-serif text-4xl md:text-5xl">Client Testimonials</h2>
              <div className="h-0.5 w-16 bg-accent mx-auto mt-6" />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {reviews.map((r, i) => (
                <div key={i} className="bg-white border border-brand/10 p-8 sm:p-12 rounded-2xl shadow-[0_4px_24px_rgba(23,42,81,0.02)] flex flex-col justify-between relative group hover:border-accent/40 transition-all duration-300">
                  <div className="absolute top-8 right-8 text-accent/10">
                    <Quote className="w-12 h-12" />
                  </div>
                  <div>
                    <div className="flex gap-1 mb-6">
                      {[...Array(r.rating)].map((_, idx) => (
                        <Star key={idx} className="w-4 h-4 fill-accent text-accent" />
                      ))}
                    </div>
                    <p className="font-serif italic text-lg text-brand/90 leading-relaxed mb-8">
                      "{r.quote}"
                    </p>
                  </div>
                  <div className="border-t border-brand/5 pt-6 mt-auto">
                    <h4 className="font-sans font-bold text-sm text-brand">{r.name}</h4>
                    <span className="text-xs text-brand/50 font-light">{r.origin}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="bg-brand text-white py-24 px-6 md:px-10 text-center">
          <p className="font-serif italic text-3xl md:text-5xl max-w-3xl mx-auto leading-tight">
            Ready to write your next chapter?
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
