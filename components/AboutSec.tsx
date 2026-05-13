"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const slides = [
  {
    id: "01",
    type: "hero",
    heading: (
      <>
        <span className="text-white/40">We are not a</span> <br />
        <span className="text-white">&quot;Marketing Agency.&quot;</span>
      </>
    ),
    highlight: 'We are "Identity lab."',
    accent: "text-[#ba2c27]",
  },
  {
    id: "02",
    type: "description",
    eyebrow: "ABOUT WATNIDEA",
    content: (
      <>
        The world has enough agencies—and most of them play safe. watNidea is an{" "}
        <span className="text-[#ba2c27]">Identity Lab</span>. We design
        &quot;The Vibe&quot; that makes brands impossible to ignore. Every
        strategy, every visual, and every campaign is built to trigger one
        reaction: <span className="text-white">&quot;What an idea!&quot;</span>
      </>
    ),
    buttonText: "MORE ABOUT",
    link: "/about",
  },
  {
    id: "03",
    type: "feature",
    heading: "Aesthetics",
    highlight: "Are Utility",
    subtext: "Eye-catching visuals that elevate your brand.",
    accent: "text-emerald-400",
  },
  {
    id: "04",
    type: "feature",
    heading: "Data",
    highlight: "Protects the Art",
    subtext: "Creative ideas powered by real data.",
    accent: "text-blue-500",
  },
  {
    id: "05",
    type: "feature",
    heading: "Built for",
    highlight: "the Future",
    subtext: "Driven by AI and evolving trends.",
    accent: "text-orange-500",
  },
];

export default function AboutSec() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      const track = trackRef.current;
      if (!container || !track) return;

      const getScrollAmount = () => track.scrollWidth - window.innerWidth;

      gsap.to(track, {
        x: () => -getScrollAmount(),
        ease: "none",
        scrollTrigger: {
          trigger: container,
          pin: true,
          scrub: 1,
          start: "top top",
          end: () => `+=${getScrollAmount()}`,
          pinSpacing: true,
          invalidateOnRefresh: true,
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-black text-white"
    >
      <div ref={trackRef} className="flex h-full will-change-transform">
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="relative flex h-full w-screen shrink-0 flex-col items-center justify-center px-8 md:px-24 text-center"
          >
            {/* TYPE 1: HERO (Slide 1) */}
            {slide.type === "hero" && (
              <div className="max-w-7xl flex flex-col items-center">
                <h2 className="text-[clamp(2.5rem,7vw,8rem)] font-medium leading-[1.1] tracking-tight">
                  {slide.heading}
                  <br />
                  <span className={slide.accent}>{slide.highlight}</span>
                </h2>
              </div>
            )}

            {/* TYPE 2: DESCRIPTION (Slide 2) */}
            {slide.type === "description" && (
              <div className="max-w-4xl flex flex-col items-center">
                <div className="flex items-center gap-3 mb-10">
                  <motion.div
                    animate={{ rotate: [0, 180, 360] }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <Image
                      src="/Img/point_icon.svg"
                      alt="Point Icon"
                      width={24}
                      height={24}
                      className="w-5 h-5 md:w-6 md:h-6"
                    />
                  </motion.div>
                  <p className="text-sm md:text-base font-bold tracking-[0.3em] text-white uppercase">
                    {slide.eyebrow}
                  </p>
                </div>
                <p className="text-[clamp(1.5rem,3vw,2.5rem)] leading-snug font-normal text-white/60 mb-12">
                  {slide.content}
                </p>
                <Link href={slide.link || "#"}>
                  <button className="group flex items-center gap-3 bg-white text-black px-12 py-5 rounded-full font-bold text-xs tracking-widest hover:bg-[#ba2c27] hover:text-white transition-all duration-300 uppercase">
                    {slide.buttonText}
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </Link>
              </div>
            )}

            {/* TYPE 3: FEATURES (Slide 3, 4, 5) */}
            {slide.type === "feature" && (
              <div className="max-w-7xl flex flex-col items-center">
                <h2 className="text-[clamp(3.5rem,8.5vw,10.5rem)] font-bold leading-[0.9] tracking-tighter mb-10">
                  <span className="text-white/20 block mb-2">
                    {slide.heading}
                  </span>
                  <span className={`${slide.accent} block`}>
                    {slide.highlight}
                  </span>
                </h2>
                <p className="text-xl md:text-3xl text-white max-w-2xl font-medium leading-relaxed">
                  {slide.subtext}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
