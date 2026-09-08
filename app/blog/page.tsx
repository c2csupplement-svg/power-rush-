import BlogFooter from "@/components/BlogPage/BlogFooter";
import BlogGrid from "@/components/BlogPage/BlogGrid";
import BlogHero from "@/components/BlogPage/BlogHero";
import BlogPosts from "@/components/BlogPage/BlogPosts";
import BlogProgress from "@/components/BlogPage/BlogProgress";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-black">
      <BlogHero />
      <BlogPosts/>
      <BlogGrid />
      <BlogProgress/>
      <BlogFooter/>

    </main>
  );
}