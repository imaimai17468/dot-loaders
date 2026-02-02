import type { AnimationPattern, AnimationPatternDefinition } from "./types";

export const ANIMATION_PATTERNS: Record<
  AnimationPattern,
  AnimationPatternDefinition
> = {
  "horizontal-wave": {
    key: "horizontal-wave",
    nameJa: "横波(上→下)",
    nameEn: "Horizontal Wave",
    description: "Wave propagates from top to bottom row by row",
    category: "wave",
  },
  "horizontal-wave-reverse": {
    key: "horizontal-wave-reverse",
    nameJa: "横波(下→上)",
    nameEn: "Horizontal Wave Reverse",
    description: "Wave propagates from bottom to top row by row",
    category: "wave",
  },
  "vertical-wave": {
    key: "vertical-wave",
    nameJa: "縦波(左→右)",
    nameEn: "Vertical Wave",
    description: "Wave propagates from left to right column by column",
    category: "wave",
  },
  "vertical-wave-reverse": {
    key: "vertical-wave-reverse",
    nameJa: "縦波(右→左)",
    nameEn: "Vertical Wave Reverse",
    description: "Wave propagates from right to left column by column",
    category: "wave",
  },
  "diagonal-forward": {
    key: "diagonal-forward",
    nameJa: "対角線(左上→右下)",
    nameEn: "Diagonal Forward",
    description: "Wave propagates diagonally from top-left to bottom-right",
    category: "diagonal",
  },
  "diagonal-backward": {
    key: "diagonal-backward",
    nameJa: "対角線(右下→左上)",
    nameEn: "Diagonal Backward",
    description: "Wave propagates diagonally from bottom-right to top-left",
    category: "diagonal",
  },
  "diagonal-reverse": {
    key: "diagonal-reverse",
    nameJa: "逆対角線(右上→左下)",
    nameEn: "Diagonal Reverse",
    description: "Wave propagates diagonally from top-right to bottom-left",
    category: "diagonal",
  },
  "diagonal-reverse-backward": {
    key: "diagonal-reverse-backward",
    nameJa: "逆対角線(左下→右上)",
    nameEn: "Diagonal Reverse Backward",
    description: "Wave propagates diagonally from bottom-left to top-right",
    category: "diagonal",
  },
  "center-outward": {
    key: "center-outward",
    nameJa: "中心から外側へ",
    nameEn: "Center Outward",
    description: "Expands from center to the edges",
    category: "center",
  },
  "center-inward": {
    key: "center-inward",
    nameJa: "外側から中心へ",
    nameEn: "Center Inward",
    description: "Contracts from the edges to center",
    category: "center",
  },
  "spiral-clockwise": {
    key: "spiral-clockwise",
    nameJa: "らせん(時計回り)",
    nameEn: "Spiral Clockwise",
    description: "Spirals clockwise from the outside edge",
    category: "center",
  },
  "spiral-counterclockwise": {
    key: "spiral-counterclockwise",
    nameJa: "らせん(反時計回り)",
    nameEn: "Spiral Counterclockwise",
    description: "Spirals counterclockwise from the outside edge",
    category: "center",
  },
  "single-row": {
    key: "single-row",
    nameJa: "一列点滅(中央行)",
    nameEn: "Single Row",
    description: "Only the center row blinks",
    category: "special",
  },
  "single-column": {
    key: "single-column",
    nameJa: "一列点滅(中央列)",
    nameEn: "Single Column",
    description: "Only the center column blinks",
    category: "special",
  },
  "cross-expand": {
    key: "cross-expand",
    nameJa: "十字展開",
    nameEn: "Cross Expand",
    description: "Expands in a cross pattern from the center",
    category: "special",
  },
  random: {
    key: "random",
    nameJa: "ランダム",
    nameEn: "Random",
    description: "Blinks in a random sequence",
    category: "special",
  },
};

export const PATTERN_CATEGORIES = {
  wave: {
    label: "波系",
    patterns: [
      "horizontal-wave",
      "horizontal-wave-reverse",
      "vertical-wave",
      "vertical-wave-reverse",
    ] as const,
  },
  diagonal: {
    label: "対角線系",
    patterns: [
      "diagonal-forward",
      "diagonal-backward",
      "diagonal-reverse",
      "diagonal-reverse-backward",
    ] as const,
  },
  center: {
    label: "中心系",
    patterns: [
      "center-outward",
      "center-inward",
      "spiral-clockwise",
      "spiral-counterclockwise",
    ] as const,
  },
  special: {
    label: "特殊",
    patterns: [
      "single-row",
      "single-column",
      "cross-expand",
      "random",
    ] as const,
  },
};
