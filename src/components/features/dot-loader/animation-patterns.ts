import type { AnimationPattern, AnimationPatternDefinition } from "./types";

export const ANIMATION_PATTERNS: Record<
  AnimationPattern,
  AnimationPatternDefinition
> = {
  "horizontal-wave": {
    key: "horizontal-wave",
    nameJa: "横波(上→下)",
    nameEn: "Horizontal Wave",
    description: "上の行から順に波が伝わります",
    category: "wave",
  },
  "horizontal-wave-reverse": {
    key: "horizontal-wave-reverse",
    nameJa: "横波(下→上)",
    nameEn: "Horizontal Wave Reverse",
    description: "下の行から順に波が伝わります",
    category: "wave",
  },
  "vertical-wave": {
    key: "vertical-wave",
    nameJa: "縦波(左→右)",
    nameEn: "Vertical Wave",
    description: "左の列から順に波が伝わります",
    category: "wave",
  },
  "vertical-wave-reverse": {
    key: "vertical-wave-reverse",
    nameJa: "縦波(右→左)",
    nameEn: "Vertical Wave Reverse",
    description: "右の列から順に波が伝わります",
    category: "wave",
  },
  "diagonal-forward": {
    key: "diagonal-forward",
    nameJa: "対角線(左上→右下)",
    nameEn: "Diagonal Forward",
    description: "左上から右下へ斜めに波が伝わります",
    category: "diagonal",
  },
  "diagonal-backward": {
    key: "diagonal-backward",
    nameJa: "対角線(右下→左上)",
    nameEn: "Diagonal Backward",
    description: "右下から左上へ斜めに波が伝わります",
    category: "diagonal",
  },
  "diagonal-reverse": {
    key: "diagonal-reverse",
    nameJa: "逆対角線(右上→左下)",
    nameEn: "Diagonal Reverse",
    description: "右上から左下へ斜めに波が伝わります",
    category: "diagonal",
  },
  "diagonal-reverse-backward": {
    key: "diagonal-reverse-backward",
    nameJa: "逆対角線(左下→右上)",
    nameEn: "Diagonal Reverse Backward",
    description: "左下から右上へ斜めに波が伝わります",
    category: "diagonal",
  },
  "center-outward": {
    key: "center-outward",
    nameJa: "中心から外側へ",
    nameEn: "Center Outward",
    description: "中心から外側に広がります",
    category: "center",
  },
  "center-inward": {
    key: "center-inward",
    nameJa: "外側から中心へ",
    nameEn: "Center Inward",
    description: "外側から中心に向かいます",
    category: "center",
  },
  "spiral-clockwise": {
    key: "spiral-clockwise",
    nameJa: "らせん(時計回り)",
    nameEn: "Spiral Clockwise",
    description: "外側から時計回りにらせん状に光ります",
    category: "center",
  },
  "spiral-counterclockwise": {
    key: "spiral-counterclockwise",
    nameJa: "らせん(反時計回り)",
    nameEn: "Spiral Counterclockwise",
    description: "外側から反時計回りにらせん状に光ります",
    category: "center",
  },
  "single-row": {
    key: "single-row",
    nameJa: "一列点滅(中央行)",
    nameEn: "Single Row",
    description: "中央の行のみ点滅します",
    category: "special",
  },
  "single-column": {
    key: "single-column",
    nameJa: "一列点滅(中央列)",
    nameEn: "Single Column",
    description: "中央の列のみ点滅します",
    category: "special",
  },
  "cross-expand": {
    key: "cross-expand",
    nameJa: "十字展開",
    nameEn: "Cross Expand",
    description: "中央から十字に広がります",
    category: "special",
  },
  random: {
    key: "random",
    nameJa: "ランダム",
    nameEn: "Random",
    description: "ランダムな順序で点滅します",
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
