/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const Hero = ({ data }: { data: any }) => (
  <section className="min-h-screen bg-black text-white flex items-center px-8 md:px-24 pt-20">
    <div className="grid md:grid-cols-2 gap-16 items-center w-full max-w-7xl mx-auto">
      {/* LEFT CONTENT */}
      <div className="max-w-2xl order-2 md:order-1">
        <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-8 tracking-tighter">
          {data.titlePrimary}{" "}
          <span className="text-zinc-500">{data.titleSecondary}</span>
          <br />
          {data.titleThird}{" "}
          <span className="text-zinc-500">{data.titleFourth}</span>
        </h1>
        <p className="text-lg md:text-xl text-zinc-400 max-w-lg mb-12 leading-relaxed">
          {data.description}
        </p>
        <button className="group flex items-center gap-4 bg-white text-black px-8 py-4 rounded-full font-bold uppercase tracking-tighter hover:bg-zinc-200 transition-all">
          Get Started
          <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
        </button>
      </div>

      {/* RIGHT DYNAMIC IMAGE */}
      <div className="relative aspect-4/5 md:aspect-square w-full order-1 md:order-2">
        <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden border border-zinc-800 shadow-2xl">
          <Image
            src={data.heroImage || "/api/placeholder/800/800"}
            alt={`${data.titlePrimary} ${data.titleSecondary}`}
            fill
            className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out scale-105 hover:scale-100"
            priority
          />
          {/* Cinematic Overlay */}
          <div className="absolute inset-0 bg-linear-to-tr from-black/40 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Abstract decorative element (Optional - matches your neon/futuristic style) */}
        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-zinc-500/10 blur-3xl rounded-full -z-10" />
      </div>
    </div>
  </section>
);

export default Hero;
