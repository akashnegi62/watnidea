"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BLOG_POSTS } from "@/data/blogs";
import { Search, FolderOpen } from "lucide-react";

export default function BlogSidebar() {
  const recentPosts = BLOG_POSTS.slice(0, 5);
  const categories = [
    {
      name: "Aura Architecture",
      count: BLOG_POSTS.filter((p) => p.category === "Aura Architecture")
        .length,
    },
    {
      name: "Uncategorized",
      count: BLOG_POSTS.filter((p) => p.category === "Uncategorized").length,
    },
  ];

  return (
    <aside className="flex flex-col gap-12 sticky top-32">
      {/* Search Bar */}
      <div className="relative group">
        <input
          type="text"
          placeholder="Search Blogs..."
          className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 pl-12 text-white text-sm outline-none focus:border-(--highlight) transition-all"
        />
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white group-focus-within:text-(--highlight) transition-colors"
        />
      </div>

      {/* Recent Posts Section */}
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-3">
          <h3 className="text-xl font-bold text-white uppercase tracking-wider">
            All Posts
          </h3>
        </div>

        <div className="flex flex-col gap-6">
          {recentPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              className="flex items-center gap-4 group"
            >
              <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0 border border-white/10">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="80px"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] text-(--highlight) font-bold uppercase tracking-widest">
                  {post.date}
                </span>
                <h4 className="text-white text-sm font-bold line-clamp-2 group-hover:text-(--highlight) transition-colors leading-tight">
                  {post.title}
                </h4>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Categories Section */}
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-3">
          <h3 className="text-xl font-bold text-white uppercase tracking-wider">
            Categories
          </h3>
        </div>

        <div className="flex flex-col gap-2">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              href="/blog"
              className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 hover:border-(--highlight) hover:bg-white/10 transition-all group"
            >
              <div className="flex items-center gap-3">
                <FolderOpen size={16} className="text-(--highlight)" />
                <span className="text-white text-sm font-medium uppercase tracking-widest">
                  {cat.name}
                </span>
              </div>
              <span className="text-white/40 text-xs font-bold bg-white/5 px-2 py-1 rounded-md group-hover:bg-(--highlight) group-hover:text-white transition-all">
                {cat.count}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}
