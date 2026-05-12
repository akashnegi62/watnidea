/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

const ACCENT_COLOR = "#ba2c27";

const CARDS = [
  {
    tag: "Email",
    icon: <Mail size={32} strokeWidth={1.5} />,
    hint: "Email us today for content, strategy, and growth support.",
    value: "info@watnidea.com",
    href: "mailto:info@watnidea.com",
  },
  {
    tag: "Phone",
    icon: <Phone size={32} strokeWidth={1.5} />,
    hint: "Contact us to build stronger digital visibility.",
    value: "+91 8354811162",
    href: "tel:+918354811162",
  },
  {
    tag: "Office",
    icon: <MapPin size={32} strokeWidth={1.5} />,
    hint: "Visit us for personalized digital marketing support.",
    value: "2nd floor, G-283, G Block, Sector 63, Noida, Chotpur, Uttar Pradesh 201309",
    href: "https://maps.google.com",
  },
];

function InfoCard({ card, index }: { card: (typeof CARDS)[0]; index: number }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });

  return (
    <motion.a
      ref={ref}
      href={card.href}
      target="_blank"
      rel="noreferrer"
      className="relative flex flex-col justify-between rounded-2xl overflow-hidden p-8 md:p-10 lg:aspect-square no-underline"
      style={{
        background: "#0f0f0f",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
      initial={{ opacity: 0, y: 48 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.65,
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.12,
      }}
      whileHover="hover"
    >
      {/* Hover accent fill - Slides up from bottom */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ background: ACCENT_COLOR, originY: 1 }}
        variants={{ hover: { scaleY: 1 }, initial: { scaleY: 0 } }}
        initial={{ scaleY: 0 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Icon Circle */}
      <motion.div
        className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center"
        style={{ background: ACCENT_COLOR }}
        variants={{ hover: { scale: 1.1, backgroundColor: "#fff" } }}
      >
        <motion.div
          variants={{ hover: { color: "#000" } }}
          className="text-white"
        >
          {card.icon}
        </motion.div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-4">
        <motion.p
          variants={{ hover: { color: "#000" } }}
          className="text-white/40 uppercase tracking-widest text-xs font-mono"
        >
          {card.tag}
        </motion.p>

        <motion.h3
          className="font-medium leading-[1.1] uppercase"
          style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", color: "#fff" }}
          variants={{ hover: { color: "#000" } }}
        >
          {card.value}
        </motion.h3>

        <motion.p
          className="text-sm leading-relaxed"
          style={{ color: "rgba(255,255,255,0.5)", maxWidth: "25ch" }}
          variants={{ hover: { color: "rgba(0,0,0,0.7)" } }}
        >
          {card.hint}
        </motion.p>
      </div>
    </motion.a>
  );
}

function Field({ as: Tag = "input", placeholder, ...props }: any) {
  return (
    <Tag
      className="w-full bg-white/5 border border-white/10 text-white text-sm outline-none rounded-xl px-5 py-4 focus:border-[#ba2c27] transition-colors resize-none"
      placeholder={placeholder}
      {...props}
    />
  );
}

export default function ContactSec() {
  return (
    <section className="relative w-full bg-black overflow-hidden px-6 py-20 md:py-32">
      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* INFO CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          {CARDS.map((card, i) => (
            <InfoCard key={i} card={card} index={i} />
          ))}
        </div>

        {/* FORM + MAP SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-stretch">
          {/* FORM CARD */}
          <div className="bg-[#0f0f0f] border border-white/10 rounded-xl md:rounded-[2.5rem] p-8 md:p-12">
            <form className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field placeholder="First Name" />
                <Field placeholder="Last Name" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field placeholder="Email Address" type="email" />
                <Field placeholder="Mobile Number" type="tel" />
              </div>
              <Field
                as="textarea"
                placeholder="How can we help you?"
                rows={5}
              />

              <motion.button
                whileHover={{
                  scale: 1.02,
                  backgroundColor: "#fff",
                  color: "#000",
                }}
                whileTap={{ scale: 0.98 }}
                className="mt-4 bg-[#ba2c27] text-white font-bold uppercase tracking-widest text-xs py-5 rounded-full flex items-center justify-center gap-2 transition-colors"
              >
                Send Message <ArrowUpRight size={18} />
              </motion.button>
            </form>
          </div>

          {/* MAP CARD */}
          <div className="bg-[#0f0f0f] border border-white/10 rounded-xl md:rounded-[2.5rem] overflow-hidden min-h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.2!2d77.3910!3d28.6270!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a9b5555555%3A0x0!2sG-283%2C+G+Block%2C+Sector+63%2C+Noida%2C+Uttar+Pradesh+201309!5e0!3m2!1sen!2sin!4v1000000000000"
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter: "invert(90%) hue-rotate(180deg) brightness(0.9)",
              }}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
