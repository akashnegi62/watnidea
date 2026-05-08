"use client";
import { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";

const HERO_CONTENT = [
  {
    title: "Identity with Soul.",
    highlight: "Strategy with Teeth.",
    description:
      'We don\'t just design logos; we architect the "Aura" that makes your brand the Main Character of your industry.',
  },
  {
    title: "Visual Dopamine for a",
    highlight: "3-Second World.",
    description:
      "Static is invisible. We engineer high-octane video and social ecosystems that turn casual scrollers into a loyal tribe.",
  },
  {
    title: "Hollywood Scale.",
    highlight: "Startup Speed.",
    description:
      "Stop guessing and start scaling. We use Synthetic Cinema and Growth Alchemy to turn every ₹1 spent into predictable profit.",
  },
];

export default function HeroSimple() {
  const ref = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  // TEXT ROTATION LOGIC
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % HERO_CONTENT.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // PARALLAX EFFECTS
  const waveY = useTransform(scrollYProgress, [0, 1], ["80%", "-20%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  return (
    <section
      ref={ref}
      className="relative h-screen w-full bg-black overflow-hidden"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/Video/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* ROTATING TEXT */}
      <motion.div
        style={{ y: textY }}
        className="absolute bottom-24 md:bottom-32 left-6 md:left-20 z-30 text-white max-w-4xl"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-7xl lg:text-8xl leading-[1.1] font-medium tracking-tighter">
              {HERO_CONTENT[index].title} <br />
              <span className="text-(--highlight)">
                {HERO_CONTENT[index].highlight}
              </span>
            </h1>

            <p className="text-white/70 text-lg md:text-xl max-w-xl leading-relaxed font-light">
              {HERO_CONTENT[index].description}
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#ba2c27] text-white px-8 py-4 rounded-full font-bold uppercase text-xs tracking-widest shadow-xl transition-colors hover:bg-white hover:text-black"
            >
              Get Started
            </motion.button>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* THE WAVE (Parallax remain same) */}
      <motion.div
        style={{ y: waveY }}
        className="absolute top-0 left-0 w-full h-[120vh] z-20 pointer-events-none"
      >
        <svg
          viewBox="0 0 1440 800"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            fill="black"
            d="M0,200 C400,100 800,100 1440,200 L1440,800 L0,800 Z"
          />
        </svg>
      </motion.div>
    </section>
  );
}
