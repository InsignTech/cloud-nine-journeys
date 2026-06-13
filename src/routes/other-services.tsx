import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";
import georgia from "@/assets/georgia.webp";
import {
  FaPlane,
  FaCar,
  FaHotel,
  FaGlassCheers,
  FaHeart,
  FaBriefcase,
  FaShieldAlt,
  FaFileAlt
} from "react-icons/fa";
import { ArrowRight } from "lucide-react";

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
    icon: FaPlane,
    title: "Private Aviation",
    desc: "Charter, jet cards and empty-leg sourcing — anywhere, any hour. We handle every detail from ground to gate.",
    tag: "Air Travel",
  },
  {
    icon: FaCar,
    title: "Chauffeur & Transfers",
    desc: "Discreet luxury vehicles with vetted drivers across the UAE and Europe. Available 24/7 for airport, city and inter-city.",
    tag: "Ground Transport",
  },
  {
    icon: FaHotel,
    title: "Hotel & Villa Reservations",
    desc: "Preferred-partner upgrades, late check-outs and exclusive amenities at over 900 properties worldwide.",
    tag: "Accommodation",
  },
  {
    icon: FaGlassCheers,
    title: "Event & Celebration Design",
    desc: "Engagements, anniversaries and milestone trips designed end-to-end with bespoke venues and curated experiences.",
    tag: "Celebrations",
  },
  {
    icon: FaHeart,
    title: "Honeymoon Studio",
    desc: "A private planning service for the most considered week of your life — from the proposal to the last sunset.",
    tag: "Romance",
  },
  {
    icon: FaBriefcase,
    title: "MICE & Corporate Travel",
    desc: "Off-sites, incentives and conferences with a hospitality-first lens. Tailored for teams that demand excellence.",
    tag: "Corporate",
  },
  {
    icon: FaShieldAlt,
    title: "Travel Insurance",
    desc: "Comprehensive, high-value policies with global concierge support — because peace of mind has no price.",
    tag: "Protection",
  },
  {
    icon: FaFileAlt,
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
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-8">
              {services.map((s, i) => {
                const Icon = s.icon;
                return (
                  <Link
                    to="/contact"
                    key={s.title}
                    className="group relative bg-white border border-brand/10 rounded-[1.25rem] sm:rounded-[2rem] p-4 sm:p-8 flex flex-col gap-4 sm:gap-6 min-h-[16rem] sm:min-h-[24rem] transition-all duration-300 hover:shadow-[0_24px_70px_rgba(33,30,50,0.09)] hover:-translate-y-1 overflow-hidden"
                  >
                    {/* Top accent line animates in on hover */}
                    <div className="absolute top-0 left-0 right-0 h-[3px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                    {/* Number + Tag row */}
                    <div className="flex items-center justify-between">
                      <span className="font-serif text-[10px] sm:text-sm text-accent/70 tracking-[0.35em] uppercase">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[7px] sm:text-[10px] font-semibold tracking-[0.2em] sm:tracking-[0.35em] uppercase bg-brand/5 text-brand/60 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full whitespace-nowrap">
                        {s.tag}
                      </span>
                    </div>

                    {/* Icon box */}
                    <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-2xl sm:rounded-3xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300 shrink-0">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                    </div>

                    {/* Title & Description */}
                    <div className="flex flex-col flex-grow gap-2 sm:gap-4">
                      <h3 className="font-serif text-sm sm:text-2xl leading-tight text-brand group-hover:text-accent transition-colors duration-300 font-bold sm:font-normal">
                        {s.title}
                      </h3>
                      <p className="text-[11px] sm:text-sm text-brand/70 font-light leading-normal sm:leading-relaxed flex-grow line-clamp-4 sm:line-clamp-none">
                        {s.desc}
                      </p>
                    </div>

                    {/* Footer CTA */}
                    <div className="flex items-center gap-1.5 sm:gap-2 text-[8px] sm:text-[10px] font-sans uppercase tracking-[0.2em] sm:tracking-[0.35em] text-brand/30 group-hover:text-accent transition-colors duration-300 mt-auto pt-3 sm:pt-4 border-t border-brand/5">
                      <span>Enquire now</span>
                      <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 transition-transform group-hover:translate-x-1 duration-200" />
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
