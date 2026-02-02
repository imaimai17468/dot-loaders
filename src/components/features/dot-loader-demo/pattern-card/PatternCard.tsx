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
      className="group relative rounded-xl p-6 cursor-pointer transition-all duration-200 hover:scale-[1.05] active:scale-[0.98] w-full"
      onClick={onClick}
      type="button"
    >
      <div className="flex justify-center mb-4">
        <DotLoader pattern={pattern} color={color} />
      </div>
      <div className="text-center">
        <h3 className="font-medium text-xs text-foreground/80 group-hover:text-foreground transition-colors">
          {info.nameEn}
        </h3>
      </div>
    </button>
  );
}
