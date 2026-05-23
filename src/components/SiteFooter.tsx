import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="pt-32 pb-12 px-6 md:px-10 border-t border-brand/10 bg-canvas">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20 max-w-7xl mx-auto">
        <div>
          <div className="flex flex-col leading-none mb-6">
            <span className="font-serif italic text-3xl">Cloud Life</span>
            <span className="text-[10px] tracking-[0.4em] uppercase opacity-40 mt-1">
              Travel &amp; Beyond
            </span>
          </div>
          <p className="text-xs text-brand/60 leading-relaxed max-w-xs">
            Defining the pinnacle of travel experiences in the UAE and beyond.
            Crafted itineraries for the discerning few.
          </p>
        </div>
        <div>
          <h5 className="eyebrow mb-6">Exploration</h5>
          <ul className="text-sm space-y-4 text-brand/70 font-light">
            <li><Link to="/dubai-activities" className="hover:text-accent">Dubai Activities</Link></li>
            <li><Link to="/tour-packages" className="hover:text-accent">Tour Packages</Link></li>
            <li><Link to="/visas" className="hover:text-accent">Global Visas</Link></li>
            <li><Link to="/other-services" className="hover:text-accent">Concierge</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="eyebrow mb-6">Agency</h5>
          <ul className="text-sm space-y-4 text-brand/70 font-light">
            <li><Link to="/about" className="hover:text-accent">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
            <li><a href="#" className="hover:text-accent">Terms of Service</a></li>
            <li><a href="#" className="hover:text-accent">Privacy Policy</a></li>
          </ul>
        </div>
        <div>
          <h5 className="eyebrow mb-6">Connect</h5>
          <p className="text-sm text-brand/70 mb-4 font-light">
            Join our journal for exclusive travel insights.
          </p>
          <form className="flex border-b border-brand/30 pb-2">
            <input
              type="email"
              placeholder="Email Address"
              className="bg-transparent text-sm w-full outline-none py-1 font-light"
            />
            <button className="text-accent uppercase text-[10px] font-bold tracking-widest">
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center pt-8 border-t border-brand/5 max-w-7xl mx-auto">
        <span className="text-[10px] uppercase tracking-widest text-brand/40">
          © {new Date().getFullYear()} Cloud Life Travels
        </span>
        <span className="text-[10px] uppercase tracking-widest text-brand/40 italic font-serif">
          Designed for the Exceptional
        </span>
      </div>
    </footer>
  );
}
