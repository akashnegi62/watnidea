"use client";
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

//  Contact info cards data
const CARDS = [
  {
    icon: (color?: string) => (
      <Mail color={color} size={26} strokeWidth={1.5} />
    ),
    hint: "Email us today for content, strategy, and growth support.",
    value: "info@watnidea.com",
    href: "mailto:info@watnidea.com",
  },
  {
    icon: (color?: string) => (
      <Phone color={color} size={26} strokeWidth={1.5} />
    ),
    hint: "Contact us to elevate your brand and build stronger digital visibility.",
    value: "+91 8354811162",
    href: "tel:+918354811162",
    featured: true,
  },
  {
    icon: (color?: string) => (
      <MapPin color={color} size={26} strokeWidth={1.5} />
    ),
    hint: "Visit or call us for personalized digital marketing support.",
    value:
      "2nd floor, G-283, G Block, Sector 63, Noida, Chotpur, Uttar Pradesh 201309",
    href: "https://maps.google.com/?q=G-283,+G+Block,+Sector+63,+Noida",
  },
];

//  Info card
function InfoCard({ card, index }: { card: (typeof CARDS)[0]; index: number }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.a
      ref={ref}
      href={card.href}
      target={card.href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.13,
        ease: [0.22, 1, 0.36, 1],
      }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className={`relative flex flex-col items-center text-center gap-6
                  rounded-2xl p-8 border overflow-hidden cursor-pointer
                  transition-all duration-500 no-underline
                  ${
                    card.featured
                      ? "border-white/20 bg-[#111111]"
                      : "border-white/[0.07] bg-[#080808]"
                  }`}
      style={{
        boxShadow: hovered
          ? card.featured
            ? "0 0 60px rgba(255,255,255,0.05), 0 24px 48px rgba(0,0,0,0.4)"
            : "0 0 40px rgba(255,255,255,0.03), 0 20px 40px rgba(0,0,0,0.3)"
          : "0 8px 24px rgba(0,0,0,0.25)",
      }}
    >
      {/* Top shimmer on hover */}
      <motion.div
        animate={{ scaleX: hovered ? 1 : 0, opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        style={{ originX: 0.5 }}
        className="absolute top-0 left-0 right-0 h-[1.5px]
                   bg-linear-to-r from-transparent via-white to-transparent"
      />

      {/* Icon circle */}
      <motion.div
        animate={hovered ? { scale: 1.1, rotate: 8 } : { scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 280, damping: 18 }}
        className="w-16 h-16 rounded-full flex items-center justify-center shrink-0 bg-white"
      >
        {card.icon("black")}
      </motion.div>

      <p className="text-white/45 text-sm leading-relaxed">{card.hint}</p>

      <motion.div
        animate={{ color: hovered ? "white" : "white/80" }}
        transition={{ duration: 0.3 }}
        className="font-bold text-base underline underline-offset-4
                   decoration-white/20 leading-snug"
      >
        {card.value}
      </motion.div>

      {/* featured dot pulse */}
      {card.featured && (
        <motion.div
          animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-2 h-2 rounded-full bg-white"
        />
      )}
    </motion.a>
  );
}

//  Form field
function Field({
  as: Tag = "input",
  placeholder,
  type = "text",
  className = "",
  ...props
}: {
  as?: "input" | "textarea";
  placeholder: string;
  type?: string;
  className?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}) {
  const [focused, setFocused] = useState(false);
  return (
    <div className="relative">
      <Tag
        type={Tag === "input" ? type : undefined}
        placeholder={placeholder}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={`w-full bg-white/4 border text-white text-sm
                    placeholder:text-white/25 outline-none rounded-xl px-5 py-4
                    transition-colors duration-300 resize-none
                    ${focused ? "border-white/40" : "border-white/8"}
                    ${className}`}
        {...props}
      />
      <motion.div
        animate={{ scaleX: focused ? 1 : 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        style={{ originX: 0 }}
        className="absolute bottom-0 left-0 right-0 h-[1.5px] rounded-b-xl
                   bg-linear-to-r from-white/40 to-white/10"
      />
    </div>
  );
}

//  Main ─
export default function ContactSec() {
  const outerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });
  const formInView = useInView(formRef, { once: true, margin: "-60px" });
  const mapInView = useInView(mapRef, { once: true, margin: "-60px" });

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({
      firstName: "",
      lastName: "",
      mobile: "",
      email: "",
      message: "",
    });
  }

  return (
    <section
      ref={outerRef}
      className="relative w-full bg-black overflow-hidden py-24 md:py-32"
    >
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16">
        {/* HEADER */}
        <div
          ref={headerRef}
          className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-end mb-6"
        >
          <div>
            {/* eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={headerInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2.5 mb-6"
            >
              <motion.div
                animate={{ rotate: [0, 180, 360] }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              >
                <Image
                  src="/Img/point_icon.svg"
                  alt="Point Icon"
                  width={20}
                  height={20}
                  className="md:w-6 md:h-6"
                />
              </motion.div>
              <span className="text-white/40 text-[11px] font-bold uppercase tracking-[0.3em]">
                Contact Us
              </span>
            </motion.div>

            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "110%" }}
                animate={headerInView ? { y: "0%" } : {}}
                transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white
                           leading-[1.04] tracking-tight"
              >
                Get in <span className="text-(--highlight)">touch</span> with us
              </motion.h2>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.22 }}
            className="text-white/40 text-sm leading-relaxed max-w-xs hidden md:block"
          >
            Connect with <span className="text-white">watNidea</span> for
            tailored digital marketing solutions that elevate your brand, engage
            your audience, and drive results.
          </motion.p>
        </div>

        {/* divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={headerInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
          style={{ originX: 0 }}
          className="h-px bg-white/[0.07] mb-14"
        />

        {/*  INFO CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {CARDS.map((card, i) => (
            <InfoCard key={i} card={card} index={i} />
          ))}
        </div>

        {/*  FORM + MAP GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-4">
          {/* FORM */}
          <motion.div
            ref={formRef}
            initial={{ opacity: 0, y: 36 }}
            animate={formInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-2xl border border-white/[0.07] bg-[#080808] p-8 md:p-10"
          >
            {/* top shimmer */}
            <div
              className="absolute top-0 left-8 right-8 h-px
                            bg-linear-to-r from-transparent via-white/20 to-transparent"
            />

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* row 1 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field
                  as="input"
                  placeholder="First name"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                />
                <Field
                  as="input"
                  placeholder="Last name"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                />
              </div>
              {/* row 2 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field
                  as="input"
                  placeholder="Enter your mobile no."
                  name="mobile"
                  type="tel"
                  value={form.mobile}
                  onChange={handleChange}
                />
                <Field
                  as="input"
                  placeholder="Enter your e-mail"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
              {/* textarea */}
              <Field
                as="textarea"
                placeholder="Write message..."
                name="message"
                value={form.message}
                onChange={handleChange}
                className="min-h-[140px]"
              />

              {/* submit */}
              <div className="flex items-center gap-0 mt-2">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-0 group"
                >
                  <span
                    className="bg-white/10 hover:bg-white/15 text-white font-bold
                                   text-sm px-7 py-4 rounded-full tracking-wide
                                   transition-colors duration-300"
                  >
                    <AnimatePresence mode="wait" initial={false}>
                      {submitted ? (
                        <motion.span
                          key="ok"
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -6 }}
                          className="text-white"
                        >
                          ✓ Message Sent!
                        </motion.span>
                      ) : (
                        <motion.span
                          key="send"
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -6 }}
                        >
                          Submit Message
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </span>
                  <motion.span
                    animate={
                      submitted
                        ? { backgroundColor: "#16a34a" }
                        : { backgroundColor: "white" }
                    }
                    transition={{ duration: 0.4 }}
                    className="w-12 h-12 rounded-full flex items-center
                               justify-center ml-2 shrink-0"
                  >
                    <AnimatePresence mode="wait" initial={false}>
                      {submitted ? (
                        <motion.svg
                          key="check"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          initial={{ scale: 0, rotate: -90 }}
                          animate={{ scale: 1, rotate: 0 }}
                          exit={{ scale: 0 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <path
                            d="M3 8l3.5 3.5L13 4"
                            stroke="white"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </motion.svg>
                      ) : (
                        <motion.div
                          key="arrow"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                        >
                          <ArrowUpRight
                            color="black"
                            size={16}
                            strokeWidth={1.8}
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.span>
                </motion.button>
              </div>
            </form>
          </motion.div>

          {/* MAP */}
          <motion.div
            ref={mapRef}
            initial={{ opacity: 0, y: 36 }}
            animate={mapInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.75,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative rounded-2xl border border-white/[0.07] overflow-hidden
                       min-h-[420px] bg-[#080808]"
          >
            {/* Map label overlay */}
            <div
              className="absolute top-4 left-4 z-10 bg-[#080808]/90 backdrop-blur-sm
                            border border-white/10 rounded-xl px-4 py-3"
            >
              <p className="text-white font-bold text-sm">G-283</p>
              <p className="text-white/45 text-xs mt-0.5 max-w-[180px] leading-snug">
                G Block, Sector 63, Noida,
                <br />
                Chotpur, Uttar Pradesh 201309
              </p>
            </div>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.2!2d77.3910!3d28.6270!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a9b5555555%3A0x0!2sG-283%2C+G+Block%2C+Sector+63%2C+Noida%2C+Uttar+Pradesh+201309!5e0!3m2!1sen!2sin!4v1000000000000"
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter:
                  "invert(90%) hue-rotate(180deg) brightness(0.85) contrast(0.95)",
                minHeight: "420px",
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="watNidea Office Location"
            />

            {/* bottom gradient overlay */}
            <div
              className="absolute bottom-0 left-0 right-0 h-16
                            bg-linear-to-t from-[#080808]/60 to-transparent pointer-events-none"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
