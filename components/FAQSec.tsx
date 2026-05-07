"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";

// Dummy data for the right side
const FAQS = [
  {
    question: "What does watNidea do?",
    answer:
      "watNidea is a full-service digital marketing agency offering branding, SEO, website development, social media marketing, content marketing, video production, and performance marketing.",
  },
  {
    question: "Do you work as a branding and marketing agency?",
    answer:
      "Yes — we combine branding, marketing, and growth systems into one unified approach.",
  },
  {
    question: "Can you build websites?",
    answer:
      "Yes. We build fast, modern, conversion-focused websites designed to grow your business.",
  },
  {
    question: "Do you run ads and campaigns?",
    answer:
      "Yes. We handle Google Ads, PPC, and performance marketing campaigns.",
  },
  {
    question: "Do you create content and videos?",
    answer:
      "Yes — we create content, reels, and high-quality video production for your brand.",
  },
];

// Reusable FAQ Item Component
const FAQItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="group border-b border-white/10 border-solid transition-colors duration-300 hover:bg-[#1C1C1C]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-6 px-4 md:px-6 focus:outline-none"
      >
        <span className="text-left text-lg md:text-xl font-medium text-white/90">
          {question}
        </span>

        <div className="relative w-6 h-6 ml-4 shrink-0 flex items-center justify-center">
          <motion.svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white/60 group-hover:text-white transition-colors"
            animate={{
              rotate: isOpen ? 0 : -45,
            }}
            whileHover={{
              rotate: 0,
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <path d="M12 5v14" />
            <path d="M19 12l-7 7-7-7" />
          </motion.svg>
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-4 md:px-6 pb-6 text-white/60 leading-relaxed text-base md:text-lg">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FAQSec() {
  return (
    <section className="w-full bg-black text-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        {/* LEFT COLUMN: Trust Score Box */}
        <div className="lg:col-span-4 flex flex-col">
          <div className="bg-[#141414] rounded-2xl p-8 md:p-12 flex flex-col justify-between min-h-[360px] border border-white/5 relative overflow-hidden group">
            {/* Background subtle glow effect */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 transition-opacity duration-500 group-hover:opacity-100 opacity-50" />

            {/* Top Content: Score & Stars */}
            <div className="flex flex-col gap-6 relative z-10">
              <span className="text-[5.5rem] font-medium leading-none tracking-tighter text-white">
                4.9
              </span>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-8 h-8 fill-(--highlight) text-(--highlight)"
                  />
                ))}
              </div>
            </div>

            {/* Bottom Content: Text */}
            <div className="relative z-10 mt-12">
              <p className="text-2xl md:text-3xl font-medium tracking-tight text-white/90 leading-snug">
                Explore our trust score & customer reviews
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: FAQ Headers & List */}
        <div className="lg:col-span-8 flex flex-col">
          {/* Section Headers */}
          <div className="mb-12 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Image
                src="/Img/point_icon.svg"
                alt="Point Icon"
                width={20}
                height={20}
              />
              <span className="text-[--highlight] font-bold tracking-[0.2em] uppercase text-lg">
                faqs
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-medium tracking-tight leading-[1.1] text-white uppercase mb-4">
              Answers to your
              <br />
              common questions
            </h2>
            <p className="text-white/60 text-lg md:text-xl max-w-2xl leading-relaxed">
              Find clear and concise answers to the most frequently asked
              questions about{" "}
              <span className="text-white font-medium">watNidea</span>&apos;s
              digital marketing services.
            </p>
          </div>

          {/* FAQ List */}
          <div className="flex flex-col border-t border-white/10 border-solid">
            {FAQS.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
