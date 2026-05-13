/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

export function ProcessCard({ item, index }: { item: any; index: number }) {
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
      className="group relative flex flex-col p-8 rounded-2xl border border-white/5 bg-[#121417] hover:shadow-2xl hover:shadow-black/5 transition-all duration-500 overflow-hidden"
    >
      <span className="absolute top-0 left-0 w-8 h-8 border-t border-l border-(--highlight) rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="flex justify-between items-start mb-6">
        <div className="text-(--highlight) group-hover:scale-110 transition-transform duration-500">
          {Icon && <Icon size={32} />}
        </div>
        <span className="text-4xl font-black text-white transition-colors duration-500 group-hover:text-white">
          {item.num}
        </span>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="text-white font-bold leading-tight text-xl uppercase tracking-tight">
          {item.title}
        </h3>
        <p className="text-white leading-relaxed text-sm md:text-base">
          {item.desc}
        </p>
      </div>
    </motion.div>
  );
}

export const Process = ({
  data,
  title = "Brand Building",
  description = "We follow a step-by-step process to create high-quality and impactful results. Each stage focuses on clarity, creativity, and results.",
}: {
  data: any[];
  title?: string;
  description?: string;
}) => (
  <section
    id="process"
    className="min-h-[70vh] bg-black text-white px-6 md:px-24 py-16 md:py-24"
  >
    <div className="flex justify-between items-end mb-12 md:mb-16">
      <div className="max-w-3xl">
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
          <span className="text-sm md:text-lg uppercase tracking-[0.3em] font-medium text-(--highlight)">
            How We Work Together
          </span>
        </div>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tighter leading-tight mb-2">
          Step-by-Step Guide to
          <br />
          <span className="text-(--highlight)">{title}</span>
        </h2>
        <p className="text-sm md:text-base text-white/60 mt-4 leading-relaxed max-w-2xl">
          {description}
        </p>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {data.map((step, i) => (
        <ProcessCard key={i} item={step} index={i} />
      ))}
    </div>
  </section>
);
