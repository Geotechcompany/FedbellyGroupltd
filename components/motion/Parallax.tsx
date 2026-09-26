"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { type ReactNode, useRef } from "react";

type ParallaxProps = {
  children: ReactNode;
  className?: string;
  /** Intensity 0–1. Higher = more visible travel on scroll. */
  speed?: number;
};

/**
 * Scroll-driven vertical parallax. Layer is taller than the clip so
 * edges stay covered while Y travel stays clearly perceptible on desktop.
 * Disabled under prefers-reduced-motion.
 */
export function Parallax({
  children,
  className = "",
  speed = 0.45,
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // At speed 0.45 → ±81px; at 0.55 → ±99px — clearly visible vs old ±28px.
  const travel = Math.round(Math.min(Math.max(speed, 0), 1) * 180);
  const y = useTransform(scrollYProgress, [0, 1], [-travel, travel]);

  if (reduce) {
    return (
      <div ref={ref} className={`overflow-hidden ${className}`}>
        <div className="absolute inset-0">{children}</div>
      </div>
    );
  }

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        style={{ y }}
        className="absolute inset-x-0 -top-[20%] h-[140%] will-change-transform"
      >
        {children}
      </motion.div>
    </div>
  );
}
