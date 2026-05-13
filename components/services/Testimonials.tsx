"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

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

const TESTIMONIALS_DATA = [
  {
    name: "Priya Mehta",
    role: "Co-Founder, UrbanGlow",
    quote:
      "The strategy and design approach gave our business a strong identity. Engagement has improved consistently.",
    stat: "3.2X",
    statLabel: "Engagement Boost",
  },
  {
    name: "Amit Verma",
    role: "Director, Nexa Solutions",
    quote:
      "Working with WatNidea helped us position our brand clearly. Our messaging is now sharp and consistent.",
    stat: "60%",
    statLabel: "Clarity Increase",
  },
  {
    name: "Sneha Kapoor",
    role: "Founder, LuxeSkin India",
    quote:
      "Their branding process is structured and result-driven. We achieved better visibility and stronger trust.",
    stat: "2.5X",
    statLabel: "Visibility Growth",
  },
  {
    name: "Vikram Seth",
    role: "Creative Director, Vibe",
    quote:
      "The visual fidelity is stunning. It’s hard to believe these weren't shot on a traditional set with a massive crew.",
    stat: "4.1X",
    statLabel: "ROI Growth",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const outerRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev + 1 < TESTIMONIALS_DATA.length ? prev + 1 : prev,
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
  const maxTranslate = Math.max(0, TESTIMONIALS_DATA.length - visibleCards);
  const slideIndex = Math.min(currentIndex, maxTranslate);

  return (
    <section
      ref={outerRef}
      className="relative w-full bg-black overflow-hidden py-24 md:py-32"
    >
      <div className="relative max-w-[1320px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2.5 mb-6">
              <motion.div
                animate={{ rotate: [0, 180, 360] }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                className="flex items-center justify-center select-none"
              >
                <Image
                  src="/Img/point_icon.svg"
                  alt="Point Icon"
                  width={18}
                  height={18}
                />
              </motion.div>
              <span className="text-(--highlight) text-lg font-Testimonials uppercase tracking-[0.3em]">
                Testimonials
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight">
              What <span className="text-(--highlight)">client</span> says
            </h2>
          </div>

          <div className="flex flex-col items-end gap-6 pb-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="flex items-center bg-[#121417] border border-white/10 rounded-full pl-7 pr-2 py-2 group hover:bg-(--highlight) transition-colors duration-300"
            >
              <span className="text-white font-bold text-sm mr-4">
                Contact Us
              </span>
              <span className="w-10 h-10 rounded-full bg-(--highlight) group-hover:bg-white/20 flex items-center justify-center transition-colors">
                <ArrowIcon />
              </span>
            </motion.button>

            <div className="flex gap-3">
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center disabled:opacity-20 hover:bg-white/5 transition-all text-white"
              >
                <ArrowIcon rotate />
              </button>
              <button
                onClick={handleNext}
                disabled={currentIndex === TESTIMONIALS_DATA.length - 1}
                className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center disabled:opacity-20 hover:bg-zinc-200 transition-all"
              >
                <ArrowIcon />
              </button>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden p-2">
          <motion.div
            className="flex gap-5"
            animate={{
              x: `calc(-${slideIndex * (100 / visibleCards)}% - ${slideIndex * (gap / visibleCards)}px)`,
            }}
            transition={{ type: "spring", stiffness: 180, damping: 25 }}
          >
            {TESTIMONIALS_DATA.map((t, i) => (
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
                      <p className="text-white font-black text-4xl tracking-tighter leading-none mb-1">
                        {t.stat}
                      </p>
                      <p className="text-white/50 text-[10px] uppercase font-bold tracking-widest">
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

        <div className="flex justify-center gap-3 mt-12">
          {TESTIMONIALS_DATA.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-1.5 transition-all duration-500 rounded-full ${currentIndex === i ? "w-12 bg-(--highlight)" : "w-3 bg-black/10"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
