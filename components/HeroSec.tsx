"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroSimple() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Wave rises on scroll
  const waveY = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);

  return (
    <section ref={ref} className="relative h-[150vh] bg-black">
      {/* HERO */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/Video/hero-bg.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* TEXT (always visible) */}
        <div className="absolute bottom-16 left-30 z-30 text-white max-w-3xl">
          <h1 className="text-5xl md:text-7xl leading-tight">
            Identity with Soul. <br />
            <span className="text-(--highlight)">Strategy with Teeth.</span>
          </h1>
        </div>

        <motion.div
          style={{ y: waveY }}
          className="absolute bottom-0 left-0 w-full h-screen z-20"
        >
          <svg
            viewBox="0 0 1440 800"
            className="w-full h-full"
            preserveAspectRatio="none"
          >
            <path
              fill="black"
              // Updated path data to start from the top and sweep down
              d="M0,0 C240,100 480,200 720,200 C960,200 1200,100 1440,0 L1440,800 L0,800 Z"
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
