"use client";
import { useRef, useState } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";

const TESTIMONIALS = [
  {
    quote:
      "Synthetic Cinema transformed our ad production completely. What once took weeks now happens in days, while maintaining the premium cinematic quality our brand expects across every campaign.",
    name: "Ritika Sharma",
    role: "E-Commerce Director, StyleCart",
    stat: "3.2X",
    statLabel: "Ad Performance Boost",
  },
  {
    quote:
      "We reduced production costs significantly while increasing output. Testing multiple variations helped us quickly find winning ads and improve campaign performance across platforms with stronger results.",
    name: "Arjun Kapoor",
    role: "Founder, TrendHive",
    stat: "60%",
    statLabel: "Cost Reduction",
  },
  {
    quote:
      "Execution speed is unmatched. We launched multiple campaigns quickly, each aligned perfectly with our premium visual identity and designed to drive strong engagement and consistent brand recall.",
    name: "Sneha Mehta",
    role: "Marketing Head, LuxeGlow",
    stat: "2.5X",
    statLabel: "Engagement Increase",
  },
];

// ── Quote SVG ──
const QuoteMark = () => (
  <svg width="32" height="24" viewBox="0 0 32 24" fill="none">
    <path
      d="M0 24V14.4C0 6.4 4.8 1.6 14.4 0L16 3.2C11.2 4.8 8.8 8 8.8 12H14.4V24H0ZM17.6 24V14.4C17.6 6.4 22.4 1.6 32 0L33.6 3.2C28.8 4.8 26.4 8 26.4 12H32V24H17.6Z"
      fill="var(--highlight)"
    />
  </svg>
);

// ── Arrow Icon ──
const ArrowIcon = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
    <path
      d="M3 12L12 3M12 3H5.5M12 3V9.5"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// ── Single card ──
function TestiCard({
  t,
  index,
  active,
  onClick,
}: {
  t: (typeof TESTIMONIALS)[0];
  index: number;
  active: boolean;
  onClick: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      onClick={onClick}
      initial={{ opacity: 0, y: 52 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.75,
        delay: index * 0.13,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -6,
        transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
      }}
      className={`relative flex flex-col rounded-3xl overflow-hidden cursor-pointer
                  border transition-all duration-500 select-none
                  ${
                    active
                      ? "border-(--highlight)/60 bg-[#0f0b0b]"
                      : "border-white/8 bg-[#111010] hover:border-white/15"
                  }`}
      style={{
        boxShadow: active
          ? "0 0 0 1px var(--highlight), 0 24px 48px rgba(0,0,0,0.35)"
          : "0 8px 24px rgba(0,0,0,0.18)",
      }}
    >
      {/* top accent line on active */}
      <motion.div
        animate={{ scaleX: active ? 1 : 0, opacity: active ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        style={{ originX: 0 }}
        className="absolute top-0 left-0 right-0 h-[2px] bg-linear-to-r
                   from-(--highlight) via-(--highlight)/60 to-transparent"
      />

      {/* index number — top left */}
      <div className="absolute top-5 left-6">
        <span className="text-[11px] font-bold tracking-[0.22em] text-white/20 uppercase">
          0{index + 1}
        </span>
      </div>

      {/* quote mark — top right */}
      <div className="absolute top-5 right-6 opacity-70">
        <QuoteMark />
      </div>

      {/* quote body */}
      <div className="flex-1 px-6 pt-16 pb-6">
        <p className="text-white/65 text-[15px] leading-[1.7] font-light">
          &quot;{t.quote}&quot;
        </p>
      </div>

      {/* author */}
      <div className="px-6 pb-5 flex items-center gap-3">
        {/* avatar placeholder */}
        <div
          className="w-9 h-9 rounded-full bg-(--highlight)/20 border
                        border-(--highlight)/30 flex items-center justify-center shrink-0"
        >
          <span className="text-(--highlight) text-xs font-bold">
            {t.name.charAt(0)}
          </span>
        </div>
        <div>
          <p className="text-white font-bold text-sm leading-none mb-0.5">
            {t.name}
          </p>
          <p className="text-white/35 text-xs">{t.role}</p>
        </div>
      </div>

      {/* stat footer */}
      <div
        className="mx-4 mb-4 rounded-2xl bg-white/4 border border-white/6
                      px-5 py-4 flex items-center justify-between"
      >
        <div>
          <p className="text-white font-black text-3xl tracking-tight leading-none mb-1">
            {t.stat}
          </p>
          <p className="text-white/40 text-xs">{t.statLabel}</p>
        </div>
        {/* animated quote pulse */}
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
          transition={{
            duration: 2.4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.4,
          }}
        >
          <QuoteMark />
        </motion.div>
      </div>
    </motion.div>
  );
}

// ── Main ──
export default function ResultSec() {
  const outerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });
  const [active, setActive] = useState(1); // Growth card active by default

  const { scrollYProgress } = useScroll({
    target: outerRef,
    offset: ["start end", "end start"],
  });
  const smooth = useSpring(scrollYProgress, { stiffness: 50, damping: 18 });
  const asteriskRot = useTransform(smooth, [0, 1], [0, 360]);
  // decorative orb parallax
  const orbY = useTransform(smooth, [0, 1], ["-10%", "10%"]);
  const orbX = useTransform(smooth, [0, 1], ["4%", "-4%"]);

  return (
    <section
      ref={outerRef}
      className="relative w-full bg-white overflow-hidden py-24 md:py-32"
    >
      {/* ── decorative orb (top-right, echoes the globe in screenshot) ── */}
      <motion.div
        style={{ y: orbY, x: orbX }}
        className="pointer-events-none absolute -top-32 -right-32 w-[420px] h-[420px]
                   rounded-full opacity-[0.06]"
        aria-hidden
        // inline style for the gradient
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            background:
              "conic-gradient(from 0deg, #121417, var(--highlight), #121417, var(--highlight), #121417)",
          }}
        />
      </motion.div>

      {/* ── faint grid texture ── */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #121417 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-[1320px] mx-auto px-6 md:px-12 lg:px-16">
        {/* ── HEADER ── */}
        <div
          ref={headerRef}
          className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-start mb-6"
        >
          <div>
            {/* eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -18 }}
              animate={headerInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2.5 mb-7"
            >
              <motion.span
                style={{ rotate: asteriskRot }}
                className="text-(--highlight) text-xl select-none inline-block"
              >
                ✳
              </motion.span>
              <span className="text-[#121417]/45 text-[11px] font-bold uppercase tracking-[0.3em]">
                Testimonials
              </span>
            </motion.div>

            {/* headline */}
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "108%" }}
                animate={headerInView ? { y: "0%" } : {}}
                transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#121417]
                           leading-[1.04] tracking-tight"
              >
                Real{" "}
                <span className="text-(--highlight) italic">results</span>{" "}
                from real
                <br />
                brands
              </motion.h2>
            </div>
          </div>

          {/* Contact Us CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={headerInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-0 mt-2 lg:mt-0 self-center"
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-0 group"
            >
              <span
                className="bg-[#121417] text-white font-bold text-sm
                               px-7 py-4 rounded-full tracking-wide
                               group-hover:bg-(--highlight) transition-colors duration-300"
              >
                Contact Us
              </span>
              <span
                className="w-12 h-12 rounded-full bg-(--highlight)
                               flex items-center justify-center ml-2
                               group-hover:bg-[#121417] transition-colors duration-300"
              >
                <ArrowIcon />
              </span>
            </motion.button>
          </motion.div>
        </div>

        {/* ── divider ── */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={headerInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.28, ease: "easeOut" }}
          style={{ originX: 0 }}
          className="h-px bg-[#121417]/10 mb-14"
        />

        {/* ── DRAG hint ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={headerInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="flex items-center gap-2 mb-8"
        >
          <motion.div
            animate={{ x: [0, 10, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="flex items-center gap-1.5 text-[#121417]/30 text-xs font-semibold
                       uppercase tracking-[0.2em]"
          >
            <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
              <path
                d="M1 5h14M10 1l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Click a card to highlight
          </motion.div>
        </motion.div>

        {/* ── CARDS GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <TestiCard
              key={i}
              t={t}
              index={i}
              active={active === i}
              onClick={() => setActive(i)}
            />
          ))}
        </div>

        {/* ── bottom indicator dots ── */}
        <div className="flex justify-center gap-2.5 mt-10">
          {TESTIMONIALS.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => setActive(i)}
              animate={{
                width: active === i ? 28 : 8,
                backgroundColor:
                  active === i ? "var(--highlight)" : "#12141740",
              }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="h-2 rounded-full"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
