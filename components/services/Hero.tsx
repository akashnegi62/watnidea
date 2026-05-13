/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const Hero = ({ data }: { data: any }) => (
  <section className="bg-black text-white flex items-center px-6 md:px-24 py-16 md:py-24">
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full max-w-7xl mx-auto">
      {/* LEFT CONTENT */}
      <div className="max-w-2xl order-2 lg:order-1 text-center lg:text-left">
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-(--highlight) font-bold leading-tight mb-6 md:mb-8 tracking-tighter">
          {data.titlePrimary}{" "}
          <span className="text-white">{data.titleSecondary}</span>
          <br className="hidden md:block" />
          {data.titleThird}{" "}
          <span className="text-white">{data.titleFourth}</span>
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-white/80 max-w-lg mb-10 md:mb-12 leading-relaxed mx-auto lg:mx-0">
          {data.description}
        </p>
        <div className="flex justify-center lg:justify-start">
          <button className="group flex items-center gap-4 bg-white text-black px-8 py-4 rounded-full font-bold uppercase tracking-tighter hover:bg-zinc-200 transition-all">
            Get Started
            <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
          </button>
        </div>
      </div>

      {/* RIGHT DYNAMIC IMAGE */}
      <div className="relative aspect-square md:aspect-video lg:aspect-4/5 w-full order-1 lg:order-2">
        <div className="relative w-full h-full rounded-3xl md:rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl">
          <Image
            src={data.heroImage || "/api/placeholder/800/800"}
            alt={`${data.titlePrimary} ${data.titleSecondary}`}
            fill
            className="object-cover transition-all duration-1000 ease-in-out scale-105 hover:scale-100"
            priority
          />
          {/* Cinematic Overlay */}
          <div className="absolute inset-0 bg-linear-to-tr from-black/40 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Abstract decorative element */}
        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-(--highlight)/10 blur-3xl rounded-full -z-10" />
      </div>
    </div>
  </section>
);

export default Hero;
