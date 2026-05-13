"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    tag: "01 — Brand",
    title: "Build the\nSoul",
    description:
      "We define your brand identity, positioning, and digital HQ with a premium system that builds trust and clarity.",
    accent: "#ba2c27",
    icon: "/Img/build_icon1.svg",
  },
  {
    tag: "02 — Content",
    title: "Create the\nConversation",
    description:
      "We create engaging content systems and storytelling that keep your brand visible, active, and consistently talked about.",
    accent: "#ba2c27",
    icon: "/Img/build_icon2.svg",
  },
  {
    tag: "03 — Revenue",
    title: "Secure\nthe Bag",
    description:
      "We turn attention into revenue using ads, funnels, and AI-driven systems built for scalable business growth.",
    accent: "#ba2c27",
    icon: "/Img/build_icon3.svg",
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });

  return (
    <motion.div
      ref={ref}
      // Mobile: Auto height to prevent text overflow | Tablet/Desktop: Square aspect ratio
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
        style={{ background: service.accent, originY: 1 }}
        variants={{ hover: { scaleY: 1 }, initial: { scaleY: 0 } }}
        initial={{ scaleY: 0 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Icon Circle - Adjusted size for mobile/tablet */}
      <motion.div
        className="relative z-10 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mb-12 lg:mb-0"
        style={{ background: service.accent }}
        variants={{
          hover: { scale: 1.1 },
        }}
        transition={{ duration: 0.4 }}
      >
        <Image
          src={service.icon}
          alt="Service Icon"
          width={40}
          height={40}
          className="w-8 h-8 md:w-10 md:h-10"
        />
      </motion.div>

      {/* Bottom content */}
      <div className="relative z-10 flex flex-col gap-4 md:gap-5">
        <motion.h3
          className="font-medium leading-[1.1] uppercase"
          style={{
            fontSize: "clamp(1.5rem, 3.5vw, 2.5rem)",
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
          {service.description}
        </motion.p>
      </div>
    </motion.div>
  );
}

export default function WeBuildSec() {
  const headingRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true });

  return (
    <section className="relative w-full bg-black overflow-hidden px-6 py-20 md:px-12 md:py-28 lg:px-16 lg:py-32">
      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* ── Heading ── */}
        <div ref={headingRef} className="mb-12 md:mb-16 lg:mb-20">
          <motion.div
            className="flex items-center gap-3 mb-6"
            initial={{ opacity: 0, y: 12 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              animate={{ rotate: [0, 180, 360] }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              className="shrink-0"
            >
              <Image
                src="/Img/point_icon.svg"
                alt="Point Icon"
                width={20}
                height={20}
                className="md:w-6 md:h-6"
              />
            </motion.div>
            <p
              className="text-sm md:text-base lg:text-lg font-mono tracking-[0.2em] md:tracking-[0.3em] uppercase"
              style={{ color: "#ba2c27" }}
            >
              What we actually do
            </p>
          </motion.div>

          <div className="overflow-hidden">
            <motion.h2
              className="font-medium text-4xl md:text-5xl lg:text-7xl leading-[0.95] tracking-tighter"
              style={{
                color: "#fff",
              }}
              initial={{ y: "100%" }}
              animate={headingInView ? { y: "0%" } : {}}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.1,
              }}
            >
              We <span style={{ color: "#ba2c27" }}>build</span>{" "}
              <br className="block md:hidden" /> growth systems
            </motion.h2>

            <motion.p
              className="text-sm md:text-lg lg:text-xl leading-relaxed font-medium mt-6 text-white/80"
              initial={{ opacity: 0 }}
              animate={headingInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
            >
              Let’s build something powerful together.{" "}
              <button className="underline decoration-[#ba2c27] underline-offset-4 hover:text-[#ba2c27] transition-colors">
                Get Free Quote
              </button>
            </motion.p>
          </div>

          {/* CTA buttons */}
          <motion.div
            className="flex flex-wrap items-center gap-4 mt-10"
            initial={{ opacity: 0, y: 16 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Link href="/contact">
              <motion.div
                className="inline-flex items-center gap-2 font-bold text-xs md:text-sm tracking-widest uppercase px-8 py-4 rounded-full cursor-pointer"
                style={{
                  background: "#ba2c27",
                  color: "#000",
                }}
                whileHover={{ scale: 1.05, backgroundColor: "#fff" }}
                whileTap={{ scale: 0.95 }}
              >
                Contact us
                <span className="text-lg">↗</span>
              </motion.div>
            </Link>
          </motion.div>
        </div>

        {/* ── Cards grid ── */}
        {/* 1 col on mobile, 2 cols on tablet, 3 cols on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-4">
          {services.map((s, i) => (
            <ServiceCard key={s.tag} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
