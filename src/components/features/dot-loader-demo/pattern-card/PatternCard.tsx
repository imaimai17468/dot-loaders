import { DotLoader } from "@/components/ui/dot-loader/dot-loader";
import type {
  AnimationPattern,
  DotColor,
} from "@/components/ui/dot-loader/types";
import { ANIMATION_PATTERNS } from "@/components/ui/dot-loader/animation-patterns";

interface PatternCardProps {
  pattern: AnimationPattern;
  color: DotColor;
  onClick: () => void;
}

export function PatternCard({ pattern, color, onClick }: PatternCardProps) {
  const info = ANIMATION_PATTERNS[pattern];

  return (
    <button
      className="group relative rounded-xl p-6 cursor-pointer border border-border/50 bg-card hover:bg-accent/50 hover:border-foreground/20 transition-all duration-200 hover:shadow-md hover:scale-[1.02] active:scale-[0.98] w-full"
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
