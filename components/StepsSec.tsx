"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";

// Data
const steps = [
  {
    id: "discover",
    title: "1. Discover",
    description:
      "We start by learning about your business, your goals, your market, and your audience.",
    image: "/Img/strategy1.webp", // Replace with your actual image paths
  },
  {
    id: "plan",
    title: "2. Plan",
    description:
      "Then we build a smart approach tailored to what you want to achieve — whether it’s brand strategy, marketing plans, content direction, or a full website and campaign roadmap.",
    image: "/Img/strategy2.webp",
  },
  {
    id: "create",
    title: "3. Create",
    description:
      "Once the direction is set, we move into design, writing, development, video production, and campaign execution. Everything supports your brand properly.",
    image: "/Img/strategy3.webp",
  },
  {
    id: "launch",
    title: "4. Launch and Improve",
    description:
      "After launch, we check the results and keep refining. SEO, PPC, content, or performance marketing — we focus on steady, ongoing improvement.",
    image: "/Img/strategy4.webp",
  },
];

// 2. Image Block Component (Desktop Sticky Trigger)
const ImageBlock = ({
  src,
  alt,
  index,
  onVisible,
}: {
  src: string;
  alt: string;
  index: number;
  onVisible: (i: number) => void;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "-45% 0px -45% 0px" });

  useEffect(() => {
    if (isInView) {
      onVisible(index);
    }
  }, [isInView, index, onVisible]);

  return (
    <div
      ref={ref}
      className="h-[80vh] w-full flex items-center justify-center py-10"
    >
      <div className="relative w-full h-full max-w-2xl overflow-hidden rounded-2xl border border-white/5 bg-[#121417]">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={index === 0}
        />
      </div>
    </div>
  );
};

// 3. Main StepSec Component
export default function StepSec() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section
      id="how-it-works"
      className="relative min-h-screen w-full bg-black text-white py-0 lg:pt-10"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row px-6 md:px-12 relative py-12 md:py-0">
        {/* Left Side: Scrolling Images (Desktop Only) */}
        <div className="hidden md:block w-full md:w-1/2 pt-[12vh] pb-[10vh]">
          {steps.map((step, index) => (
            <ImageBlock
              key={step.id}
              src={step.image}
              alt={step.title}
              index={index}
              onVisible={setActiveIndex}
            />
          ))}
        </div>

        {/* Right Side: Sticky Content & Mobile Accordion */}
        <div className="w-full md:w-1/2 relative">
          <div className="md:sticky md:top-0 md:h-screen flex flex-col justify-center pl-0 md:pl-20 py-12 md:py-20">
            {/* Section Header */}
            <header className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  animate={{ rotate: [0, 180, 360] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                  className="flex items-center justify-center shrink-0"
                >
                  <Image
                    src="/Img/point_icon.svg"
                    alt="Icon"
                    width={20}
                    height={20}
                  />
                </motion.div>
                <p className="text-(--highlight) text-lg font-medium uppercase tracking-[0.3em]">
                  How it works
                </p>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-none tracking-tight mb-6">
                Step-by-Step guide <br /> to social <span className="text-(--highlight)">success</span>
              </h2>
              <p className="text-white text-md leading-relaxed max-w-md">
                We follow a structured system to move your brand from low
                visibility to consistent reach, engagement, and leads. From
                strategy and content creation to execution and scaling, every
                step is designed to deliver measurable growth. Our approach
                focuses on attracting the right audience, building trust, and
                converting attention into real business results.
              </p>
            </header>

            {/* Steps List */}
            <div className="flex flex-col gap-6">
              {steps.map((step, index) => {
                const isActive = index === activeIndex;

                return (
                  <div
                    key={step.id}
                    className="flex flex-col border-t border-white/5 first:border-none pt-6 first:pt-0"
                  >
                    {/* Title Button */}
                    <button
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      className={`text-left text-xl md:text-3xl font-medium transition-all duration-500 flex items-center justify-between ${
                        isActive ? "text-white" : "text-white/20"
                      }`}
                    >
                      {step.title}
                      <span
                        className={`md:hidden text-2xl transition-transform ${isActive ? "rotate-45" : ""}`}
                      >
                        +
                      </span>
                    </button>

                    {/* Expandable Content */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0, marginTop: 0 }}
                          animate={{
                            height: "auto",
                            opacity: 1,
                            marginTop: 16,
                          }}
                          exit={{ height: 0, opacity: 0, marginTop: 0 }}
                          transition={{
                            duration: 0.4,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="overflow-hidden"
                        >
                          <p className="text-white/60 text-base leading-relaxed max-w-md">
                            {step.description}
                          </p>

                          {/* MOBILE IMAGE: Details reveal on mobile/tablet */}
                          <div className="md:hidden relative w-full aspect-video mt-6 rounded-xl overflow-hidden bg-gray-100 shadow-xl">
                            <Image
                              src={step.image}
                              alt={step.title}
                              fill
                              className="object-cover"
                              sizes="100vw"
                            />
                            <div className="absolute top-0 right-0 bg-black/80 px-4 py-2 text-white text-[10px] font-bold uppercase tracking-widest">
                              {step.id}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
