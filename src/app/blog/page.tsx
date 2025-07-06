"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
}

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  
  const categories = ["all", "technology", "design", "business", "ai"];
  
  const blogPosts: BlogPost[] = [
    {
      id: "web-dev-trends-2023",
      title: "Top Web Development Trends for 2023",
      excerpt: "Discover the latest technologies and methodologies shaping the future of web development.",
      category: "technology",
      date: "May 12, 2023",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
    },
    {
      id: "ui-design-principles",
      title: "Essential UI Design Principles Every Developer Should Know",
      excerpt: "Learn how to create visually appealing and user-friendly interfaces with these fundamental principles.",
      category: "design",
      date: "April 28, 2023",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
    },
    {
      id: "ai-business-transformation",
      title: "How AI is Transforming Business Operations",
      excerpt: "Explore the ways artificial intelligence is revolutionizing how companies operate and make decisions.",
      category: "ai",
      date: "June 3, 2023",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1677442135736-088d03deff17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
    },
    {
      id: "startup-funding-guide",
      title: "A Complete Guide to Startup Funding",
      excerpt: "Everything founders need to know about securing funding for their startups at different growth stages.",
      category: "business",
      date: "May 18, 2023",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
    },
    {
      id: "mobile-first-design",
      title: "Mobile-First Design: Best Practices",
      excerpt: "Why prioritizing mobile experiences leads to better overall user experiences and how to implement it.",
      category: "design",
      date: "June 10, 2023",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1609921141835-710b7fa6e438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"
    },
    {
      id: "cloud-infrastructure",
      title: "Optimizing Your Cloud Infrastructure",
      excerpt: "Strategies to improve performance and reduce costs of your cloud-based services and applications.",
      category: "technology",
      date: "May 25, 2023",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
    }
  ];

  const filteredPosts = selectedCategory === "all" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-gray-50 to-white py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent">
            ByteStacks Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Insights and perspectives on technology, design, and business
          </p>
        </motion.div>
        
        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {categories.map((category, index) => (
            <Button
              key={index}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              className={`capitalize ${
                selectedCategory === category 
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              {category}
            </Button>
          ))}
        </motion.div>
        
        {/* Blog Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.4 }}
              exit={{ opacity: 0, y: 30 }}
              layout
            >
              <Link href={`/blog/${post.id}`}>
                <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-200">
                  <div className="relative h-48 overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${post.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-4">
                      <Badge className={`
                        ${post.category === 'technology' ? 'bg-blue-500' : ''}
                        ${post.category === 'design' ? 'bg-purple-500' : ''}
                        ${post.category === 'business' ? 'bg-green-500' : ''}
                        ${post.category === 'ai' ? 'bg-orange-500' : ''}
                        text-white border-none
                      `}>
                        {post.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h2 className="text-xl font-semibold mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
        
        {/* Newsletter Signup */}
        <motion.div 
          className="mt-20 p-8 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-semibold mb-4">Subscribe to our newsletter</h2>
            <p className="text-gray-600 mb-6">
              Get the latest articles and insights delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}