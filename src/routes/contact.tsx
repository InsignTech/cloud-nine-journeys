import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Cloud Life Travels" },
      { name: "description", content: "Speak to a Cloud Life Travels advisor in Dubai. Visas, tours and concierge — by appointment or on demand." },
      { property: "og:title", content: "Contact — Cloud Life Travels" },
      { property: "og:description", content: "Speak to a Cloud Life Travels advisor in Dubai." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <SiteNav />
      <main className="pt-32 pb-24 px-6 md:px-10 min-h-screen">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <span className="eyebrow text-accent block mb-6">Get in touch</span>
            <h1 className="font-serif text-5xl md:text-7xl italic leading-[0.95] mb-10">
              Let's begin <br /><span className="not-italic">the brief.</span>
            </h1>
            <p className="text-brand/70 font-light leading-relaxed mb-12 max-w-md">
              Tell us where you are headed — or where you wish you were. An advisor will respond personally within one business day.
            </p>

            <div className="space-y-8">
              <div>
                <div className="eyebrow text-brand/50 mb-2">Atelier</div>
                <p className="font-serif text-xl italic">Cloud Life Travels<br />Business Bay, Dubai, UAE</p>
              </div>
              <div>
                <div className="eyebrow text-brand/50 mb-2">Concierge</div>
                <p className="font-serif text-xl italic">+971 4 000 0000</p>
              </div>
              <div>
                <div className="eyebrow text-brand/50 mb-2">Email</div>
                <p className="font-serif text-xl italic">hello@cloudlifetravels.com</p>
              </div>
              <div>
                <div className="eyebrow text-brand/50 mb-2">Hours</div>
                <p className="font-serif text-xl italic">Mon–Sat · 09:00–20:00 GST</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 lg:pl-12 lg:border-l border-brand/10">
            {sent ? (
              <div className="h-full flex flex-col justify-center items-start py-24">
                <span className="eyebrow text-accent block mb-6">Received</span>
                <p className="font-serif text-4xl md:text-5xl italic leading-tight max-w-md">
                  Thank you. An advisor will be in touch shortly.
                </p>
              </div>
            ) : (
              <form className="space-y-10" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
                <div className="grid md:grid-cols-2 gap-10">
                  <Field label="Full name" id="name" required />
                  <Field label="Email address" id="email" type="email" required />
                  <Field label="Phone" id="phone" />
                  <Field label="Destination of interest" id="dest" />
                </div>
                <div>
                  <label htmlFor="service" className="eyebrow text-brand/60 block mb-3">Service</label>
                  <select id="service" className="w-full bg-transparent border-b border-brand/20 pb-3 text-base font-light focus:border-accent focus:outline-none">
                    <option>Visa concierge</option>
                    <option>Tour package</option>
                    <option>Dubai activity</option>
                    <option>Private aviation</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="msg" className="eyebrow text-brand/60 block mb-3">Brief</label>
                  <textarea id="msg" rows={5} className="w-full bg-transparent border-b border-brand/20 pb-3 text-base font-light focus:border-accent focus:outline-none resize-none" placeholder="Tell us about the trip you have in mind…" />
                </div>
                <button type="submit" className="bg-brand text-canvas px-12 py-5 eyebrow hover:bg-accent hover:text-brand transition-all">
                  Send Enquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

function Field({ label, id, type = "text", required }: { label: string; id: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={id} className="eyebrow text-brand/60 block mb-3">{label}{required && " *"}</label>
      <input id={id} type={type} required={required} className="w-full bg-transparent border-b border-brand/20 pb-3 text-base font-light focus:border-accent focus:outline-none" />
    </div>
  );
}
