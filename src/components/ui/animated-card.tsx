"use client";

import { useState, useRef, ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
  hoverScale?: number;
  rotationIntensity?: number;
  borderRadius?: string;
  animated?: boolean;
}

export function AnimatedCard({
  children,
  className,
  glowColor = "rgba(120, 119, 198, 0.3)",
  hoverScale = 1.05,
  rotationIntensity = 10,
  borderRadius = "rounded-xl",
  animated = true,
}: AnimatedCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !animated) return;
    
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    
    setMousePosition({ x, y });
  };

  return (
    <motion.div
      ref={cardRef}
      className={cn(
        `relative overflow-hidden ${borderRadius} p-px`,
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePosition({ x: 0, y: 0 });
      }}
      style={{
        transform: animated
          ? `perspective(1000px) rotateX(${
              mousePosition.y * rotationIntensity
            }deg) rotateY(${-mousePosition.x * rotationIntensity}deg)`
          : undefined,
        transition: "transform 0.2s ease-out",
        transformStyle: "preserve-3d",
        willChange: "transform"
      }}
      whileHover={animated ? { scale: hoverScale } : undefined}
    >
      {/* Animated border glow effect */}
      {animated && (
        <motion.div
          className="absolute inset-0 z-10 opacity-0"
          style={{
            background: `radial-gradient(circle at ${
              50 + mousePosition.x * 30
            }% ${50 + mousePosition.y * 30}%, ${glowColor}, transparent 40%)`,
            opacity: isHovered ? 1 : 0,
            transition: "opacity 0.2s ease-in-out",
          }}
        />
      )}

      {/* Content container */}
      <div className={`relative z-20 h-full w-full bg-white ${borderRadius} overflow-hidden`}>
        {children}
      </div>
      
      {/* Highlight reflection effect */}
      {animated && (
        <motion.div
          className="absolute inset-0 z-10 opacity-0"
          style={{
            background: `linear-gradient(
              105deg,
              transparent,
              transparent 40%,
              rgba(255, 255, 255, 0.2) 50%,
              transparent 60%,
              transparent
            )`,
            opacity: isHovered ? 0.15 : 0,
            transition: "opacity 0.3s ease-in-out",
          }}
        />
      )}
    </motion.div>
  );
} 