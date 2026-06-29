import { Link } from "@tanstack/react-router";
import logoMark from "@/assets/logo/logo_mark_cropped.png";
import logoText from "@/assets/logo/logo_text_cropped.png";

export function SiteFooter() {
  return (
    <footer className="pt-32 pb-12 px-6 md:px-10 border-t border-brand/10 bg-canvas">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20 max-w-7xl mx-auto">
        <div>
          <div className="flex items-center gap-2 mb-6">
            <img
              src={logoMark}
              alt="Cloud Life Travels Logo Mark"
              className="h-[52px] w-auto object-contain"
            />
            <img
              src={logoText}
              alt="Cloud Life Travels Text"
              className="h-[36px] w-auto object-contain"
            />
          </div>
          <p className="text-xs text-brand/60 leading-relaxed max-w-xs">
            Defining the pinnacle of travel experiences in the UAE and beyond. Crafted itineraries
            for the discerning few.
          </p>
        </div>
        <div>
          <h5 className="eyebrow mb-6">Exploration</h5>
          <ul className="text-sm space-y-4 text-brand/70 font-light">
            <li>
              <Link to="/dubai-activities" className="hover:text-accent">
                Dubai Activities
              </Link>
            </li>
            <li>
              <Link to="/tour-packages" className="hover:text-accent">
                Tour Packages
              </Link>
            </li>
            <li>
              <Link to="/visas" className="hover:text-accent">
                Global Visas
              </Link>
            </li>
            <li>
              <Link to="/other-services" className="hover:text-accent">
                Concierge
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="eyebrow mb-6">Agency</h5>
          <ul className="text-sm space-y-4 text-brand/70 font-light">
            <li>
              <Link to="/about" className="hover:text-accent">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-accent">
                Contact
              </Link>
            </li>
            <li>
              <a href="#" className="hover:text-accent">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-accent">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="eyebrow mb-6">Connect</h5>
          <ul className="text-sm space-y-4 text-brand/70 font-light">
            <li>
              <a href="tel:+971504190737" className="hover:text-accent flex items-center gap-2">
                <span>+971 50 419 0737</span>
              </a>
            </li>
            <li>
              <a href="tel:+971586490737" className="hover:text-accent flex items-center gap-2">
                <span>+971 58 649 0737</span>
              </a>
            </li>
            <li>
              <a
                href="mailto:hello@cloudlifetravels.com"
                className="hover:text-accent flex items-center gap-2"
              >
                <span>hello@cloudlifetravels.com</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center pt-8 border-t border-brand/5 max-w-7xl mx-auto">
        <span className="text-[10px] uppercase tracking-widest text-brand/40">
          © {new Date().getFullYear()} Cloud Life Travels
        </span>
        <span className="text-[10px] uppercase tracking-widest text-brand/40 italic font-serif">
          Designed for the Exceptional
        </span>
        <span className="text-[10px] uppercase tracking-widest text-brand/40">
          Built by{" "}
          <a
            href="https://insigntechsolutions.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent lowercase"
          >
            insign tech solutions
          </a>
        </span>
      </div>
    </footer>
  );
}
