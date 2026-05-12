/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function ServiceCard({
  service,
  index,
}: {
  service: any;
  index: number;
}) {
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

export const Services = ({ data, title }: { data: any[]; title?: string }) => (
  <section
    id="services"
    className="min-h-screen bg-black text-white px-8 md:px-24 py-24"
  >
    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
      <div>
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
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-zinc-600">
            SERVICES
          </span>
        </div>
        <h2 className="text-[clamp(2.5rem,8vw,7.5rem)] md:text-7xl font-bold">
          What&apos;s Included in Our
        </h2>
        <span className="text-[clamp(2.5rem,8vw,7.5rem)] md:text-7xl font-bold text-(--highlight)">
          {title || "Aura Architecture"} Services
        </span>
      </div>

      <button className="flex items-center gap-2 text-sm uppercase tracking-widest border-b border-white pb-2 hover:opacity-50 transition shrink-0">
        See All Services <ArrowUpRight size={16} />
      </button>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((service, i) => (
        <ServiceCard key={i} service={service} index={i} />
      ))}
    </div>
    <p className="text-center mt-10">Let’s make something great together. <Link className="text-(--highlight) underline" href="/contact">Get Quote</Link></p>
    
  </section>
);
