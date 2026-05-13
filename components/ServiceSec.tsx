"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const SERVICES = [
  {
    title: "Aura Architecture",
    subTitle: "Branding",
    slug: "aura",
    description:
      "We define your brand soul, positioning, and visual DNA to create a powerful identity that stands out with purpose and clarity.",
  },
  {
    title: "The Digital HQ",
    subTitle: "Web Development",
    slug: "digital",
    description:
      "High-speed, conversion-focused websites that act as your 24/7 sales engine and digital headquarters.",
  },
  {
    title: "The Hype Engine",
    subTitle: "SMM",
    slug: "hype",
    description:
      "We engineer conversations, trends, and communities that turn your audience into a loyal brand tribe.",
  },
  {
    title: "Kinetic Studio",
    subTitle: "Video",
    slug: "kinetic",
    description:
      "Cinematic brand films, reels, and visual storytelling designed to capture instant attention and engagement.",
  },
  {
    title: "Growth Alchemy",
    subTitle: "Performance",
    slug: "growth",
    description:
      "Paid ads and funnel systems engineered to turn every rupee into predictable, scalable revenue.",
  },
  {
    title: "Synthetic Cinema",
    subTitle: "AI Ads",
    slug: "synthetic",
    description:
      "AI-powered cinematic ads that scale your brand storytelling at the speed of imagination.",
  },
  {
    title: "The Echo System",
    subTitle: "Omnichannel",
    slug: "echo",
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
      className="sticky top-0 min-h-[70vh] lg:min-h-[80vh] flex items-start justify-start pt-12 md:pt-20 lg:pt-24"
      style={{ marginTop: `calc(${index} * min(2vh, 20px))` }}
    >
      <motion.div
        ref={cardRef}
        style={{ scale }}
        className="bg-[#0e0e0f] w-full h-auto min-h-[50vh] rounded-4xl md:rounded-[3rem] p-8 md:p-12 lg:p-16 flex flex-col justify-center shadow-2xl border border-white/5 gap-10 md:gap-20"
      >
        <div>
          <h2 className="text-white text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-medium tracking-tighter leading-none">
            {service.title}
          </h2>
          <h3 className="text-white/30 text-2xl sm:text-3xl md:text-5xl xl:text-6xl font-medium tracking-tighter leading-none mt-2 md:mt-4">
            ({service.subTitle})
          </h3>
        </div>

        <div className="flex flex-col gap-8 md:gap-10">
          <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-6 xl:gap-8">
            <div className="flex items-start gap-3 md:gap-4 max-w-xl">
              <p className="text-white/70 text-base md:text-lg lg:text-xl leading-relaxed">
                {service.description}
              </p>
            </div>

            <Link
              href={`/services/${service.slug}`}
              className="group flex items-center gap-2 text-white font-medium text-base md:text-lg border-b border-white/20 pb-1 hover:border-white transition-all self-start xl:self-auto"
            >
              Read more
              <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default function ServiceSec() {
  return (
    <section className="bg-black px-4 sm:px-6 pt-20 md:pt-28 min-h-screen">
      <div className="px-2 sm:px-6">
        <div className="flex items-center gap-3 mb-4 md:mb-6">
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
          <p className="text-[#ba2c27] font-semibold uppercase tracking-[0.2em] text-sm md:text-lg mb-0">
            Services
          </p>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-[4.5rem] font-medium text-white tracking-tight leading-tight lg:leading-none">
          Our <span className="text-[#ba2c27]">Core</span> Services
        </h1>
      </div>

      <div className="flex flex-col justify-start mt-6 md:mt-8">
        {SERVICES.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>

      {/* Extra space at the bottom */}
      <div className="md:h-[30vh] lg:h-[40vh] 2xl:h-[10vh]" />
    </section>
  );
}
