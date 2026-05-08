"use client";
import { useRef, useState, useEffect } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  useSpring,
  AnimatePresence,
} from "framer-motion";

// ─── Animated counter hook ────────────────────────────────
function useCounter(target: number, inView: boolean, duration = 1.6) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / (duration * 1000), 1);
      // ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setVal(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target, duration]);
  return val;
}

// ─── Stat item ────────────────────────────────────────────
function Stat({
  value,
  suffix,
  label,
  inView,
  delay,
}: {
  value: number | string;
  suffix: string;
  label: string;
  inView: boolean;
  delay: number;
}) {
  const isNumber = typeof value === "number";
  const counted = useCounter(isNumber ? (value as number) : 0, inView, 1.8);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col gap-1.5"
    >
      <p className="text-4xl md:text-5xl font-black text-[var(--highlight)] leading-none tracking-tight">
        {isNumber ? counted : value}
        {suffix}
      </p>
      <p className="text-white/40 text-sm font-medium">{label}</p>
    </motion.div>
  );
}

// ─── Checklist item ───────────────────────────────────────
function CheckItem({
  label,
  delay,
  inView,
}: {
  label: string;
  delay: number;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -14 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className="flex items-center gap-2.5"
    >
      <motion.span
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{
          duration: 0.35,
          delay: delay + 0.1,
          type: "spring",
          stiffness: 260,
        }}
        className="w-4 h-4 rounded-full bg-[var(--highlight)]/20 border border-[var(--highlight)]/50
                   flex items-center justify-center shrink-0"
      >
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
          <path
            d="M1.5 4L3.2 5.8L6.5 2"
            stroke="var(--highlight)"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.span>
      <span className="text-white/70 text-sm font-medium">{label}</span>
    </motion.div>
  );
}

// ─── Main ─────────────────────────────────────────────────
export default function BookBannerSec() {
  const outerRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const leftInView = useInView(leftRef, { once: true, margin: "-60px" });
  const cardInView = useInView(cardRef, { once: true, margin: "-60px" });

  const { scrollYProgress } = useScroll({
    target: outerRef,
    offset: ["start end", "end start"],
  });
  const smooth = useSpring(scrollYProgress, { stiffness: 50, damping: 18 });

  // Ambient glow parallax
  const glowY = useTransform(smooth, [0, 1], ["-15%", "15%"]);
  const glowX = useTransform(smooth, [0, 1], ["-8%", "8%"]);

  // Banner card slight tilt on scroll
  const cardRotX = useTransform(smooth, [0, 0.5, 1], [4, 0, -2]);
  const cardY = useTransform(smooth, [0, 1], [30, -20]);

  // Headline letter stagger state
  const headline = "READY TO EVOLVE INTO A";
  const headline2 = "BRAND THAT PEOPLE";
  const headline3 = "ACTUALLY REMEMBER?";

  return (
    <section
      ref={outerRef}
      className="relative w-full bg-[#050302] overflow-hidden py-16 md:py-24"
    >
      {/* ── ambient red glow ── */}
      <motion.div
        style={{ y: glowY, x: glowX }}
        className="pointer-events-none absolute -top-40 -left-40 w-[700px] h-[700px] z-0"
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(192,35,20,0.3) 0%, transparent 65%)",
            filter: "blur(80px)",
          }}
        />
      </motion.div>
      <motion.div
        style={{ y: glowY }}
        className="pointer-events-none absolute -bottom-20 right-0 w-[400px] h-[400px] z-0"
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(192,35,20,0.18) 0%, transparent 65%)",
            filter: "blur(60px)",
          }}
        />
      </motion.div>

      {/* ── outer banner card ── */}
      <motion.div
        style={{ rotateX: cardRotX, y: cardY, perspective: "1200px" }}
        className="relative z-10 max-w-[1260px] mx-auto px-4 md:px-6"
      >
        <div
          className="relative rounded-3xl overflow-hidden border border-white/[0.07]"
          style={{
            background:
              "linear-gradient(135deg, #1a1614 0%, #111010 40%, #0d0b0b 100%)",
            boxShadow:
              "0 0 0 1px rgba(255,255,255,0.05), 0 40px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)",
          }}
        >
          {/* top shimmer line */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={leftInView ? { scaleX: 1, opacity: 1 } : {}}
            transition={{ duration: 1.1, ease: "easeOut" }}
            style={{ originX: 0 }}
            className="absolute top-0 left-0 right-0 h-[1.5px]
                       bg-gradient-to-r from-[var(--highlight)] via-[var(--highlight)]/40 to-transparent"
          />

          {/* noise texture overlay */}
          <div
            className="absolute inset-0 opacity-[0.02] pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            }}
          />

          <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-0">
            {/* ══ LEFT ══════════════════════════════════════════ */}
            <div
              ref={leftRef}
              className="px-8 md:px-12 py-12 md:py-14
                                          border-b lg:border-b-0 lg:border-r border-white/[0.06]"
            >
              {/* Headline — word by word reveal */}
              <div className="mb-8 overflow-hidden">
                {[headline, headline2, headline3].map((line, li) => (
                  <div key={li} className="overflow-hidden">
                    <motion.p
                      initial={{ y: "110%" }}
                      animate={leftInView ? { y: "0%" } : {}}
                      transition={{
                        duration: 0.78,
                        delay: li * 0.12,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className={`text-3xl md:text-4xl xl:text-5xl font-black
                                  leading-[1.08] tracking-tight
                                  ${li === 0 ? "text-white" : ""}`}
                    >
                      {li === 1 ? (
                        <>
                          <span className="text-[var(--highlight)]">BRAND</span>
                          {" THAT PEOPLE"}
                        </>
                      ) : (
                        line
                      )}
                    </motion.p>
                  </div>
                ))}
              </div>

              {/* Body */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={leftInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.65, delay: 0.4 }}
                className="text-white/45 text-base leading-relaxed max-w-xl mb-10"
              >
                When your business needs more than just a logo — when it needs a
                pulse — watNidea steps in. We engineer branding and digital
                marketing solutions that are sleek, fast, and built to support
                your journey from a startup to an industry icon.
              </motion.p>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/[0.07]">
                <Stat
                  value={15}
                  suffix="+"
                  label="Concept Projects"
                  inView={leftInView}
                  delay={0.5}
                />
                <Stat
                  value={98}
                  suffix="%"
                  label="Client Satisfaction"
                  inView={leftInView}
                  delay={0.62}
                />
                <Stat
                  value="∞"
                  suffix=""
                  label="Creative Energy"
                  inView={leftInView}
                  delay={0.74}
                />
              </div>
            </div>

            {/* ══ RIGHT — Booking card ══════════════════════════ */}
            <div
              ref={cardRef}
              className="px-8 py-12 md:py-14 flex flex-col justify-between gap-8"
            >
              <div>
                {/* card heading */}
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={cardInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="mb-2"
                >
                  <p
                    className="text-white/30 text-[10px] font-bold uppercase
                                tracking-[0.28em] mb-3"
                  >
                    Free Consultation
                  </p>
                  <h3
                    className="text-white text-2xl md:text-3xl font-black
                                 leading-tight tracking-tight"
                  >
                    Book Your{" "}
                    <span className="text-[var(--highlight)]">Strategy</span>{" "}
                    Call
                  </h3>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={cardInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.22 }}
                  className="text-white/40 text-sm leading-relaxed mt-3 mb-7"
                >
                  Get a personalized plan to scale your business — no fluff,
                  just strategy.
                </motion.p>

                {/* checklist */}
                <div className="flex flex-col gap-3.5">
                  {["Growth Audit", "Ad Strategy", "Content Plan"].map(
                    (l, i) => (
                      <CheckItem
                        key={l}
                        label={l}
                        delay={0.3 + i * 0.1}
                        inView={cardInView}
                      />
                    ),
                  )}
                </div>
              </div>

              {/* CTA button */}
              <div>
                <motion.button
                  initial={{ opacity: 0, y: 18 }}
                  animate={cardInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.65 }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="group w-full bg-[var(--highlight)] hover:brightness-110
                             text-white font-bold text-base py-4 rounded-2xl
                             flex items-center justify-center gap-3
                             transition-all duration-300 shadow-lg
                             shadow-[var(--highlight)]/20"
                >
                  Start Your Project
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      duration: 1.4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="inline-block"
                  >
                    →
                  </motion.span>
                </motion.button>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={cardInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.8 }}
                  className="text-white/25 text-xs text-center mt-3"
                >
                  Takes only 30 seconds • No commitment
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
