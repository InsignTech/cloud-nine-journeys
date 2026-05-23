import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";
import yacht from "@/assets/yacht.jpg";

export const Route = createFileRoute("/other-services")({
  head: () => ({
    meta: [
      { title: "Other Services — Cloud Life Travels" },
      { name: "description", content: "Private aviation, chauffeur services, event planning, hotel reservations and concierge — a full atelier of travel services." },
      { property: "og:title", content: "Other Services — Cloud Life Travels" },
      { property: "og:description", content: "Private aviation, chauffeur, events and concierge." },
    ],
  }),
  component: OtherServices,
});

const services = [
  { title: "Private Aviation", desc: "Charter, jet cards and empty-leg sourcing — anywhere, any hour." },
  { title: "Chauffeur & Transfers", desc: "Discreet luxury vehicles with vetted drivers across the UAE and Europe." },
  { title: "Hotel & Villa Reservations", desc: "Preferred-partner upgrades, late check-outs and amenities at over 900 properties." },
  { title: "Event & Celebration Design", desc: "Engagements, anniversaries and milestone trips designed end-to-end." },
  { title: "Honeymoon Studio", desc: "A private planning service for the most considered week of your life." },
  { title: "MICE & Corporate Travel", desc: "Off-sites, incentives and conferences with a hospitality-first lens." },
  { title: "Travel Insurance", desc: "Comprehensive, high-value policies with global concierge support." },
  { title: "Document & Visa Logistics", desc: "Attestation, translation and embassy liaison handled in-house." },
];

function OtherServices() {
  return (
    <>
      <SiteNav overlay />
      <main>
        <PageHero
          eyebrow="The Full Atelier"
          title={<>Everything else, <br /><span className="not-italic">handled.</span></>}
          subtitle="From a last-minute jet to a milestone celebration in Capri — our concierge desk answers within the hour."
          image={yacht}
          alt="Luxury yacht deck"
        />

        <section className="py-32 px-6 md:px-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-4">
              {services.map((s, i) => (
                <div key={s.title} className="grid grid-cols-[auto_1fr] gap-8 py-10 border-b border-brand/10 group hover:bg-brand/[0.02] -mx-4 px-4 transition-colors">
                  <span className="font-serif text-3xl text-accent">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="font-serif text-3xl italic mb-3 group-hover:text-accent transition-colors">{s.title}</h3>
                    <p className="text-brand/70 font-light leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-brand text-white py-24 px-6 md:px-10 text-center">
          <p className="font-serif italic text-3xl md:text-5xl max-w-3xl mx-auto leading-tight">
            One brief. One advisor. <br />Everything taken care of.
          </p>
          <Link to="/contact" className="inline-block mt-10 bg-accent text-brand px-12 py-5 eyebrow hover:brightness-110 transition-all">
            Contact the Concierge
          </Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
