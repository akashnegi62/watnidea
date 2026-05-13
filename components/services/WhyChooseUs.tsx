/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Star, ShieldCheck, Users, Brain, ArrowUpRight } from "lucide-react";
import { ProcessCard } from "./Process";

const WhyChooseUs = ({ data }: { data?: any[] }) => {
  const defaultData = [
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
  ];

  const items = data && data.length > 0 ? data : defaultData;

  return (
    <section className="min-h-[50vh] bg-black text-white px-8 md:px-24 py-24 flex items-center">
      <div className="w-full">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
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
                WHY CHOOSE WATNIDEA
              </span>
            </div>
            <h2 className="text-5xl font-bold text-white">
              Creative <span className="text-(--highlight)">Growth</span> Strategies
            </h2>
          </div>
          <Link
            href="/contact"
            className="flex items-center gap-2 text-sm uppercase tracking-widest border-b border-white pb-2 hover:opacity-50 transition shrink-0 text-white"
          >
            Contact us <ArrowUpRight size={16} />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item, i) => (
            <ProcessCard key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
