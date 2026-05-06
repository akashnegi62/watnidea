"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroSimple() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // PARALLAX EFFECT:
  const waveY = useTransform(scrollYProgress, [0, 1], ["80%", "-20%"]);

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section
      ref={ref}
      className="relative h-screen w-full bg-black overflow-hidden"
    >
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
      <div className="absolute inset-0 bg-black/40 z-10" />
      {/* TEXT  */}
      <motion.div
        style={{ y: textY }}
        className="absolute bottom-32 left-10 md:left-20 z-30 text-white max-w-3xl"
      >
        <h1 className="text-5xl md:text-7xl leading-tight font-medium">
          Identity with Soul. <br />
          <span className="text-(--highlight)">Strategy with Teeth.</span>
        </h1>
      </motion.div>

      {/* THE WAVE  */}
      <motion.div
        style={{ y: waveY }}
        className="absolute top-0 left-0 w-full h-[120vh] z-20 pointer-events-none"
      >
        <svg
          viewBox="0 0 1440 800"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            fill="black"
            // Dramatic curved wave
            d="M0,200 C400,100 800,100 1440,200 L1440,800 L0,800 Z"
          />
        </svg>
      </motion.div>
    </section>
  );
}
