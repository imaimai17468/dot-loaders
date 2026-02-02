import { DotLoader } from "@/components/features/dot-loader/DotLoader";
import type {
  AnimationPattern,
  DotColor,
} from "@/components/features/dot-loader/types";
import { ANIMATION_PATTERNS } from "@/components/features/dot-loader/animation-patterns";

interface PatternCardProps {
  pattern: AnimationPattern;
  color: DotColor;
  onClick: () => void;
}

export function PatternCard({ pattern, color, onClick }: PatternCardProps) {
  const info = ANIMATION_PATTERNS[pattern];

  return (
    <button
      className="rounded-lg p-4 cursor-pointer hover:bg-accent transition-colors w-full"
      onClick={onClick}
      type="button"
    >
      <div className="flex justify-center mb-4">
        <DotLoader pattern={pattern} color={color} />
      </div>
      <div className="text-center">
        <h3 className="font-medium text-xs">{info.nameEn}</h3>
      </div>
    </button>
  );
}
