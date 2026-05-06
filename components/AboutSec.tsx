"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Fingerprint, Paintbrush, BarChart3, Cpu } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

/* UTILITY COMPONENT */
const Badge = ({
  children,
  color,
  rotate = "-rotate-2",
}: {
  children: React.ReactNode;
  color: string;
  rotate?: string;
}) => (
  <span
    className={`${color} text-black px-2 py-0.5 rounded-sm inline-block ${rotate} font-bold mx-1 uppercase text-sm md:text-base`}
  >
    {children}
  </span>
);

/* DATA */
const slides = [
  {
    id: "01",
    heading: "We are not a",
    highlight: '"Marketing Agency."',
    subtext: (
      <>
        We are an <Badge color="bg-red-600">Identity Lab</Badge> — crafting
        brand DNA that thinks, feels, and converts.
      </>
    ),
    icon: <Fingerprint className="w-12 h-12 text-red-600" />,
    color: "text-[#f5f0e8]",
  },
  {
    id: "02",
    heading: "Aesthetics",
    highlight: "Are Utility",
    subtext: (
      <>
        <Badge color="bg-emerald-400" rotate="rotate-2">
          Eye-catching visuals
        </Badge>{" "}
        that elevate your brand. Beauty is not decoration — it&apos;s strategy.
      </>
    ),
    icon: <Paintbrush className="w-12 h-12 text-green-400" />,
    color: "text-[#f5f0e8]",
  },
  {
    id: "03",
    heading: "Data",
    highlight: "Protects the Art",
    subtext: (
      <>
        Creative{" "}
        <Badge color="bg-blue-500" rotate="-rotate-1">
          ideas powered by real data.
        </Badge>{" "}
        We let numbers protect the soul of your work.
      </>
    ),
    icon: <BarChart3 className="w-12 h-12 text-blue-400" />,
    color: "text-[#f5f0e8]",
  },
  {
    id: "04",
    heading: "Built for",
    highlight: "the Future",
    subtext: (
      <>
        Driven by{" "}
        <Badge color="bg-orange-500" rotate="rotate-1">
          AI and evolving trends.
        </Badge>{" "}
        We build brands that lead the future.
      </>
    ),
    icon: <Cpu className="w-12 h-12 text-orange-400" />,
    color: "text-[#f5f0e8]",
  },
];

/* COMPONENT */
export default function AboutSec() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    const getScrollAmount = () => track.scrollWidth - window.innerWidth;

    const ctx = gsap.context(() => {
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
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-black"
    >
      {/* HORIZONTAL TRACK */}
      <div ref={trackRef} className="flex h-full will-change-transform">
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="relative flex h-full w-screen shrink-0 flex-col items-center justify-center px-6"
          >
            {/* CONTENT WRAPPER */}
            <div className="flex flex-col items-center max-w-6xl w-full">
              {/* ICON */}
              <div className="mb-12 opacity-50 bg-white/5 p-6 rounded-full border border-white/5">
                {slide.icon}
              </div>

              {/* HEADING */}
              <h2 className="text-[clamp(2.5rem,8vw,7.5rem)] font-black leading-[0.9] tracking-tighter text-center mb-10">
                <span className="text-white/40">{slide.heading}</span>
                <br />
                <span className={slide.color}>{slide.highlight}</span>
              </h2>

              {/* DESCRIPTION */}
              <div className="max-w-2xl text-center">
                <div className="text-white/50 text-lg md:text-xl leading-relaxed font-medium">
                  {slide.subtext}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
