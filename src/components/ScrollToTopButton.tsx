'use client';

import { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    console.log("testttttttttttttttttttttt--------")
    if (typeof window !== 'undefined') {
      const scrollTop = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
      setIsVisible(scrollTop > 200);
        console.log(scrollTop)
    }
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;

    window.addEventListener('scroll', toggleVisibility);
    document.addEventListener('scroll', toggleVisibility);
    // Check immediately in case they are already scrolled down on refresh
    toggleVisibility();

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
      document.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-24 right-6 z-50 inline-flex items-center justify-center rounded-full bg-primary p-3 text-primary-foreground shadow-lg transition-all duration-300 hover:bg-primary/90 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      }`}
      style={{
        width: "44px",
        height: "44px",
      }}
      aria-label="Scroll to top"
      title="Back to top"
    >
      <ChevronUp className="h-5 w-5" />
    </button>
  );

  function scrollToTop() {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  }
}
