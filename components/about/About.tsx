"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion, useInView, animate } from "framer-motion";
import { Target, TrendingUp, Zap, ArrowRight } from "lucide-react";

/**
 * FeatureCard component for displaying individual about features
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function FeatureCard({ item, index }: { item: { title: string; icon: any }; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const Icon = item.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative flex flex-col p-6 rounded-2xl border border-white/5 bg-[#121417] hover:shadow-2xl hover:shadow-black/5 transition-all duration-500 overflow-hidden"
    >
      {/* Animated Corner Accent */}
      <span className="absolute top-0 left-0 w-6 h-6 border-t border-l border-(--highlight) rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Index Number */}
      <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/40 mb-2">
        0{index + 1}
      </span>

      <div className="flex flex-col gap-4">
        <div className="text-(--highlight) group-hover:scale-110 transition-transform duration-500">
          <Icon size={24} />
        </div>
        <h3 className="text-white font-bold leading-tight text-xl">
          {item.title}
        </h3>
      </div>
    </motion.div>
  );
}

/**
 * Counter component for animating numbers
 */
function Counter({ value }: { value: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (inView) {
      const controls = animate(0, value, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (latest) => setDisplayValue(Math.round(latest)),
      });
      return () => controls.stop();
    }
  }, [inView, value]);

  return <span ref={ref}>{displayValue}</span>;
}

/**
 * About component showcasing the brand philosophy and key features.
 * Adapted from AboutService design with static data.
 */
const About = () => {
  const features = [
    { title: "Tailored Marketing Solutions", icon: Target },
    { title: "Proactive Trends Tracking", icon: TrendingUp },
    { title: "Affordable Packages", icon: Zap },
  ];

  return (
    <section
      id="about"
      className="min-h-screen bg-black text-white flex items-center px-8 md:px-24 py-24"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        {/* LEFT: IMAGE & STATS CONTAINER */}
        <div className="flex flex-col gap-10">
          <div className="relative aspect-4/5 rounded-[2.5rem] overflow-hidden border border-black/5 group shadow-2xl">
            <Image
              src="/Img/approach.webp"
              alt="About watNidea"
              fill
              className="object-cover transition-all duration-1000 scale-105 group-hover:scale-100"
              priority
            />
            {/* Subtle overlay for depth */}
            <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-60" />
            
            {/* Accent glow behind image */}
            <div className="absolute -inset-4 bg-(--highlight)/10 blur-3xl -z-10" />
          </div>

          {/* STATS SECTION */}
          <div className="flex flex-wrap items-center gap-8 md:gap-16 px-4">
            <div className="flex flex-col">
              <div className="text-5xl md:text-6xl font-black text-(--highlight) flex items-center tracking-tighter">
                <Counter value={25} />+
              </div>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 mt-2">
                Collective Aura
              </span>
            </div>
            
            <div className="h-16 w-px bg-white/10 hidden sm:block" />

            <div className="flex flex-col gap-1">
              <span className="text-xl md:text-2xl font-bold text-white leading-none">
                Creative execution
              </span>
              <span className="text-xl md:text-2xl font-bold text-(--highlight) leading-none">
                Digital marketing
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT: CONTENT */}
        <div className="flex flex-col h-full">
          <div className="flex items-center gap-3 mb-4">
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
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-(--highlight)">
              About us
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-10 leading-tight">
            The End of <span className="text-(--highlight)">&quot;Average.&quot;</span>
          </h2>

          {/* Core Concept Box */}
          <div className="relative p-8 rounded-3xl bg-[#121417] border border-white/5 shadow-sm border-l-2 border-l-(--highlight) mb-10">
            <p className="text-lg md:text-xl leading-relaxed text-white italic">
              <span className="text-white font-bold not-italic block mb-2 text-sm uppercase tracking-widest">
                The Aura Architect
              </span>
              &quot;We don’t just build brands - we architect Aura. watNidea is a 2026-native creative powerhouse where high-end aesthetics meet aggressive technical growth.&quot;
            </p>
          </div>

          {/* ACTION BUTTON */}
          <div className="flex justify-end mb-16">
            <a
              href="https://calendly.com/watnidea-info/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-(--highlight) hover:bg-white hover:text-black text-white pl-8 pr-2 py-2 rounded-full font-bold text-sm uppercase tracking-widest transition-all border-none group/btn shadow-lg cursor-pointer"
            >
              Learn More
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black group-hover/btn:scale-90 transition-transform duration-300">
                <ArrowRight size={20} />
              </div>
            </a>
          </div>

          {/* FEATURE CARDS GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-auto">
            {features.map((item, i) => (
              <FeatureCard key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
