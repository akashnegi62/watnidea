"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const SERVICES = [
  {
    title: "Aura Architecture",
    subTitle: "Branding",
    description:
      "We define your brand soul, positioning, and visual DNA to create a powerful identity that stands out with purpose and clarity.",
  },
  {
    title: "The Digital HQ",
    subTitle: "Web Development",
    description:
      "High-speed, conversion-focused websites that act as your 24/7 sales engine and digital headquarters.",
  },
  {
    title: "The Hype Engine",
    subTitle: "SMM",
    description:
      "We engineer conversations, trends, and communities that turn your audience into a loyal brand tribe.",
  },
  {
    title: "Kinetic Studio",
    subTitle: "Video",
    description:
      "Cinematic brand films, reels, and visual storytelling designed to capture instant attention and engagement.",
  },
  {
    title: "Growth Alchemy",
    subTitle: "Performance",
    description:
      "Paid ads and funnel systems engineered to turn every rupee into predictable, scalable revenue.",
  },
  {
    title: "Synthetic Cinema",
    subTitle: "AI Ads",
    description:
      "AI-powered cinematic ads that scale your brand storytelling at the speed of imagination.",
  },
  {
    title: "The Echo System",
    subTitle: "Omnichannel",
    description:
      "SEO, AEO, and content systems that make your brand visible everywhere your audience exists.",
  },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ServiceCard = ({ service, index }: { service: any; index: number }) => {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <div
      className="sticky top-0 h-screen flex items-center justify-start"
      style={{ paddingTop: `calc(${index} * min(4vh, 40px))` }}
    >
      <motion.div
        ref={cardRef}
        style={{ scale }}
        className="bg-black w-full h-auto min-h-[50vh] rounded-4xl md:rounded-[3rem] p-8 md:p-12 lg:p-16 flex flex-col justify-center shadow-2xl border border-white/5 gap-10 md:gap-20"
      >
        {/* Top Content */}
        <div>
          {/* Responsive Text Sizes */}
          <h2 className="text-white text-4xl sm:text-5xl md:text-7xl xl:text-8xl font-medium tracking-tighter leading-none">
            {service.title}
          </h2>
          <h3 className="text-white/30 text-3xl sm:text-4xl md:text-6xl xl:text-7xl font-medium tracking-tighter leading-none mt-2 md:mt-4">
            ({service.subTitle})
          </h3>
        </div>

        {/* Bottom Content */}
        <div className="flex flex-col gap-8 md:gap-10">
          <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-6 xl:gap-8">
            <div className="flex items-start gap-3 md:gap-4 max-w-xl">
              <p className="text-white/70 text-base md:text-lg lg:text-xl leading-relaxed">
                {service.description}
              </p>
            </div>

            <button className="group flex items-center gap-2 text-white font-medium text-base md:text-lg border-b border-white/20 pb-1 hover:border-white transition-all self-start xl:self-auto">
              Read more
              <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default function ServiceSec() {
  return (
    <section className="bg-[#edf1f3] px-4 sm:px-6 pt-24 md:pt-32 min-h-screen">
      {/* Services Header */}
      <div className="px-2 sm:px-6">
        <div className="flex items-center gap-3 mb-6 md:mb-8">
          <motion.div
            animate={{ rotate: [0, 180, 360] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          >
            <Image
              src="/Img/point_icon.svg"
              alt="Point Icon"
              width={24}
              height={24}
              className="w-5 h-5 md:w-6 md:h-6"
            />
          </motion.div>
          <p className="text-(--highlight) font-semibold uppercase tracking-[0.2em] text-sm md:text-lg mb-0">
            Services
          </p>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5.5rem] font-medium text-[#121417] tracking-tight leading-tight lg:leading-none">
          Our <span className="text-(--highlight)">Core</span> Services
        </h1>
      </div>

      {/* Stacking Cards */}
      <div className="flex flex-col mt-12 md:mt-0">
        {SERVICES.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>

      {/* Extra space at the bottom */}
      <div className="h-[20vh] md:h-[30vh]" />
    </section>
  );
}
