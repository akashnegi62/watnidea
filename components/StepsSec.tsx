"use client";
import { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
  AnimatePresence,
} from "framer-motion";

// ─── Data ────────────────────────────────────────────────────────────────────
const STEPS = [
  {
    id: "01",
    title: "Discover",
    desc: "We start by learning about your business, your goals, your market, and your audience. Deep listening before any execution.",
    img: "/Img/step-discover.jpg",
  },
  {
    id: "02",
    title: "Plan",
    desc: "Then we build a smart approach tailored to what you want to achieve — whether it's brand strategy, marketing plans, content direction, or a full website and campaign roadmap.",
    img: "/Img/step-plan.jpg",
  },
  {
    id: "03",
    title: "Create",
    desc: "Once the direction is set, we move into design, writing, development, video production, and campaign execution. Everything supports your brand properly.",
    img: "/Img/step-create.jpg",
  },
  {
    id: "04",
    title: "Launch",
    desc: "We deploy across the right channels — social, web, paid, or all of them — at the right time, with the right messaging to maximise reach and impact.",
    img: "/Img/step-launch.jpg",
  },
  {
    id: "05",
    title: "Scale",
    desc: "Performance data drives iteration. We optimise, expand, and keep pushing until your brand doesn't just compete — it dominates.",
    img: "/Img/step-scale.jpg",
  },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────
function clamp(v: number, lo: number, hi: number) {
  return Math.max(lo, Math.min(hi, v));
}

// ─── Component ───────────────────────────────────────────────────────────────
export default function StepsSec() {
  const outerRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  // Track scroll within the section to drive step highlighting
  const { scrollYProgress } = useScroll({
    target: outerRef,
    offset: ["start start", "end end"],
  });
  const smooth = useSpring(scrollYProgress, { stiffness: 50, damping: 18 });

  // Map scroll → active step index
  useEffect(() => {
    const unsub = smooth.on("change", (v) => {
      const idx = clamp(Math.floor(v * STEPS.length), 0, STEPS.length - 1);
      setActiveStep(idx);
    });
    return unsub;
  }, [smooth]);

  // Gradient orb (left) parallax
  const orbLeftY = useTransform(smooth, [0, 1], ["-10%", "14%"]);
  const orbLeftX = useTransform(smooth, [0, 1], ["-6%", "6%"]);
  const orbScale = useTransform(smooth, [0, 0.5, 1], [0.85, 1.1, 0.9]);

  // Falling cloud (top-right) — drops and fades in
  const cloudY = useTransform(smooth, [0, 0.6], ["-40%", "20%"]);
  const cloudOp = useTransform(smooth, [0, 0.15, 0.5, 0.75], [0, 0.8, 0.7, 0]);

  // Rotating badge driven by scroll
  const badgeRot = useTransform(smooth, [0, 1], [0, 360]);

  // Eyebrow fade
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    /**
     * Outer = 500vh → provides scroll runway
     * Inner sticky = pins the two-column layout
     */
    <div
      ref={outerRef}
      style={{ height: `${STEPS.length * 100 + 100}vh` }}
      className="relative"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-white flex">
        {/* ── FALLING CLOUD (top-right) ── */}
        <motion.div
          style={{ y: cloudY, opacity: cloudOp }}
          className="pointer-events-none absolute -top-40 right-0 z-10
                     w-[340px] md:w-[480px] aspect-square"
        >
          <div
            className="w-full h-full rounded-full"
            style={{
              background:
                "radial-gradient(circle at 55% 40%, var(--highlight) 0%, rgba(180,30,20,0.55) 38%, transparent 70%)",
              filter: "blur(48px)",
            }}
          />
        </motion.div>

        {/* ── LEFT COLUMN — sticky content ── */}
        <div
          className="relative w-full lg:w-[46%] flex flex-col justify-between
                        px-6 md:px-12 lg:px-16 py-16 overflow-hidden shrink-0"
        >
          {/* Left ambient orb */}
          <motion.div
            style={{ y: orbLeftY, x: orbLeftX, scale: orbScale }}
            className="pointer-events-none absolute bottom-[-10%] left-[-15%]
                       w-[420px] h-[420px] z-0"
          >
            <div
              className="w-full h-full rounded-full"
              style={{
                background:
                  "radial-gradient(circle at 48% 52%, var(--highlight) 0%, rgba(200,40,20,0.5) 42%, transparent 72%)",
                filter: "blur(56px)",
                opacity: 0.35,
              }}
            />
          </motion.div>

          {/* Content above orb */}
          <div className="relative z-10" ref={headerRef}>
            {/* eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={headerInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.55 }}
              className="flex items-center gap-2.5 mb-7"
            >
              <motion.span
                style={{ rotate: badgeRot }}
                className="text-[var(--highlight)] text-xl select-none inline-block"
              >
                ✳
              </motion.span>
              <span className="text-[#121417]/40 text-[11px] font-bold uppercase tracking-[0.3em]">
                How It Works
              </span>
            </motion.div>

            {/* headline */}
            <div className="overflow-hidden mb-6">
              <motion.h2
                initial={{ y: "110%" }}
                animate={headerInView ? { y: "0%" } : {}}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="text-4xl md:text-5xl lg:text-[3.8rem] font-bold
                           text-[#121417] leading-[1.06] tracking-tight"
              >
                Step-by-Step guide
                <br />
                to social{" "}
                <span className="text-[var(--highlight)] italic">success</span>
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.22 }}
              className="text-[#121417]/55 text-base leading-relaxed max-w-sm"
            >
              We follow a structured system to move your brand from low
              visibility to consistent reach, engagement, and leads. From
              strategy and content creation to execution and scaling, every step
              is designed to deliver measurable growth.
            </motion.p>
          </div>

          {/* ── Step progress indicators ── */}
          <div className="relative z-10 flex flex-col gap-2 mt-auto">
            {STEPS.map((s, i) => (
              <div key={i} className="flex items-center gap-3">
                <motion.div
                  animate={{
                    width: activeStep === i ? 28 : 8,
                    backgroundColor:
                      activeStep === i
                        ? "var(--highlight)"
                        : i < activeStep
                          ? "#12141760"
                          : "#12141720",
                  }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="h-[3px] rounded-full"
                />
                <motion.span
                  animate={{
                    opacity: activeStep === i ? 1 : 0.3,
                    x: activeStep === i ? 0 : -4,
                  }}
                  transition={{ duration: 0.35 }}
                  className="text-[11px] font-bold tracking-[0.22em] text-[#121417] uppercase"
                >
                  {s.title}
                </motion.span>
              </div>
            ))}
          </div>

          {/* ── Rotating badge ── */}
          <div className="relative z-10 mt-10 w-fit">
            <div className="relative w-24 h-24">
              <motion.svg
                style={{ rotate: badgeRot }}
                viewBox="0 0 96 96"
                className="w-full h-full absolute inset-0"
              >
                <defs>
                  <path
                    id="badgePath"
                    d="M48,48 m-32,0 a32,32 0 1,1 64,0 a32,32 0 1,1,-64,0"
                  />
                </defs>
                <text
                  fill="var(--highlight)"
                  fontSize="8.2"
                  fontWeight="700"
                  letterSpacing="2.5"
                >
                  <textPath href="#badgePath">
                    Performance Marketing 2025 ✳ Performance ✳
                  </textPath>
                </text>
              </motion.svg>
              {/* centre circle */}
              <div
                className="absolute inset-[18px] rounded-full flex items-center
                           justify-center"
                style={{ background: "var(--highlight)" }}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M4 16L16 4M16 4H7M16 4V13"
                    stroke="white"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* ── RIGHT COLUMN — scrolling step cards ── */}
        <div
          ref={rightColRef}
          className="hidden lg:flex flex-col justify-center flex-1
                     px-10 xl:px-16 py-16 overflow-hidden relative"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -32, filter: "blur(6px)" }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="w-full"
            >
              {/* Number — big backdrop */}
              <motion.div
                className="absolute right-10 xl:right-16 top-1/2 -translate-y-1/2
                           select-none pointer-events-none z-0"
              >
                <span
                  className="text-[clamp(120px,18vw,220px)] font-black leading-none
                             text-[#121417]/[0.04] tracking-tight"
                >
                  {STEPS[activeStep].id}
                </span>
              </motion.div>

              {/* Card */}
              <div
                className="relative z-10 bg-[#0f0b0b] rounded-3xl overflow-hidden
                              border border-white/[0.06] shadow-2xl"
              >
                {/* image */}
                <div className="relative w-full h-52 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-gradient-to-br
                               from-[#1a0808] to-[#0a0505]"
                  />
                  {/* placeholder texture */}
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)",
                      backgroundSize: "24px 24px",
                    }}
                  />
                  {/* Step number overlay */}
                  <div className="absolute bottom-5 right-6">
                    <span className="text-7xl font-black text-white/10 leading-none">
                      {STEPS[activeStep].id}
                    </span>
                  </div>
                  {/* accent glow */}
                  <div
                    className="absolute top-0 left-0 w-48 h-48 rounded-full opacity-30"
                    style={{
                      background:
                        "radial-gradient(circle, var(--highlight) 0%, transparent 70%)",
                      filter: "blur(40px)",
                    }}
                  />
                </div>

                {/* text body */}
                <div className="p-8">
                  {/* step label */}
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="text-[10px] font-bold uppercase tracking-[0.28em]
                                 text-[var(--highlight)]"
                    >
                      Step {STEPS[activeStep].id}
                    </span>
                    <div className="flex-1 h-px bg-white/10" />
                  </div>

                  <h3 className="text-white text-4xl font-bold tracking-tight mb-4">
                    {STEPS[activeStep].title}
                  </h3>
                  <p className="text-white/50 text-base leading-relaxed">
                    {STEPS[activeStep].desc}
                  </p>

                  {/* bottom progress bar */}
                  <div className="mt-8 flex gap-1.5">
                    {STEPS.map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{
                          backgroundColor:
                            i <= activeStep
                              ? "var(--highlight)"
                              : "rgba(255,255,255,0.1)",
                          scaleY: i === activeStep ? 1.5 : 1,
                        }}
                        transition={{ duration: 0.35 }}
                        className="h-1 flex-1 rounded-full"
                        style={{ transformOrigin: "bottom" }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── Mobile: simple vertical list ── */}
        <div
          className="lg:hidden absolute bottom-0 left-0 right-0 bg-white/95
                        backdrop-blur-md border-t border-[#121417]/8 px-6 py-5"
        >
          <p className="text-[var(--highlight)] font-bold text-sm uppercase tracking-widest mb-1">
            Step {STEPS[activeStep].id}
          </p>
          <p className="text-[#121417] font-bold text-xl">
            {STEPS[activeStep].title}
          </p>
          <p className="text-[#121417]/50 text-sm mt-1 leading-snug">
            {STEPS[activeStep].desc}
          </p>
          <div className="flex gap-1.5 mt-3">
            {STEPS.map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  backgroundColor:
                    i <= activeStep ? "var(--highlight)" : "#12141720",
                }}
                className="h-1 flex-1 rounded-full"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
