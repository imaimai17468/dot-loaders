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
    <div className="container mx-auto py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">
          Dot Loader Animation Showcase
        </h1>
        <p className="text-muted-foreground">
          3×3グリッドの16種類のアニメーションパターン
        </p>
      </div>

      <div className="flex gap-8">
        <aside className="w-48 shrink-0">
          <div className="sticky top-8 space-y-6">
            <div>
              <h2 className="font-semibold mb-4">フィルター</h2>
              <div className="flex flex-col gap-2">
                {(
                  Object.entries(PATTERN_CATEGORIES) as [
                    CategoryKey,
                    (typeof PATTERN_CATEGORIES)[CategoryKey],
                  ][]
                ).map(([key, value]) => (
                  <Toggle
                    key={key}
                    pressed={activeCategories.has(key)}
                    onPressedChange={() => handleCategoryToggle(key)}
                    className="justify-start"
                    aria-label={`${value.label}を表示`}
                  >
                    {value.label}
                  </Toggle>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-semibold mb-4">カラー</h2>
              <div className="grid grid-cols-4 gap-2">
                {COLORS.map(({ value, label, bg }) => (
                  <button
                    key={value}
                    onClick={() => setSelectedColor(value)}
                    className={`w-8 h-8 rounded-full transition-all ${bg} ${
                      selectedColor === value
                        ? "ring-2 ring-offset-2 ring-offset-background ring-foreground scale-110"
                        : "hover:scale-105"
                    }`}
                    aria-label={label}
                    title={label}
                  />
                ))}
              </div>
            </div>
          </div>
        </aside>

        <main className="flex-1">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-x-2 gap-y-4">
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
