import React from "react";
import { notFound } from "next/navigation";
import { BLOG_POSTS } from "@/data/blogs";
import BlogDetail from "@/components/blog/BlogDetail";
import BlogSidebar from "@/components/blog/BlogSidebar";
import BookBannerSec from "@/components/BookBannerSec";

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = BLOG_POSTS.find((p) => p.id === id);

  if (!post) {
    return notFound();
  }

  return (
    <main className="bg-black min-h-screen pt-32 pb-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Main Content Area */}
          <div className="lg:col-span-8">
            <BlogDetail post={post} />
          </div>

          {/* Sidebar Area */}
          <div className="lg:col-span-4">
            <BlogSidebar />
          </div>
        </div>
      </div>

      <BookBannerSec />
    </main>
  );
}
