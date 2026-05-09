"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const CHOOSE_DATA = [
  {
    id: "01",
    title: "Aesthetic-First Utility",
    tagline:
      "We build premium visuals that elevate perception and justify higher value.",
    image: "/Img/strategy1.webp",
  },
  {
    id: "02",
    title: "Cognitive Design",
    tagline:
      "We use psychology-driven design to make your brand memorable and impactful.",
    image: "/Img/strategy2.webp",
  },
  {
    id: "03",
    title: "Human-Centric Tech",
    tagline:
      "We combine AI tools with human insight to create meaningful brand experiences.",
    image: "/Img/strategy3.webp",
  },
  {
    id: "04",
    title: "Future-Proof Systems",
    tagline:
      "We build scalable identities and systems designed to perform long-term.",
    image: "/Img/strategy4.webp",
  },
];

export default function WhyChooseUs() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 100, damping: 25, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    mouseX.set(e.clientX - 125);
    mouseY.set(e.clientY - 160);
  };

  // Toggle function for mobile/tablet clicks
  const handleItemClick = (idx: number) => {
    setHoveredIndex(hoveredIndex === idx ? null : idx);
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative bg-black min-h-screen py-20 md:py-32 px-6 md:px-12 lg:px-16 overflow-hidden"
    >
      {/* HEADER */}
      <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <div className="flex items-center gap-3 mb-4 md:mb-6">
            <motion.div
              animate={{ rotate: [0, 180, 360] }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            >
              <Image
                src="/Img/point_icon.svg"
                alt="Point Icon"
                width={20}
                height={20}
                className="md:w-6 md:h-6"
              />
            </motion.div>
            <p className="text-white/40 uppercase tracking-[0.2em] md:tracking-[0.3em] text-sm md:text-lg font-medium mb-0">
              Why choose us
            </p>
          </div>
          <h2 className="text-white text-4xl md:text-6xl lg:text-8xl font-medium tracking-tighter leading-[1.1] md:leading-none">
            Strategic <span className="text-(--highlight)">Growth</span>{" "}
            <br className="hidden md:block" /> Systems
          </h2>
        </div>
        <button className="group w-fit flex items-center gap-2 text-white border border-white/20 px-8 py-4 md:px-8 md:py-4 rounded-full hover:bg-white hover:text-black transition-all font-medium uppercase text-xs md:text-sm tracking-widest">
          contact us <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>

      {/* LIST ITEMS */}
      <div className="flex flex-col border-t border-white/10">
        {CHOOSE_DATA.map((item, idx) => (
          <div
            key={item.id}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => handleItemClick(idx)}
            className="group relative border-b border-white/10 py-8 md:py-12 cursor-pointer z-10"
          >
            <div className="flex flex-col">
              <h3 className="text-white text-2xl md:text-5xl lg:text-7xl font-medium tracking-tighter transition-opacity duration-500 lg:group-hover:opacity-40">
                {item.title}
              </h3>

              {/* REVEAL TAGLINE: Uses AnimatePresence for dynamic height on mobile */}
              <AnimatePresence>
                {hoveredIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="text-white text-base md:text-xl lg:text-2xl font-light max-w-2xl pt-3 md:pt-4">
                      {item.tagline}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        ))}
      </div>

      {/* CURSOR-FOLLOWING POPUP IMAGE (Hidden on mobile and tablet) */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          pointerEvents: "none",
        }}
        className="fixed top-0 left-0 z-50 hidden lg:block"
      >
        <AnimatePresence mode="wait">
          {hoveredIndex !== null && (
            <motion.div
              key={hoveredIndex}
              initial={{ opacity: 0, scale: 0.5, filter: "blur(15px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.5, filter: "blur(15px)" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative w-[250px] h-[320px] rounded-xl overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)] border border-white/10"
            >
              <div
                className="absolute inset-0 blur-2xl opacity-30 scale-125"
                style={{
                  background: `url(${CHOOSE_DATA[hoveredIndex].image})`,
                  backgroundSize: "cover",
                }}
              />
              <Image
                src={CHOOSE_DATA[hoveredIndex].image}
                alt="Preview"
                fill
                className="object-cover"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
