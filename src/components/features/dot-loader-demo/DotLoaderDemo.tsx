"use client";

import { useState } from "react";
import { Toggle } from "@/components/ui/toggle";
import { PatternCard } from "./pattern-card/PatternCard";
import { PatternDialog } from "./pattern-dialog/PatternDialog";
import { PATTERN_CATEGORIES } from "@/components/features/dot-loader/animation-patterns";
import type {
  AnimationPattern,
  DotColor,
} from "@/components/features/dot-loader/types";

type CategoryKey = keyof typeof PATTERN_CATEGORIES;

const COLORS: Array<{ value: DotColor; label: string; bg: string }> = [
  { value: "cyan", label: "Cyan", bg: "bg-cyan-400" },
  { value: "purple", label: "Purple", bg: "bg-purple-400" },
  { value: "green", label: "Green", bg: "bg-green-400" },
  { value: "orange", label: "Orange", bg: "bg-orange-400" },
  { value: "pink", label: "Pink", bg: "bg-pink-400" },
  { value: "blue", label: "Blue", bg: "bg-blue-400" },
  { value: "red", label: "Red", bg: "bg-red-400" },
  { value: "yellow", label: "Yellow", bg: "bg-yellow-400" },
];

export function DotLoaderDemo() {
  const [selectedPattern, setSelectedPattern] =
    useState<AnimationPattern | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [activeCategories, setActiveCategories] = useState<Set<CategoryKey>>(
    new Set()
  );
  const [selectedColor, setSelectedColor] = useState<DotColor>("cyan");

  const handlePatternClick = (pattern: AnimationPattern) => {
    setSelectedPattern(pattern);
    setDialogOpen(true);
  };

  const handleCategoryToggle = (category: CategoryKey) => {
    setActiveCategories((prev) => {
      const next = new Set(prev);
      if (next.has(category)) {
        next.delete(category);
      } else {
        next.add(category);
      }
      return next;
    });
  };

  const visiblePatterns =
    activeCategories.size === 0
      ? (
          Object.entries(PATTERN_CATEGORIES) as [
            CategoryKey,
            (typeof PATTERN_CATEGORIES)[CategoryKey],
          ][]
        ).flatMap(([, value]) => value.patterns)
      : (
          Object.entries(PATTERN_CATEGORIES) as [
            CategoryKey,
            (typeof PATTERN_CATEGORIES)[CategoryKey],
          ][]
        )
          .filter(([key]) => activeCategories.has(key))
          .flatMap(([, value]) => value.patterns);

  return (
    <div className="w-full">
      <div className="flex flex-col gap-8">
        {/* Filter & Color Controls */}
        <div className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between pb-4 border-b border-border/50">
          {/* Category Filter */}
          <div className="flex-1">
            <h2 className="text-sm font-medium text-muted-foreground mb-3">
              カテゴリー
            </h2>
            <div className="flex flex-wrap gap-2">
              {(
                Object.entries(PATTERN_CATEGORIES) as [
                  CategoryKey,
                  (typeof PATTERN_CATEGORIES)[CategoryKey],
                ][]
              ).map(([key, value]) => (
                <button
                  key={key}
                  onClick={() => handleCategoryToggle(key)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeCategories.has(key)
                      ? "bg-foreground text-background shadow-sm"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                  aria-label={`${value.label}を表示`}
                  aria-pressed={activeCategories.has(key)}
                >
                  {value.label}
                </button>
              ))}
            </div>
          </div>

          {/* Color Picker */}
          <div className="shrink-0">
            <h2 className="text-sm font-medium text-muted-foreground mb-3">
              カラー
            </h2>
            <div className="flex gap-3">
              {COLORS.map(({ value, label, bg }) => (
                <button
                  key={value}
                  onClick={() => setSelectedColor(value)}
                  className={`relative w-10 h-10 rounded-lg transition-all duration-200 ${bg} ${
                    selectedColor === value
                      ? "ring-2 ring-offset-2 ring-offset-background ring-foreground scale-110 shadow-lg"
                      : "hover:scale-105 hover:shadow-md opacity-70 hover:opacity-100"
                  }`}
                  aria-label={label}
                  title={label}
                >
                  {selectedColor === value && (
                    <span className="absolute inset-0 flex items-center justify-center text-white text-lg font-bold drop-shadow-md">
                      ✓
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Pattern Grid */}
        <main>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {visiblePatterns.map((pattern) => (
              <PatternCard
                key={pattern}
                pattern={pattern}
                color={selectedColor}
                onClick={() => handlePatternClick(pattern)}
              />
            ))}
          </div>
        </main>
      </div>

      <PatternDialog
        pattern={selectedPattern}
        color={selectedColor}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />
    </div>
  );
}
