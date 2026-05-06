"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, ArrowUpRight } from "lucide-react";

const SERVICES = [
  {
    title: "Aura Architecture",
    subTitle: "Branding",
    description:
      "We define your brand soul, positioning, and visual DNA to create a powerful identity that stands out with purpose and clarity.",
    tags: ["Brand Soul", "Positioning", "Visual DNA", "Identity"],
  },
  {
    title: "The Digital HQ",
    subTitle: "Web Development",
    description:
      "High-speed, conversion-focused websites that act as your 24/7 sales engine and digital headquarters.",
    tags: ["High-Speed", "Conversion", "Sales Engine", "HQ"],
  },
  {
    title: "The Hype Engine",
    subTitle: "SMM",
    description:
      "We engineer conversations, trends, and communities that turn your audience into a loyal brand tribe.",
    tags: ["Conversations", "Trends", "Community", "Brand Tribe"],
  },
  {
    title: "Kinetic Studio",
    subTitle: "Video",
    description:
      "Cinematic brand films, reels, and visual storytelling designed to capture instant attention and engagement.",
    tags: ["Brand Films", "Reels", "Storytelling", "Engagement"],
  },
  {
    title: "Growth Alchemy",
    subTitle: "Performance",
    description:
      "Paid ads and funnel systems engineered to turn every rupee into predictable, scalable revenue.",
    tags: ["Paid Ads", "Funnels", "Scalable", "Revenue"],
  },
  {
    title: "Synthetic Cinema",
    subTitle: "AI Ads",
    description:
      "AI-powered cinematic ads that scale your brand storytelling at the speed of imagination.",
    tags: ["AI-Powered", "Cinematic", "Scaling", "Storytelling"],
  },
  {
    title: "The Echo System",
    subTitle: "Omnichannel",
    description:
      "SEO, AEO, and content systems that make your brand visible everywhere your audience exists.",
    tags: ["SEO", "AEO", "Content Systems", "Visibility"],
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
      style={{ paddingTop: `${index * 40}px` }}
    >
      <motion.div
        ref={cardRef}
        style={{ scale }}
        className="bg-black w-full h-[60vh] rounded-[3rem] p-12 md:p-16 flex flex-col justify-between shadow-2xl border border-white/5"
      >
        {/* Top Content */}
        <div>
          <h2 className="text-white text-6xl md:text-8xl font-bold tracking-tighter leading-none">
            {service.title}
          </h2>
          <h3 className="text-white/30 text-5xl md:text-7xl font-bold tracking-tighter leading-none mt-2">
            ({service.subTitle})
          </h3>
        </div>

        {/* Bottom Content */}
        <div className="flex flex-col gap-10">
          <div className="flex flex-wrap gap-2">
            {service.tags.map((tag: string) => (
              <span
                key={tag}
                className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white/60 text-xs uppercase tracking-widest"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="flex items-start gap-4 max-w-xl">
              <Sparkles className="text-white mt-1 shrink-0 w-6 h-6 opacity-40" />
              <p className="text-white/70 text-xl leading-relaxed">
                {service.description}
              </p>
            </div>

            <button className="group flex items-center gap-2 text-white font-medium text-lg border-b border-white/20 pb-1 hover:border-white transition-all">
              read more
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default function ServiceSec() {
  return (
    <section className="bg-[#edf1f3] pl-6 pr-6 py-32 min-h-screen">
      {/* Services Header */}
      <div className="mb-24">
        <p className="text-gray-400 font-semibold uppercase tracking-[0.2em] mb-8 text-sm">
          Services
        </p>
        <h1 className="text-5xl md:text-[5.5rem] font-bold text-[#121417] tracking-tight leading-none">
          We are an <span className="text-(--highlight)">unusual</span> digital
          agency focusing on transforming your vision into a captivating digital
          experience.
        </h1>
      </div>

      {/* Stacking Cards */}
      <div className="flex flex-col">
        {SERVICES.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>

      {/* Extra space at the bottom */}
      <div className="h-[30vh]" />
    </section>
  );
}
