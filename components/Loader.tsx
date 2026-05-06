"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PageLoader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let current = 0;
    const steps = [
      { target: 30, speed: 18 },
      { target: 65, speed: 28 },
      { target: 85, speed: 40 },
      { target: 100, speed: 22 },
    ];

    let stepIndex = 0;

    const tick = () => {
      if (stepIndex >= steps.length) return;
      const { target, speed } = steps[stepIndex];

      if (current < target) {
        current = Math.min(current + 1, target);
        setProgress(current);
        setTimeout(tick, speed);
      } else {
        stepIndex++;
        if (stepIndex < steps.length) {
          setTimeout(tick, stepIndex === 2 ? 300 : 80);
        } else {
          setTimeout(() => setDone(true), 400);
        }
      }
    };

    setTimeout(tick, 200);
  }, []);

  useEffect(() => {
    if (done) {
      const t = setTimeout(() => setHidden(true), 1200);
      return () => clearTimeout(t);
    }
  }, [done]);

  if (hidden) return null;

  return (
    <AnimatePresence>
      {!hidden && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-9999 flex flex-col items-center justify-center overflow-hidden"
          style={{ background: "#000" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Sliding panels on exit */}
          <motion.div
            className="absolute inset-0 origin-top"
            style={{ background: "#ba2c27" }}
            animate={done ? { scaleY: [0, 1, 1] } : { scaleY: 0 }}
            transition={{
              duration: 0.9,
              times: [0, 0.4, 1],
              ease: [0.16, 1, 0.3, 1],
            }}
          />

          <motion.div
            className="absolute inset-0 origin-top"
            style={{ background: "#000" }}
            animate={done ? { scaleY: [0, 0, 1] } : { scaleY: 0 }}
            transition={{
              duration: 0.9,
              times: [0, 0.4, 1],
              ease: [0.16, 1, 0.3, 1],
              delay: 0.15,
            }}
          />

          {/* Content — hidden when done */}
          <motion.div
            className="relative z-10 flex flex-col items-center gap-12"
            animate={done ? { opacity: 0, y: -24 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeIn" }}
          >
            {/* Wordmark */}
            <motion.div
              className="flex items-end gap-1 select-none"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <span
                className="font-black uppercase tracking-tighter leading-none"
                style={{
                  fontFamily: "'Anton', 'Bebas Neue', Impact, sans-serif",
                  fontSize: "clamp(2.5rem, 8vw, 5.5rem)",
                  color: "#fff",
                }}
              >
                We
              </span>
              <span
                className="font-black uppercase tracking-tighter leading-none"
                style={{
                  fontFamily: "'Anton', 'Bebas Neue', Impact, sans-serif",
                  fontSize: "clamp(2.5rem, 8vw, 5.5rem)",
                  color: "#ba2c27",
                }}
              >
                Build
              </span>
            </motion.div>

            {/* Progress bar + counter */}
            <div
              className="flex flex-col items-center gap-3 w-full"
              style={{ maxWidth: "clamp(220px, 40vw, 400px)" }}
            >
              {/* Bar track */}
              <div
                className="relative w-full overflow-hidden"
                style={{ height: "1px", background: "rgba(255,255,255,0.12)" }}
              >
                <motion.div
                  className="absolute top-0 left-0 h-full"
                  style={{ background: "#ba2c27", width: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>

              {/* Counter row */}
              <div className="w-full flex justify-between items-center">
                <motion.span
                  className="text-xs font-mono tracking-widest uppercase"
                  style={{ color: "rgba(255,255,255,0.3)" }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  Loading
                </motion.span>
                <motion.span
                  className="font-mono text-sm font-semibold tabular-nums"
                  style={{ color: "#ba2c27" }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {String(progress).padStart(2, "0")}%
                </motion.span>
              </div>
            </div>
          </motion.div>

          {/* Bottom tagline */}
          <motion.p
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs font-mono tracking-[0.3em] uppercase whitespace-nowrap"
            style={{ color: "rgba(255,255,255,0.2)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Growth systems · Built different
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
