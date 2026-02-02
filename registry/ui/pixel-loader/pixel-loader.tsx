"use client";

import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import type { PixelLoaderProps, PixelColor, PixelLoaderSize } from "./types";
import { getAnimationDelay } from "./get-animation-delay";
import "./pixel-loader.css";

const SIZE_PRESETS: Record<PixelLoaderSize, number> = {
  xs: 4, // 12px total
  sm: 5, // 15px total
  md: 6, // 18px total
  lg: 8, // 24px total
};

const COLOR_CLASSES: Record<PixelColor, string> = {
  cyan: "bg-cyan-400 dark:bg-cyan-300",
  purple: "bg-purple-400 dark:bg-purple-300",
  green: "bg-green-400 dark:bg-green-300",
  orange: "bg-orange-400 dark:bg-orange-300",
  pink: "bg-pink-400 dark:bg-pink-300",
  blue: "bg-blue-400 dark:bg-blue-300",
  red: "bg-red-400 dark:bg-red-300",
  yellow: "bg-yellow-400 dark:bg-yellow-300",
};

const COLOR_RGB: Record<PixelColor, { light: string; dark: string }> = {
  cyan: { light: "34 211 238", dark: "103 232 249" },
  purple: { light: "192 132 252", dark: "216 180 254" },
  green: { light: "74 222 128", dark: "134 239 172" },
  orange: { light: "251 146 60", dark: "253 186 116" },
  pink: { light: "244 114 182", dark: "249 168 212" },
  blue: { light: "96 165 250", dark: "147 197 253" },
  red: { light: "248 113 113", dark: "252 165 165" },
  yellow: { light: "250 204 21", dark: "253 224 71" },
};

/**
 * A customizable 3×3 pixel grid loading animation component.
 *
 * Features:
 * - 56 distinct animation patterns across 11 categories
 * - 8 color options with automatic dark mode variants
 * - 4 preset sizes (xs, sm, md, lg) for common use cases
 * - Built-in accessibility support for reduced motion
 * - Zero external UI dependencies
 *
 * @example
 * ```tsx
 * // Basic usage
 * <PixelLoader />
 *
 * // With preset size
 * <PixelLoader size="sm" />
 *
 * // With custom pattern and color
 * <PixelLoader pattern="spiral-clockwise" color="purple" size="lg" />
 * ```
 */
export function PixelLoader({
  pattern = "horizontal-wave",
  color = "cyan",
  size = "md",
  className,
}: PixelLoaderProps) {
  const pixelSize = SIZE_PRESETS[size];

  const pixels = Array.from({ length: 3 }, (_, row) =>
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
      style={
        {
          "--glow-color-light": COLOR_RGB[color].light,
          "--glow-color-dark": COLOR_RGB[color].dark,
        } as React.CSSProperties
      }
    >
      {pixels.flat().map(({ row, col }) => (
        <div
          key={`${row}-${col}`}
          className={cn(
            "pixel",
            COLOR_CLASSES[color],
            row === 2 && "pixel-last"
          )}
          style={{
            width: `${pixelSize}px`,
            height: `${pixelSize}px`,
            animationName: "pixel-wave-glow",
            animationDuration: "600ms",
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
