import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - OptiNext Studio",
  description: "Insights on Next.js development, performance optimization, and web development trends from OptiNext Studio.",
  openGraph: {
    title: "Blog - OptiNext Studio",
    description: "Insights on Next.js development, performance optimization, and web development trends from OptiNext Studio.",
    url: "https://optinext-studio.vercel.app/blog",
    siteName: "OptiNext Studio",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "OptiNext Studio Blog",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog - OptiNext Studio",
    description: "Insights on Next.js development, performance optimization, and web development trends from OptiNext Studio.",
    images: ["/logo.png"],
  },
};

export default function BlogPage() {
  const posts = [
    {
      title: "How to Achieve 95+ Lighthouse Score with Next.js",
      excerpt: "Learn the performance optimization techniques that helped our clients achieve blazing-fast load times...",
      date: "March 10, 2026",
      link: "#",
    },
    {
      title: "Why Bulgaria is Becoming a Hub for Next.js Development",
      excerpt: "Discover why EU-based startups are choosing Bulgarian developers for their web projects...",
      date: "February 28, 2026",
      link: "#",
    },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Blog Hero */}
      <section className="pt-32 pb-20 bg-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-5xl font-bold text-navy mb-8 text-center">
            Blog
          </h1>
          <p className="text-text/70 text-xl text-center max-w-2xl mx-auto">
            Insights on Next.js development, performance optimization, and building websites that convert.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {posts.map((post, index) => (
              <article 
                key={index} 
                className="bg-gray rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-sm text-cyan font-medium mb-3">
                  {post.date}
                </div>
                <h2 className="font-heading text-2xl font-bold text-navy mb-4">
                  {post.title}
                </h2>
                <p className="text-text/70 mb-6 text-lg">
                  {post.excerpt}
                </p>
                <Link
                  href={post.link}
                  className="inline-flex items-center text-green font-semibold hover:underline"
                >
                  Read More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
