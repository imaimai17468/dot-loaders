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

const ROTATE_CLOCKWISE_ORDER = [
  [0, 1],
  [0, 2],
  [1, 2],
  [2, 2],
  [2, 1],
  [2, 0],
  [1, 0],
  [0, 0],
  [1, 1],
] as const;

const ROTATE_COUNTERCLOCKWISE_ORDER = [
  [0, 1],
  [0, 0],
  [1, 0],
  [2, 0],
  [2, 1],
  [2, 2],
  [1, 2],
  [0, 2],
  [1, 1],
] as const;

const ORBIT_OUTER_ORDER = [
  [0, 0],
  [0, 1],
  [0, 2],
  [1, 2],
  [2, 2],
  [2, 1],
  [2, 0],
  [1, 0],
] as const;

const CROSS_ROTATE_ORDER = [
  [1, 0],
  [0, 1],
  [1, 2],
  [2, 1],
  [1, 1],
] as const;

const PINWHEEL_ORDER = [
  [1, 1],
  [0, 1],
  [1, 0],
  [2, 1],
  [1, 2],
  [0, 0],
  [0, 2],
  [2, 2],
  [2, 0],
] as const;

const X_PATTERN_ORDER = [
  [0, 0],
  [0, 2],
  [2, 0],
  [2, 2],
  [1, 1],
] as const;

const PLUS_PATTERN_ORDER = [
  [1, 1],
  [0, 1],
  [1, 0],
  [2, 1],
  [1, 2],
] as const;

const FOUR_CORNERS_ORDER = [
  [0, 0],
  [0, 2],
  [2, 2],
  [2, 0],
] as const;

const EDGES_ONLY_ORDER = [
  [0, 1],
  [1, 0],
  [1, 2],
  [2, 1],
] as const;

/**
 * Calculates the animation delay for a dot at the given position
 * based on the selected animation pattern.
 *
 * @param pattern - The animation pattern to use
 * @param row - Row index (0-2)
 * @param col - Column index (0-2)
 * @returns Delay in milliseconds. Returns 999999 for hidden dots in partial patterns.
 */
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

    case "zigzag-horizontal":
      return (row % 2 === 0 ? col : 2 - col) * 150 + row * 100;

    case "zigzag-vertical":
      return (col % 2 === 0 ? row : 2 - row) * 150 + col * 100;

    case "bounce-horizontal":
      return (row < 1.5 ? row : 2 - row) * 150 + col * 75;

    case "bounce-vertical":
      return (col < 1.5 ? col : 2 - col) * 150 + row * 75;

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

    case "corner-top-left":
      return (row + col) * 150;

    case "corner-top-right":
      return (row + (2 - col)) * 150;

    case "corner-bottom-left":
      return (2 - row + col) * 150;

    case "corner-bottom-right":
      return (2 - row + (2 - col)) * 150;

    case "corners-inward":
      return Math.min(Math.abs(row - 1), Math.abs(col - 1)) * 150;

    case "rotate-clockwise": {
      const index = ROTATE_CLOCKWISE_ORDER.findIndex(
        ([r, c]) => r === row && c === col
      );
      return index * 75;
    }

    case "rotate-counterclockwise": {
      const index = ROTATE_COUNTERCLOCKWISE_ORDER.findIndex(
        ([r, c]) => r === row && c === col
      );
      return index * 75;
    }

    case "orbit-outer": {
      const index = ORBIT_OUTER_ORDER.findIndex(
        ([r, c]) => r === row && c === col
      );
      return index !== -1 ? index * 75 : 999999;
    }

    case "cross-rotate": {
      const index = CROSS_ROTATE_ORDER.findIndex(
        ([r, c]) => r === row && c === col
      );
      return index !== -1 ? index * 75 : 999999;
    }

    case "pinwheel": {
      const index = PINWHEEL_ORDER.findIndex(
        ([r, c]) => r === row && c === col
      );
      return index * 75;
    }

    case "checkerboard-a":
      return (row + col) % 2 === 0 ? 0 : 300;

    case "checkerboard-b":
      return (row + col) % 2 === 1 ? 0 : 300;

    case "alternating-rows":
      return (row % 2 === 0 ? 0 : 300) + col * 50;

    case "alternating-columns":
      return (col % 2 === 0 ? 0 : 300) + row * 50;

    case "x-pattern": {
      const index = X_PATTERN_ORDER.findIndex(
        ([r, c]) => r === row && c === col
      );
      return index !== -1 ? index * 75 : 999999;
    }

    case "plus-pattern": {
      const index = PLUS_PATTERN_ORDER.findIndex(
        ([r, c]) => r === row && c === col
      );
      return index !== -1 ? index * 150 : 999999;
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

    case "single-dot-center":
      return row === 1 && col === 1 ? 0 : 999999;

    case "top-row":
      return row === 0 ? col * 150 : 999999;

    case "bottom-row":
      return row === 2 ? col * 150 : 999999;

    case "left-column":
      return col === 0 ? row * 150 : 999999;

    case "right-column":
      return col === 2 ? row * 150 : 999999;

    case "opposite-corners-a":
      return row === 0 && col === 0 ? 0 : row === 2 && col === 2 ? 300 : 999999;

    case "opposite-corners-b":
      return row === 0 && col === 2 ? 0 : row === 2 && col === 0 ? 300 : 999999;

    case "four-corners-only": {
      const index = FOUR_CORNERS_ORDER.findIndex(
        ([r, c]) => r === row && c === col
      );
      return index !== -1 ? index * 100 : 999999;
    }

    case "frame-wave": {
      const index = ORBIT_OUTER_ORDER.findIndex(
        ([r, c]) => r === row && c === col
      );
      return index !== -1 ? index * 75 : 999999;
    }

    case "frame-bounce": {
      const index = ORBIT_OUTER_ORDER.findIndex(
        ([r, c]) => r === row && c === col
      );
      if (index === -1) return 999999;
      const forwardDelay = index * 75;
      const backwardDelay = (ORBIT_OUTER_ORDER.length - 1 - index) * 75;
      return Math.min(forwardDelay, backwardDelay);
    }

    case "edges-only": {
      const index = EDGES_ONLY_ORDER.findIndex(
        ([r, c]) => r === row && c === col
      );
      return index !== -1 ? index * 100 : 999999;
    }

    case "quad-top-left":
      return row <= 1 && col <= 1 ? (row + col) * 100 : 999999;

    case "quad-top-right":
      return row <= 1 && col >= 1 ? (row + (2 - col)) * 100 : 999999;

    case "quad-bottom-left":
      return row >= 1 && col <= 1 ? (2 - row + col) * 100 : 999999;

    case "quad-bottom-right":
      return row >= 1 && col >= 1 ? (2 - row + (2 - col)) * 100 : 999999;

    case "l-shape-tl":
      return row === 0 || col === 0 ? (row + col) * 100 : 999999;

    case "l-shape-tr":
      return row === 0 || col === 2 ? (row + (2 - col)) * 100 : 999999;

    case "l-shape-bl":
      return row === 2 || col === 0 ? (2 - row + col) * 100 : 999999;

    case "l-shape-br":
      return row === 2 || col === 2 ? (2 - row + (2 - col)) * 100 : 999999;

    case "t-shape-horizontal":
      return row === 0 || col === 1 ? (row + Math.abs(col - 1)) * 100 : 999999;

    case "t-shape-vertical":
      return col === 0 || row === 1 ? (col + Math.abs(row - 1)) * 100 : 999999;

    case "perimeter-sequential": {
      const index = ORBIT_OUTER_ORDER.findIndex(
        ([r, c]) => r === row && c === col
      );
      return index !== -1 ? index * 75 : 999999;
    }

    default:
      return row * 150;
  }
}
