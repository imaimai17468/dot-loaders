import type { AnimationPattern } from "./types";

const SPIRAL_CLOCKWISE_ORDER = [
  [0, 0],
  [0, 1],
  [0, 2],
  [1, 2],
  [2, 2],
  [2, 1],
  [2, 0],
  [1, 0],
  [1, 1],
] as const;

const SPIRAL_COUNTERCLOCKWISE_ORDER = [
  [0, 0],
  [1, 0],
  [2, 0],
  [2, 1],
  [2, 2],
  [1, 2],
  [0, 2],
  [0, 1],
  [1, 1],
] as const;

export function getAnimationDelay(
  pattern: AnimationPattern,
  row: number,
  col: number
): number {
  switch (pattern) {
    case "horizontal-wave":
      return row * 150;

    case "horizontal-wave-reverse":
      return (2 - row) * 150;

    case "vertical-wave":
      return col * 150;

    case "vertical-wave-reverse":
      return (2 - col) * 150;

    case "diagonal-forward":
      return (row + col) * 75;

    case "diagonal-backward":
      return (4 - row - col) * 75;

    case "diagonal-reverse":
      return (row + (2 - col)) * 75;

    case "diagonal-reverse-backward":
      return (2 - row + col) * 75;

    case "center-outward":
      return Math.max(Math.abs(row - 1), Math.abs(col - 1)) * 150;

    case "center-inward":
      return (2 - Math.max(Math.abs(row - 1), Math.abs(col - 1))) * 150;

    case "spiral-clockwise": {
      const index = SPIRAL_CLOCKWISE_ORDER.findIndex(
        ([r, c]) => r === row && c === col
      );
      return index * 75;
    }

    case "spiral-counterclockwise": {
      const index = SPIRAL_COUNTERCLOCKWISE_ORDER.findIndex(
        ([r, c]) => r === row && c === col
      );
      return index * 75;
    }

    case "single-row":
      return row === 1 ? col * 100 : 999999;

    case "single-column":
      return col === 1 ? row * 100 : 999999;

    case "cross-expand":
      return row === 1 || col === 1
        ? (Math.abs(row - 1) + Math.abs(col - 1)) * 150
        : 999999;

    case "random":
      return 0;

    default:
      return row * 150;
  }
}
