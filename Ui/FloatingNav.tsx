"use client";

import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { MessageCircle, ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const NAV_LINKS = [
  { id: "home", label: "Home", href: "/" },
  { id: "about", label: "About Us", href: "/about" },
  { id: "services", label: "Services", href: "/services", hasSub: true },
];

const SUB_SERVICES = [
  { label: "Aura Architecture", href: "/services/aura" },
  { label: "The Hype Engine", href: "/services/hype" },
  { label: "Kinetic Studio", href: "/services/kinetic" },
];

export default function FloatingNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isContactHovered, setIsContactHovered] = useState(false);
  const [servicesHovered, setServicesHovered] = useState(false);

  // 1. LOGO SCROLL LOGIC
  const { scrollY } = useScroll();
  const logoY = useTransform(scrollY, [0, 100], [0, -120]);
  const logoOpacity = useTransform(scrollY, [0, 80], [1, 0]);

  const springFast = { type: "spring" as const, stiffness: 400, damping: 28 };
  const springHeavy = { type: "spring" as const, stiffness: 220, damping: 24 };

  return (
    <>
      {/* 1. TOP BAR WRAPPER */}
      <nav className="fixed top-0 left-0 w-full z-150 p-8 flex justify-between items-center pointer-events-none">
        {/* LOGO - Not fixed, exits on scroll */}
        <motion.div
          style={{ y: logoY, opacity: logoOpacity }}
          className="pointer-events-auto ml-4 md:ml-12"
        >
          <Link href="/">
            <Image
              src="/Img/watnidea-logo.png"
              alt="Logo"
              width={160}
              height={160}
              className="object-contain"
            />
          </Link>
        </motion.div>

        {/* ACTION BUTTONS AREA */}
        <div className="flex items-center gap-4 pointer-events-auto">
          {/* CONTACT US BUTTON */}
          <motion.button
            onMouseEnter={() => setIsContactHovered(true)}
            onMouseLeave={() => setIsContactHovered(false)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-4 bg-[#DDE4E6] text-black rounded-full px-8 h-16 shadow-sm border border-black/5 overflow-hidden"
          >
            <div className="relative h-full w-[90px] flex items-center">
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.span
                  key={isContactHovered ? "contact-hover" : "contact-default"}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={springFast}
                  className="absolute left-0 text-[12px] font-bold tracking-widest uppercase whitespace-nowrap"
                >
                  Contact Us
                </motion.span>
              </AnimatePresence>
            </div>

            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 overflow-hidden relative">
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.div
                  key={isContactHovered ? "msg-hover" : "msg-default"}
                  initial={{ x: -25, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 25, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "circOut" }}
                >
                  <MessageCircle size={18} />
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.button>

          {/* MENU TOGGLE BUTTON */}
          <motion.button
            onClick={() => setMenuOpen(!menuOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative flex items-center gap-4 bg-black text-white rounded-full px-8 h-16 shadow-lg min-w-[180px] overflow-hidden"
          >
            <div className="relative h-full w-[80px] flex items-center">
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.span
                  key={menuOpen ? "close" : "menu"}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={springFast}
                  className="absolute left-0 text-[11px] font-bold tracking-widest uppercase"
                >
                  {menuOpen ? "Close" : "Menu"}
                </motion.span>
              </AnimatePresence>
            </div>

            <motion.div
              animate={{ rotate: menuOpen ? 180 : 0 }}
              whileHover={{ rotate: 180 }}
              transition={springFast}
              className="group-hover:bg-red-400 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center gap-[4px] shrink-0"
            >
              <div className="w-2 h-2 bg-white rounded-full" />
              <div className="w-2 h-2 bg-white rounded-full" />
            </motion.div>
          </motion.button>
        </div>
      </nav>

      {/* 2. NAVIGATION PANEL */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-130 bg-black/5 backdrop-blur-md"
            />

            <motion.div
              initial={{ x: 20, y: -20, opacity: 0, scale: 0.95 }}
              animate={{ x: 0, y: 0, opacity: 1, scale: 1 }}
              exit={{ x: 20, y: -20, opacity: 0, scale: 0.95 }}
              transition={springHeavy}
              className="fixed top-[110px] right-10 z-140 w-full max-w-[420px] bg-[#E8EAEB] rounded-[3rem] shadow-2xl flex flex-col p-10 overflow-hidden"
            >
              <div className="flex flex-col gap-2 mt-4">
                {NAV_LINKS.map((link) => (
                  <div
                    key={link.id}
                    onMouseEnter={() => link.hasSub && setServicesHovered(true)}
                    onMouseLeave={() =>
                      link.hasSub && setServicesHovered(false)
                    }
                    className="flex flex-col"
                  >
                    <motion.div
                      whileHover="hover"
                      initial="initial"
                      className="group"
                    >
                      <Link
                        href={link.href}
                        onClick={() => !link.hasSub && setMenuOpen(false)}
                        className="flex items-center py-4 rounded-3xl group-hover:bg-white group-hover:px-6 transition-all duration-300"
                      >
                        <div className="flex items-center gap-4">
                          <motion.div
                            variants={{
                              initial: { opacity: 0, x: -15, width: 0 },
                              hover: { opacity: 1, x: 0, width: "auto" },
                            }}
                            transition={springFast}
                            className="overflow-hidden flex items-center shrink-0"
                          >
                            <ArrowRight
                              size={28}
                              className="text-black mr-2"
                              strokeWidth={3}
                            />
                          </motion.div>

                          <span className="text-5xl font-bold tracking-tighter text-black/40 group-hover:text-black transition-colors duration-300">
                            {link.label}
                          </span>
                        </div>
                      </Link>
                    </motion.div>

                    {/* SUB-SERVICES REVEAL */}
                    {link.hasSub && (
                      <AnimatePresence>
                        {servicesHovered && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-14 mt-2 flex flex-col gap-4 overflow-hidden"
                          >
                            {SUB_SERVICES.map((sub) => (
                              <Link
                                key={sub.label}
                                href={sub.href}
                                onClick={() => setMenuOpen(false)}
                                className="text-black/40 hover:text-black hover:translate-x-2 text-xl font-semibold transition-all duration-300"
                              >
                                {sub.label}
                              </Link>
                            ))}
                            <Link
                              href="/services"
                              onClick={() => setMenuOpen(false)}
                              className="flex items-center gap-2 text-black/40 hover:text-black font-bold pt-2 hover:translate-x-2 transition-all duration-300"
                            >
                              More Services <ArrowUpRight size={18} />
                            </Link>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
