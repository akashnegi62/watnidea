/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

/* ── CONSTANTS & DATA ── */
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
      "Cinematic Reels & High-Res Carousels",
      "Signature Minimalist Aesthetic",
      "Trend-Mapped Audio & Research",
      "4K High-Resolution Exports",
    ],
  },
  {
    id: "growth",
    name: "The Growth Plan",
    tagline: "Strategic storytelling designed to scale engagement.",
    price: "32,999",
    badge: "POPULAR",
    recommended: true,
    cta: "Claim Your Growth",
    features: [
      "16–20 Strategic Assets (4–5/Week)",
      "Reels, Carousels & Festive Stories",
      "Viral Scripting & Hook Writing",
      "Advanced Post-Production",
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
      "Competitor Benchmarking",
    ],
  },
];

const AI_PLANS = [
  {
    id: "social",
    name: "AI Social Video",
    tagline: "15–30s high-concept video (surreal/impossible visuals).",
    price: "4,500",
    cta: "Get Service",
  },
  {
    id: "ad",
    name: "AI High-Conversion Ad",
    tagline: "30–60s scripted advertisement for Meta/Instagram ads.",
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
    cta: "Get Service",
  },
];

/* ── SHARED COMPONENTS ── */

const StarIcon = () => (
  <motion.div
    animate={{ rotate: [0, 180, 360] }}
    transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
    className="flex items-center justify-center shrink-0"
  >
    <Image src="/Img/point_icon.svg" alt="Icon" width={20} height={20} />
  </motion.div>
);

const CheckIcon = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
    <circle cx="7.5" cy="7.5" r="7" stroke="var(--highlight)" strokeWidth="1" />
    <path
      d="M5 7.5L6.8 9.5L10.5 5.5"
      stroke="var(--highlight)"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/* ── PLAN CARD ── */
function PlanCard({ plan, index, compact = false }: any) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.75,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`group relative flex flex-col rounded-2xl border transition-all duration-500 overflow-hidden
        ${
          plan.recommended
            ? "border-(--highlight)/30 bg-white/5"
            : "border-white/[0.07] bg-white/3"
        } 
        hover:bg-white/6`}
    >
      {/* Animated Corner Accent */}
      <span className="absolute top-0 left-0 w-8 h-8 border-t border-l border-(--highlight) rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Popular Ribbon */}
      {plan.badge && (
        <div className="absolute top-0 right-0 z-10 w-24 h-24 overflow-hidden pointer-events-none">
          <div className="absolute top-5 -right-7.5 w-32 rotate-45 bg-(--highlight) text-white text-[9px] font-black tracking-widest text-center py-1 uppercase">
            {plan.badge}
          </div>
        </div>
      )}

      <div
        className={`flex flex-col flex-1 ${compact ? "p-6 gap-4" : "p-8 gap-6"}`}
      >
        <div className="flex items-start gap-3">
          <StarIcon />
        </div>

        <div>
          <h3
            className={`text-white font-bold leading-tight mb-2 ${compact ? "text-lg" : "text-xl"}`}
          >
            {plan.name}
          </h3>
          <p className="text-white text-sm leading-relaxed">
            {plan.tagline}
          </p>
        </div>

        <div className="flex items-end gap-1.5 leading-none">
          <span className="text-(--highlight) text-xl font-bold">₹</span>
          <span
            className={`text-(--highlight) font-black tracking-tight ${compact ? "text-4xl" : "text-5xl"}`}
          >
            {plan.price}
          </span>
          <span className="text-white text-xs mb-1 uppercase tracking-wider">
            /mo
          </span>
        </div>

        {plan.features && (
          <ul className="flex flex-col gap-3.5 flex-1 pt-4 border-t border-white/5">
            {plan.features.map((feature: string, i: number) => (
              <li
                key={i}
                className="flex items-start gap-3 text-sm text-white"
              >
                <span className="mt-0.5 shrink-0">
                  <CheckIcon />
                </span>
                {feature}
              </li>
            ))}
          </ul>
        )}

        <motion.a
          href="https://calendly.com/watnidea-info/30min"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full mt-4 flex items-center justify-between bg-white/5 hover:bg-(--highlight) group/btn rounded-full px-6 py-4 text-white font-bold text-xs uppercase tracking-widest transition-all duration-300 border border-white/10 hover:border-transparent cursor-pointer"
        >
          <span>{plan.cta}</span>
          <div className="w-7 h-7 rounded-full bg-(--highlight) group-hover/btn:bg-white/20 flex items-center justify-center transition-colors">
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
              <path
                d="M3 11L11 3M11 3H5M11 3V9"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </motion.a>
      </div>
    </motion.div>
  );
}

/* ── MAIN SECTION ── */
export default function PricingSec() {
  const outerRef = useRef<HTMLDivElement>(null);
  const sec1Ref = useRef<HTMLDivElement>(null);
  const sec2Ref = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={outerRef}
      className="relative w-full bg-black py-20 md:py-24 lg:py-32 overflow-hidden"
    >
      <div className="max-w-350 mx-auto px-6 md:px-10 lg:px-20">
        {/* SECTION 1: Strategic Packages */}
        <div ref={sec1Ref} className="mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <StarIcon />
                <span className="text-(--highlight) text-sm md:text-lg font-medium uppercase tracking-[0.3em]">
                  Pricing
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-[3.2rem] font-medium text-white leading-[1.1] tracking-tight">
                Strategic Content Packages &{" "}
                <span className="text-(--highlight)">
                  Premium Pixel Standard
                </span>
              </h2>
            </div>
            <p className="text-white text-lg max-w-xs leading-relaxed">
              Content subscription tiers designed to build identity, scale
              engagement, and dominate your market.
            </p>
          </div>

          {/* Grid: 1 col on mobile, 2 cols on tablet, 3 cols on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {CONTENT_PLANS.map((plan, i) => (
              <div
                key={plan.id}
                className={`${i === 2 ? "md:col-span-2 lg:col-span-1" : "col-span-1"}`}
              >
                <PlanCard plan={plan} index={i} />
              </div>
            ))}
          </div>
        </div>

        {/* Separator */}
        <div className="w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent my-20 lg:my-24" />

        {/* SECTION 2: AI Lab */}
        <div ref={sec2Ref}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <StarIcon />
                <span className="text-(--highlight) text-sm md:text-lg font-medium uppercase tracking-[0.3em]">
                  pricing
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-[3.2rem] font-medium text-white leading-[1.1] tracking-tight">
                wat<span className="text-(--highlight)">N</span>idea <span className="text-(--highlight)">AI VIDEO</span> &
                <span className="text-(--highlight)"> AD LAB</span>
              </h2>
            </div>
            <p className="text-white text-lg max-w-xs leading-relaxed">
              Specialized, high-tech visual solutions. Fixed-price project
              add-ons for elite campaigns.
            </p>
          </div>

          {/* Grid: Uses the same responsive logic */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {AI_PLANS.map((plan, i) => (
              <div
                key={plan.id}
                className={`${i === 2 ? "md:col-span-2 lg:col-span-1" : "col-span-1"}`}
              >
                <PlanCard plan={plan} index={i} compact />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
