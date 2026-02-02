"use client";

import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import type { DotLoaderProps } from "./types";
import { getAnimationDelay } from "./get-animation-delay";
import "./dot-loader.css";

export function DotLoader({
  pattern = "horizontal-wave",
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
          className={cn(
            "dot bg-cyan-400 dark:bg-cyan-300",
            row === 2 && "dot-last"
          )}
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
