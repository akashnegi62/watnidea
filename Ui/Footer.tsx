"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  useSpring,
  AnimatePresence,
} from "framer-motion";

// ─── Data ─────────────────────────────────────────────────
const QUICK_LINKS = ["Services", "About", "Contact", "Let's Talk"];
const SERVICES = [
  "Synthetic Cinema",
  "The Hype Engine",
  "The Echo System",
  "Growth Alchemy",
];
const LEGAL = ["Privacy Policy", "Terms & Conditions", "Disclaimer"];

const SOCIALS = [
  {
    name: "Facebook",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "#",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

// ─── Marquee text ──────────────────────────────────────────
const MARQUEE_WORDS = [
  "Brand Identity",
  "✳",
  "Digital Strategy",
  "✳",
  "Cinematic Content",
  "✳",
  "Growth Systems",
  "✳",
  "Visual Ecosystems",
  "✳",
];

function MarqueeRow({ reverse = false }: { reverse?: boolean }) {
  const items = [...MARQUEE_WORDS, ...MARQUEE_WORDS, ...MARQUEE_WORDS];
  return (
    <div className="overflow-hidden flex w-full">
      <motion.div
        animate={{ x: reverse ? ["0%", "33.33%"] : ["0%", "-33.33%"] }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        className="flex gap-6 shrink-0 whitespace-nowrap"
      >
        {items.map((w, i) => (
          <span
            key={i}
            className={`text-sm font-bold uppercase tracking-[0.18em] shrink-0
              ${w === "✳" ? "text-[var(--highlight)]" : "text-white/20"}`}
          >
            {w}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

// ─── Animated link ─────────────────────────────────────────
function FooterLink({
  href = "#",
  children,
}: {
  href?: string;
  children: React.ReactNode;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative w-fit overflow-hidden"
    >
      <Link
        href={href}
        className="text-white/50 hover:text-white text-sm font-medium
                   transition-colors duration-300 block leading-none py-1"
      >
        {children}
      </Link>
      <motion.div
        animate={{ scaleX: hovered ? 1 : 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        style={{ originX: 0 }}
        className="absolute bottom-0 left-0 right-0 h-px bg-[var(--highlight)]"
      />
    </motion.div>
  );
}

// ─── Main ──────────────────────────────────────────────────
export default function Footer() {
  const outerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(outerRef, { once: true, margin: "-60px" });

  const { scrollYProgress } = useScroll({
    target: outerRef,
    offset: ["start end", "end end"],
  });
  const smooth = useSpring(scrollYProgress, { stiffness: 55, damping: 18 });
  const orbY = useTransform(smooth, [0, 1], ["30%", "-10%"]);
  const orbScale = useTransform(smooth, [0, 1], [0.7, 1.1]);
  const lineW = useTransform(smooth, [0.3, 0.85], ["0%", "100%"]);

  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setEmail("");
  }

  return (
    <footer ref={outerRef} className="relative bg-[#080504] overflow-hidden">
      {/* ── ambient orb ── */}
      <motion.div
        style={{ y: orbY, scale: orbScale }}
        className="pointer-events-none absolute bottom-[-20%] left-[40%]
                   -translate-x-1/2 w-[600px] h-[600px] z-0"
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, var(--highlight) 0%, rgba(180,30,20,0.4) 35%, transparent 68%)",
            filter: "blur(80px)",
            opacity: 0.18,
          }}
        />
      </motion.div>

      {/* ══ BIG STATEMENT ROW ══════════════════════════════════ */}
      <div
        className="relative z-10 border-b border-white/[0.06]
                      px-6 md:px-12 lg:px-16 pt-20 pb-14 overflow-hidden"
      >
        <div className="overflow-hidden mb-3">
          <motion.p
            initial={{ y: "110%" }}
            animate={inView ? { y: "0%" } : {}}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="text-white/20 text-xs font-bold uppercase tracking-[0.3em] mb-2"
          >
            Where Ideas Turn Into Impact
          </motion.p>
        </div>

        <div className="overflow-hidden">
          <motion.h2
            initial={{ y: "110%" }}
            animate={inView ? { y: "0%" } : {}}
            transition={{
              duration: 0.9,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-[clamp(3rem,8vw,7rem)] font-black text-white
                       leading-[0.92] tracking-tight"
          >
            wat<span className="text-[var(--highlight)]">N</span>idea
          </motion.h2>
        </div>

        {/* Tagline + CTA row */}
        <div
          className="mt-6 flex flex-col md:flex-row md:items-end
                        justify-between gap-6"
        >
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.25 }}
            className="text-white/35 text-base max-w-sm leading-relaxed"
          >
            As a leading creative and digital marketing agency, watNidea
            provides end-to-end solutions for modern brands — from brand
            strategy to cinematic content and performance marketing.
          </motion.p>

          {/* Email signup */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.35 }}
            className="flex items-center gap-0 bg-white/[0.06] border border-white/10
                       rounded-full overflow-hidden p-1 min-w-[280px]"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 bg-transparent text-white text-sm px-4 py-2
                         placeholder:text-white/25 outline-none"
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[var(--highlight)] text-white text-xs font-bold
                         uppercase tracking-[0.15em] px-5 py-3 rounded-full
                         transition-colors duration-300 shrink-0"
            >
              <AnimatePresence mode="wait" initial={false}>
                {sent ? (
                  <motion.span
                    key="sent"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                  >
                    ✓ Sent
                  </motion.span>
                ) : (
                  <motion.span
                    key="sub"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                  >
                    Subscribe
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </motion.form>
        </div>
      </div>

      {/* ══ MARQUEE ═══════════════════════════════════════════ */}
      <div className="relative z-10 py-5 border-b border-white/[0.06] flex flex-col gap-3">
        <MarqueeRow />
        <MarqueeRow reverse />
      </div>

      {/* ══ MAIN GRID ═════════════════════════════════════════ */}
      <div
        className="relative z-10 max-w-[1320px] mx-auto
                      px-6 md:px-12 lg:px-16 py-16
                      grid grid-cols-2 md:grid-cols-4 gap-10"
      >
        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.1 }}
        >
          <p className="text-white text-xs font-bold uppercase tracking-[0.25em] mb-5">
            Quick Links
          </p>
          <div className="flex flex-col gap-3">
            {QUICK_LINKS.map((l) => (
              <FooterLink key={l}>{l}</FooterLink>
            ))}
          </div>
        </motion.div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.18 }}
        >
          <p className="text-white text-xs font-bold uppercase tracking-[0.25em] mb-5">
            Services
          </p>
          <div className="flex flex-col gap-3">
            {SERVICES.map((s) => (
              <FooterLink key={s}>{s}</FooterLink>
            ))}
          </div>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.26 }}
        >
          <p className="text-white text-xs font-bold uppercase tracking-[0.25em] mb-5">
            Contact
          </p>
          <div className="flex flex-col gap-3">
            <a
              href="tel:+918354811162"
              className="text-white/50 hover:text-[var(--highlight)] text-sm
                         font-medium transition-colors duration-300"
            >
              +91 8354811162
            </a>
            <a
              href="mailto:info@watnidea.com"
              className="text-white/50 hover:text-[var(--highlight)] text-sm
                         font-medium transition-colors duration-300 break-all"
            >
              info@watnidea.com
            </a>

            {/* Socials */}
            <div className="flex gap-3 mt-4">
              {SOCIALS.map((s) => (
                <motion.a
                  key={s.name}
                  href={s.href}
                  whileHover={{
                    scale: 1.12,
                    backgroundColor: "var(--highlight)",
                  }}
                  whileTap={{ scale: 0.93 }}
                  className="w-9 h-9 rounded-full border border-white/15
                             flex items-center justify-center text-white/50
                             hover:text-white transition-colors duration-300"
                  aria-label={s.name}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Legal */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.34 }}
        >
          <p className="text-white text-xs font-bold uppercase tracking-[0.25em] mb-5">
            Legal
          </p>
          <div className="flex flex-col gap-3">
            {LEGAL.map((l) => (
              <FooterLink key={l}>{l}</FooterLink>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ══ BOTTOM BAR ════════════════════════════════════════ */}
      <div className="relative z-10 border-t border-white/[0.06]">
        {/* animated line */}
        <motion.div
          style={{ width: lineW }}
          className="absolute top-0 left-0 h-[1px] bg-gradient-to-r
                     from-[var(--highlight)] to-transparent"
        />
        <div
          className="max-w-[1320px] mx-auto px-6 md:px-12 lg:px-16
                        py-6 flex flex-col md:flex-row items-center
                        justify-between gap-3"
        >
          <p className="text-white/25 text-xs">
            © 2026 WatNidea. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {["Privacy Policy", "Terms & Conditions", "Disclaimer"].map(
              (l, i) => (
                <span key={l} className="flex items-center gap-4">
                  <a
                    href="#"
                    className="text-white/25 hover:text-white/60 text-xs
                             transition-colors duration-300"
                  >
                    {l}
                  </a>
                  {i < 2 && (
                    <span className="text-white/15 text-xs select-none">|</span>
                  )}
                </span>
              ),
            )}
            {/* red dot */}
            <motion.div
              animate={{ scale: [1, 1.4, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-2 h-2 rounded-full bg-[var(--highlight)] ml-2"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
