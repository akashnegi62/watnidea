"use client";

import React from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function InputField({ placeholder, type = "text", as = "input" }: { placeholder: string; type?: string; as?: any }) {
  const Component = as;
  return (
    <div className="flex flex-col gap-2 w-full">
      <Component
        type={type}
        placeholder={placeholder}
        rows={as === "textarea" ? 4 : undefined}
        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white text-sm outline-none focus:border-(--highlight) focus:bg-white/8 transition-all duration-300 resize-none"
      />
    </div>
  );
}

export default function BlogContact() {
  return (
    <section className="w-full bg-black py-24 px-6 md:px-12 lg:px-24 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-16 items-start">
          {/* Text Side */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <span className="text-(--highlight) text-xs font-bold uppercase tracking-[0.4em]">
              Connect
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Have a Project <br /> in Mind?
            </h2>
            <p className="text-white text-lg leading-relaxed">
              We don&apos;t just build brands - we architect Aura. Reach out to see how we can transform your digital identity.
            </p>
            
            <div className="mt-8 flex flex-col gap-4">
              <div className="flex flex-col">
                <span className="text-(--highlight) text-[10px] font-bold uppercase tracking-widest mb-1">Email us</span>
                <span className="text-white font-medium">info@watnidea.com</span>
              </div>
              <div className="flex flex-col">
                <span className="text-(--highlight) text-[10px] font-bold uppercase tracking-widest mb-1">Call us</span>
                <span className="text-white font-medium">+91 8354811162</span>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-3 bg-[#0a0a0a] border border-white/10 rounded-3xl  md:rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-(--highlight)/10 blur-3xl rounded-full -mr-16 -mt-16" />
            
            <form className="relative z-10 flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <InputField placeholder="Full Name" />
                <InputField placeholder="Email Address" type="email" />
              </div>
              <InputField placeholder="Mobile Number" type="tel" />
              <InputField placeholder="Your Message" as="textarea" />

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-4 w-full bg-(--highlight) hover:bg-white text-white hover:text-black py-5 rounded-full font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-3 transition-all duration-500 shadow-lg shadow-(--highlight)/20"
              >
                Send Message
                <Send size={16} />
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
