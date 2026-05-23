import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";
import aboutDubai from "@/assets/about-dubai.jpg";
import passport from "@/assets/passport.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Cloud Life Travels" },
      { name: "description", content: "A Dubai-based travel atelier crafting bespoke journeys, visa concierge and private experiences for discerning travelers." },
      { property: "og:title", content: "About — Cloud Life Travels" },
      { property: "og:description", content: "A Dubai travel atelier crafting bespoke journeys for discerning travelers." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <SiteNav overlay />
      <main>
        <PageHero
          eyebrow="About the Atelier"
          title={<>An atelier of <br /><span className="not-italic">curated travel.</span></>}
          subtitle="Founded in Dubai. Built for travelers who treat the journey as art."
          image={aboutDubai}
          alt="Dubai old souk with golden lanterns"
        />

        <section className="py-32 px-6 md:px-10">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4">
              <span className="eyebrow text-accent">Our Philosophy</span>
            </div>
            <div className="lg:col-span-8 space-y-8">
              <p className="font-serif text-3xl md:text-4xl italic leading-snug">
                We don't believe in itineraries. We believe in chapters — each one written for one traveler, in one moment of their life.
              </p>
              <p className="text-base text-brand/70 leading-relaxed font-light max-w-2xl">
                Cloud Life Travels was founded on the conviction that exceptional travel cannot be templated. From the moment we receive an enquiry to the instant a guest returns home, every detail is considered, negotiated, and refined by hand. Our relationships across the Middle East, Indian Ocean and Europe give us access others cannot replicate — and a duty to deploy it with restraint.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-brand text-white py-32 px-6 md:px-10">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
            <img src={passport} alt="Travel essentials" loading="lazy" className="w-full aspect-[4/5] object-cover" />
            <div>
              <span className="eyebrow text-accent block mb-5">By the Numbers</span>
              <h2 className="font-serif text-5xl md:text-6xl italic mb-12 leading-[0.95]">Quiet excellence, <br />measured.</h2>
              <div className="grid grid-cols-2 gap-10">
                {[
                  { n: "12+", l: "Years in Dubai" },
                  { n: "60", l: "Countries reached" },
                  { n: "98%", l: "Repeat clientele" },
                  { n: "24/7", l: "Concierge support" },
                ].map((s) => (
                  <div key={s.l} className="border-t border-white/15 pt-6">
                    <div className="font-serif text-5xl text-accent">{s.n}</div>
                    <div className="eyebrow text-white/60 mt-3">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-32 px-6 md:px-10 text-center">
          <p className="font-serif italic text-3xl md:text-5xl max-w-4xl mx-auto leading-tight">
            Ready to write the next chapter?
          </p>
          <Link to="/contact" className="inline-block mt-10 bg-brand text-canvas px-12 py-5 eyebrow hover:bg-accent hover:text-brand transition-all">
            Speak to an Advisor
          </Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
