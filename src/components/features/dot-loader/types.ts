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

export type DotColor =
  | "cyan"
  | "purple"
  | "green"
  | "orange"
  | "pink"
  | "blue"
  | "red"
  | "yellow";

export interface DotLoaderProps {
  pattern?: AnimationPattern;
  color?: DotColor;
  className?: string;
  dotSize?: number;
  gap?: number;
  cycleDuration?: number;
}
