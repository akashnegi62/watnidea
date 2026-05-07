"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const IMAGES = [
  "/Img/strategy1.webp",
  "/Img/strategy2.webp",
  "/Img/strategy3.webp",
  "/Img/strategy4.webp",
];

const CARD_FINAL_WIDTH = "23.5%";
const CARD_HEIGHT = "clamp(160px, 32vh, 300px)";

const SLOT = ["0%", "25.5%", "51%", "76.5%"];

export default function CoreServices() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

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
    <section ref={containerRef} className="relative h-[400vh] bg-[#f8f8f8]">
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between py-16 overflow-hidden">
        {/* ── HEADER ── */}
        <div className="px-6 md:px-16">
          <div className="flex items-center gap-3 mb-8">
            <Image
              src="/Img/point_icon.svg"
              alt="Point Icon"
              width={24}
              height={24}
            />
            <p className="text-(--highlight) font-semibold uppercase tracking-[0.2em] text-lg mb-0">
              What We Do Best
            </p>
          </div>
          <h1 className="text-5xl md:text-[5.5rem] font-medium text-[#121417] tracking-tight leading-none">
            An <span className="text-(--highlight)">Identity Lab</span> Built
            for Growth.
          </h1>
        </div>

        {/* ── IMAGE STAGE ── */}
        <div className="px-6 md:px-16 flex flex-col w-full">
          {/* Progress line + dot */}
          <div className="relative w-full h-px bg-black/10 mb-6">
            <motion.div
              style={{ left: dotX }}
              className="absolute top-[-5px] w-2.5 h-2.5 bg-(--highlight) rounded-full shadow-[0_0_10px_rgba(255,0,0,0.5)]"
            />
          </div>

          {/* Cards */}
          <div className="relative w-full" style={{ height: CARD_HEIGHT }}>
            {/* card-3  */}
            <motion.div
              style={{
                position: "absolute",
                top: 0,
                left: c3Left,
                width: CARD_FINAL_WIDTH,
                height: "100%",
                zIndex: 1,
              }}
              className="overflow-hidden rounded-2xl"
            >
              <div className="absolute inset-0 bg-neutral-300" />
              <Image
                src={IMAGES[3]}
                alt="Strategy 4"
                fill
                className="object-cover"
                sizes="25vw"
              />
            </motion.div>

            {/* card-2 */}
            <motion.div
              style={{
                position: "absolute",
                top: 0,
                left: c2Left,
                width: CARD_FINAL_WIDTH,
                height: "100%",
                zIndex: 2,
              }}
              className="overflow-hidden rounded-2xl"
            >
              <div className="absolute inset-0 bg-neutral-300" />
              <Image
                src={IMAGES[2]}
                alt="Strategy 3"
                fill
                className="object-cover"
                sizes="25vw"
              />
            </motion.div>

            {/* card-1 */}
            <motion.div
              style={{
                position: "absolute",
                top: 0,
                left: c1Left,
                width: CARD_FINAL_WIDTH,
                height: "100%",
                zIndex: 3,
              }}
              className="overflow-hidden rounded-2xl"
            >
              <div className="absolute inset-0 bg-neutral-300" />
              <Image
                src={IMAGES[1]}
                alt="Strategy 2"
                fill
                className="object-cover"
                sizes="25vw"
              />
            </motion.div>

            {/* card-0 */}
            <motion.div
              style={{
                position: "absolute",
                top: 0,
                left: c0Left,
                width: c0Width,
                height: "100%",
                zIndex: 4,
              }}
              className="overflow-hidden rounded-2xl shadow-xl"
            >
              <div className="absolute inset-0 bg-neutral-300" />
              <Image
                src={IMAGES[0]}
                alt="Strategy 1"
                fill
                className="object-cover"
                sizes="45vw"
              />
            </motion.div>
          </div>
        </div>

        {/* ── DESCRIPTION + BUTTON ── */}
        <div className="px-6 md:px-16 flex flex-col md:flex-row items-end justify-between gap-10">
          <div className="max-w-3xl">
            <p className="text-[#121417]/80 text-xl md:text-2xl leading-tight font-medium">
              <span className="text-black font-bold">watNidea</span> combines
              branding, creative execution, and growth systems into one unified
              engine. We don&apos;t operate like a traditional agency—we design
              identities, build digital ecosystems, and scale them with
              precision.
            </p>
            <p className="text-[#121417]/60 text-lg mt-4 max-w-2xl leading-snug">
              Whether you need clarity, visibility, or scale, we ensure your
              brand doesn&apos;t just exist— it dominates.
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-4 bg-[#121417] text-white px-10 py-5 rounded-full text-lg font-bold shadow-xl hover:bg-(--highlight) transition-colors duration-300 shrink-0"
          >
            Discover more
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
