"use client";
import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

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
    name: "Facebook",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
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

export default function Footer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });

  return (
    <footer
      ref={containerRef}
      className="bg-black text-white pt-24 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        {/* ── TOP SECTION: Brand Description & Lists ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          {/* Column 1: Brand Description (Span 5) */}
          <div className="lg:col-span-5 space-y-6">
            <p className="text-[11px] font-black uppercase tracking-[0.3em] text-(--highlight)">
              Agency Overview
            </p>
            <p className="text-white/50 text-sm leading-relaxed max-w-md">
              As a leading creative and digital marketing agency, watNidea
              provides end-to-end solutions for modern brands. Our expertise
              spans brand strategy and rebranding to technical website
              development and performance marketing. We ensure your brand’s
              &quot;Echo&quot; is felt across every digital touchpoint.
            </p>
          </div>

          {/* Column 2: Quick Links (Span 3) */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/30">
              Quick Links
            </p>
            {QUICK_LINKS.map((link) => (
              <Link
                key={link}
                href="#"
                className="text-sm font-bold uppercase tracking-widest hover:text-(--highlight) transition-colors w-fit"
              >
                {link}
              </Link>
            ))}
          </div>

          {/* Column 3: Services (Span 4) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/30">
              Services
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
              {SERVICES.map((service) => (
                <Link
                  key={service}
                  href="#"
                  className="text-sm font-bold uppercase tracking-widest hover:text-(--highlight) transition-colors w-fit"
                >
                  {service}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* ── MIDDLE SECTION: Contact & Socials ── */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 border-t border-white/5 py-12">
          {/* Contact Details */}
          <div className="space-y-1">
            <p className="text-sm font-bold tracking-widest">+91 8354811162</p>
            <p className="text-sm font-bold tracking-widest text-white/50">
              info@watnidea.com
            </p>
          </div>

          {/* Social Icons (Screenshot Style) */}
          <div className="flex gap-4">
            {SOCIALS.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                whileHover={{ backgroundColor: "rgba(255,255,255,0.1)", y: -3 }}
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white transition-all"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          {/* Copyright & Legal */}
          <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/20 text-left md:text-right">
            <p className="mb-2">© 2026 WatNidea. All rights reserved.</p>
            <div className="flex gap-4 md:justify-end">
              {LEGAL.map((l) => (
                <Link
                  key={l}
                  href="#"
                  className="hover:text-white transition-colors"
                >
                  {l}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* ── BOTTOM SECTION: Massive Logo ── */}
        <div className="relative pt-4">
          <motion.div
            initial={{ y: "100%" }}
            animate={isInView ? { y: 0 } : {}}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-full text-center"
          >
            <h2 className="text-[18vw] leading-[0.8] font-black uppercase tracking-[-0.04em] select-none">
              wat<span className="text-(--highlight)">N</span>idea
            </h2>
          </motion.div>
          <div className="h-4 w-full bg-black relative z-10" />
        </div>
      </div>
    </footer>
  );
}
