"use client";

import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { MessageCircle, ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const NAV_LINKS = [
  { id: "home", label: "Home", href: "/" },
  { id: "about", label: "About Us", href: "/about" },
  { id: "blog", label: "Blog", href: "/blog" },
  { id: "services", label: "Services", href: "/services", hasSub: true },
];

const SUB_SERVICES = [
  { label: "Aura Architecture", href: "/services/aura" },
  { label: "The Hype Engine", href: "/services/hype" },
  { label: "Kinetic Studio", href: "/services/kinetic" },
  { label: "The Digital HQ", href: "/services/digital" },
  { label: "Synthetic Cinema", href: "/services/synthetic" },
  { label: "Growth Alchemy", href: "/services/growth" },
  { label: "The Echo System", href: "/services/echo" },
];

export default function FloatingNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isContactHovered, setIsContactHovered] = useState(false);
  const [servicesHovered, setServicesHovered] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const { scrollY } = useScroll();
  const logoY = useTransform(scrollY, [0, 100], [0, -120]);
  const logoOpacity = useTransform(scrollY, [0, 80], [1, 0]);

  const springFast = { type: "spring" as const, stiffness: 400, damping: 28 };
  const springHeavy = { type: "spring" as const, stiffness: 220, damping: 24 };

  return (
    <>
      {/* 1. TOP BAR WRAPPER */}
      <nav className="fixed top-0 left-0 w-full z-150 p-4 md:p-8 flex justify-between items-center pointer-events-none">
        {/* LOGO */}
        <motion.div
          style={{ y: logoY, opacity: logoOpacity }}
          className="pointer-events-auto ml-2 md:ml-12"
        >
          <Link href="/">
            <Image
              src="/Img/watnidea-logo.png"
              alt="Logo"
              width={140}
              height={140}
              priority
              loading="eager"
              className="object-contain w-28 md:w-40"
            />
          </Link>
        </motion.div>

        {/* ACTION BUTTONS AREA */}
        <div className="flex items-center gap-4 pointer-events-auto">
          {/* CONTACT US BUTTON - Hidden on Mobile */}
          <motion.button
            onClick={() => {
              window.location.href = "/contact";
            }}
            onMouseEnter={() => setIsContactHovered(true)}
            onMouseLeave={() => setIsContactHovered(false)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:flex items-center gap-4 bg-[#DDE4E6] text-black rounded-full px-8 h-16 shadow-sm border-2 border-white overflow-hidden cursor-pointer"
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
            className="group relative flex items-center gap-4 bg-black text-white border-2 border-white rounded-full px-6 md:px-8 h-14 md:h-16 shadow-lg min-w-[140px] md:min-w-[180px] overflow-hidden"
          >
            <div className="relative h-full w-[60px] md:w-[80px] flex items-center">
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.span
                  key={menuOpen ? "close" : "menu"}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={springFast}
                  className="absolute left-0 text-[10px] md:text-[11px] font-bold tracking-widest uppercase"
                >
                  {menuOpen ? "Close" : "Menu"}
                </motion.span>
              </AnimatePresence>
            </div>

            <motion.div
              animate={{ rotate: menuOpen ? 180 : 0 }}
              transition={springFast}
              className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/20 flex items-center justify-center gap-[4px] shrink-0"
            >
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full" />
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full" />
            </motion.div>
          </motion.button>
        </div>
      </nav>

      {/* 2. NAVIGATION PANEL */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              key="nav-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-130 bg-black/10 backdrop-blur-md"
            />

            <motion.div
              key="nav-panel"
              initial={{ x: 20, y: -20, opacity: 0, scale: 0.95 }}
              animate={{ x: 0, y: 0, opacity: 1, scale: 1 }}
              exit={{ x: 20, y: -20, opacity: 0, scale: 0.95 }}
              transition={springHeavy}
              className="fixed top-[90px] md:top-[110px] right-4 md:right-10 z-140 w-[calc(100%-2rem)] md:max-w-[420px] bg-[#E8EAEB] rounded-[2.5rem] md:rounded-[3rem] shadow-2xl flex flex-col p-6 md:p-10 overflow-hidden"
            >
              <div className="flex flex-col gap-1 md:gap-2 mt-2">
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
                      className="group flex items-center justify-between"
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        className="flex-1 flex items-center py-3 md:py-4 rounded-3xl group-hover:bg-white md:group-hover:px-6 transition-all duration-300"
                      >
                        <div className="flex items-center gap-3 md:gap-4">
                          <motion.div
                            variants={{
                              initial: { opacity: 0, x: -15, width: 0 },
                              hover: { opacity: 1, x: 0, width: "auto" },
                            }}
                            transition={springFast}
                            className="overflow-hidden hidden md:flex items-center shrink-0"
                          >
                            <ArrowRight
                              size={28}
                              className="text-black mr-2"
                              strokeWidth={3}
                            />
                          </motion.div>

                          <span className="text-4xl md:text-5xl font-bold tracking-tighter text-black/40 group-hover:text-black transition-colors duration-300">
                            {link.label}
                          </span>
                        </div>
                      </Link>

                      {link.hasSub && (
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            setIsMobileServicesOpen(!isMobileServicesOpen);
                          }}
                          className="md:hidden w-12 h-12 flex items-center justify-center rounded-full bg-white/50 text-black hover:bg-white transition-all mr-2"
                        >
                          <motion.div
                            animate={{
                              rotate: isMobileServicesOpen ? 180 : 0,
                            }}
                          >
                            <ChevronDown size={24} />
                          </motion.div>
                        </button>
                      )}
                    </motion.div>

                    {/* SUB-SERVICES */}
                    {link.hasSub && (
                      <AnimatePresence>
                        {(servicesHovered || isMobileServicesOpen) && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4 md:pl-14 mt-2 flex flex-col gap-3 md:gap-2 overflow-hidden"
                          >
                            {SUB_SERVICES.map((sub) => (
                              <Link
                                key={sub.label}
                                href={sub.href}
                                onClick={() => setMenuOpen(false)}
                                className="text-black/40 hover:text-black hover:translate-x-2 text-lg md:text-xl font-semibold transition-all duration-300"
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                ))}

                {/* MOBILE ONLY CONTACT US TAB */}
                <div className="md:hidden mt-4 pt-4 border-t border-black/5">
                  <Link
                    href="/contact"
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center justify-between bg-black text-white rounded-2xl px-6 py-4"
                  >
                    <span className="text-xl font-bold">Contact Us</span>
                    <MessageCircle size={20} />
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
