"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Services",
    href: "/services",
    subLinks: [
      { label: "Aura Architecture", href: "/services/aura" },
      { label: "The Hype Engine", href: "/services/hype" },
      { label: "Kinetic Studio", href: "/services/kinetic" },
      { label: "The Digital HQ", href: "/services/digital" },
      { label: "Synthetic Cinema", href: "/services/synthetic" },
      { label: "Growth Alchemy", href: "/services/growth" },
      { label: "The Echo System", href: "/services/echo" },
    ],
  },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

const SOCIAL_LINKS = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/watnidea?igsh=MXZ2OWl0bW1wODBpbw%3D%3D",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/watnidea/?originalSubdomain=in",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/watnideaa",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
    ),
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      // Ensure body doesn't stay locked if nav unmounts
      document.body.style.overflow = "unset";
    };
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-200 transition-all duration-500 ${
        isScrolled || mobileMenuOpen
          ? "py-3 bg-black/90 backdrop-blur-xl border-b border-white/10"
          : "py-5 md:py-6 bg-transparent"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative z-210">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="w-28 sm:w-32 md:w-40"
          >
            <Image
              src="/Img/watnidea-logo.png"
              alt="watNidea Logo"
              width={160}
              height={50}
              className="object-contain"
              priority
            />
          </motion.div>
        </Link>

        {/* Desktop Links - Visible on LG (1024px) and up */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {NAV_LINKS.map((link) => (
            <div
              key={link.label}
              className="relative group"
              onMouseEnter={() => link.subLinks && setActiveSubMenu(link.label)}
              onMouseLeave={() => setActiveSubMenu(null)}
            >
              <Link
                href={link.href}
                className="text-[11px] xl:text-[13px] font-bold uppercase tracking-widest text-white hover:text-[#ba2c27] transition-colors flex items-center gap-1"
              >
                {link.label}
                {link.subLinks && (
                  <ChevronDown
                    size={14}
                    className="group-hover:rotate-180 transition-transform duration-300"
                  />
                )}
              </Link>

              {/* Desktop Dropdown */}
              {link.subLinks && (
                <AnimatePresence>
                  {activeSubMenu === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-4 w-64 bg-[#0a0a0a] border border-white/10 rounded-2xl p-4 shadow-2xl backdrop-blur-xl"
                    >
                      <div className="flex flex-col gap-2">
                        {link.subLinks.map((sub) => (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            className="text-[14px] font-medium text-white hover:text-[#ba2c27] hover:bg-white/5 px-4 py-2 rounded-lg transition-all"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </div>

        {/* Actions (Socials & Mobile Toggle) */}
        <div className="flex items-center gap-2 sm:gap-6">
          {/* Socials - Hidden on Mobile, Visible on Tablet (MD) and up */}
          <div className="hidden md:flex items-center gap-4 lg:border-l lg:border-white/20 lg:pl-6">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#ba2c27] transition-colors duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Toggle Button - Visible on Mobile and Tablet (below LG) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden relative z-210 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Fullscreen Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-0 bg-black z-205 lg:hidden flex flex-col h-screen"
          >
            <div className="flex flex-col h-full pt-28 sm:pt-32 px-8 sm:px-12 pb-10 overflow-y-auto">
              <div className="flex flex-col gap-6 sm:gap-8">
                {NAV_LINKS.map((link) => (
                  <div key={link.label} className="flex flex-col">
                    <div className="flex items-center justify-between">
                      <Link
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-3xl sm:text-4xl font-bold tracking-tighter text-white hover:text-[#ba2c27] transition-colors"
                      >
                        {link.label}
                      </Link>
                      {link.subLinks && (
                        <button
                          onClick={() =>
                            setActiveSubMenu(
                              activeSubMenu === link.label ? null : link.label,
                            )
                          }
                          className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white"
                        >
                          <ChevronDown
                            className={`${activeSubMenu === link.label ? "rotate-180" : ""} transition-transform duration-300`}
                          />
                        </button>
                      )}
                    </div>

                    {/* Mobile Submenu Accordion */}
                    {link.subLinks && (
                      <motion.div
                        initial={false}
                        animate={{
                          height: activeSubMenu === link.label ? "auto" : 0,
                          opacity: activeSubMenu === link.label ? 1 : 0,
                          marginTop: activeSubMenu === link.label ? 16 : 0,
                        }}
                        className="flex flex-col gap-3 pl-4 border-l border-white/10 overflow-hidden"
                      >
                        {link.subLinks.map((sub) => (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-lg sm:text-xl text-white/70 hover:text-white"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>

              {/* Mobile Menu Footer (Socials & Contacts) */}
              <div className="mt-auto pt-12 flex flex-col gap-10">
                <div className="flex gap-4 sm:gap-6">
                  {SOCIAL_LINKS.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
                <div className="space-y-2 text-white/50">
                  <p className="text-sm font-medium tracking-wide">info@watnidea.com</p>
                  <p className="text-sm font-medium tracking-wide">+91 8354811162</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}