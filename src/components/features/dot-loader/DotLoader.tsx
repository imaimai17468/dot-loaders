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
  dotSize = 6,
  gap = 0,
  cycleDuration = 600,
}: DotLoaderProps) {
  const dots = Array.from({ length: 3 }, (_, row) =>
    Array.from({ length: 3 }, (_, col) => ({ row, col }))
  );

  const getAnimationDelay = (row: number) => {
    return 150 * row; // row 0: 0ms, row 1: 150ms, row 2: 300ms
  };

  return (
    <div
      role="status"
      aria-label="Loading"
      className={cn("inline-grid grid-cols-3", className)}
      style={{ gap: `${gap}px` }}
    >
      {dots.flat().map(({ row, col }) => (
        <div
          key={`${row}-${col}`}
          className={cn(
            "dot bg-cyan-400 dark:bg-cyan-300",
            row === 2 && "dot-last"
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
