"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, ShieldCheck, Users, Brain } from "lucide-react";
import { ProcessCard } from "./Process";

const WhyChooseUs = () => (
  <section className="min-h-screen bg-[#edf1f3] text-black px-8 md:px-24 py-24 flex items-center">
    <div className="w-full">
      <div className="mb-16">
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
            WHY CHOOSE WATNIDEA
          </span>
        </div>
        <h2 className="text-5xl font-bold">Creative Growth Strategies</h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          {
            title: "Aesthetic-First",
            icon: Star,
            desc: "We believe beauty is a competitive advantage.",
          },
          {
            title: "Future-Proofed",
            icon: ShieldCheck,
            desc: "We build identities that look as good in 2030 as today.",
          },
          {
            title: "Human-Centric",
            icon: Users,
            desc: "We design for people, not just algorithms.",
          },
          {
            title: "Cognitive Design",
            icon: Brain,
            desc: "We use psychological triggers for remembrance.",
          },
        ].map((item, i) => (
          <ProcessCard key={i} item={item} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
