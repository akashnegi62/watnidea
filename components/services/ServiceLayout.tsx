"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  ShieldCheck,
  Users,
  Brain,
  Plus,
  Star,
} from "lucide-react";
import AboutService from "./AboutService";
import { SERVICES_DATA } from "@/data/services";

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

const Services = ({ data }: { data: any[] }) => (
  <section
    id="services"
    className="min-h-screen bg-black text-white px-8 md:px-24 py-24"
  >
    <div className="flex justify-between items-end mb-20">
      <div>
        <span className="text-xs uppercase tracking-[0.3em] font-bold text-zinc-600 mb-4 block">
          * OUR SERVICES
        </span>
        <h2 className="text-5xl font-bold">What&apos;s Included</h2>
      </div>
      <button className="hidden md:flex items-center gap-2 text-sm uppercase tracking-widest border-b border-white pb-2 hover:opacity-50 transition">
        See All Services <ArrowUpRight size={16} />
      </button>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      {data.map((service, i) => (
        <div
          key={i}
          className="border border-zinc-800 p-10 hover:bg-zinc-900 transition group"
        >
          <div className="mb-8 text-zinc-500 group-hover:text-white transition">
            <service.icon />
          </div>
          <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
          <p className="text-zinc-400 leading-relaxed">{service.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

const Process = ({ data }: { data: any[] }) => (
  <section
    id="process"
    className="min-h-screen bg-white text-black px-8 md:px-24 py-24"
  >
    <div className="grid md:grid-cols-2 gap-24">
      <div>
        <span className="text-xs uppercase tracking-[0.3em] font-bold text-zinc-400 mb-4 block">
          * HOW WE WORK TOGETHER
        </span>
        <h2 className="text-6xl font-bold mb-8">
          Step-by-Step Guide to Brand Building
        </h2>
        <p className="text-zinc-500 max-w-md">
          Every step is designed to ensure clarity, consistency, and measurable
          growth.
        </p>
      </div>
      <div className="space-y-12">
        {data.map((step, i) => (
          <div key={i} className="flex gap-8 group">
            <span className="text-4xl font-light text-zinc-300 group-hover:text-black transition">
              {step.num}
            </span>
            <div>
              <h3 className="text-xl font-bold mb-2 uppercase tracking-tight">
                {step.title}
              </h3>
              <p className="text-zinc-500 leading-relaxed">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Results = ({ data }: { data: any[] }) => (
  <section className="bg-black text-white px-8 md:px-24 py-24">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
      {data.map((stat, i) => (
        <div key={i}>
          <div className="text-5xl font-bold mb-2">{stat.value}</div>
          <div className="text-xs uppercase tracking-widest text-zinc-500">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  </section>
);

const WhyChooseUs = () => (
  <section className="min-h-screen bg-white text-black px-8 md:px-24 py-24 flex items-center">
    <div className="w-full">
      <div className="mb-16">
        <span className="text-xs uppercase tracking-[0.3em] font-bold text-zinc-400 mb-4 block">
          * WHY CHOOSE WATNIDEA
        </span>
        <h2 className="text-5xl font-bold">Creative Growth Strategies</h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            title: "Aesthetic-First",
            icon: <Star />,
            desc: "We believe beauty is a competitive advantage.",
          },
          {
            title: "Future-Proofed",
            icon: <ShieldCheck />,
            desc: "We build identities that look as good in 2030 as today.",
          },
          {
            title: "Human-Centric",
            icon: <Users />,
            desc: "We design for people, not just algorithms.",
          },
          {
            title: "Cognitive Design",
            icon: <Brain />,
            desc: "We use psychological triggers for remembrance.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="p-8 border border-zinc-100 hover:border-black transition"
          >
            <div className="mb-6">{item.icon}</div>
            <h3 className="font-bold mb-3">{item.title}</h3>
            <p className="text-sm text-zinc-500 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section
    id="testimonials"
    className="bg-black text-white px-8 md:px-24 py-24"
  >
    <div className="mb-16">
      <span className="text-xs uppercase tracking-[0.3em] font-bold text-zinc-600 mb-4 block">
        * TESTIMONIALS
      </span>
      <h2 className="text-5xl font-bold">What Client Says</h2>
    </div>
    <div className="grid md:grid-cols-3 gap-8">
      {[
        {
          name: "Priya Mehta",
          role: "Co-Founder, UrbanGlow",
          quote:
            "The strategy and design approach gave our business a strong identity. Engagement has improved consistently.",
        },
        {
          name: "Amit Verma",
          role: "Director, Nexa Solutions",
          quote:
            "Working with WatNidea helped us position our brand clearly. Our messaging is now sharp and consistent.",
        },
        {
          name: "Sneha Kapoor",
          role: "Founder, LuxeSkin India",
          quote:
            "Their branding process is structured and result-driven. We achieved better visibility and stronger trust.",
        },
      ].map((t, i) => (
        <div key={i} className="bg-zinc-900 p-10 flex flex-col justify-between">
          <p className="text-lg italic text-zinc-300 mb-8">
            &quot;{t.quote}&quot;
          </p>
          <div>
            <div className="font-bold">{t.name}</div>
            <div className="text-xs text-zinc-500 uppercase tracking-widest">
              {t.role}
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const FAQ = () => (
  <section className="bg-white text-black px-8 md:px-24 py-24">
    <div className="grid md:grid-cols-2 gap-16">
      <div>
        <span className="text-xs uppercase tracking-[0.3em] font-bold text-zinc-400 mb-4 block">
          * FAQS
        </span>
        <h2 className="text-5xl font-bold mb-8">Common Questions</h2>
        <div className="flex items-center gap-4 bg-zinc-50 p-6">
          <span className="text-4xl font-bold">4.9</span>
          <div className="flex text-black">
            <Star fill="black" size={16} />
            <Star fill="black" size={16} />
            <Star fill="black" size={16} />
            <Star fill="black" size={16} />
            <Star fill="black" size={16} />
          </div>
          <span className="text-xs uppercase tracking-widest text-zinc-400">
            Customer Reviews
          </span>
        </div>
      </div>
      <div className="divide-y divide-zinc-200">
        {[
          "What is the difference between a logo and Aura Architecture?",
          "How long does the branding process take?",
          "Do I get files for social media?",
        ].map((q, i) => (
          <div
            key={i}
            className="py-6 flex justify-between items-center cursor-pointer group"
          >
            <span className="font-bold text-lg group-hover:translate-x-2 transition">
              {q}
            </span>
            <Plus size={20} />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default function ServiceLayout({ slug }: { slug: string }) {
  const data = SERVICES_DATA[slug];

  return (
    <main className="font-sans antialiased selection:bg-white selection:text-black bg-black">
      <Hero data={data.hero} />
      <AboutService data={data.about} />
      <Services data={data.included} />
      <Process data={data.process} />
      <Results data={data.stats} />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
    </main>
  );
}
