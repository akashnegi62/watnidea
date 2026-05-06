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
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&q=80",
  },
  {
    id: "02",
    title: "Cognitive Design",
    tagline:
      "We use psychology-driven design to make your brand memorable and impactful.",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&q=80",
  },
  {
    id: "03",
    title: "Human-Centric Tech",
    tagline:
      "We combine AI tools with human insight to create meaningful brand experiences.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80",
  },
  {
    id: "04",
    title: "Future-Proof Systems",
    tagline:
      "We build scalable identities and systems designed to perform long-term.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80",
  },
];

export default function WhyChooseUs() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // 1. Setup Motion Values for Cursor
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // 2. Add Spring Physics for smooth "lagging" follow
  const springConfig = { stiffness: 100, damping: 25, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    // We offset the image by half its width/height so it centers on the cursor
    mouseX.set(e.clientX - 125);
    mouseY.set(e.clientY - 160);
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative bg-black min-h-screen py-32 px-16 overflow-hidden"
    >
      {/* HEADER */}
      <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between pr-10">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Image
              src="/Img/point_icon.svg"
              alt="Point Icon"
              width={24}
              height={24}
            />
            <p className="text-white/40 uppercase tracking-[0.3em] text-lg font-medium mb-0">
              Why choose us
            </p>
          </div>
          <h2 className="text-white text-5xl md:text-8xl font-medium tracking-tighter leading-none">
            Strategic <span className="text-(--highlight)">Growth</span> <br />{" "}
            Systems
          </h2>
        </div>
        <button className="mt-8 md:mt-0 group flex items-center gap-2 text-white border border-white/20 px-8 py-4 rounded-full hover:bg-white hover:text-black transition-all font-medium uppercase text-xs tracking-widest">
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
            className="group relative border-b border-white/10 py-12 cursor-pointer z-10"
          >
            <div className="flex flex-col">
              <h3 className="text-white text-4xl md:text-7xl font-medium tracking-tighter transition-opacity duration-500 group-hover:opacity-40">
                {item.title}
              </h3>

              {/* REVEAL TAGLINE */}
              <div className="overflow-hidden mt-3 h-8">
                <motion.p
                  initial={{ y: "100%" }}
                  animate={hoveredIndex === idx ? { y: 0 } : { y: "100%" }}
                  transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
                  className="text-white text-lg md:text-2xl font-light max-w-2xl"
                >
                  {item.tagline}
                </motion.p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CURSOR-FOLLOWING POPUP IMAGE */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          pointerEvents: "none", // Ensures image doesn't block hover on text
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
              {/* Inner Glow/Blur effect */}
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
