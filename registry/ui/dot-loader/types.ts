/**
 * Animation pattern types for the DotLoader component.
 * Includes 56 distinct patterns across 11 categories.
 */
export type AnimationPattern =
  | "horizontal-wave"
  | "horizontal-wave-reverse"
  | "vertical-wave"
  | "vertical-wave-reverse"
  | "zigzag-horizontal"
  | "zigzag-vertical"
  | "bounce-horizontal"
  | "bounce-vertical"
  | "diagonal-forward"
  | "diagonal-backward"
  | "diagonal-reverse"
  | "diagonal-reverse-backward"
  | "center-outward"
  | "center-inward"
  | "spiral-clockwise"
  | "spiral-counterclockwise"
  | "corner-top-left"
  | "corner-top-right"
  | "corner-bottom-left"
  | "corner-bottom-right"
  | "corners-inward"
  | "rotate-clockwise"
  | "rotate-counterclockwise"
  | "cross-rotate"
  | "pinwheel"
  | "checkerboard-a"
  | "checkerboard-b"
  | "alternating-rows"
  | "alternating-columns"
  | "x-pattern"
  | "plus-pattern"
  | "single-row"
  | "single-column"
  | "cross-expand"
  | "random"
  | "single-dot-center"
  | "top-row"
  | "bottom-row"
  | "left-column"
  | "right-column"
  | "opposite-corners-a"
  | "opposite-corners-b"
  | "four-corners-only"
  | "frame-wave"
  | "frame-bounce"
  | "edges-only"
  | "quad-top-left"
  | "quad-top-right"
  | "quad-bottom-left"
  | "quad-bottom-right"
  | "l-shape-tl"
  | "l-shape-tr"
  | "l-shape-bl"
  | "l-shape-br"
  | "t-shape-horizontal"
  | "t-shape-vertical";

/**
 * Metadata for a single animation pattern.
 */
export interface AnimationPatternDefinition {
  key: AnimationPattern;
  nameJa: string;
  nameEn: string;
  description: string;
  category:
    | "wave"
    | "diagonal"
    | "center"
    | "corner"
    | "rotation"
    | "complex"
    | "special"
    | "minimal"
    | "edge"
    | "quad"
    | "shape";
}

/**
 * Available dot colors with automatic dark mode variants.
 */
export type DotColor =
  | "cyan"
  | "purple"
  | "green"
  | "orange"
  | "pink"
  | "blue"
  | "red"
  | "yellow";

/**
 * Props for the DotLoader component.
 */
export interface DotLoaderProps {
  /**
   * Animation pattern to display.
   * @default "horizontal-wave"
   */
  pattern?: AnimationPattern;
  /**
   * Color theme for the dots.
   * @default "cyan"
   */
  color?: DotColor;
  /**
   * Additional CSS classes to apply to the container.
   */
  className?: string;
  /**
   * Size of each dot in pixels.
   * @default 6
   */
  dotSize?: number;
  /**
   * Gap between dots in pixels.
   * @default 0
   */
  gap?: number;
  /**
   * Duration of one complete animation cycle in milliseconds.
   * @default 600
   */
  cycleDuration?: number;
}
