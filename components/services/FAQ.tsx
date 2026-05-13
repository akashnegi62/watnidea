"use client";
import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Plus, Minus } from "lucide-react";
import { useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FAQ = ({ data }: { data?: any[] }) => {
  const defaultFAQ = [
    {
      q: "What is the difference between a logo and Aura Architecture?",
      a: "A logo is just a symbol; Aura Architecture is the entire visual and emotional ecosystem. It encompasses your brand's voice, typography, color psychology, and market positioning to create a 'Main Character' identity that feels essential, not just decorative.",
    },
    {
      q: "How long does the branding process take?",
      a: "Our typical 'Concept Lab' to 'Handover' process takes between 4 to 6 weeks. This ensures we have enough time for the 'Deep Dive' research phase, creative exploration, and rigorous stress-testing of your new identity across all platforms.",
    },
    {
      q: "Do I get files for social media?",
      a: "Yes, every brand identity package includes a comprehensive 'Brand Bible' and a full kit of social media assets. This includes optimized profile images, banner templates, and content style guides specifically designed for Instagram, LinkedIn, and X (Twitter).",
    },
  ];

  const items = data && data.length > 0 ? data : defaultFAQ;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-black text-white px-8 md:px-24 py-24">
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <motion.div
              animate={{ rotate: [0, 180, 360] }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              className="flex items-center justify-center select-none"
            >
              <Image
                src="/Img/point_icon.svg"
                alt="Point Icon"
                width={18}
                height={18}
              />
            </motion.div>
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-(--highlight)">
              FAQS
            </span>
          </div>
          <h2 className="text-5xl font-bold mb-8">
            Answers to your common{" "}
            <span className="text-(--highlight)">questions</span>
          </h2>
          <div className="flex items-center gap-4 bg-[#121417] border border-white/5 shadow-sm p-6 rounded-2xl w-fit">
            <span className="text-4xl font-bold text-(--highlight)">4.9</span>
            <div className="flex text-(--highlight)">
              <Star fill="currentColor" size={16} />
              <Star fill="currentColor" size={16} />
              <Star fill="currentColor" size={16} />
              <Star fill="currentColor" size={16} />
              <Star fill="currentColor" size={16} />
            </div>
            <span className="text-xs uppercase tracking-widest text-white/40 font-bold">
              Customer Reviews
            </span>
          </div>
        </div>
        <div className="space-y-4">
          {items.map((item, i) => (
            <div
              key={i}
              className={`bg-[#121417] border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 ${
                openIndex === i
                  ? "shadow-xl shadow-black/5"
                  : "hover:shadow-lg hover:shadow-black/5"
              }`}
            >
              <button
                onClick={() => toggleFAQ(i)}
                className="w-full p-6 flex justify-between items-center text-left transition-colors"
              >
                <span
                  className={`font-bold text-lg transition-colors ${openIndex === i ? "text-(--highlight)" : "group-hover:text-(--highlight)"}`}
                >
                  {item.q}
                </span>
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                    openIndex === i
                      ? "bg-(--highlight) text-white rotate-180"
                      : "bg-[#1C1C1C] text-white"
                  }`}
                >
                  {openIndex === i ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="px-6 pb-6 text-white/60 leading-relaxed border-t border-white/5 pt-4 mx-6">
                      {item.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
