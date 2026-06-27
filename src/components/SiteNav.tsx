import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logoMark from "@/assets/logo/logo_mark_cropped.png";
import logoText from "@/assets/logo/logo_text_cropped.png";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";

export function SiteNav({ overlay = false }: { overlay?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = !overlay || scrolled || open;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${solid
        ? "bg-canvas/95 backdrop-blur-md text-brand border-b border-brand/5 shadow-sm"
        : "bg-transparent text-white border-transparent"
        }`}
    >
      {/* Top Contact Bar */}
      <div
        className={`w-full text-[10px] md:text-xs hidden md:flex justify-center items-center gap-6 px-6 border-b transition-all duration-300 overflow-hidden ${scrolled ? "max-h-0 py-0 opacity-0 border-transparent" : "max-h-12 py-2 opacity-100"
          } ${solid
            ? "bg-[#f8fafc] border-brand/5 text-brand/80"
            : "bg-black/15 border-white/5 text-white/95"
          }`}
      >
        <div className="flex items-center gap-1.5 flex-wrap justify-center">
          <Phone className="w-3.5 h-3.5 text-current" />
          <a href="tel:+971504190737" className="hover:underline transition-colors font-medium">+971 50 419 0737</a>
          <span className="opacity-55">,</span>
          <a href="tel:+971586490737" className="hover:underline transition-colors font-medium">+971 58 649 0737</a>
          <span className="opacity-55">,</span>
          <a href="tel:+97145726991" className="hover:underline transition-colors font-medium">+971 4 5726991 <span className="text-[9px] opacity-75">Ext: 159</span></a>
        </div>
        <span className={solid ? "text-brand/20" : "text-white/20"}>|</span>
        <div className="flex items-center gap-1.5">
          <Mail className="w-3.5 h-3.5 text-current" />
          <a href="mailto:info@cloudlifetravels.com" className="hover:underline transition-colors font-medium">
            info@cloudlifetravels.com
          </a>
        </div>
      </div>

      <div className="px-6 md:px-12 flex justify-between items-center py-4">
        <Link to="/" className="flex items-center gap-3.5 group">
          <img
            src={logoMark}
            alt="Cloud Life Travels Logo Mark"
            className={`h-8.5 md:h-11 w-auto object-contain transition-all duration-300 ${!solid && "brightness-0 invert"
              }`}
          />
          <img
            src={logoText}
            alt="Cloud Life Travels Text"
            className={`h-6.5 md:h-7.5 w-auto object-contain transition-all duration-300 ${!solid && "brightness-0 invert"
              }`}
          />
        </Link>
        <div className="hidden lg:flex gap-9 items-center text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-bold">
          <Link to="/" className="transition-colors hover:text-accent" activeProps={{ className: "text-accent" }}>Home</Link>
          <Link to="/about" className="transition-colors hover:text-accent" activeProps={{ className: "text-accent" }}>About</Link>
          <Link to="/visas" className="transition-colors hover:text-accent" activeProps={{ className: "text-accent" }}>Visa</Link>
          <Link to="/dubai-activities" className="transition-colors hover:text-accent" activeProps={{ className: "text-accent" }}>Dubai Activities</Link>

          {/* Desktop Dropdown for Tours */}
          <div className="relative group py-2">
            <button className="flex items-center gap-1 uppercase tracking-[0.2em] transition-colors hover:text-accent font-bold cursor-pointer">
              <span>Tours</span>
              <ChevronDown className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180" />
            </button>

            <div className="absolute top-full left-1/2 -translate-x-1/2 w-48 bg-canvas border border-brand/10 shadow-lg py-2 rounded-xl opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 flex flex-col text-left">
              <Link
                to="/tour-packages"
                className="px-4 py-2.5 text-[10px] uppercase tracking-[0.15em] text-brand hover:bg-brand/5 transition-colors"
                activeProps={{ className: "text-accent bg-brand/5 font-bold" }}
              >
                Tour Packages
              </Link>
              <Link
                to="/testimonials"
                className="px-4 py-2.5 text-[10px] uppercase tracking-[0.15em] text-brand hover:bg-brand/5 transition-colors"
                activeProps={{ className: "text-accent bg-brand/5 font-bold" }}
              >
                Testimonials
              </Link>
              <Link
                to="/gallery"
                className="px-4 py-2.5 text-[10px] uppercase tracking-[0.15em] text-brand hover:bg-brand/5 transition-colors"
                activeProps={{ className: "text-accent bg-brand/5 font-bold" }}
              >
                Gallery
              </Link>
            </div>
          </div>

          <Link to="/other-services" className="transition-colors hover:text-accent" activeProps={{ className: "text-accent" }}>Other Services</Link>

          <Link
            to="/contact"
            className={`px-6 py-3 border transition-all rounded ${solid
              ? "border-brand/20 hover:bg-brand hover:text-canvas"
              : "border-white/30 hover:bg-white hover:text-brand"
              }`}
          >
            Contact Us
          </Link>
        </div>
        <button
          className="lg:hidden flex items-center justify-center p-2 text-current hover:opacity-80 transition-opacity focus:outline-none cursor-pointer"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden bg-canvas text-brand border-t border-brand/10 px-6 py-8 flex flex-col gap-5">
          <Link to="/" onClick={() => setOpen(false)} className="text-sm uppercase tracking-widest">Home</Link>
          <Link to="/about" onClick={() => setOpen(false)} className="text-sm uppercase tracking-widest">About</Link>
          <Link to="/visas" onClick={() => setOpen(false)} className="text-sm uppercase tracking-widest">Visa</Link>
          <Link to="/dubai-activities" onClick={() => setOpen(false)} className="text-sm uppercase tracking-widest">Dubai Activities</Link>

          {/* Mobile Collapsible Submenu */}
          <div className="flex flex-col gap-3">
            <span className="text-xs uppercase tracking-widest text-brand/40 font-bold">Tours</span>
            <div className="pl-4 flex flex-col gap-3.5 border-l border-brand/10">
              <Link to="/tour-packages" onClick={() => setOpen(false)} className="text-xs uppercase tracking-widest text-brand/80">Tour Packages</Link>
              <Link to="/testimonials" onClick={() => setOpen(false)} className="text-xs uppercase tracking-widest text-brand/80">Testimonials</Link>
              <Link to="/gallery" onClick={() => setOpen(false)} className="text-xs uppercase tracking-widest text-brand/80">Gallery</Link>
            </div>
          </div>

          <Link to="/other-services" onClick={() => setOpen(false)} className="text-sm uppercase tracking-widest">Other Services</Link>

          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="text-sm uppercase tracking-widest text-accent"
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
}
