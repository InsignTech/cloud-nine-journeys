import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";
import passport from "@/assets/passport.jpg";

// Import new high-quality assets
import dubaiVisaHero from "@/assets/dubai-visa-hero.png";
import multipleEntryVisa from "@/assets/multiple-entry-visa.png";
import airportVisaChange from "@/assets/airport-visa-change.png";
import borderVisaChange from "@/assets/border-visa-change.png";

import { 
  FileText, 
  ShieldCheck, 
  Info, 
  BadgeAlert, 
  Eye, 
  Users, 
  ArrowRight,
  PhoneCall 
} from "lucide-react";

export const Route = createFileRoute("/visas")({
  head: () => ({
    meta: [
      { title: "UAE & Global Visa Services — Cloud Life Travels" },
      { name: "description", content: "Apply for UAE tourist visas, multiple-entry permits, and airport visa changes. Direct support from premium visa experts." },
      { property: "og:title", content: "Visa Services — Cloud Life Travels" },
      { property: "og:description", content: "Easily apply for UAE tourist and multiple visas online. Reliable end-to-end concierge services." },
    ],
  }),
  component: Visas,
});

function Visas() {
  return (
    <>
      <SiteNav overlay />
      <main className="bg-canvas text-brand">
        <PageHero
          eyebrow="Global Mobility"
          title={<>The art of <br /><span className="not-italic text-accent">arriving.</span></>}
          subtitle="Planning to bring your family and friends to the UAE for a holiday? You can now easily apply for UAE tourist and multiple visas online with us."
          image={passport}
          alt="Premium passport cover and travel documents"
        />

        {/* Introduction Section */}
        <section className="py-24 px-6 md:px-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="eyebrow text-accent block mb-4">Visa Services</span>
            <h2 className="font-serif text-4xl md:text-5xl mb-6">
              All Your Visa Requirements Fulfilled With Us
            </h2>
            <div className="h-0.5 w-16 bg-accent mx-auto mb-8"></div>
            <p className="text-brand/80 font-light leading-relaxed text-base md:text-lg max-w-2xl mx-auto">
              Our travel specialists manage your entire visa submission process with ultimate accuracy and efficiency. Whether you require standard tourist visas or complex entry permit changes, we ensure a seamless experience.
            </p>
          </div>
        </section>

        {/* Interactive Visa Options Image Overlay (Matches User's Request Screenshot) */}
        <section className="pb-32 px-6 md:px-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="eyebrow text-accent block mb-3">Flexible Durations</span>
              <h3 className="font-serif text-2xl md:text-4xl">Select Your Tourist Visa Option</h3>
              <p className="text-brand/60 font-light text-xs md:text-sm mt-2">
                Click a plan or speak to an expert directly to arrange quick turnaround visa processing.
              </p>
            </div>

            {/* Premium Interactive Backdrop Container */}
            <div className="relative h-[480px] xs:h-[540px] sm:h-auto sm:aspect-[16/9] w-full overflow-hidden border border-brand/10 shadow-2xl group">
              {/* Background Image */}
              <img 
                src={dubaiVisaHero} 
                alt="Dubai Skyline and modern flyovers" 
                className="w-full h-full object-cover grayscale-[20%] group-hover:scale-102 transition-transform duration-700 brightness-[0.65]"
              />

              {/* Overlay Glassmorphic Options */}
              <div className="absolute inset-0 flex flex-col sm:flex-row items-center justify-around p-6 gap-4 sm:gap-4 select-none">
                
                {/* Option 1: 14 Days */}
                <div className="flex flex-col items-center justify-center bg-brand/35 backdrop-blur-md border border-white/20 rounded-full w-28 h-28 xs:w-32 h-32 sm:w-36 sm:h-36 md:w-44 md:h-44 text-center cursor-pointer transition-all hover:scale-105 hover:bg-accent hover:border-accent hover:text-brand text-white shadow-[0_0_20px_rgba(255,255,255,0.05)] group/circle">
                  <span className="font-serif text-2xl xs:text-3xl md:text-4xl font-bold tracking-tight mb-0.5 md:mb-1">14</span>
                  <span className="font-sans text-[10px] xs:text-xs md:text-sm tracking-widest uppercase font-semibold">Days Visa</span>
                  <span className="text-[8px] xs:text-[10px] opacity-0 group-hover/circle:opacity-100 transition-opacity duration-300 font-light mt-0.5 md:mt-1">Single Entry</span>
                </div>

                {/* Option 2: 30 Days */}
                <div className="flex flex-col items-center justify-center bg-brand/35 backdrop-blur-md border border-white/20 rounded-full w-28 h-28 xs:w-32 h-32 sm:w-36 sm:h-36 md:w-44 md:h-44 text-center cursor-pointer transition-all hover:scale-105 hover:bg-accent hover:border-accent hover:text-brand text-white shadow-[0_0_20px_rgba(255,255,255,0.05)] group/circle">
                  <span className="font-serif text-2xl xs:text-3xl md:text-4xl font-bold tracking-tight mb-0.5 md:mb-1">30</span>
                  <span className="font-sans text-[10px] xs:text-xs md:text-sm tracking-widest uppercase font-semibold">Days Visa</span>
                  <span className="text-[8px] xs:text-[10px] opacity-0 group-hover/circle:opacity-100 transition-opacity duration-300 font-light mt-0.5 md:mt-1">Recommended</span>
                </div>

                {/* Option 3: 90 Days */}
                <div className="flex flex-col items-center justify-center bg-brand/35 backdrop-blur-md border border-white/20 rounded-full w-28 h-28 xs:w-32 h-32 sm:w-36 sm:h-36 md:w-44 md:h-44 text-center cursor-pointer transition-all hover:scale-105 hover:bg-accent hover:border-accent hover:text-brand text-white shadow-[0_0_20px_rgba(255,255,255,0.05)] group/circle">
                  <span className="font-serif text-2xl xs:text-3xl md:text-4xl font-bold tracking-tight mb-0.5 md:mb-1">90</span>
                  <span className="font-sans text-[10px] xs:text-xs md:text-sm tracking-widest uppercase font-semibold">Days Visa</span>
                  <span className="text-[8px] xs:text-[10px] opacity-0 group-hover/circle:opacity-100 transition-opacity duration-300 font-light mt-0.5 md:mt-1">Extended Stay</span>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Requirements & Core Information Section */}
        <section className="py-32 px-6 md:px-10 bg-brand/[0.01] border-y border-brand/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <span className="eyebrow text-accent block mb-3">Important Guidelines</span>
              <h2 className="font-serif text-3xl md:text-5xl">All You Need To Know Before Applying</h2>
              <p className="text-brand/55 font-light text-sm mt-3">Please carefully review the required documentation and procedures below.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Card 1: Visitor's Documents */}
              <div className="bg-canvas border border-brand/5 p-8 rounded-none transition-all hover:border-accent/30 flex flex-col justify-between">
                <div>
                  <div className="mb-6 flex items-center justify-between">
                    <div className="bg-accent/10 p-3 text-accent">
                      <FileText className="w-6 h-6" />
                    </div>
                    <span className="font-serif text-xs text-brand/30">01 / Required Files</span>
                  </div>
                  <h3 className="font-serif text-xl mb-4 text-brand">Visitor's Documents</h3>
                  <ul className="text-sm font-light text-brand/70 space-y-4">
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                      <span><strong>Passport Copy:</strong> Must have at least 6 months validity from the planned date of entry in the UAE.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                      <span><strong>Photograph:</strong> Passport size photo taken against a clear white background.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Card 2: General Rules */}
              <div className="bg-canvas border border-brand/5 p-8 rounded-none transition-all hover:border-accent/30 flex flex-col justify-between">
                <div>
                  <div className="mb-6 flex items-center justify-between">
                    <div className="bg-accent/10 p-3 text-accent">
                      <Users className="w-6 h-6" />
                    </div>
                    <span className="font-serif text-xs text-brand/30">02 / Entry Policies</span>
                  </div>
                  <h3 className="font-serif text-xl mb-4 text-brand">General Rules</h3>
                  <ul className="text-sm font-light text-brand/70 space-y-4">
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                      <span>Children traveling with family require a valid birth certificate copy.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                      <span>Married couples with different last names must present a marriage certificate.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                      <span>To apply for a tourist visa, spouses below 30 years of age require a marriage certificate copy.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Card 3: Dubai Immigration Procedures */}
              <div className="bg-canvas border border-brand/5 p-8 rounded-none transition-all hover:border-accent/30 flex flex-col justify-between">
                <div>
                  <div className="mb-6 flex items-center justify-between">
                    <div className="bg-accent/10 p-3 text-accent">
                      <Eye className="w-6 h-6" />
                    </div>
                    <span className="font-serif text-xs text-brand/30">03 / Border Security</span>
                  </div>
                  <h3 className="font-serif text-xl mb-4 text-brand">Immigration Procedures</h3>
                  <ul className="text-sm font-light text-brand/70 space-y-4">
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                      <span>Dubai Airport Authorities conduct random eye screening for incoming visitors.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                      <span>Visitors must present a printed hard copy of their visa or a printed visa number confirmation at the eye screening counter.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                      <span>If you fail to bring a copy, a charge of <strong>AED 30</strong> per copy applies (payable strictly in AED).</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Card 4: UAE Guarantor (Country Specific) */}
              <div className="bg-canvas border border-brand/5 p-8 rounded-none transition-all hover:border-accent/30 flex flex-col justify-between lg:col-span-1 lg:col-start-1">
                <div>
                  <div className="mb-6 flex items-center justify-between">
                    <div className="bg-accent/10 p-3 text-accent">
                      <BadgeAlert className="w-6 h-6" />
                    </div>
                    <span className="font-serif text-xs text-brand/30">04 / Guarantor Rules</span>
                  </div>
                  <h3 className="font-serif text-xl mb-4 text-brand">UAE Guarantor & ID</h3>
                  <p className="text-xs font-light text-brand/60 mb-4">
                    Additional identity documents are mandatory for visitors of the following nationalities:
                  </p>
                  <ul className="text-sm font-light text-brand/70 space-y-3.5 pl-1">
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-accent/40" />
                      <span><strong>Afghanistan:</strong> National identity card</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-accent/40" />
                      <span><strong>Iran:</strong> National ID card (Kart Shinasaei Milli)</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-accent/40" />
                      <span><strong>Iraq:</strong> National identity card</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-accent/40" />
                      <span><strong>Pakistan:</strong> National identity card</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Card 5: Terms & Conditions */}
              <div className="bg-canvas border border-brand/5 p-8 rounded-none transition-all hover:border-accent/30 flex flex-col justify-between lg:col-span-2">
                <div>
                  <div className="mb-6 flex items-center justify-between">
                    <div className="bg-accent/10 p-3 text-accent">
                      <Info className="w-6 h-6" />
                    </div>
                    <span className="font-serif text-xs text-brand/30">05 / Terms & Conditions</span>
                  </div>
                  <h3 className="font-serif text-xl mb-4 text-brand">Terms & Conditions</h3>
                  <div className="grid md:grid-cols-2 gap-6 text-sm font-light text-brand/70">
                    <ul className="space-y-4">
                      <li className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                        <span>Non-standard passport holders (e.g., diplomatic) must contact the local embassy/consulate of the destination for specific rules.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                        <span>All issued visas have a <strong>60-day grace period</strong> to enter Dubai from the date of issuance.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                        <span>Visa application fees are completely <strong>non-refundable</strong>.</span>
                      </li>
                    </ul>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                        <span>The visa sponsor is legally and financially responsible for a visitor's overstay liabilities.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                        <span>Actual entry to the UAE is subject to final immigration approval.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Premium entry services: ALSO WE PROVIDE */}
        <section className="py-32 px-6 md:px-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <span className="eyebrow text-accent block mb-3">Specialized Services</span>
              <h2 className="font-serif text-3xl md:text-5xl">Also We Provide</h2>
              <p className="text-brand/55 font-light text-sm mt-3">Premium entry modification and transit services engineered for absolute comfort.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              
              {/* Card 1: Multiple Entry Visa */}
              <div className="bg-canvas border border-brand/5 overflow-hidden flex flex-col justify-between group hover:border-accent/20 transition-all">
                <div>
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={multipleEntryVisa} 
                      alt="Luxury airport business lounge" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="font-serif text-2xl mb-3">Multiple Entry Visa</h3>
                    <p className="text-sm font-light text-brand/70 leading-relaxed">
                      Designed for frequent business executives and leisure travelers. Allows highly flexible, seamless and continuous movement in and out of the UAE.
                    </p>
                  </div>
                </div>
                <div className="mx-8 mb-8 pt-6 border-t border-brand/5 flex items-center justify-between text-accent">
                  <span className="eyebrow text-xs">Request Rates</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Card 2: Airport Visa Change */}
              <div className="bg-canvas border border-brand/5 overflow-hidden flex flex-col justify-between group hover:border-accent/20 transition-all">
                <div>
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={airportVisaChange} 
                      alt="Modern passport immigration check" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="font-serif text-2xl mb-3">Airport Visa Change</h3>
                    <p className="text-sm font-light text-brand/70 leading-relaxed">
                      Extend or change your UAE tourist visa instantly directly at the airport terminal. Fast, stress-free transfers without returning to your home country.
                    </p>
                  </div>
                </div>
                <div className="mx-8 mb-8 pt-6 border-t border-brand/5 flex items-center justify-between text-accent">
                  <span className="eyebrow text-xs">Request Rates</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Card 3: Border to Border Change */}
              <div className="bg-canvas border border-brand/5 overflow-hidden flex flex-col justify-between group hover:border-accent/20 transition-all">
                <div>
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={borderVisaChange} 
                      alt="Luxury car driving through desert during sunrise" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="font-serif text-2xl mb-3">Border to Border Change</h3>
                    <p className="text-sm font-light text-brand/70 leading-relaxed">
                      Economical visa change options via comfortable regional transfers. Full logistics, documentation, and boundary crossing assistance provided.
                    </p>
                  </div>
                </div>
                <div className="mx-8 mb-8 pt-6 border-t border-brand/5 flex items-center justify-between text-accent">
                  <span className="eyebrow text-xs">Request Rates</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Tour Consult Expert Banner (Exactly styled like the approved layout) */}
        <section className="bg-brand/[0.02] border-y border-brand/5 py-12 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="font-sans text-xl md:text-3xl font-bold text-brand tracking-tight">
              Tour consult expert: <a href="tel:00971504190737" className="text-accent hover:underline font-bold transition-all ml-1">00971504190737</a>
            </h3>
          </div>
        </section>

        {/* Bottom Waiting For Call detailed CTA */}
        <section className="py-32 px-6 md:px-10 text-center">
          <div className="max-w-3xl mx-auto">
            <span className="eyebrow text-accent block mb-6">Exclusive Offers</span>
            <h2 className="font-serif text-4xl md:text-6xl mb-6">
              We Are Waiting For Your Call
            </h2>
            <p className="text-brand/60 max-w-xl mx-auto text-base font-light mb-12">
              Speak directly with our expert team to secure the absolute best offers, special pricing, and expedited turnaround times for your UAE tourist or business visa.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
              <a href="tel:+971504190737" className="flex items-center gap-3 bg-brand/5 border border-brand/10 hover:border-accent/40 px-6 py-4 transition-colors">
                <span className="bg-accent/15 p-2 rounded-full text-accent"><PhoneCall className="w-4 h-4" /></span>
                <span className="text-sm font-medium text-brand">+971 50 419 0737</span>
              </a>
              <a href="tel:+971586490737" className="flex items-center gap-3 bg-brand/5 border border-brand/10 hover:border-accent/40 px-6 py-4 transition-colors">
                <span className="bg-accent/15 p-2 rounded-full text-accent"><PhoneCall className="w-4 h-4" /></span>
                <span className="text-sm font-medium text-brand">+971 58 649 0737</span>
              </a>
            </div>

            <Link to="/contact" className="inline-block bg-brand text-canvas px-12 py-5 eyebrow hover:bg-accent hover:text-brand transition-all">
              Connect With An Expert
            </Link>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
