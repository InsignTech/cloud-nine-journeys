import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";
import passport from "@/assets/passport.jpg";

export const Route = createFileRoute("/visas")({
  head: () => ({
    meta: [
      { title: "Visa Services — Cloud Life Travels" },
      { name: "description", content: "End-to-end visa concierge for the UAE and global destinations. Tourist, transit, business and luxury fast-track services." },
      { property: "og:title", content: "Visa Services — Cloud Life Travels" },
      { property: "og:description", content: "End-to-end visa concierge for the UAE and beyond." },
    ],
  }),
  component: Visas,
});

const visas = [
  { name: "30-Day Tourist Visa", price: "From AED 350", time: "3–5 business days", desc: "Single-entry, ideal for short leisure stays in the UAE." },
  { name: "60-Day Tourist Visa", price: "From AED 650", time: "3–5 business days", desc: "Extended single-entry for longer holidays and family visits." },
  { name: "Multiple-Entry Visa", price: "From AED 1,800", time: "5–7 business days", desc: "Frequent traveler privileges across 90 cumulative days." },
  { name: "Transit Visa (96h)", price: "From AED 180", time: "24 hours", desc: "Brief layovers turned into private Dubai escapes." },
  { name: "Corporate / Business", price: "On enquiry", time: "5–10 business days", desc: "Executive permits, employee mobility, dependents." },
  { name: "Luxury Fast-Track", price: "On enquiry", time: "24–48 hours", desc: "Priority processing with private terminal meet & greet." },
];

function Visas() {
  return (
    <>
      <SiteNav overlay />
      <main>
        <PageHero
          eyebrow="Global Mobility"
          title={<>The art of <br /><span className="not-italic">arriving.</span></>}
          subtitle="Bureaucracy, dissolved. Our visa team handles documentation, submission and follow-up so you can focus on the journey ahead."
          image={passport}
          alt="Luxury passport holder"
        />

        <section className="py-32 px-6 md:px-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-12 mb-20">
              <div className="lg:col-span-5">
                <span className="eyebrow text-accent block mb-5">Services</span>
                <h2 className="font-serif text-5xl md:text-6xl italic leading-[0.95]">Every entry, <br />curated.</h2>
              </div>
              <p className="lg:col-span-6 lg:col-start-7 text-brand/70 font-light leading-relaxed text-base">
                From a 96-hour transit window to a multi-year residency relocation, our advisors prepare every file with the precision that consulates expect — and the discretion our clients require.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-x-12 gap-y-2">
              {visas.map((v, i) => (
                <div key={v.name} className="grid grid-cols-[auto_1fr] gap-6 py-10 border-b border-brand/10">
                  <span className="font-serif text-3xl text-accent">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <div className="flex justify-between items-baseline gap-4 mb-3">
                      <h3 className="font-serif text-2xl italic">{v.name}</h3>
                      <span className="eyebrow text-brand/50 whitespace-nowrap">{v.time}</span>
                    </div>
                    <p className="text-sm text-brand/70 font-light leading-relaxed mb-3">{v.desc}</p>
                    <span className="eyebrow text-brand">{v.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-brand text-white py-24 px-6 md:px-10 text-center">
          <p className="font-serif italic text-3xl md:text-5xl max-w-3xl mx-auto leading-tight">
            Unsure which visa is right? <br />Speak to an advisor.
          </p>
          <Link to="/contact" className="inline-block mt-10 bg-accent text-brand px-12 py-5 eyebrow hover:brightness-110 transition-all">
            Request a Consultation
          </Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
