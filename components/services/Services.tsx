/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function ServiceCard({ service, index }: { service: any; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });
  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      className="relative flex flex-col justify-between rounded-2xl overflow-hidden p-8 md:p-10 lg:aspect-square"
      style={{
        background: "#0f0f0f",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
      initial={{ opacity: 0, y: 48 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.65,
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.12,
      }}
      whileHover="hover"
    >
      {/* Hover accent fill */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ background: "#ba2c27", originY: 1 }}
        variants={{ hover: { scaleY: 1 }, initial: { scaleY: 0 } }}
        initial={{ scaleY: 0 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Icon Circle */}
      <motion.div
        className="relative z-10 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mb-12 lg:mb-0"
        style={{ background: "#ba2c27" }}
        variants={{
          hover: { scale: 1.1 },
        }}
        transition={{ duration: 0.4 }}
      >
        <div className="text-white">{Icon && <Icon size={32} />}</div>
      </motion.div>

      {/* Bottom content */}
      <div className="relative z-10 flex flex-col gap-4 md:gap-5">
        <motion.h3
          className="font-medium leading-[1.1] uppercase"
          style={{
            fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
            color: "#fff",
            whiteSpace: "pre-line",
          }}
          variants={{ hover: { color: "#000" } }}
          transition={{ duration: 0.3 }}
        >
          {service.title}
        </motion.h3>

        <motion.p
          className="text-base md:text-lg leading-relaxed font-medium"
          style={{ color: "rgba(255,255,255,0.5)", maxWidth: "30ch" }}
          variants={{ hover: { color: "#000" } }}
          transition={{ duration: 0.3 }}
        >
          {service.desc}
        </motion.p>
      </div>
    </motion.div>
  );
}

export const Services = ({ data }: { data: any[] }) => (
  <section
    id="services"
    className="min-h-screen bg-black text-white px-8 md:px-24 py-24"
  >
    <div className="flex justify-between items-end mb-20">
      <div>
        <span className="text-xs uppercase tracking-[0.3em] font-bold text-zinc-600 mb-4 block">
          * OUR SERVICES
        </span>
        <h2 className="text-5xl font-bold">What&apos;s Included</h2>
      </div>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((service, i) => (
        <ServiceCard key={i} service={service} index={i} />
      ))}
    </div>
  </section>
);
