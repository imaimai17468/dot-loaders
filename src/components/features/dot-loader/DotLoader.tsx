import { cn } from "@/lib/utils";
import "./dot-loader.css";

interface DotLoaderProps {
  className?: string;
  dotSize?: number;
  gap?: number;
  cycleDuration?: number;
}

export function DotLoader({
  className,
  dotSize = 2,
  gap = 0,
  cycleDuration = 600,
}: DotLoaderProps) {
  const dots = Array.from({ length: 9 }, (_, row) =>
    Array.from({ length: 9 }, (_, col) => ({ row, col }))
  );

  const getAnimationDelay = (row: number) => {
    const blockIndex = Math.floor(row / 3); // 0, 1, or 2
    return 150 * blockIndex; // 固定値150ms間隔
  };

  return (
    <div
      role="status"
      aria-label="Loading"
      className={cn("inline-grid grid-cols-9", className)}
      style={{ gap: `${gap}px` }}
    >
      {dots.flat().map(({ row, col }) => (
        <div
          key={`${row}-${col}`}
          className={cn(
            "dot bg-cyan-400 dark:bg-cyan-300",
            row >= 6 && "dot-last"
          )}
          style={{
            width: `${dotSize}px`,
            height: `${dotSize}px`,
            animationName: "dot-wave-glow",
            animationDuration: `${cycleDuration}ms`,
            animationTimingFunction: "ease-in-out",
            animationIterationCount: "infinite",
            animationDelay: `${getAnimationDelay(row)}ms`,
            willChange: "opacity, box-shadow",
          }}
        />
      ))}
    </div>
  );
}
