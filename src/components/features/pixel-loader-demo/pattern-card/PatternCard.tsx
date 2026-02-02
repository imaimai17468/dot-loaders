import { PixelLoader } from "@/components/features/pixel-loader/PixelLoader";
import type {
  AnimationPattern,
  PixelColor,
} from "@/components/features/pixel-loader/types";
import { ANIMATION_PATTERNS } from "@/components/features/pixel-loader/animation-patterns";

interface PatternCardProps {
  pattern: AnimationPattern;
  color: PixelColor;
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
        <PixelLoader pattern={pattern} color={color} />
      </div>
      <div className="text-center">
        <h3 className="font-medium text-xs text-foreground/80 group-hover:text-foreground transition-colors">
          {info.nameEn}
        </h3>
      </div>
    </button>
  );
}
