import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";
import { Menu, X, Phone, Mail } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/visas", label: "Visas" },
  { to: "/dubai-activities", label: "Dubai Activities" },
  { to: "/tour-packages", label: "Tour Packages" },
  { to: "/other-services", label: "Other Services" },
];

export function SiteNav({ overlay = false }: { overlay?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = !overlay || scrolled;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        solid
          ? "bg-canvas/95 backdrop-blur-md text-brand border-b border-brand/5 shadow-sm"
          : "bg-transparent text-white border-transparent"
      }`}
    >
      {/* Top Contact Bar */}
      <div
        className={`w-full text-[10px] md:text-xs hidden md:flex justify-center items-center gap-6 px-6 border-b transition-all duration-300 overflow-hidden ${
          scrolled ? "max-h-0 py-0 opacity-0 border-transparent" : "max-h-12 py-2 opacity-100"
        } ${
          solid
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
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="Cloud Life Travels Logo"
            className={`h-10 w-10 md:h-12 md:w-12 object-contain transition-all duration-300 ${
              !solid && "brightness-0 invert"
            }`}
          />
          <div className="flex flex-col leading-none">
            <span className="font-serif text-xl md:text-2xl font-bold">Cloud Life</span>
            <span className={`text-[8px] tracking-[0.35em] uppercase mt-0.5 ${solid ? "text-brand/60" : "text-white/70"}`}>
              Travel &amp; Beyond
            </span>
          </div>
        </Link>
        <div className="hidden lg:flex gap-9 items-center text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-bold">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`transition-colors ${solid ? "hover:text-accent" : "hover:text-accent"}`}
              activeProps={{ className: "text-accent" }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className={`px-6 py-3 border transition-all rounded ${
              solid
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
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="text-sm uppercase tracking-widest"
            >
              {l.label}
            </Link>
          ))}
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
