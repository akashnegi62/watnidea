/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { useRef, useState } from "react";

import {
  motion,
  useInView,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";

// Icons

const GearIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <circle cx="20" cy="20" r="5" stroke="currentColor" strokeWidth="1.4" />

    <path
      d="M20 6v4M20 30v4M6 20h4M30 20h4M9.17 9.17l2.83 2.83M27.17 27.17l2.83 2.83M9.17 30.83l2.83-2.83M27.17 12.83l2.83-2.83"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
  </svg>
);

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      d="M3 13L13 3M13 3H6M13 3V10"
      stroke="white"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CheckIcon = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
    <circle cx="7.5" cy="7.5" r="7" stroke="#c0392b" strokeWidth="1" />

    <path
      d="M5 7.5L6.8 9.5L10.5 5.5"
      stroke="#c0392b"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Data

const CONTENT_PLANS = [
  {
    id: "identity",

    name: "The Identity Plan",

    tagline: "Ideal for establishing a consistent, high-end visual baseline.",

    price: "17,999",

    badge: null,

    cta: "Get Started",

    features: [
      "12–16 Premium Assets (3–4/Week)",

      "Cinematic Reels & High-Resolution Carousels",

      "Signature WatNidea Minimalist Aesthetic",

      "Trend-Mapped Audio & Research",

      "4K High-Resolution Exports",
    ],
  },

  {
    id: "growth",

    name: "The Growth Plan",

    tagline:
      "Strategic storytelling designed to scale engagement and community.",

    price: "32,999",

    badge: "POPULAR",

    recommended: true,

    cta: "Claim Your Growth",

    features: [
      "16–20 Strategic Assets (4–5/Week)",

      "Reels, Carousels & Festive Stories",

      "Viral Scripting & Hook Writing",

      "Advanced Post-Production & Color Grading",

      "Lead-Gen Captions & CTA Strategy",
    ],
  },

  {
    id: "domination",

    name: "The Domination Plan",

    tagline: "Total market authority through elite creative direction.",

    price: "52,999",

    badge: null,

    cta: "Claim Your Dominance",

    features: [
      "20–24 Elite Assets (5–6/Week)",

      "Brand Documentaries & Immersive Visuals",

      "1:1 Strategy Calls With Founder",

      "Full Funnel Content Alignment",

      "Competitor Benchmarking & Trends",
    ],
  },
];

const AI_PLANS = [
  {
    id: "social",

    name: "AI Social Video",

    tagline: "15–30s high-concept video (surreal/impossible visuals).",

    price: "4,500",

    badge: null,

    cta: "Get Service",
  },

  {
    id: "ad",

    name: "AI High-Conversion Ad",

    tagline: "30–60s scripted advertisement for Meta/Instagram paid ads.",

    price: "8,500",

    badge: "POPULAR",

    recommended: true,

    cta: "Get Service",
  },

  {
    id: "cinematic",

    name: "AI Cinematic Campaign",

    tagline: "Premium brand film (up to 90s) using AI cinematography.",

    price: "15,000",

    badge: null,

    cta: "Get Service",
  },
];

// Plan Card

function PlanCard({
  plan,

  index,

  compact = false,
}: {
  plan: (typeof CONTENT_PLANS)[0] & {
    features?: string[];

    recommended?: boolean;
  };

  index: number;

  compact?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const inView = useInView(ref, { once: true, margin: "-50px" });

  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 56 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.75,

        delay: index * 0.14,

        ease: [0.22, 1, 0.36, 1],
      }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className={`relative flex flex-col rounded-2xl overflow-hidden border transition-all duration-500

${
  plan.recommended
    ? "border-[#c0392b]/50 bg-linear-to-b from-[#1a0d0b] to-[#110806]"
    : "border-white/8 bg-[#0d0806]"
}`}
      style={{
        boxShadow: hovered
          ? plan.recommended
            ? "0 0 80px rgba(192,57,43,0.2), 0 24px 48px rgba(0,0,0,0.5)"
            : "0 0 40px rgba(192,57,43,0.08), 0 24px 48px rgba(0,0,0,0.4)"
          : "0 8px 24px rgba(0,0,0,0.3)",
      }}
    >
      {/* Popular ribbon */}

      {plan.badge && (
        <div className="absolute top-0 right-0 z-10 w-28 h-28 overflow-hidden pointer-events-none">
          <div
            className="absolute top-6 right-[-30px] w-36 rotate-45 bg-[#c0392b]

text-white text-[10px] font-black tracking-[0.18em] text-center py-1.5 uppercase"
          >
            {plan.badge}
          </div>
        </div>
      )}

      {/* Recommended bar */}

      {plan.recommended && (
        <div className="w-full bg-white/8 text-center py-2.5 border-b border-white/5">
          <span className="text-white/50 text-[10px] font-bold uppercase tracking-[0.32em]">
            Recommended
          </span>
        </div>
      )}

      {/* Hover top glow line */}

      <motion.div
        animate={{ opacity: hovered ? 1 : 0, scaleX: hovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        style={{ originX: 0.5 }}
        className="absolute top-0 left-0 right-0 h-px bg-linear-to-r

from-transparent via-[#c0392b] to-transparent"
      />

      <div
        className={`flex flex-col flex-1 ${compact ? "p-6 gap-4" : "p-7 gap-5"}`}
      >
        {/* Icon */}

        <motion.div
          animate={
            hovered ? { rotate: 30, scale: 1.1 } : { rotate: 0, scale: 1 }
          }
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
          className="text-[#c0392b]"
        >
          <GearIcon />
        </motion.div>

        {/* Name */}

        <div>
          <h3
            className={`text-white font-bold leading-tight mb-2

${compact ? "text-lg" : "text-xl"}`}
          >
            {plan.name}
          </h3>

          <p className="text-white/40 text-sm leading-relaxed">
            {plan.tagline}
          </p>
        </div>

        {/* Price */}

        <div className="flex items-end gap-1 leading-none">
          <span className="text-[#c0392b] text-xl font-bold">₹</span>

          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.14 + 0.3, duration: 0.5 }}
            className={`text-[#c0392b] font-black tracking-tight

${compact ? "text-4xl" : "text-5xl"}`}
          >
            {plan.price}
          </motion.span>

          <span className="text-white/35 text-sm mb-0.5">/Month</span>
        </div>

        {/* Features (content plans only) */}

        {plan.features && (
          <>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{
                delay: index * 0.14 + 0.38,

                duration: 0.55,

                ease: "easeOut",
              }}
              style={{ originX: 0 }}
              className="h-px bg-white/8"
            />

            <ul className="flex flex-col gap-3 flex-1">
              {plan.features.map((f, fi) => (
                <motion.li
                  key={fi}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    delay: index * 0.14 + 0.44 + fi * 0.06,

                    duration: 0.45,

                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="flex items-start gap-2.5 text-sm text-white/60

border-b border-white/5 pb-3 last:border-0 last:pb-0"
                >
                  <span className="mt-0.5 shrink-0">
                    <CheckIcon />
                  </span>

                  {f}
                </motion.li>
              ))}
            </ul>
          </>
        )}

        {/* Spacer for compact cards */}

        {!plan.features && <div className="flex-1" />}

        {/* CTA */}

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          className="w-full mt-2 flex items-center justify-between

bg-white/8 hover:bg-[#c0392b]/80 rounded-full

px-5 py-3.5 text-white font-semibold text-sm

transition-colors duration-300 group border border-white/5 hover:border-transparent"
        >
          <span>{plan.cta}</span>

          <span
            className="w-8 h-8 rounded-full bg-[#c0392b] group-hover:bg-white/20

flex items-center justify-center shrink-0 transition-colors duration-300"
          >
            <ArrowIcon />
          </span>
        </motion.button>
      </div>
    </motion.div>
  );
}

// Section Header

function SectionHeader({
  eyebrow,

  title,

  description,

  inView,

  scrollRot,
}: {
  eyebrow: string;

  title: React.ReactNode;

  description: string;

  inView: boolean;

  scrollRot: any;
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 mb-6 items-end">
      <div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2.5 mb-6"
        >
          <motion.span
            style={{ rotate: scrollRot }}
            className="text-[#c0392b] text-xl select-none inline-block"
          >
            ✳
          </motion.span>

          <span className="text-white/45 text-[11px] font-bold uppercase tracking-[0.3em]">
            {eyebrow}
          </span>
        </motion.div>

        <div className="overflow-hidden">
          <motion.div
            initial={{ y: "108%" }}
            animate={inView ? { y: "0%" } : {}}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            {title}
          </motion.div>
        </div>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.65, delay: 0.22 }}
        className="text-white/45 text-sm leading-relaxed

max-w-[260px] lg:pb-2 hidden md:block"
      >
        {description}
      </motion.p>
    </div>
  );
}

// Main Component

export default function PricingSec() {
  const outerRef = useRef<HTMLDivElement>(null);

  const sec1Ref = useRef<HTMLDivElement>(null);

  const sec2Ref = useRef<HTMLDivElement>(null);

  const sec1InView = useInView(sec1Ref, { once: true, margin: "-80px" });

  const sec2InView = useInView(sec2Ref, { once: true, margin: "-80px" });

  const { scrollYProgress } = useScroll({
    target: outerRef,

    offset: ["start end", "end start"],
  });

  const smooth = useSpring(scrollYProgress, { stiffness: 48, damping: 18 });

  const blobX = useTransform(smooth, [0, 1], ["-12%", "12%"]);

  const blobY = useTransform(smooth, [0, 1], ["-6%", "6%"]);

  const rot1 = useTransform(smooth, [0, 1], [0, 360]);

  const rot2 = useTransform(smooth, [0.4, 1], [0, 260]);

  return (
    <section
      ref={outerRef}
      className="relative w-full bg-black overflow-hidden"
    >
      {/* ── ambient glows ── */}

      <motion.div
        style={{
          x: blobX,

          y: blobY,
        }}
        className="pointer-events-none absolute -top-60 -left-60 w-[700px] h-[700px] rounded-full opacity-25"
      />

      <motion.div
        style={{
          x: blobX,
        }}
        className="pointer-events-none absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-20"
      />

      {/* SECTION 1 — Strategic Content Packages*/}

      <div
        ref={sec1Ref}
        className="relative max-w-[1320px] mx-auto px-6 md:px-12 lg:px-16 pt-24 md:pt-32 pb-20"
      >
        <SectionHeader
          eyebrow="Pricing"
          title={
            <h2
              className="text-4xl md:text-6xl lg:text-[4.2rem] font-bold text-white

leading-[1.06] tracking-tight"
            >
              Strategic Content
              <br />
              Packages{" "}
              <span className="text-[#c0392b] italic">&amp; Premium</span>
              <br />
              <span className="text-[#c0392b] italic">Pixel Standard</span>
            </h2>
          }
          description="Content subscription tiers designed to build identity, scale engagement, and dominate your market with premium visual storytelling."
          inView={sec1InView}
          scrollRot={rot1}
        />

        {/* divider */}

        <motion.div
          initial={{ scaleX: 0 }}
          animate={sec1InView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.28, ease: "easeOut" }}
          style={{ originX: 0 }}
          className="h-px bg-white/8 mb-12"
        />

        {/* Cards */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
          {CONTENT_PLANS.map((plan, i) => (
            <PlanCard key={plan.id} plan={plan} index={i} />
          ))}
        </div>
      </div>

      {/* thin separator between sections */}

      <div className="max-w-[1320px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* SECTION 2 — AI Video & Ad Lab*/}

      <div
        ref={sec2Ref}
        className="relative max-w-[1320px] mx-auto px-6 md:px-12 lg:px-16 pt-20 pb-28 md:pb-36"
      >
        <SectionHeader
          eyebrow="Pricing"
          title={
            <h2 className="text-4xl md:text-6xl lg:text-[4.2rem] font-bold leading-[1.06] tracking-tight">
              <span className="text-[#c0392b]">watNidea</span>{" "}
              <span className="text-white">AI VIDEO</span>{" "}
              <span className="text-[#c0392b]">&amp; AD</span>
              <br />
              <span className="text-white">LAB</span>
            </h2>
          }
          description="Specialized, high-tech visual solutions. Fixed-price project add-ons."
          inView={sec2InView}
          scrollRot={rot2}
        />

        {/* divider */}

        <motion.div
          initial={{ scaleX: 0 }}
          animate={sec2InView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.28, ease: "easeOut" }}
          style={{ originX: 0 }}
          className="h-px bg-white/8 mb-12"
        />

        {/* Cards — compact (no feature list) */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
          {AI_PLANS.map((plan, i) => (
            <PlanCard key={plan.id} plan={plan as any} index={i} compact />
          ))}
        </div>
      </div>
    </section>
  );
}
