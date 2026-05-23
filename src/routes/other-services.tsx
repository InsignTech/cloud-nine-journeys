import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";
import georgia from "@/assets/georgia.webp";
import {
  Plane,
  Car,
  Hotel,
  PartyPopper,
  Heart,
  Briefcase,
  ShieldCheck,
  FileText,
  ArrowRight,
} from "lucide-react";

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
  {
    icon: Plane,
    title: "Private Aviation",
    desc: "Charter, jet cards and empty-leg sourcing — anywhere, any hour. We handle every detail from ground to gate.",
    tag: "Air Travel",
  },
  {
    icon: Car,
    title: "Chauffeur & Transfers",
    desc: "Discreet luxury vehicles with vetted drivers across the UAE and Europe. Available 24/7 for airport, city and inter-city.",
    tag: "Ground Transport",
  },
  {
    icon: Hotel,
    title: "Hotel & Villa Reservations",
    desc: "Preferred-partner upgrades, late check-outs and exclusive amenities at over 900 properties worldwide.",
    tag: "Accommodation",
  },
  {
    icon: PartyPopper,
    title: "Event & Celebration Design",
    desc: "Engagements, anniversaries and milestone trips designed end-to-end with bespoke venues and curated experiences.",
    tag: "Celebrations",
  },
  {
    icon: Heart,
    title: "Honeymoon Studio",
    desc: "A private planning service for the most considered week of your life — from the proposal to the last sunset.",
    tag: "Romance",
  },
  {
    icon: Briefcase,
    title: "MICE & Corporate Travel",
    desc: "Off-sites, incentives and conferences with a hospitality-first lens. Tailored for teams that demand excellence.",
    tag: "Corporate",
  },
  {
    icon: ShieldCheck,
    title: "Travel Insurance",
    desc: "Comprehensive, high-value policies with global concierge support — because peace of mind has no price.",
    tag: "Protection",
  },
  {
    icon: FileText,
    title: "Document & Visa Logistics",
    desc: "Attestation, translation and embassy liaison handled in-house. We navigate the paperwork so you can focus on the journey.",
    tag: "Documentation",
  },
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
          image={georgia}
          alt="Georgia landscape"
        />

        {/* Services Grid */}
        <section className="py-32 px-6 md:px-10 bg-canvas">
          <div className="max-w-7xl mx-auto">

            {/* Section Header */}
            <div className="text-center mb-20">
              <span className="eyebrow text-accent block mb-3">What We Offer</span>
              <h2 className="font-serif text-4xl md:text-5xl mb-4">Our Premium Services</h2>
              <div className="h-0.5 w-16 bg-accent mx-auto mb-6" />
              <p className="text-brand/70 font-light text-sm max-w-xl mx-auto leading-relaxed">
                Every service is handled with the same standard of care — discreet, precise and entirely on your terms.
              </p>
            </div>

            {/* Cards Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {services.map((s, i) => {
                const Icon = s.icon;
                return (
                  <Link
                    to="/contact"
                    key={s.title}
                    className="group relative bg-white border border-brand/10 rounded-[2rem] p-8 flex flex-col gap-6 min-h-[24rem] transition-all duration-300 hover:shadow-[0_24px_70px_rgba(33,30,50,0.09)] hover:-translate-y-1 overflow-hidden"
                  >
                    {/* Top accent line animates in on hover */}
                    <div className="absolute top-0 left-0 right-0 h-[3px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                    {/* Number + Tag row */}
                    <div className="flex items-center justify-between">
                      <span className="font-serif text-sm text-accent/70 tracking-[0.35em] uppercase">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[10px] font-semibold tracking-[0.35em] uppercase bg-brand/5 text-brand/60 px-3 py-1 rounded-full">
                        {s.tag}
                      </span>
                    </div>

                    {/* Icon box */}
                    <div className="w-14 h-14 rounded-3xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-accent" strokeWidth={1.5} />
                    </div>

                    {/* Title & Description */}
                    <div className="flex flex-col flex-grow gap-4">
                      <h3 className="font-serif text-2xl leading-tight text-brand group-hover:text-accent transition-colors duration-300">
                        {s.title}
                      </h3>
                      <p className="text-sm text-brand/70 font-light leading-relaxed flex-grow">
                        {s.desc}
                      </p>
                    </div>

                    {/* Footer CTA */}
                    <div className="flex items-center gap-2 text-[10px] font-sans uppercase tracking-[0.35em] text-brand/30 group-hover:text-accent transition-colors duration-300 mt-auto pt-4 border-t border-brand/5">
                      <span>Enquire now</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 duration-200" />
                    </div>
                  </Link>
                );
              })}
            </div>

          </div>
        </section>

        {/* CTA Banner */}
        <section className="bg-brand text-white py-24 px-6 md:px-10 text-center">
          <p className="font-serif italic text-3xl md:text-5xl max-w-3xl mx-auto leading-tight">
            One brief. One advisor. <br />Everything taken care of.
          </p>
          <Link
            to="/contact"
            className="inline-block mt-10 bg-accent text-brand px-12 py-5 eyebrow hover:brightness-110 transition-all"
          >
            Contact the Concierge
          </Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
