"use client";

import { useState } from "react";
import { Toggle } from "@/components/ui/toggle";
import { PatternCard } from "./pattern-card/PatternCard";
import { PatternDialog } from "./pattern-dialog/PatternDialog";
import { PATTERN_CATEGORIES } from "@/components/features/dot-loader/animation-patterns";
import type { AnimationPattern } from "@/components/features/dot-loader/types";

type CategoryKey = keyof typeof PATTERN_CATEGORIES;

export function DotLoaderDemo() {
  const [selectedPattern, setSelectedPattern] =
    useState<AnimationPattern | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [activeCategories, setActiveCategories] = useState<Set<CategoryKey>>(
    new Set()
  );

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
          <div className="sticky top-8">
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
        </aside>

        <main className="flex-1">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-x-2 gap-y-4">
            {visiblePatterns.map((pattern) => (
              <PatternCard
                key={pattern}
                pattern={pattern}
                onClick={() => handlePatternClick(pattern)}
              />
            ))}
          </div>
        </main>
      </div>

      <PatternDialog
        pattern={selectedPattern}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />
    </div>
  );
}
