import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";
import { useEffect, useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import bali from "@/assets/bali.jpg";
import dubaiMarinaSkyline from "@/assets/dubai-marina-skyline.jpg";
import emiratesPalace from "@/assets/emirates-palace.jpg";
import rakBeachfront from "@/assets/rak-beachfront.jpg";
import alBadiyahMosque from "@/assets/al-badiyah-mosque.jpg";
import downtownDubai from "@/assets/downtown-dubai.jpg";
import dubaiHero from "@/assets/dub2.jpg";
import khasabFort from "@/assets/khasab-fort.jpg";

export const Route = createFileRoute("/tour-packages")({
  head: () => ({
    meta: [
      { title: "Tours & Packages — Cloud Life Travels" },
      { name: "description", content: "Explore curated tours across Dubai, Abu Dhabi, Ras Al Khaimah, Al Ain, Fujairah, Oman-Musandam, and Salalah." },
      { property: "og:title", content: "Curated Tours — Cloud Life Travels" },
      { property: "og:description", content: "Expore regional UAE and Oman local tour packages." },
    ],
  }),
  component: TourPackages,
});

const tours = [
  {
    id: "dubai-city",
    region: "United Arab Emirates",
    title: "Dubai City Tour",
    descriptions: [
      "Experience the legendary skyline and dynamic landmarks of Dubai. Unveil how a historic pearl-diving port transformed into a futuristic global metropolis.",
      "Our curated itinerary covers architectural marvels from the soaring Burj Khalifa and Dubai Frame, to the luxury yachts of Dubai Marina and the historic alleyways of Al Fahidi."
    ],
    images: [
      { src: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80", caption: "Burj Khalifa & Downtown" },
      { src: "https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?auto=format&fit=crop&w=600&q=80", caption: "The Dubai Frame" },
      { src: dubaiMarinaSkyline, caption: "Dubai Marina Skyline" },
      { src: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?auto=format&fit=crop&w=600&q=80", caption: "Dubai Mall & Fountain" }
    ]
  },
  {
    id: "abu-dhabi-city",
    region: "United Arab Emirates",
    title: "Abu Dhabi City Tour",
    descriptions: [
      "Discover the UAE's capital, a majestic city that balances deep Islamic heritage with bold modern landmarks.",
      "Explore the stunning white marble domes of Sheikh Zayed Grand Mosque, the geometric glass dome of Louvre Abu Dhabi, and the high-speed thrills of Ferrari World."
    ],
    images: [
      { src: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=600&q=80", caption: "Sheikh Zayed Grand Mosque" },
      { src: "https://images.unsplash.com/photo-1618083707368-b3823daa2726?auto=format&fit=crop&w=600&q=80", caption: "Louvre Abu Dhabi" },
      { src: emiratesPalace, caption: "Emirates Palace Hotel" },
      { src: "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?auto=format&fit=crop&w=600&q=80", caption: "Ferrari World Abu Dhabi" }
    ]
  },
  {
    id: "rak-city",
    region: "United Arab Emirates",
    title: "Ras Al Khaimah City Tour",
    descriptions: [
      "Escape to the UAE's nature capital. Celebrated for its golden terracotta dunes, sandy coastlines, and jagged mountain ridges.",
      "Climb the ancient stone stairs of Dhayah Fort, experience the mountain curves of Jebel Jais, and walk the waterfronts of Al Marjan Island."
    ],
    images: [
      { src: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=600&q=80", caption: "Jebel Jais Peaks" },
      { src: "https://images.unsplash.com/photo-1568849676085-51415703900f?auto=format&fit=crop&w=600&q=80", caption: "Dhayah Fort Lookout" },
      { src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80", caption: "Al Marjan Coastline" },
      { src: rakBeachfront, caption: "RAK Beachfront" }
    ]
  },
  {
    id: "al-ain-city",
    region: "United Arab Emirates",
    title: "Al Ain City Tour",
    descriptions: [
      "Explore the 'Garden City', a UNESCO World Heritage oasis. Discover historic palm tree pathways fed by traditional underground irrigation systems.",
      "Key sights include the majestic mountain view from Jebel Hafeet, Al Jahili Fort, Al Ain Oasis, and the relaxing hot springs of Green Mubazzarah."
    ],
    images: [
      { src: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80", caption: "Jebel Hafeet Ridge" },
      { src: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=600&q=80", caption: "Al Ain Oasis Canopy" },
      { src: "https://images.unsplash.com/photo-1627856013091-fed6e4e30025?auto=format&fit=crop&w=600&q=80", caption: "Al Jahili Fortification" },
      { src: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=600&q=80", caption: "Green Mubazzarah Springs" }
    ]
  },
  {
    id: "fujairah-dibba",
    region: "UAE & Oman Border",
    title: "Fujairah-Dibba-Musandam Tour",
    descriptions: [
      "Journey along the scenic east coast where the Hajar Mountains drop straight into the clear waters of the Indian Ocean.",
      "See the ancient mud-and-stone Al Badiyah Mosque, snap photos of Snoopy Island, and board a double-decker dhow from Dibba harbor."
    ],
    images: [
      { src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80", caption: "East Coast Fjords" },
      { src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80", caption: "Snoopy Island Reefs" },
      { src: alBadiyahMosque, caption: "Al Badiyah Mosque" },
      { src: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=600&q=80", caption: "Dibba Boat Cruising" }
    ]
  },
  {
    id: "oman-dibba",
    region: "Oman Enclave",
    title: "Oman-Dibba-Musandam Tour",
    descriptions: [
      "Relax in the stunning fjords of Musandam. Board a traditional Omani dhow for a full-day cruise through beautiful limestone channels.",
      "Swim in pristine water, snorkel alongside vibrant marine life, and enjoy a delicious buffet lunch prepared onboard."
    ],
    images: [
      { src: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80", caption: "Limestone Fjord Cliffs" },
      { src: "https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?auto=format&fit=crop&w=600&q=80", caption: "Dhow Boat Excursion" },
      { src: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80", caption: "Snorkeling Channels" },
      { src: "https://images.unsplash.com/photo-1551244072-5d12893278ab?auto=format&fit=crop&w=600&q=80", caption: "Musandam Dolphin Pods" }
    ]
  },
  {
    id: "oman-khasab",
    region: "Oman Enclave",
    title: "Oman-Khasab-Musandam Tour",
    descriptions: [
      "The definitive fjords expedition starting from Khasab. Gliding past remote stone-built fishing settlements nestled into the mountains.",
      "Highlights include dolphin watching in their natural habitat, exploring the historic Telegraph Island, and swimming in hidden bays."
    ],
    images: [
      { src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80", caption: "Telegraph Island Shore" },
      { src: khasabFort, caption: "Khasab Castle Fort" },
      { src: "https://images.unsplash.com/photo-1551244072-5d12893278ab?auto=format&fit=crop&w=600&q=80", caption: "Wild Dolphin Encounters" },
      { src: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=600&q=80", caption: "Fjord Cliffs at Noon" }
    ]
  },
  {
    id: "salalah",
    region: "Southern Oman",
    title: "Salalah Tour",
    descriptions: [
      "Discover the green paradise of Salalah. During the Khareef (monsoon) season, Southern Oman turns into a lush forest landscape.",
      "Explore the active sea blowholes of Mughsail Beach, visit the ancient Frankincense lands, and walk the cascading falls of Wadi Darbat."
    ],
    images: [
      { src: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=600&q=80", caption: "Khareef Green Forest" },
      { src: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=600&q=80", caption: "Mughsail Beach Coastline" },
      { src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=600&q=80", caption: "Wadi Darbat Waterfalls" },
      { src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80", caption: "Salalah Frankincense Market" }
    ]
  }
];

export function TourCarousel({ images }: { images: { src: string; caption: string }[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [width, setWidth] = useState(1200);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleResize = () => setWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getVisibleCount = () => {
    if (width >= 1024) return 3.2;
    if (width >= 640) return 2.2;
    return 1.2;
  };

  const maxIndex = Math.max(0, images.length - Math.floor(getVisibleCount()));

  useEffect(() => {
    autoplayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3500);

    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [maxIndex]);

  const slidePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const slideNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const getTransform = () => {
    const gap = width >= 640 ? 24 : 16;
    const cardWidth = width >= 1024 ? 28 : (width >= 640 ? 45 : 85);
    return `translateX(calc(-${currentIndex} * (${cardWidth}% + ${gap}px)))`;
  };

  return (
    <div className="relative group">
      <div className="overflow-hidden w-full rounded-2xl">
        <div
          className="flex gap-4 sm:gap-6 transition-transform duration-700 ease-in-out py-2"
          style={{ transform: getTransform() }}
        >
          {images.map((img, idx) => (
            <div
              key={idx}
              className="w-[85%] sm:w-[45%] lg:w-[28%] shrink-0 aspect-[3/4] relative rounded-2xl overflow-hidden group/card shadow-[0_4px_20px_rgba(23,42,81,0.06)] hover:shadow-[0_12px_30px_rgba(23,42,81,0.12)] transition-shadow duration-300"
            >
              <img
                src={img.src}
                alt={img.caption}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand/90 via-transparent to-transparent opacity-95" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white flex flex-col">
                <span className="text-[8px] uppercase tracking-widest text-accent font-bold mb-1.5">Attraction</span>
                <p className="font-serif text-base md:text-xl italic leading-tight text-white">
                  {img.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={slidePrev}
        className="absolute -left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-brand/10 text-brand flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-brand hover:text-canvas cursor-pointer z-10"
        aria-label="Previous Attraction"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={slideNext}
        className="absolute -right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-brand/10 text-brand flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-brand hover:text-canvas cursor-pointer z-10"
        aria-label="Next Attraction"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}

function TourPackages() {
  return (
    <>
      <SiteNav overlay />
      <main className="bg-canvas text-brand">
        <PageHero
          eyebrow="Excursions & Guides"
          title={<>Bespoke local <br /><span className="not-italic">adventures.</span></>}
          subtitle="Explore the most scenic tours across the Emirates and Oman. Every city tour is fully guided, customizable, and curated to perfection."
          image={dubaiHero}
          alt="Luxury tours in Dubai"
        />

        <section className="py-32 px-6 md:px-10">
          <div className="max-w-7xl mx-auto space-y-32">
            {tours.map((t) => (
              <article key={t.id} className="border-b border-brand/5 pb-24 last:border-b-0 last:pb-0">
                {/* Header row with split layout */}
                <div className="grid lg:grid-cols-2 gap-8 items-start mb-12">
                  <div>
                    <span className="eyebrow text-accent block mb-3">{t.region}</span>
                    <h2 className="font-serif text-4xl md:text-6xl font-bold leading-[0.95] text-brand">
                      {t.title}
                    </h2>
                  </div>
                  <div className="text-brand/80 font-light leading-relaxed text-sm md:text-base space-y-4">
                    {t.descriptions.map((desc, idx) => (
                      <p key={idx}>{desc}</p>
                    ))}
                    <div className="pt-2">
                      <Link to="/contact" className="inline-flex items-center gap-1.5 eyebrow text-accent border-b border-accent/25 pb-1 hover:border-accent font-bold">
                        Enquire about this tour <ChevronRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Autoscrolling attractions carousel below */}
                <TourCarousel images={t.images} />
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
