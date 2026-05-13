/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";

export function StatCard({ stat, index }: { stat: any; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 48 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.75,
        delay: index * 0.13,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover="hover"
      className="group relative flex flex-col gap-3 p-7 border border-white/10
                 rounded-2xl bg-[#0f0f0f] transition-all duration-500 overflow-hidden"
    >
      {/* hover accent fill */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ background: "#ba2c27", originY: 1 }}
        variants={{ hover: { scaleY: 1 }, initial: { scaleY: 0 } }}
        initial={{ scaleY: 0 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* animated corner accent */}
      <span
        className="absolute top-0 left-0 w-10 h-10 border-t border-l
                   border-(--highlight) rounded-tl-2xl opacity-0
                   group-hover:opacity-100 transition-opacity duration-500 z-10"
      />

      {/* index number */}
      <span className="relative z-10 text-[11px] font-semibold tracking-[0.25em] uppercase text-white group-hover:text-black transition-colors">
        0{index + 1}
      </span>

      {/* big value */}
      <motion.p
        initial={{ opacity: 0, x: -20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{
          duration: 0.6,
          delay: index * 0.13 + 0.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative z-10 text-xl md:text-2xl font-bold tracking-tight text-(--highlight) group-hover:text-black transition-colors leading-tight uppercase"
      >
        {stat.value}
      </motion.p>

      {/* divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{
          duration: 0.5,
          delay: index * 0.13 + 0.35,
          ease: "easeOut",
        }}
        style={{ originX: 0 }}
        className="relative z-10 h-[.5px] w-full bg-white/10 group-hover:bg-black/20 transition-colors"
      />

      <div className="relative z-10 flex flex-col gap-2">
        {stat.desc && (
          <p className="text-white group-hover:text-black transition-colors text-sm leading-relaxed">
            {stat.desc}
          </p>
        )}
      </div>
    </motion.div>
  );
}

const Results = ({ data, title }: { data: any[]; title?: string }) => {
  const outerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(outerRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: outerRef,
    offset: ["start end", "end start"],
  });

  const smooth = useSpring(scrollYProgress, { stiffness: 50, damping: 18 });

  /* image parallax */
  const imgY = useTransform(smooth, [0, 1], ["-8%", "8%"]);

  /* rotating badge */
  const badgeRot = useTransform(smooth, [0, 1], [0, 360]);

  /* headline slide */
  const headY = useTransform(smooth, [0, 0.5], [40, 0]);
  const headO = useTransform(smooth, [0, 0.3], [0, 1]);

  return (
    <section
      ref={outerRef}
      className="relative w-full bg-black overflow-hidden py-16 md:py-32"
    >
      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-12 lg:gap-0 items-stretch">
        {/* ══ LEFT — image + badge ══ */}
        <div className="relative overflow-hidden rounded-2xl md:rounded-3xl lg:rounded-none lg:rounded-l-3xl min-h-[300px] md:min-h-[440px] lg:min-h-0">
          {/* parallax image wrapper */}
          <motion.div
            style={{ y: imgY }}
            className="absolute inset-[-8%] w-[116%] h-[116%]"
          >
            <Image
              src="/Img/identity1.webp"
              alt="Brand Success"
              fill
              className="object-cover object-center"
              sizes="(max-width:1024px) 100vw, 50vw"
            />
            {/* light vignette overlay */}
            <div className="absolute inset-0 bg-linear-to-r from-black/20 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />
          </motion.div>

          {/* ── Rotating badge ── */}
          <div className="absolute top-4 right-4 md:top-8 md:right-8 z-10 w-20 h-20 md:w-24 md:h-24 bg-(--highlight) rounded-full shadow-xl">
            <motion.svg
              style={{ rotate: badgeRot }}
              viewBox="0 0 96 96"
              className="w-full h-full"
            >
              <defs>
                <path
                  id="circle"
                  d="M 48,48 m -32,0 a 32,32 0 1,1 64,0 a 32,32 0 1,1 -64,0"
                />
              </defs>
              <text
                fill="white"
                fontSize="10"
                fontWeight="1000"
                letterSpacing="3"
                className="uppercase"
              >
                <textPath href="#circle">
                  Success Results · Strategic Edge ·
                </textPath>
              </text>
            </motion.svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/20 flex items-center justify-center">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 14 14"
                  fill="none"
                  className="md:w-3.5 md:h-3.5"
                >
                  <path
                    d="M3 11L11 3M11 3H5M11 3V9"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* ══ RIGHT — content panel ══ */}
        <div className="lg:pl-14 flex flex-col justify-between gap-10 md:gap-14">
          <div className="space-y-6 md:space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-2.5"
            >
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
              <span className="text-(--highlight) text-sm md:text-lg font-bold uppercase tracking-[0.28em]">
                Results{" "}
              </span>
            </motion.div>

            <motion.div style={{ y: headY, opacity: headO }}>
              <h2 className="text-3xl md:text-5xl lg:text-[3.6rem] text-white leading-[1.1] tracking-tighter font-bold">
                What You Can Expect From{" "}
                <span className="text-(--highlight)">{title}</span>
              </h2>
            </motion.div>
          </div>

          {/* 2×2 stats grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
            {data.map((stat, i) => (
              <StatCard key={i} stat={stat} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
