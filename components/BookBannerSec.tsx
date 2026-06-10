"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

//  Animated counter hook (Simplified)
function useCounter(target: number, inView: boolean) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = 0;
    const end = target;
    const duration = 1500;
    let startTimestamp: number | null = null;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setVal(Math.floor(progress * (end - start) + start));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [inView, target]);
  return val;
}

//  Stat item
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
  const counted = useCounter(isNumber ? (value as number) : 0, inView);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col gap-1"
    >
      <p className="text-xl md:text-2xl font-black text-(--highlight) leading-none tracking-tight">
        {isNumber ? counted : value}
        {suffix}
      </p>
      <p className="text-white text-[11px] uppercase tracking-wider font-medium">
        {label}
      </p>
    </motion.div>
  );
}

// Checklist item
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
      initial={{ opacity: 0, x: -5 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.4, delay }}
      className="flex items-center gap-3"
    >
      <span className="w-1.5 h-1.5 rounded-full bg-(--highlight) shrink-0" />
      <span className="text-white text-sm font-medium">{label}</span>
    </motion.div>
  );
}

//  Main
export default function BookBannerSec() {
  const leftRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const leftInView = useInView(leftRef, { once: true, margin: "-100px" });
  const cardInView = useInView(cardRef, { once: true, margin: "-100px" });

  return (
    <section className="relative w-full bg-black py-16 md:py-32 overflow-hidden">
      <div className="relative z-10 max-w-300 mx-auto px-6">
        <div
          className="relative rounded-4xl md:rounded-3xl overflow-hidden border border-white/10 bg-[#0A0A0A]"
          style={{
            boxShadow: "0 30px 60px -12px rgba(0,0,0,0.5)",
          }}
        >
          {/* Subtle top border highlight */}
          <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-(--highlight)/30 to-transparent" />

          <div className="relative grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-0">
            {/* LEFT CONTENT */}
            <div
              ref={leftRef}
              className="p-8 md:p-14 lg:border-r border-white/5"
            >
              <div className="mb-8 md:mb-10 space-y-1">
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={leftInView ? { opacity: 1, y: 0 } : {}}
                  className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tighter leading-tight"
                >
                  READY TO EVOLVE INTO{" "}
                  <span className="text-(--highlight)">A BRAND</span> THAT
                  PEOPLE ACTUALLY REMEMBER?
                </motion.p>
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={leftInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.4 }}
                className="text-white/60 text-sm md:text-base leading-relaxed max-w-lg mb-10 md:mb-12"
              >
                When your business needs more than just a logo—when it needs a
                pulse—watNidea steps in. We engineer branding and digital
                marketing solutions that are sleek, fast, and engineered to
                support your journey from a startup to an industry icon.
              </motion.p>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:flex flex-wrap gap-8 md:gap-16">
                <Stat
                  value={15}
                  suffix="+"
                  label="Concepts Projects"
                  inView={leftInView}
                  delay={0.5}
                />
                <Stat
                  value={98}
                  suffix="%"
                  label="Client Satisfaction"
                  inView={leftInView}
                  delay={0.6}
                />
                <Stat
                  value="∞"
                  suffix=""
                  label="Creative Energy"
                  inView={leftInView}
                  delay={0.7}
                />
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div
              ref={cardRef}
              className="p-8 md:p-14 bg-white/2 flex flex-col justify-center"
            >
              <div className="mb-8">
                <h3 className="text-white text-xl md:text-2xl font-bold mb-4 tracking-tight">
                  Book Your <span className="text-(--highlight)">Strategy</span>{" "}
                  Call
                </h3>
                <p className="text-white/80 text-base md:text-lg mb-8 leading-snug">
                  Get a personalized plan to scale your business.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
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

              <a
                href="https://calendly.com/watnidea-info/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-(--highlight) text-white font-bold text-xs md:text-sm py-4 md:py-5 rounded-full shadow-lg shadow-(--highlight)/20 transition-transform flex items-center justify-center gap-2 cursor-pointer uppercase tracking-widest"
                >
                  Start Your Project
                  <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" />
                </motion.div>
              </a>

              <p className="text-white/40 text-[10px] md:text-xs text-center mt-6">
                Takes only 30 seconds • No commitment
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
