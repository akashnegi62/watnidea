"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, User } from "lucide-react";
import Link from "next/link";
import { BlogPost } from "@/data/blogs";

export default function RecentPost({ post }: { post: BlogPost }) {
  return (
    <section className="relative w-full min-h-[70vh] flex items-center pt-32 pb-20 px-6 md:px-12 lg:px-24 bg-black overflow-hidden">
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="px-4 py-1 rounded-full bg-(--highlight)/20 text-(--highlight) text-xs font-bold uppercase tracking-widest border border-(--highlight)/30">
              Recent Post
            </span>
            <div className="flex items-center gap-2 text-white text-xs font-medium uppercase tracking-widest">
              <Calendar size={14} />
              {post.date}
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-5xl font-bold text-white mb-8 leading-tight">
            {post.title}
          </h1>

          <p className="text-white text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
            {post.description}
          </p>

          <div className="flex items-center gap-6">
            <Link
              href={`/blog/${post.id}`}
              className="flex items-center gap-4 bg-(--highlight) hover:bg-white text-white hover:text-black px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest transition-all duration-500 group"
            >
              Read More
              <ArrowUpRight
                size={20}
                className="group-hover:rotate-45 transition-transform"
              />
            </Link>

            <div className="flex items-center gap-3 text-white">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                <User size={18} />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest">
                {post.author}
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative aspect-video lg:aspect-square rounded-4xl overflow-hidden group shadow-2xl border border-white/10"
        >
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-1000 group-hover:scale-110"
            priority
            loading="eager"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
