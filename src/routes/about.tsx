import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";
import aboutDubai from "@/assets/about-dubai.jpg";
import { Compass, Wallet, Hotel, Phone, Mail, MapPin, Plane } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Cloud Life Travels" },
      {
        name: "description",
        content:
          "Learn about Cloud Life Travels, one of the leading tour operators in the UAE, dedicated to providing bespoke travel and visa solutions.",
      },
      { property: "og:title", content: "About Us — Cloud Life Travels" },
      {
        property: "og:description",
        content: "Learn about Cloud Life Travels, one of the leading tour operators in the UAE.",
      },
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
          eyebrow="Who We Are"
          title={
            <>
              Dedicated to <br />
              <span className="not-italic">your journey.</span>
            </>
          }
          subtitle="Cloud Life Travels — One of the leading tour operators in the UAE."
          image={aboutDubai}
          alt="Dubai cityscape skyline"
        />

        {/* Story Section */}
        <section className="py-32 px-6 md:px-10">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4">
              <span className="eyebrow text-accent block">Our Dedication</span>
              <h2 className="font-serif text-4xl md:text-5xl mt-4 leading-tight">
                Know Who We Are
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-8">
              <p className="font-serif text-2xl md:text-3xl italic leading-snug text-brand">
                "Through our strong dedication and determination, we became one of the leading tour
                operators in the UAE."
              </p>
              <div className="text-base text-brand/70 leading-relaxed font-light space-y-6">
                <p>
                  We are the best professionals in the tourism industry. Through our strong
                  dedication and determination, we became one of the leading tour operators in the
                  UAE. In this rapidly growing industry, we aim to provide the best service in the
                  market and intend to provide competitive travel and adventure places to our
                  guests.
                </p>
                <p>
                  Our services are filled with quality, memory, and true love with care, informative
                  and updated, which suits the clients' aspects. Our main goal is to provide the
                  best tour packages at a competitive price in the UAE.
                </p>
                <p>
                  We will make sure that our services will be the best while considering our
                  clients' budgets. It is important to recognize that we do not intend to just take
                  individuals on a sightseeing pleasure trip, but also to ensure that they
                  appreciate nature through informative briefings on the history and sights
                  especially.
                </p>
                <p>
                  We manage to connect the right people in the right place at the right time to
                  guarantee the best service. We monitor, specially train, and develop our team to
                  maintain valuable relationships.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pillars Section (White background to match the screenshot) */}
        <section className="bg-canvas text-brand py-24 px-6 md:px-10 border-t border-brand/5">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Compass className="text-accent w-8 h-8" />,
                  title: "Awesome Treks",
                  desc: "UAE is also an adventurous place for those who love it. We have several destinations where you can have a great time for adventure in the UAE.",
                },
                {
                  icon: <Wallet className="text-accent w-8 h-8" />,
                  title: "Best Budgeting",
                  desc: "We always make sure your tour is in the budget. Our tour management team has a better plan to save your wallet without compromising quality.",
                },
                {
                  icon: <Plane className="text-accent w-8 h-8" />,
                  title: "Customize Flights",
                  desc: "We provide the best ticket fares across the globe. Finding the best flight times and options within your budget is our job—leave it to us.",
                },
                {
                  icon: <Hotel className="text-accent w-8 h-8" />,
                  title: "Best Hotels in City",
                  desc: "We know the stay is very important, especially when you are with family and friends, so enjoy the absolute best accommodations in the city.",
                },
              ].map((pillar) => (
                <div
                  key={pillar.title}
                  className="border-t border-brand/10 pt-8 flex flex-col items-center text-center animate-fade-in"
                >
                  <div className="mb-4">{pillar.icon}</div>
                  <h3 className="font-serif text-xl mb-3 font-normal">{pillar.title}</h3>
                  <p className="text-brand/60 text-xs leading-relaxed font-light">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tour Consult Expert Banner (Exactly styled like the screenshot) */}
        <section className="bg-brand/[0.02] border-y border-brand/5 py-12 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="font-sans text-xl md:text-3xl font-bold text-brand tracking-tight">
              Tour consult expert:{" "}
              <a
                href="tel:00971504190737"
                className="text-accent hover:underline font-bold transition-all ml-1"
              >
                00971504190737
              </a>
            </h3>
          </div>
        </section>

        {/* Tour Consult Expert Detailed CTA Section */}
        <section className="py-32 px-6 md:px-10 border-b border-brand/10">
          <div className="max-w-5xl mx-auto text-center">
            <span className="eyebrow text-accent block mb-6">Connect With Us</span>
            <h2 className="font-serif text-4xl md:text-6xl mb-4">Get in Touch</h2>
            <p className="text-brand/60 max-w-xl mx-auto text-sm font-light mb-12">
              Speak directly with our experienced advisors to customize your visa, trekking, or
              luxury stay experience in the UAE.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-left mb-16">
              <div className="bg-canvas border border-brand/5 p-8 flex flex-col items-start">
                <Phone className="text-accent w-6 h-6 mb-4" />
                <h4 className="font-serif text-lg mb-2">Call Direct</h4>
                <a
                  href="tel:+971504190737"
                  className="text-brand hover:text-accent font-medium text-sm transition-colors mb-1"
                >
                  +971 50 419 0737
                </a>
                <a
                  href="tel:+971586490737"
                  className="text-brand hover:text-accent font-medium text-sm transition-colors"
                >
                  +971 58 649 0737
                </a>
                <span className="text-brand/40 text-[11px] mt-2 block font-light">
                  Ext: 159 (Landline: +971 4 5726991)
                </span>
              </div>

              <div className="bg-canvas border border-brand/5 p-8 flex flex-col items-start">
                <Mail className="text-accent w-6 h-6 mb-4" />
                <h4 className="font-serif text-lg mb-2">Email Inquiries</h4>
                <a
                  href="mailto:info@cloudlifetravels.com"
                  className="text-brand hover:text-accent font-medium text-sm transition-colors break-all"
                >
                  info@cloudlifetravels.com
                </a>
              </div>

              <div className="bg-canvas border border-brand/5 p-8 flex flex-col items-start">
                <MapPin className="text-accent w-6 h-6 mb-4" />
                <h4 className="font-serif text-lg mb-2">Our Office</h4>
                <p className="text-brand/70 text-xs leading-relaxed font-light">
                  3rd Floor, Office# 059,
                  <br />
                  Sultan Business Centre,
                  <br />
                  Near Lamcy Plaza, Oud Metha,
                  <br />
                  Bur Dubai, Dubai, UAE
                </p>
              </div>
            </div>

            <Link
              to="/contact"
              className="inline-block bg-brand text-canvas px-12 py-5 eyebrow hover:bg-accent hover:text-brand transition-all"
            >
              Begin Your Journey
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
