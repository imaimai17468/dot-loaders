export type AnimationPattern =
  | "horizontal-wave"
  | "horizontal-wave-reverse"
  | "vertical-wave"
  | "vertical-wave-reverse"
  | "diagonal-forward"
  | "diagonal-backward"
  | "diagonal-reverse"
  | "diagonal-reverse-backward"
  | "center-outward"
  | "center-inward"
  | "spiral-clockwise"
  | "spiral-counterclockwise"
  | "single-row"
  | "single-column"
  | "cross-expand"
  | "random";

export interface AnimationPatternDefinition {
  key: AnimationPattern;
  nameJa: string;
  nameEn: string;
  description: string;
  category: "wave" | "diagonal" | "center" | "special";
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
