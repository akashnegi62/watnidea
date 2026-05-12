"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Plus } from "lucide-react";

const FAQ = () => (
  <section className="bg-[#edf1f3] text-black px-8 md:px-24 py-24">
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
        <h2 className="text-5xl font-bold mb-8">Common Questions</h2>
        <div className="flex items-center gap-4 bg-white border border-black/5 shadow-sm p-6 rounded-2xl w-fit">
          <span className="text-4xl font-bold text-(--highlight)">4.9</span>
          <div className="flex text-(--highlight)">
            <Star fill="currentColor" size={16} />
            <Star fill="currentColor" size={16} />
            <Star fill="currentColor" size={16} />
            <Star fill="currentColor" size={16} />
            <Star fill="currentColor" size={16} />
          </div>
          <span className="text-xs uppercase tracking-widest text-black/40 font-bold">
            Customer Reviews
          </span>
        </div>
      </div>
      <div className="space-y-4">
        {[
          "What is the difference between a logo and Aura Architecture?",
          "How long does the branding process take?",
          "Do I get files for social media?",
        ].map((q, i) => (
          <div
            key={i}
            className="p-6 bg-white border border-black/5 rounded-2xl flex justify-between items-center cursor-pointer group hover:shadow-xl hover:shadow-black/5 transition-all duration-300"
          >
            <span className="font-bold text-lg group-hover:text-(--highlight) transition-colors">
              {q}
            </span>
            <div className="w-10 h-10 rounded-full bg-[#edf1f3] group-hover:bg-(--highlight) group-hover:text-white flex items-center justify-center transition-all">
              <Plus size={20} />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FAQ;
