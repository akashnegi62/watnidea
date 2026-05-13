"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BLOG_POSTS } from "@/data/blogs";
import BlogCard from "./BlogCard";

const CATEGORIES = ["All", "Aura Architecture", "Uncategorized"];

export default function BlogGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts =
    activeCategory === "All"
      ? BLOG_POSTS
      : BLOG_POSTS.filter((post) => post.category === activeCategory);

  return (
    <section className="w-full bg-black py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-[1400px] mx-auto">
        {/* Header & Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              All Blogs
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 border ${
                  activeCategory === cat
                    ? "bg-(--highlight) border-(--highlight) text-white"
                    : "bg-transparent border-white/10 text-white/40 hover:border-white/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredPosts.map((post, i) => (
              <BlogCard key={post.id} post={post} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredPosts.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-white/40 uppercase tracking-widest text-sm">
              No posts found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
