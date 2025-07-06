"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useAnimation } from "framer-motion";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  social: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

export default function TeamPage() {
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0.1, 1, 1, 0.1]);
  
  useEffect(() => {
    controls.start({ opacity: 1, y: 0, transition: { duration: 0.8 } });
  }, [controls]);
  
  const teamMembers: TeamMember[] = [
    {
      name: "Alex Johnson",
      role: "CEO & Founder",
      bio: "With over 15 years of experience in tech leadership, Alex has guided multiple startups to success.",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Maria Chen",
      role: "CTO",
      bio: "Maria brings deep technical expertise in AI and cloud infrastructure, having previously led engineering at major tech companies.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
      social: {
        linkedin: "#",
        github: "#"
      }
    },
    {
      name: "James Wilson",
      role: "Design Director",
      bio: "James has a passion for creating intuitive, beautiful user experiences that bridge the gap between technology and human needs.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Sophia Ahmed",
      role: "Marketing Lead",
      bio: "Sophia specializes in growth marketing strategies for tech companies, with a focus on data-driven approaches.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Daniel Kim",
      role: "Lead Developer",
      bio: "Daniel is an expert in full-stack development with particular strength in scalable architectures and performance optimization.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
      social: {
        github: "#",
        linkedin: "#"
      }
    },
    {
      name: "Emma Rodriguez",
      role: "AI Specialist",
      bio: "Emma focuses on implementing cutting-edge machine learning solutions that solve real business problems.",
      image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
      social: {
        linkedin: "#",
        github: "#"
      }
    }
  ];

  return (
    <div className="relative w-full min-h-screen">
      {/* Animated background */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white" />
        <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-blue-100 to-transparent" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-300 to-purple-300 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-blue-300 to-purple-300 rounded-full blur-3xl transform -translate-x-1/4 translate-y-1/4" />
        </div>
      </motion.div>

      <div className="container mx-auto px-4 py-24" ref={containerRef}>
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
        >
          <motion.h1 
            className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-700 via-indigo-600 to-violet-700 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Meet Our Team
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Our talented professionals are passionate about delivering exceptional digital solutions
          </motion.p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={controls}
              transition={{
                delay: 0.2 + index * 0.1,
                duration: 0.5,
              }}
              whileHover={{ 
                y: -10, 
                transition: { duration: 0.2 } 
              }}
            >
              <Card className="h-full overflow-hidden bg-white/70 backdrop-blur-sm border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-lg">
                <div className="relative h-64 overflow-hidden group">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    style={{ objectFit: "cover" }}
                    className="group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="flex space-x-2">
                      {member.social.linkedin && (
                        <a href={member.social.linkedin} className="text-white hover:text-blue-300">
                          <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                            <rect x="2" y="9" width="4" height="12"></rect>
                            <circle cx="4" cy="4" r="2"></circle>
                          </svg>
                        </a>
                      )}
                      {member.social.twitter && (
                        <a href={member.social.twitter} className="text-white hover:text-blue-300">
                          <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                          </svg>
                        </a>
                      )}
                      {member.social.github && (
                        <a href={member.social.github} className="text-white hover:text-blue-300">
                          <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium text-sm mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
        
        {/* Join the Team Section */}
        <motion.div
          className="mt-24 text-center"
          style={{ opacity }}
        >
          <h2 className="text-3xl font-semibold mb-4">Join Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            We're always looking for talented individuals who are passionate about technology and innovation. 
            Check out our current openings or send us your resume.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700">
              View Open Positions
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}