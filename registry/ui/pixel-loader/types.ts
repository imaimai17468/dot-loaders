/**
 * Animation pattern types for the PixelLoader component.
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
  | "single-pixel-center"
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
 * Available pixel colors with automatic dark mode variants.
 */
export type PixelColor =
  | "cyan"
  | "purple"
  | "green"
  | "orange"
  | "pink"
  | "blue"
  | "red"
  | "yellow";

/**
 * Preset sizes for the PixelLoader component.
 * - xs: 12px total (4px pixels)
 * - sm: 15px total (5px pixels)
 * - md: 18px total (6px pixels)
 * - lg: 24px total (8px pixels)
 */
export type PixelLoaderSize = "xs" | "sm" | "md" | "lg";

/**
 * Props for the PixelLoader component.
 */
export interface PixelLoaderProps {
  /**
   * Animation pattern to display.
   * @default "horizontal-wave"
   */
  pattern?: AnimationPattern;
  /**
   * Color theme for the pixels.
   * @default "cyan"
   */
  color?: PixelColor;
  /**
   * Preset size for the loader.
   * @default "md"
   */
  size?: PixelLoaderSize;
  /**
   * Additional CSS classes to apply to the container.
   */
  className?: string;
}
