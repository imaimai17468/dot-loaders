"use client";

import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import type { DotLoaderProps, DotColor } from "./types";
import { getAnimationDelay } from "./get-animation-delay";
import "./dot-loader.css";

const COLOR_CLASSES: Record<DotColor, string> = {
  cyan: "bg-cyan-400 dark:bg-cyan-300",
  purple: "bg-purple-400 dark:bg-purple-300",
  green: "bg-green-400 dark:bg-green-300",
  orange: "bg-orange-400 dark:bg-orange-300",
  pink: "bg-pink-400 dark:bg-pink-300",
  blue: "bg-blue-400 dark:bg-blue-300",
  red: "bg-red-400 dark:bg-red-300",
  yellow: "bg-yellow-400 dark:bg-yellow-300",
};

export function DotLoader({
  pattern = "horizontal-wave",
  color = "cyan",
  className,
  dotSize = 6,
  gap = 0,
  cycleDuration = 600,
}: DotLoaderProps) {
  const dots = Array.from({ length: 3 }, (_, row) =>
    Array.from({ length: 3 }, (_, col) => ({ row, col }))
  );

  const [randomDelays, setRandomDelays] = useState<number[]>([]);

  useEffect(() => {
    if (pattern === "random") {
      setRandomDelays(Array.from({ length: 9 }, () => Math.random() * 450));
    }
  }, [pattern]);

  const getDelay = (row: number, col: number): number => {
    if (pattern === "random") {
      return randomDelays[row * 3 + col] || 0;
    }
    return getAnimationDelay(pattern, row, col);
  };

  return (
    <div
      role="status"
      aria-label={`Loading animation: ${pattern}`}
      className={cn("inline-grid grid-cols-3", className)}
      style={{ gap: `${gap}px` }}
    >
      {dots.flat().map(({ row, col }) => (
        <div
          key={`${row}-${col}`}
          className={cn("dot", COLOR_CLASSES[color], row === 2 && "dot-last")}
          style={{
            width: `${dotSize}px`,
            height: `${dotSize}px`,
            animationName: "dot-wave-glow",
            animationDuration: `${cycleDuration}ms`,
            animationTimingFunction: "ease-in-out",
            animationIterationCount: "infinite",
            animationDelay: `${getDelay(row, col)}ms`,
            willChange: "opacity, box-shadow",
          }}
        />
      ))}
    </div>
  );
}
