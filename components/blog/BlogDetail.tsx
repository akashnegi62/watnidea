"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, User, Eye, Folder, Heart } from "lucide-react";
import { BlogPost } from "@/data/blogs";
import LikeButton from "../blog/LikeButton";
import ReviewForm from "../blog/ReviewForm";

export default function BlogDetail({ post }: { post: BlogPost }) {
  return (
    <article className="flex flex-col gap-10">
      {/* Blog Image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative aspect-video rounded-4xl overflow-hidden border border-white/10"
      >
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Metadata */}
      <div className="flex flex-wrap items-center gap-6 text-white/40 text-xs font-bold uppercase tracking-widest pb-6 border-b border-white/10">
        <div className="flex items-center gap-2">
          <Calendar size={14} className="text-(--highlight)" />
          {post.date}
        </div>
        <div className="flex items-center gap-2">
          <User size={14} className="text-(--highlight)" />
          {post.author}
        </div>
        <div className="flex items-center gap-2">
          <Folder size={14} className="text-(--highlight)" />
          {post.category}
        </div>
        <div className="flex items-center gap-2">
          <Eye size={14} className="text-(--highlight)" />
          {post.views}
        </div>
        <div className="flex items-center gap-2">
          <Heart size={14} className="text-(--highlight)" />
          {post.likes}
        </div>
      </div>

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
        {post.title}
      </h1>

      {/* Content */}
      <div 
        className="blog-content prose prose-invert max-w-none text-white/70 text-lg leading-relaxed"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      <style jsx global>{`
        .blog-content h3 {
          color: white;
          font-size: 1.8rem;
          font-weight: 700;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }
        .blog-content h4 {
          color: white;
          font-size: 1.4rem;
          font-weight: 600;
          margin-top: 1.5rem;
          margin-bottom: 0.8rem;
        }
        .blog-content p {
          margin-bottom: 1.5rem;
        }
        .blog-content ul {
          margin-bottom: 1.5rem;
          list-style-type: disc;
          padding-left: 1.5rem;
        }
        .blog-content li {
          margin-bottom: 0.5rem;
        }
        .blog-content strong {
          color: white;
        }
      `}</style>

      {/* Like Button */}
      <div className="py-10 border-t border-white/10">
        <LikeButton count={post.likes} />
      </div>

      {/* Review Form */}
      <div className="py-10 border-t border-white/10">
        <ReviewForm />
      </div>
    </article>
  );
}
