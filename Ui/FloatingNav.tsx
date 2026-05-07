"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const NAV_LINKS = [
  { id: "home", label: "Home", href: "/" },
  { id: "studio", label: "Studio", href: "/studio" },
  { id: "work", label: "Work", href: "/work" },
  { id: "contact", label: "Contact", href: "/contact" },
];

export default function FloatingNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isContactHovered, setIsContactHovered] = useState(false);

  const springFast = { type: "spring", stiffness: 400, damping: 30 };
  const springHeavy = { type: "spring", stiffness: 200, damping: 25 };

  return (
    <>
      {/* 1. TOP BAR WRAPPER (Z-150) */}
      <nav className="fixed top-0 left-0 w-full z-[150] p-6 flex justify-between items-center pointer-events-none">
        {/* LOGO AREA */}
        <motion.div className="pointer-events-auto">
          <Link href="/">
            <Image
              src="/logo.svg" // Replace with your actual logo path
              alt="Logo"
              width={40}
              height={40}
              className="object-contain"
            />
          </Link>
        </motion.div>

        {/* BUTTONS AREA */}
        <div className="flex items-center gap-3 pointer-events-auto">
          {/* CONTACT BUTTON (Icon Slides Left to Right on Hover) */}
          <motion.button
            onMouseEnter={() => setIsContactHovered(true)}
            onMouseLeave={() => setIsContactHovered(false)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 bg-[#DDE4E6] text-black rounded-full px-6 py-3 shadow-sm border border-black/5"
          >
            <span className="text-[11px] font-bold tracking-widest uppercase">
              Contact Us
            </span>
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center overflow-hidden relative">
              <AnimatePresence mode="popLayout" initial={false}>
                {isContactHovered ? (
                  <motion.div
                    key="icon-hover"
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -20, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <MessageCircle size={14} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="icon-default"
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -20, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <MessageCircle size={14} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.button>

          {/* MENU TOGGLE (Dots Rotate on Hover) */}
          <motion.button
            onClick={() => setMenuOpen(!menuOpen)}
            whileHover="hover"
            whileTap={{ scale: 0.95 }}
            className="relative flex items-center gap-3 bg-black text-white rounded-full px-6 py-3 shadow-lg min-w-[140px] h-[52px] overflow-hidden"
          >
            <div className="relative h-full w-full flex items-center">
              <AnimatePresence mode="popLayout" initial={false}>
                {menuOpen ? (
                  <motion.span
                    key="close"
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-100%" }}
                    transition={springFast}
                    className="absolute left-0 text-[11px] font-bold tracking-widest uppercase"
                  >
                    Close
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-100%" }}
                    transition={springFast}
                    className="absolute left-0 text-[11px] font-bold tracking-widest uppercase"
                  >
                    Menu
                  </motion.span>
                )}
              </AnimatePresence>
            </div>

            {/* ROTATING DOTS */}
            <motion.div
              variants={{ hover: { rotate: 180 } }}
              transition={springFast}
              className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center gap-[3px] shrink-0"
            >
              <div className="w-1.5 h-1.5 bg-white rounded-full" />
              <div className="w-1.5 h-1.5 bg-white rounded-full" />
            </motion.div>
          </motion.button>
        </div>
      </nav>

      {/* 2. NAVIGATION PANEL (Z-140, Below Buttons, Gap from Right) */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-[130] bg-black/5 backdrop-blur-md"
            />

            <motion.div
              initial={{ x: 20, y: -20, opacity: 0, scale: 0.95 }}
              animate={{ x: 0, y: 0, opacity: 1, scale: 1 }}
              exit={{ x: 20, y: -20, opacity: 0, scale: 0.95 }}
              transition={springHeavy}
              className="fixed top-[80px] right-6 z-[140] w-full max-w-[400px] min-h-[400px] bg-[#E8EAEB] rounded-[2.5rem] shadow-2xl flex flex-col p-8"
            >
              <div className="flex flex-col gap-1 mt-4">
                {NAV_LINKS.map((link) => (
                  <motion.div key={link.id} className="group">
                    <Link
                      href={link.href}
                      className="flex items-center justify-between py-4 rounded-2xl group-hover:px-4 group-hover:bg-white transition-all duration-300"
                    >
                      <span className="text-5xl font-bold tracking-tighter text-[#1A1A1A] opacity-40 group-hover:opacity-100 transition-opacity">
                        {link.label}
                      </span>

                      {/* ARROW SHOWS ON HOVER */}
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        whileHover={{ opacity: 1, x: 0 }}
                        className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300"
                      >
                        <ArrowRight
                          size={32}
                          className="text-black"
                          strokeWidth={3}
                        />
                      </motion.div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
