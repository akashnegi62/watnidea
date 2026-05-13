"use client";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const TESTIMONIALS = [
  {
    quote:
      "Synthetic Cinema transformed our ad production completely. What once took weeks now happens in days, while maintaining the premium cinematic quality our brand expects.",
    name: "Ritika Sharma",
    role: "E-Commerce Director, StyleCart",
    stat: "3.2X",
    statLabel: "Ad Performance Boost",
  },
  {
    quote:
      "We reduced production costs significantly while increasing output. Testing multiple variations helped us quickly find winning ads and improve performance.",
    name: "Arjun Kapoor",
    role: "Founder, TrendHive",
    stat: "60%",
    statLabel: "Cost Reduction",
  },
  {
    quote:
      "Execution speed is unmatched. We launched multiple campaigns quickly, each aligned perfectly with our premium visual identity and designed to drive engagement.",
    name: "Sneha Mehta",
    role: "Marketing Head, LuxeGlow",
    stat: "2.5X",
    statLabel: "Engagement Increase",
  },
  {
    quote:
      "The visual fidelity is stunning. It’s hard to believe these weren't shot on a traditional set with a massive crew and months of post-production.",
    name: "Vikram Seth",
    role: "Creative Director, Vibe",
    stat: "4.1X",
    statLabel: "ROI Growth",
  },
];

const QuoteMark = () => (
  <svg width="32" height="24" viewBox="0 0 32 24" fill="none">
    <path
      d="M0 24V14.4C0 6.4 4.8 1.6 14.4 0L16 3.2C11.2 4.8 8.8 8 8.8 12H14.4V24H0ZM17.6 24V14.4C17.6 6.4 22.4 1.6 32 0L33.6 3.2C28.8 4.8 26.4 8 26.4 12H32V24H17.6Z"
      fill="currentColor"
    />
  </svg>
);

const ArrowIcon = ({ rotate = false }) => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    className={rotate ? "rotate-180" : ""}
  >
    <path
      d="M3 12L12 3M12 3H5.5M12 3V9.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function ResultCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const outerRef = useRef<HTMLDivElement>(null);

  // Logic to move the red background
  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev + 1 < TESTIMONIALS.length ? prev + 1 : prev,
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : 0));
  };

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 768) setVisibleCards(1);
      else if (window.innerWidth < 1024) setVisibleCards(2);
      else setVisibleCards(3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const gap = 20;
  // This ensures the carousel doesn't slide into empty space
  const maxTranslate = Math.max(0, TESTIMONIALS.length - visibleCards);
  const slideIndex = Math.min(currentIndex, maxTranslate);

  return (
    <section
      ref={outerRef}
      className="relative w-full bg-black overflow-hidden py-24 md:py-32"
    >
      <div className="relative max-w-[1320px] mx-auto px-6 md:px-12 lg:px-16">
        {/* --- HEADER SECTION--- */}
        <div className="flex flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2.5 mb-6">
              <Image
                src="/Img/point_icon.svg"
                alt="Icon"
                width={24}
                height={24}
                className="animate-pulse"
              />
              <span className="text-(--highlight) text-lg font-medium uppercase tracking-[0.3em]">
                Testimonials
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-[1.1] tracking-tight">
              Real <span className="text-(--highlight)">results</span> from{" "}
              <br /> real brands
            </h2>
          </div>

          {/* Grouped buttons */}
          <div className="flex flex-col items-end gap-6 pb-2">
            <Link href="/contact">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center bg-(--highlight) rounded-full pl-7 pr-2 py-2 group hover:bg-(--highlight) transition-colors duration-300 cursor-pointer"
              >
                <span className="text-white font-bold text-sm mr-4">
                  Contact Us
                </span>
                <span className="w-10 h-10 rounded-full bg-white group-hover:bg-white/20 flex items-center justify-center transition-colors">
                  <ArrowIcon />
                </span>
              </motion.div>
            </Link>

            <div className="flex gap-3">
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="w-12 h-12 rounded-full border bg-white text-black flex items-center justify-center disabled:opacity-20 transition-all"
              >
                <ArrowIcon rotate />
              </button>
              <button
                onClick={handleNext}
                disabled={currentIndex === TESTIMONIALS.length - 1}
                className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center disabled:opacity-20 hover:scale-0.9 transition-all"
              >
                <ArrowIcon />
              </button>
            </div>
          </div>
        </div>

        {/* --- CAROUSEL VIEWPORT --- */}
        <div className="relative overflow-hidden p-2">
          <motion.div
            className="flex gap-5"
            animate={{
              x: `calc(-${slideIndex * (100 / visibleCards)}% - ${slideIndex * (gap / visibleCards)}px)`,
            }}
            transition={{ type: "spring", stiffness: 180, damping: 25 }}
          >
            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                className="shrink-0 transition-all duration-500"
                style={{
                  width: `calc((100% - ${(visibleCards - 1) * gap}px) / ${visibleCards})`,
                }}
              >
                <div
                  className={`relative flex flex-col rounded-3xl overflow-hidden select-none border transition-all duration-700 h-full
                                ${currentIndex === i ? "border-transparent bg-(--highlight) shadow-2xl scale-[1.02] z-10" : "border-white/10 bg-black"}`}
                >
                  <div className="absolute top-5 left-6 text-[11px] font-bold tracking-[0.22em] text-white opacity-50">
                    0{i + 1}
                  </div>
                  <div
                    className={`absolute top-5 right-6 opacity-70 ${currentIndex === i ? "text-white" : "text-(--highlight)"}`}
                  >
                    <QuoteMark />
                  </div>

                  <div className="flex-1 px-8 pt-16 pb-6">
                    <p className="text-white text-[16px] leading-[1.7] font-light italic">
                      &quot;{t.quote}&quot;
                    </p>
                  </div>

                  <div className="px-8 pb-5 flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-full border flex items-center justify-center shrink-0 ${currentIndex === i ? "bg-white/20 border-white/30" : "bg-(--highlight)/20 border-(--highlight)/30"}`}
                    >
                      <span className="text-xs font-bold text-white">
                        {t.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm leading-none mb-1">
                        {t.name}
                      </p>
                      <p
                        className={`text-xs ${currentIndex === i ? "text-white/70" : "text-white/40"}`}
                      >
                        {t.role}
                      </p>
                    </div>
                  </div>

                  <div className="mx-4 mb-4 rounded-2xl bg-white/10 border border-white/5 px-6 py-5 flex items-center justify-between">
                    <div>
                      <p className="text-white font-black text-2xl tracking-tighter leading-none mb-1">
                        {t.stat}
                      </p>
                      <p className="text-white text-[10px] uppercase font-bold tracking-widest">
                        {t.statLabel}
                      </p>
                    </div>
                    <div
                      className={
                        currentIndex === i ? "text-white" : "text-(--highlight)"
                      }
                    >
                      <QuoteMark />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* --- PROGRESS BAR --- */}
        <div className="flex justify-center gap-3 mt-12">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-1.5 transition-all duration-500 rounded-full ${currentIndex === i ? "w-12 bg-(--highlight)" : "w-3 bg-white/10"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
