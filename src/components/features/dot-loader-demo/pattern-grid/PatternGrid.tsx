import { PatternCard } from "../pattern-card/PatternCard";
import type { AnimationPattern } from "@/components/features/dot-loader/types";

interface PatternGridProps {
  patterns: readonly AnimationPattern[];
  onPatternClick: (pattern: AnimationPattern) => void;
}

export function PatternGrid({ patterns, onPatternClick }: PatternGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {patterns.map((pattern) => (
        <PatternCard
          key={pattern}
          pattern={pattern}
          onClick={() => onPatternClick(pattern)}
        />
      ))}
    </div>
  );
}
