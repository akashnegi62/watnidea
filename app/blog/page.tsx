import RecentPost from "@/components/blog/RecentPost";
import BlogGrid from "@/components/blog/BlogGrid";
import BlogContact from "@/components/blog/BlogContact";
import { BLOG_POSTS } from "@/data/blogs";
import BookBannerSec from "@/components/BookBannerSec";
import Heading from "@/layout/Heading";

export default function BlogPage() {
  const recentPost = BLOG_POSTS[0];

  return (
    <main className="bg-black min-h-screen">
      <Heading name="Blog" />
      <RecentPost post={recentPost} />
      <BlogGrid />
      <BlogContact />
      <BookBannerSec />
    </main>
  );
}
