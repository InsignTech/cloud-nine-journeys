import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";
import desert from "@/assets/desert-dawn.jpg";
import falcon from "@/assets/falcon1.png";
import skyline from "@/assets/skyline-gastronomy.jpg";
import yacht from "@/assets/yacht.jpg";
import marina from "@/assets/hero-marina.jpg";
import chopper from "@/assets/chopper.jpeg";

export const Route = createFileRoute("/dubai-activities")({
  head: () => ({
    meta: [
      { title: "Dubai Activities — Cloud Life Travels" },
      {
        name: "description",
        content:
          "Hand-curated Dubai experiences — desert safaris, sky-high dining, private yachts and architectural tours.",
      },
      { property: "og:title", content: "Dubai Activities — Cloud Life Travels" },
      { property: "og:description", content: "Hand-curated private Dubai experiences." },
    ],
  }),
  component: DubaiActivities,
});

const items = [
  {
    title: "Celestial Desert Safari",
    tag: "Half-day / Private",
    img: desert,
    alt: "Hot air balloons over dunes",
  },
  {
    title: "Dubai City Tours",
    tag: "Evening / Guided Tour",
    img: skyline,
    alt: "Dubai landmarks tour",
  },
  { title: "Private Marina Voyage", tag: "Half/Full Day Charter", img: yacht, alt: "Yacht deck" },
  {
    title: "Architectural Walks",
    tag: "Half-day / Curated",
    img: marina,
    alt: "Dubai Marina from above",
  },
  {
    title: "Falconry & Heritage",
    tag: "Cultural Immersion",
    img: falcon,
    alt: "Falconry experience",
  },
  {
    title: "Helicopter Skyline Tour",
    tag: "30 min / Private",
    img: chopper,
    alt: "Helicopter tour",
  },
];

function DubaiActivities() {
  return (
    <>
      <SiteNav overlay />
      <main>
        <PageHero
          eyebrow="The Dubai Collection"
          title={
            <>
              Dubai, <br />
              <span className="not-italic">unhurried.</span>
            </>
          }
          subtitle="Hand-selected experiences that reveal the city's quiet majesty — beyond the brochures."
          image={falcon}
          alt="Dubai skyline at dusk"
        />

        <section className="py-32 px-6 md:px-10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-20">
            {items.map((it, i) => (
              <article
                key={it.title}
                className={`group cursor-pointer ${i % 2 === 1 ? "md:mt-24" : ""}`}
              >
                <div className="overflow-hidden mb-6">
                  <img
                    src={it.img}
                    alt={it.alt}
                    loading="lazy"
                    className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="flex justify-between items-baseline gap-4">
                  <div>
                    <h3 className="font-serif text-3xl italic">{it.title}</h3>
                    <p className="eyebrow text-brand/50 mt-2">{it.tag}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-brand text-white py-24 px-6 md:px-10 text-center">
          <p className="font-serif italic text-3xl md:text-5xl max-w-3xl mx-auto leading-tight">
            Want a private itinerary built around these?
          </p>
          <Link
            to="/contact"
            className="inline-block mt-10 bg-accent text-brand px-12 py-5 eyebrow hover:brightness-110 transition-all"
          >
            Compose My Day
          </Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
