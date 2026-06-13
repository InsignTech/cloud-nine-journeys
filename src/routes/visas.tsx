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

import homeData from "@/data/cloudlife-data.json";


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
          title={<>Explore beyond <br /><span className="not-italic ">borders.</span></>}
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

        {/* Interactive Visa Options Redesign */}
        <section className="pb-32 px-6 md:px-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="eyebrow text-accent block mb-3">Flexible Durations</span>
              <h3 className="font-serif text-3xl md:text-5xl">Select Your Tourist Visa Option</h3>
              <p className="text-brand/60 font-light text-sm max-w-xl mx-auto mt-3">
                Choose the perfect duration for your trip. Speak with our concierge team for immediate end-to-end processing.
              </p>
            </div>

            {/* Redesigned Visa Options Cards */}
            <div className="grid md:grid-cols-3 gap-8">
              
              {/* Option 1: 14 Days */}
              <Link
                to="/contact"
                className="group relative flex flex-col justify-between bg-white border border-brand/10 p-8 rounded-2xl shadow-[0_4px_24px_rgba(23,42,81,0.02)] transition-all duration-300 hover:shadow-[0_16px_40px_rgba(23,42,81,0.06)] hover:-translate-y-1 hover:border-accent/40"
              >
                <div>
                  <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-brand/40">Short Getaway</span>
                  <div className="flex items-baseline gap-2 mt-4 mb-6">
                    <span className="font-serif text-5xl md:text-6xl font-bold text-brand leading-none">14</span>
                    <span className="text-xs text-brand/50 font-light uppercase tracking-wider font-sans">Days Visa</span>
                  </div>
                  <div className="h-[1px] w-full bg-brand/5 my-6" />
                  <ul className="space-y-4 text-sm font-light text-brand/75 mb-8">
                    <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                      <span>Single Entry Tourist Permit</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/45 shrink-0" />
                      <span>60 Days Entry Validity</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/45 shrink-0" />
                      <span>Ideal for Business &amp; Layovers</span>
                    </li>
                  </ul>
                </div>
                <div className="flex items-center justify-between font-bold text-accent pt-6 border-t border-brand/5 group-hover:text-brand transition-colors">
                  <span className="eyebrow text-[10px]">Connect to Apply</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>

              {/* Option 2: 30 Days (Recommended) */}
              <Link
                to="/contact"
                className="group relative flex flex-col justify-between bg-brand text-canvas p-8 rounded-2xl shadow-[0_12px_40px_rgba(23,42,81,0.12)] transition-all duration-300 hover:shadow-[0_24px_50px_rgba(23,42,81,0.22)] hover:-translate-y-1 border border-accent/30"
              >
                {/* Popular Badge */}
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-accent text-white text-[9px] tracking-[0.2em] uppercase font-bold py-1 px-4 rounded-full shadow-md">
                  Most Popular
                </div>
                <div>
                  <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-canvas/40">Standard Leisure</span>
                  <div className="flex items-baseline gap-2 mt-4 mb-6">
                    <span className="font-serif text-5xl md:text-6xl font-bold text-canvas leading-none">30</span>
                    <span className="text-xs text-canvas/60 font-light uppercase tracking-wider font-sans">Days Visa</span>
                  </div>
                  <div className="h-[1px] w-full bg-canvas/10 my-6" />
                  <ul className="space-y-4 text-sm font-light text-canvas/80 mb-8">
                    <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                      <span>Best for Family &amp; Tourism</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/40 shrink-0" />
                      <span>Single Entry Tourist Permit</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/40 shrink-0" />
                      <span>Premium Concierge Review</span>
                    </li>
                  </ul>
                </div>
                <div className="flex items-center justify-between font-bold text-accent pt-6 border-t border-canvas/10 group-hover:text-canvas transition-colors">
                  <span className="eyebrow text-[10px] text-canvas">Connect to Apply</span>
                  <ArrowRight className="w-4 h-4 text-canvas group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>

              {/* Option 3: 90 Days */}
              <Link
                to="/contact"
                className="group relative flex flex-col justify-between bg-white border border-brand/10 p-8 rounded-2xl shadow-[0_4px_24px_rgba(23,42,81,0.02)] transition-all duration-300 hover:shadow-[0_16px_40px_rgba(23,42,81,0.06)] hover:-translate-y-1 hover:border-accent/40"
              >
                <div>
                  <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-brand/40">Extended Stay</span>
                  <div className="flex items-baseline gap-2 mt-4 mb-6">
                    <span className="font-serif text-5xl md:text-6xl font-bold text-brand leading-none">90</span>
                    <span className="text-xs text-brand/50 font-light uppercase tracking-wider font-sans">Days Visa</span>
                  </div>
                  <div className="h-[1px] w-full bg-brand/5 my-6" />
                  <ul className="space-y-4 text-sm font-light text-brand/75 mb-8">
                    <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                      <span>Extended Stays &amp; Visits</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/45 shrink-0" />
                      <span>Priority Concierge Check</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/45 shrink-0" />
                      <span>Expedited Embassy Routing</span>
                    </li>
                  </ul>
                </div>
                <div className="flex items-center justify-between font-bold text-accent pt-6 border-t border-brand/5 group-hover:text-brand transition-colors">
                  <span className="eyebrow text-[10px]">Connect to Apply</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>

            </div>
          </div>
        </section>

        {/* Requirements & Core Information Section */}
        <section className="py-32 px-6 md:px-10 bg-brand/[0.01] border-y border-brand/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <span className="eyebrow text-accent block mb-3">Important Guidelines</span>
              <h2 className="font-serif text-3xl md:text-5xl">All You Need To Know Before Applying</h2>
              <p className="text-brand/80 font-light text-sm mt-3 max-w-xl mx-auto">Please carefully review the required documentation and procedures below.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Card 1: Visitor's Documents */}
              <div className="bg-white border border-brand/10 shadow-[0_4px_24px_rgba(33,30,50,0.02)] p-8 rounded-none transition-all hover:border-accent/40 flex flex-col justify-between">
                <div>
                  <div className="mb-6 flex items-center justify-between">
                    <div className="bg-accent/10 p-3 text-accent">
                      <FileText className="w-6 h-6" />
                    </div>
                    <span className="font-serif text-xs text-brand/100 tracking-wider">01 / Required Files</span>
                  </div>
                  <h3 className="font-serif text-2xl mb-4 text-brand">Visitor's Documents</h3>
                  <ul className="text-sm font-light text-brand/85 space-y-4">
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                      <span><strong className="font-medium text-brand">Passport Copy:</strong> Must have at least 6 months validity from the planned date of entry in the UAE.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                      <span><strong className="font-medium text-brand">Photograph:</strong> Passport size photo taken against a clear white background.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Card 2: General Rules */}
              <div className="bg-white border border-brand/10 shadow-[0_4px_24px_rgba(33,30,50,0.02)] p-8 rounded-none transition-all hover:border-accent/40 flex flex-col justify-between">
                <div>
                  <div className="mb-6 flex items-center justify-between">
                    <div className="bg-accent/10 p-3 text-accent">
                      <Users className="w-6 h-6" />
                    </div>
                    <span className="font-serif text-xs text-brand/100 tracking-wider">02 / Entry Policies</span>
                  </div>
                  <h3 className="font-serif text-2xl mb-4 text-brand">General Rules</h3>
                  <ul className="text-sm font-light text-brand/85 space-y-4">
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
              <div className="bg-white border border-brand/10 shadow-[0_4px_24px_rgba(33,30,50,0.02)] p-8 rounded-none transition-all hover:border-accent/40 flex flex-col justify-between">
                <div>
                  <div className="mb-6 flex items-center justify-between">
                    <div className="bg-accent/10 p-3 text-accent">
                      <Eye className="w-6 h-6" />
                    </div>
                    <span className="font-serif text-xs text-brand/100 tracking-wider">03 / Border Security</span>
                  </div>
                  <h3 className="font-serif text-2xl mb-4 text-brand">Immigration Procedures</h3>
                  <ul className="text-sm font-light text-brand/85 space-y-4">
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
                      <span>If you fail to bring a copy, a charge of <strong className="font-medium text-brand">AED 30</strong> per copy applies (payable strictly in AED).</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Card 4: UAE Guarantor (Country Specific) */}
              <div className="bg-white border border-brand/10 shadow-[0_4px_24px_rgba(33,30,50,0.02)] p-8 rounded-none transition-all hover:border-accent/40 flex flex-col justify-between lg:col-span-1 lg:col-start-1">
                <div>
                  <div className="mb-6 flex items-center justify-between">
                    <div className="bg-accent/10 p-3 text-accent">
                      <BadgeAlert className="w-6 h-6" />
                    </div>
                    <span className="font-serif text-xs text-brand/100 tracking-wider">04 / Guarantor Rules</span>
                  </div>
                  <h3 className="font-serif text-2xl mb-4 text-brand">UAE Guarantor & ID</h3>
                  <p className="text-xs font-light text-brand/85 mb-4">
                    Additional identity documents are mandatory for visitors of the following nationalities:
                  </p>
                  <ul className="text-sm font-light text-brand/85 space-y-3.5 pl-1">
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-accent/40" />
                      <span><strong className="font-medium text-brand">Afghanistan:</strong> National identity card</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-accent/40" />
                      <span><strong className="font-medium text-brand">Iran:</strong> National ID card (Kart Shinasaei Milli)</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-accent/40" />
                      <span><strong className="font-medium text-brand">Iraq:</strong> National identity card</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-accent/40" />
                      <span><strong className="font-medium text-brand">Pakistan:</strong> National identity card</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Card 5: Terms & Conditions */}
              <div className="bg-white border border-brand/10 shadow-[0_4px_24px_rgba(33,30,50,0.02)] p-8 rounded-none transition-all hover:border-accent/40 flex flex-col justify-between lg:col-span-2">
                <div>
                  <div className="mb-6 flex items-center justify-between">
                    <div className="bg-accent/10 p-3 text-accent">
                      <Info className="w-6 h-6" />
                    </div>
                    <span className="font-serif text-xs text-brand/100 tracking-wider">05 / Terms & Conditions</span>
                  </div>
                  <h3 className="font-serif text-2xl mb-4 text-brand">Terms & Conditions</h3>
                  <div className="grid md:grid-cols-2 gap-6 text-sm font-light text-brand/85">
                    <ul className="space-y-4">
                      <li className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                        <span>Non-standard passport holders (e.g., diplomatic) must contact the local embassy/consulate of the destination for specific rules.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                        <span>All issued visas have a <strong className="font-medium text-brand">60-day grace period</strong> to enter Dubai from the date of issuance.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                        <span>Visa application fees are completely <strong className="font-medium text-brand">non-refundable</strong>.</span>
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

 <section className="bg-canvas py-32 px-6 md:px-10 border-b border-brand/5">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-baseline mb-20 gap-8">
              <div className="max-w-2xl">
                <span className="eyebrow text-accent block mb-5">Global Entry</span>
                <h2 className="font-serif text-5xl md:text-7xl leading-[0.95]">
                  Popular Global <br /><span className="italic">Visa Services</span>
                </h2>
              </div>
              <p className="text-brand/100 text-sm max-w-xs font-light">
                Secure your tourist or visitor visa with our rapid concierge processing and unmatched document coordination.
              </p>
            </div>            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              {homeData.popularVisas.map((v) => {
                // Ensure all headings follow standard "[Country] Visa From Dubai"
                let cleanCountry = v.country;
                if (cleanCountry.toLowerCase().endsWith("visa")) {
                  cleanCountry = cleanCountry.substring(0, cleanCountry.toLowerCase().lastIndexOf("visa")).trim();
                }
                const displayHeading = `${cleanCountry} Visa From Dubai`;

                return (
                  <Link
                    to="/contact"
                    key={v.id}
                    className="group flex flex-col bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1"
                  >
                    {/* Top flag image with overlay gradient and capsule badge */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-50 border-b border-gray-100">
                      <img
                        src={`https://flagcdn.com/w640/${v.countryCode.toLowerCase()}.png`}
                        alt={`${v.country} flag`}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                      
                      {/* Overlay capsule - Displays processing timeline */}
                      <div className="absolute bottom-2.5 left-2.5 sm:bottom-4 sm:left-4 bg-white px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-lg sm:rounded-xl flex flex-col shadow-sm">
                        <span className="text-[7px] sm:text-[8px] font-sans tracking-widest text-gray-400 font-bold uppercase leading-none mb-0.5">
                          {v.badge || "FAST TRACK"}
                        </span>
                        <span className="text-[9px] sm:text-[10px] font-sans text-sky-600 font-bold leading-none">
                          {v.processingTime}
                        </span>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-4 sm:p-6 flex flex-col h-full">
                      <div className="w-8 h-5 sm:w-12 sm:h-8 rounded shadow-sm overflow-hidden mb-3 sm:mb-6 border border-brand/5 shrink-0">
                        <img
                          src={`https://flagcdn.com/w160/${v.countryCode.toLowerCase()}.png`}
                          alt={`${v.country} flag`}
                          loading="lazy"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="font-bold text-sm sm:text-lg mb-1 sm:mb-2 group-hover:text-accent transition-colors line-clamp-1">{cleanCountry}</h3>
                      <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-sm text-brand/60 mb-4 sm:mb-6">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>
                        <span className="line-clamp-1">{v.processingTime}</span>
                      </div>
                      <div className="pt-3 sm:pt-4 border-t border-brand/10 flex flex-col xl:flex-row xl:justify-between xl:items-baseline mt-auto gap-0.5 sm:gap-1">
                        <span className="text-[8px] sm:text-[10px] text-brand/40 uppercase tracking-wider font-bold">Starting at</span>
                        <span className="font-bold text-sm sm:text-lg">{v.price}</span>
                      </div>
                    </div>
                  </Link>
                );
              })}
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

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
              
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
                  <div className="p-4 sm:p-8 flex flex-col flex-grow">
                    <h3 className="font-serif text-lg sm:text-2xl mb-2 sm:mb-3">Multiple Entry Visa</h3>
                    <p className="text-xs sm:text-sm font-light text-brand/70 leading-relaxed line-clamp-4">
                      Designed for frequent business executives and leisure travelers. Allows highly flexible, seamless and continuous movement in and out of the UAE.
                    </p>
                  </div>
                </div>
                <div className="mx-4 sm:mx-8 mb-4 sm:mb-8 pt-4 sm:pt-6 border-t border-brand/5 flex items-center justify-between text-accent mt-auto">
                  <span className="eyebrow text-[9px] sm:text-xs">Request Rates</span>
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
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
                  <div className="p-4 sm:p-8 flex flex-col flex-grow">
                    <h3 className="font-serif text-lg sm:text-2xl mb-2 sm:mb-3">Airport Visa Change</h3>
                    <p className="text-xs sm:text-sm font-light text-brand/70 leading-relaxed line-clamp-4">
                      Extend or change your UAE tourist visa instantly directly at the airport terminal. Fast, stress-free transfers without returning to your home country.
                    </p>
                  </div>
                </div>
                <div className="mx-4 sm:mx-8 mb-4 sm:mb-8 pt-4 sm:pt-6 border-t border-brand/5 flex items-center justify-between text-accent mt-auto">
                  <span className="eyebrow text-[9px] sm:text-xs">Request Rates</span>
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
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
                  <div className="p-4 sm:p-8 flex flex-col flex-grow">
                    <h3 className="font-serif text-lg sm:text-2xl mb-2 sm:mb-3">Border to Border Change</h3>
                    <p className="text-xs sm:text-sm font-light text-brand/70 leading-relaxed line-clamp-4">
                      Economical visa change options via comfortable regional transfers. Full logistics, documentation, and boundary crossing assistance provided.
                    </p>
                  </div>
                </div>
                <div className="mx-4 sm:mx-8 mb-4 sm:mb-8 pt-4 sm:pt-6 border-t border-brand/5 flex items-center justify-between text-accent mt-auto">
                  <span className="eyebrow text-[9px] sm:text-xs">Request Rates</span>
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
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
