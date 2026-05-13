"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const CHOOSE_DATA = [
  {
    id: "01",
    title: "AI-Native Execution",
    tagline:
      "We leverage AI video, AEO, and short-form strategy to stay ahead of modern attention trends.",
    image: "/Img/strategy1.webp",
  },
  {
    id: "02",
    title: "Direct Collaboration",
    tagline:
      "No layers, no delays — you work directly with the team building your brand.",
    image: "/Img/strategy2.webp",
  },
  {
    id: "03",
    title: "Aesthetic Excellence",
    tagline:
      "Every visual is crafted to feel premium, ensuring your brand looks high-value and elite.",
    image: "/Img/strategy3.webp",
  },
  {
    id: "04",
    title: "Data-Driven Creativity",
    tagline:
      "We blend creativity with psychology and analytics to deliver results that perform and convert.",
    image: "/Img/strategy4.webp",
  },
];

export default function WhyChooseUs() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleItemClick = (idx: number) => {
    setHoveredIndex(hoveredIndex === idx ? null : idx);
  };

  return (
    <section className="relative bg-black min-h-screen py-20 md:py-32 px-6 md:px-12 lg:px-16 overflow-hidden">
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
          <h2 className="text-white text-3xl md:text-5xl lg:text-7xl font-medium tracking-tighter leading-[1.1] md:leading-none">
            Creative Systems for <br />{" "}
            <span className="text-(--highlight)">Modern Growth</span> strategies
          </h2>
        </div>
        <motion.button
          onClick={() => {
            window.location.href = "/contact";
          }}
          className="group w-fit flex items-center gap-2 text-white border border-white/20 px-8 py-4 md:px-8 md:py-4 rounded-full hover:bg-white hover:text-black transition-all font-medium uppercase text-xs md:text-sm tracking-widest"
        >
          contact us <ArrowUpRight className="w-4 h-4" />
        </motion.button>
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
            <div className="flex items-center justify-between">
              <h3 className="text-white text-xl md:text-4xl lg:text-6xl font-medium tracking-tighter transition-opacity duration-500 lg:group-hover:opacity-40">
                {item.title}
              </h3>

              <div className="relative w-8 h-8 md:w-12 md:h-12 shrink-0 flex items-center justify-center">
                <motion.svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white/40 group-hover:text-white transition-colors"
                  animate={{
                    rotate: hoveredIndex === idx ? 0 : -45,
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <path d="M12 5v14" />
                  <path d="M19 12l-7 7-7-7" />
                </motion.svg>
              </div>
            </div>

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
        ))}
      </div>
    </section>
  );
}
