"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

function FeatureCard({ item, index }: { item: any; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  // Access the icon component from the data
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
      <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white mb-2">
        0{index + 1}
      </span>

      <div className="flex flex-col gap-4">
        <div className="text-(--highlight) group-hover:scale-110 transition-transform duration-500">
          {Icon && <Icon size={24} />}
        </div>
        <h3 className="text-white font-bold leading-tight text-lg">
          {item.title}
        </h3>
      </div>
    </motion.div>
  );
}

const AboutService = ({ data }: { data: any }) => {
  return (
    <section
      id="about"
      className="min-h-screen bg-black text-white flex items-center px-8 md:px-24 py-24"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        {/* LEFT: IMAGE CONTAINER */}
        <div className="relative aspect-4/5 rounded-[2.5rem] overflow-hidden border border-white/5 group">
          <Image
            src={data.aboutImage || "/api/placeholder/800/1000"}
            alt="About Brand"
            fill
            className="object-cover transition-all duration-1000 scale-105 group-hover:scale-100"
          />
          <div className="absolute -inset-4 bg-(--highlight)/10 blur-3xl -z-10" />
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
              {data.label}
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-10 leading-tight">
            What is a <span className="text-(--highlight)">{data.title}?</span>
          </h2>

          {/* Core Concept Box */}
          <div className="relative p-8 rounded-3xl bg-[#121417] border border-white/5 shadow-sm border-l-2 border-l-(--highlight) mb-10">
            <p className="text-lg md:text-xl leading-relaxed text-white italic">
              <span className="text-white font-bold not-italic block mb-2 text-sm uppercase tracking-widest">
                The Core Concept
              </span>
              &quot;{data.highlight}&quot;
            </p>
          </div>

          {/* MORE ABOUT BUTTON */}
          <div className="flex justify-end mb-16">
            <Link
              href="/about"
              className="flex items-center gap-4 bg-(--highlight) hover:bg-black text-white pl-8 pr-2 py-2 rounded-full font-bold text-sm uppercase tracking-widest transition-all border-none"
            >
              More About
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black">
                <ArrowRight size={20} />
              </div>
            </Link>
          </div>

          {/* FEATURE CARDS GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-auto">
            {data.aboutFeatures &&
              data.aboutFeatures.map((item: any, i: number) => (
                <FeatureCard key={i} item={item} index={i} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutService;
