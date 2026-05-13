"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Calendar } from "lucide-react";
import Link from "next/link";
import { BlogPost } from "@/data/blogs";

export default function BlogCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative flex flex-col bg-white/5 rounded-3xl overflow-hidden border border-white/10 hover:border-(--highlight)/50 transition-colors duration-500"
    >
      {/* Image Container */}
      <div className="relative aspect-3/2 overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest border border-white/10">
            {post.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col flex-1">
        <div className="flex items-center gap-2 text-white text-[10px] font-bold uppercase tracking-widest mb-4">
          <Calendar size={12} />
          {post.date}
        </div>

        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-(--highlight) transition-colors duration-300 line-clamp-2">
          {post.title}
        </h3>

        <p className="text-white text-sm leading-relaxed mb-8 line-clamp-3">
          {post.description}
        </p>

        <div className="mt-auto pt-6 border-t border-white/5">
          <Link
            href={`/blog/${post.id}`}
            className="flex items-center justify-between text-white font-bold uppercase tracking-widest text-[11px] group/link"
          >
            Read More
            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover/link:bg-(--highlight) group-hover/link:border-(--highlight) transition-all duration-300">
              <ArrowUpRight size={14} className="group-hover/link:scale-110" />
            </div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
