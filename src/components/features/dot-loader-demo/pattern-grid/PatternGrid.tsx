import { PatternCard } from "../pattern-card/PatternCard";
import type {
  AnimationPattern,
  DotColor,
} from "@/components/features/dot-loader/types";

interface PatternGridProps {
  patterns: readonly AnimationPattern[];
  color: DotColor;
  onPatternClick: (pattern: AnimationPattern) => void;
}

export function PatternGrid({
  patterns,
  color,
  onPatternClick,
}: PatternGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {patterns.map((pattern) => (
        <PatternCard
          key={pattern}
          pattern={pattern}
          color={color}
          onClick={() => onPatternClick(pattern)}
        />
      ))}
    </div>
  );
}
