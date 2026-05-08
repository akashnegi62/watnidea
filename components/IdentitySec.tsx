"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

/* CONSTANTS */
const IMAGES = [
  "/Img/identity1.webp",
  "/Img/identity2.webp",
  "/Img/identity3.webp",
  "/Img/identity4.webp",
];

const CARD_FINAL_WIDTH = "23.5%";
const SLOT = ["0%", "25.5%", "51%", "76.5%"];

export default function CoreServices() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  /* ANIMATION VALUES (Desktop Only) */
  const dotX = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const c0Left = useTransform(scrollYProgress, [0.0, 0.35], ["0%", SLOT[0]]);
  const c0Width = useTransform(
    scrollYProgress,
    [0.0, 0.35],
    ["45%", CARD_FINAL_WIDTH],
  );

  const c1Left = useTransform(scrollYProgress, [0.1, 0.45], ["0%", SLOT[1]]);
  const c2Left = useTransform(scrollYProgress, [0.2, 0.55], ["0%", SLOT[2]]);
  const c3Left = useTransform(scrollYProgress, [0.3, 0.65], ["0%", SLOT[3]]);

  return (
    <section
      ref={containerRef}
      className="relative h-auto md:h-[400vh] bg-[#f8f8f8]"
    >
      <div className="relative md:sticky top-0 h-auto md:h-screen w-full flex flex-col justify-between py-12 md:py-16 overflow-hidden">
        {/* HEADER */}
        <div className="px-6 md:px-16 mb-10 md:mb-0">
          <div className="flex items-center gap-3 mb-4 md:mb-8">
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
            <p className="text-[#ba2c27] font-semibold uppercase tracking-[0.2em] text-sm md:text-lg mb-0">
              What We Do Best
            </p>
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-[5.5rem] font-medium text-[#121417] tracking-tight leading-[1.1] md:leading-none">
            An <span className="text-[#ba2c27]">Identity Lab</span> Built for
            Growth.
          </h2>
        </div>

        {/* IMAGE STAGE */}
        <div className="px-6 md:px-16 flex flex-col w-full mb-12 md:mb-0">
          {/* Progress line - Hidden on mobile */}
          <div className="hidden md:block relative w-full h-px bg-black/10 mb-6">
            <motion.div
              style={{ left: dotX }}
              className="absolute top-[-5px] w-2.5 h-2.5 bg-[#ba2c27] rounded-full shadow-[0_0_10px_rgba(186,44,39,0.5)]"
            />
          </div>

          {/* Cards Stage */}
          <div className="relative w-full h-[250px] md:h-[clamp(200px,32vh,400px)]">
            {/* Desktop Only Cards (1, 2, 3) */}
            <motion.div
              className="hidden md:block absolute top-0 overflow-hidden rounded-2xl"
              style={{
                left: c3Left,
                width: CARD_FINAL_WIDTH,
                height: "100%",
                zIndex: 1,
              }}
            >
              <Image
                src={IMAGES[3]}
                alt="Strategy 4"
                fill
                className="object-cover"
                sizes="25vw"
              />
            </motion.div>

            <motion.div
              className="hidden md:block absolute top-0 overflow-hidden rounded-2xl"
              style={{
                left: c2Left,
                width: CARD_FINAL_WIDTH,
                height: "100%",
                zIndex: 2,
              }}
            >
              <Image
                src={IMAGES[2]}
                alt="Strategy 3"
                fill
                className="object-cover"
                sizes="25vw"
              />
            </motion.div>

            <motion.div
              className="hidden md:block absolute top-0 overflow-hidden rounded-2xl"
              style={{
                left: c1Left,
                width: CARD_FINAL_WIDTH,
                height: "100%",
                zIndex: 3,
              }}
            >
              <Image
                src={IMAGES[1]}
                alt="Strategy 2"
                fill
                className="object-cover"
                sizes="25vw"
              />
            </motion.div>

            {/* Main Card (Strategy 1) - Visible on Mobile & Desktop */}
            <motion.div
              className="overflow-hidden rounded-2xl shadow-xl md:shadow-none relative md:absolute top-0"
              style={{
                left: mounted && !isMobile ? c0Left : "0%",
                width: mounted && !isMobile ? c0Width : "100%",
                height: "100%",
                zIndex: 4,
              }}
            >
              <Image
                src={IMAGES[0]}
                alt="Strategy 1"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 45vw"
              />
            </motion.div>
          </div>
        </div>

        {/* DESCRIPTION + BUTTON */}
        <div className="px-6 md:px-16 flex flex-col md:flex-row items-end justify-between gap-8 md:gap-10">
          <div className="max-w-3xl">
            <p className="text-black text-xl md:text-2xl leading-tight font-medium">
              <span className="text-black font-black">watNidea</span> combines
              branding, creative execution, and growth systems into one unified
              engine. We don’t operate like a traditional agency—we design
              identities, build digital ecosystems, and scale them with
              precision.
            </p>
            <p className="text-black/70 text-base md:text-lg mt-4 max-w-2xl leading-snug">
              Whether you need clarity, visibility, or scale, we ensure your
              brand doesn&apos;t just exist— it dominates.
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group w-full md:w-auto flex items-center justify-center gap-4 bg-[#121417] text-white px-8 py-4 md:px-10 md:py-5 rounded-full text-base md:text-lg font-bold shadow-xl hover:bg-[#ba2c27] transition-colors duration-300 shrink-0"
          >
            Discover more
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
