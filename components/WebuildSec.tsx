"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const services = [
  {
    tag: "01 — Brand",
    title: "Build the\nSoul",
    description:
      "We define your brand identity, positioning, and digital HQ with a premium system that builds trust and clarity.",
    accent: "#ba2c27",
  },
  {
    tag: "02 — Content",
    title: "Create the\nConversation",
    description:
      "We create engaging content systems and storytelling that keep your brand visible, active, and consistently talked about.",
    accent: "#ba2c27",
  },
  {
    tag: "03 — Revenue",
    title: "Secure\nthe Bag",
    description:
      "We turn attention into revenue using ads, funnels, and AI-driven systems built for scalable business growth.",
    accent: "#ba2c27",
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
      className="relative flex flex-col justify-between"
      style={{
        aspectRatio: "1 / 1",
        background: "#0f0f0f",
        border: "1px solid rgba(255,255,255,0.08)",
        padding: "clamp(1.5rem, 3vw, 2.5rem)",
        overflow: "hidden",
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

      {/* Corner dot accent */}
      <motion.div
        className="absolute top-6 right-6 w-2 h-2 rounded-full z-10"
        style={{ background: service.accent }}
        variants={{
          hover: { scale: 5, opacity: 0 },
        }}
        transition={{ duration: 0.4 }}
      />

      {/* Tag */}
      <motion.span
        className="relative z-10 text-xs font-mono tracking-widest uppercase"
        style={{ color: "rgba(255,255,255,0.35)" }}
        variants={{ hover: { color: "rgba(0,0,0,0.45)" } }}
        transition={{ duration: 0.3 }}
      >
        {service.tag}
      </motion.span>

      {/* Bottom content */}
      <div className="relative z-10 flex flex-col gap-4">
        <motion.h3
          className="font-medium leading-none uppercase"
          style={{
            fontSize: "clamp(2rem, 3.5vw, 3.2rem)",
            color: "#fff",
            whiteSpace: "pre-line",
          }}
          variants={{ hover: { color: "#000" } }}
          transition={{ duration: 0.3 }}
        >
          {service.title}
        </motion.h3>

        <motion.p
          className="text-lg leading-relaxed font-medium"
          style={{ color: "rgba(255,255,255,0.5)", maxWidth: "28ch" }}
          variants={{ hover: { color: "rgba(0,0,0,0.65)" } }}
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
    <section className="relative w-full bg-black overflow-hidden px-16 py-32">
      <div className="relative z-10">
        {/* ── Heading ── */}
        <div ref={headingRef} className="mb-16 md:mb-20">
          <motion.div
            className="flex items-center gap-3 mb-4"
            initial={{ opacity: 0, y: 12 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/Img/point_icon.svg"
              alt="Point Icon"
              width={24}
              height={24}
            />
            <p
              className="text-lg font-mono tracking-[0.3em] uppercase mb-0"
              style={{ color: "#ba2c27" }}
            >
              What we actually do
            </p>
          </motion.div>

          {/* "We build growth systems" — all on one line */}
          <div className="overflow-hidden">
            <motion.h2
              className="font-medium uppercase leading-none tracking-tighter"
              style={{
                fontSize: "clamp(2.8rem, 8vw, 8rem)",
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
              We <span style={{ color: "#ba2c27" }}>build</span> growth systems
            </motion.h2>
          </div>

          {/* CTA buttons inline with heading area */}
          <motion.div
            className="flex flex-wrap items-center gap-3 mt-8"
            initial={{ opacity: 0, y: 16 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 font-semibold text-sm tracking-wide uppercase px-6 py-3"
              style={{
                background: "#ba2c27",
                color: "#000",
                letterSpacing: "0.08em",
              }}
              whileHover={{ scale: 1.03, background: "#ffff" }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Contact us
              <span className="text-base">↗</span>
            </motion.a>

            <motion.a
              href="#work"
              className="inline-flex items-center gap-2 font-semibold text-sm tracking-wide uppercase px-6 py-3"
              style={{
                background: "transparent",
                color: "#fff",
                border: "1px solid rgba(255,255,255,0.2)",
                letterSpacing: "0.08em",
              }}
              whileHover={{
                borderColor: "rgba(255,255,255,0.6)",
                background: "rgba(255,255,255,0.05)",
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
            >
              See our work
            </motion.a>
          </motion.div>
        </div>

        {/* ── Cards grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {services.map((s, i) => (
            <ServiceCard key={s.tag} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
