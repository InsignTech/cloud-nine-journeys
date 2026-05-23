import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";

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
          ? "bg-canvas/85 backdrop-blur-xl text-brand border-b border-brand/5 py-4"
          : "text-white py-6"
      }`}
    >
      <div className="px-6 md:px-10 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="Cloud Life Travels Logo"
            className={`h-10 w-10 md:h-12 md:w-12 object-contain transition-all duration-300 ${
              solid ? "" : "brightness-0 invert"
            }`}
          />
          <div className="flex flex-col leading-none">
            <span className="font-serif italic text-xl md:text-2xl">Cloud Life</span>
            <span className="text-[8px] tracking-[0.35em] uppercase opacity-70 mt-0.5">
              Travel &amp; Beyond
            </span>
          </div>
        </Link>
        <div className="hidden lg:flex gap-9 items-center text-[11px] uppercase tracking-[0.18em] font-medium">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="hover:text-accent transition-colors"
              activeProps={{ className: "text-accent" }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className={`px-6 py-3 border transition-all ${
              solid
                ? "border-brand/30 hover:bg-brand hover:text-canvas"
                : "border-white/30 hover:bg-white hover:text-brand"
            }`}
          >
            Contact Us
          </Link>
        </div>
        <button
          className="lg:hidden text-[11px] uppercase tracking-widest"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? "Close" : "Menu"}
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
