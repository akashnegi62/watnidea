"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

export default function AboutIdentity() {
  return (
    <section className="bg-[#edf1f3] py-24 md:py-32 px-6 md:px-16 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        {/* HEADER SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-6">
              <motion.div
                animate={{ rotate: [0, 180, 360] }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              >
                <Image
                  src="/Img/point_icon.svg"
                  alt="Point Icon"
                  width={24}
                  height={24}
                />
              </motion.div>
              <p className="text-[#ba2c27] font-bold uppercase tracking-[0.3em] text-sm md:text-base">
                Who We Are
              </p>
            </div>

            <h2 className="text-5xl md:text-7xl lg:text-[6rem] font-medium text-[#121417] tracking-tight leading-[1.05] mb-12">
              What is <span className="text-[#ba2c27]">watNidea?</span>
            </h2>

            <div className="max-w-4xl">
              <p className="text-[#121417] text-xl md:text-3xl leading-snug font-medium mb-8">
                <span className="font-black">watNidea</span> (pronounced:
                What-an-idea!) is an{" "}
                <span className="text-[#ba2c27]">Identity Lab</span>. We sit at
                the intersection of cultural intuition and algorithmic
                precision.
              </p>
              <p className="text-[#121417]/70 text-lg md:text-xl leading-relaxed">
                We realized that traditional agencies were too slow and
                freelancers were too scattered, so we built the
                &quot;Un-Agency.&quot; We are a collective of designers,
                developers, and growth hackers obsessed with one thing: making
                your brand the Main Character.
              </p>
            </div>
          </div>

          <div className="lg:col-span-4 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              className="relative w-full aspect-square md:aspect-4/5 rounded-4xl md:rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white"
            >
              <Image
                src="/Img/identity1.webp"
                alt="Who We Are"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>

        {/* CARDS SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="bg-white p-10 md:p-16 rounded-[3rem] shadow-sm border border-black/5 flex flex-col gap-8 group"
          >
            <div className="w-16 h-16 bg-[#ba2c27] rounded-2xl flex items-center justify-center text-white shadow-lg shadow-[#ba2c27]/20 group-hover:scale-110 transition-transform">
              <Target size={32} />
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-black text-[#121417] mb-6 tracking-tight">
                Our Mission.
              </h3>
              <p className="text-[#121417]/70 text-lg md:text-xl leading-relaxed">
                To transform brands into cultural signals — blending high-end
                aesthetics with performance-driven systems that convert
                attention into authority and revenue.
              </p>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -10 }}
            className="bg-[#121417] p-10 md:p-16 rounded-[3rem] shadow-2xl text-white flex flex-col gap-8 group"
          >
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-[#121417] shadow-lg shadow-white/10 group-hover:scale-110 transition-transform">
              <Eye size={32} />
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-black mb-6 tracking-tight">
                Our Vision.
              </h3>
              <p className="text-white/70 text-lg md:text-xl leading-relaxed">
                To become the global Identity Lab that defines how modern brands
                are built — where creativity, technology, and culture merge to
                shape the future of business.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
