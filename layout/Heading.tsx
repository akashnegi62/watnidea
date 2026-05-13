"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface HeadingProps {
  name: string;
  isService?: boolean;
}

export default function Heading({ name, isService }: HeadingProps) {
  return (
    <section className="relative w-full pt-40 pb-16 md:pt-64 md:pb-32 bg-black overflow-hidden flex flex-col items-center justify-center text-center px-6">
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full max-w-5xl"
      >
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tighter text-white mb-8 md:mb-10 leading-[1.1]">
          {name} {isService && "Service"}{" "}
          {!isService && (
            <span className="text-white block md:inline">
              <span className="text-(--highlight)">watNidea</span> The Identity
              Lab
            </span>
          )}
        </h1>

        <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-4 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-white/60">
          <Link
            href="/"
            className="hover:text-white transition-colors duration-300 flex items-center gap-2"
          >
            Home
          </Link>

          <div className="flex items-center justify-center opacity-30">
            <Image
              src="/Img/point_icon.svg"
              alt="separator"
              width={12}
              height={12}
              className="brightness-200"
            />
          </div>

          {isService && (
            <>
              <Link
                href="/services"
                className="hover:text-white transition-colors duration-300 flex items-center gap-2"
              >
                Our Services
              </Link>

              <div className="flex items-center justify-center opacity-30">
                <Image
                  src="/Img/point_icon.svg"
                  alt="separator"
                  width={12}
                  height={12}
                  className="brightness-200"
                />
              </div>
            </>
          )}

          <span className="text-(--highlight)">
            {name === "About" ? "About us" : name}
          </span>
        </div>
      </motion.div>

      {/* Decorative Line */}
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: "100%", opacity: 1 }}
        transition={{ delay: 0.5, duration: 1, ease: "circOut" }}
        className="absolute bottom-0 left-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent"
      />
    </section>
  );
}
