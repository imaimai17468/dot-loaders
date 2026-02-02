# DotLoader

A customizable 3×3 dot grid loading animation component with 56 distinct animation patterns, 8 color options, and full dark mode support.

## Features

- ✨ **56 Animation Patterns** across 11 categories
- 🎨 **8 Color Options** with automatic dark mode variants
- 📐 **4 Preset Sizes** xs (12px), sm (15px), md (18px), lg (24px)
- ♿ **Accessibility Built-in** respects `prefers-reduced-motion`
- 📦 **Zero Dependencies** no external UI library required
- 🌙 **Dark Mode Ready** automatic color adaptation
- 🎯 **TypeScript Native** fully typed API

## Installation

```bash
npx shadcn@latest add dot-loader
```

## Usage

### Basic Usage

```tsx
import { DotLoader } from "@/components/ui/dot-loader/dot-loader"

export default function LoadingPage() {
  return <DotLoader />
}
```

### With Custom Pattern

```tsx
<DotLoader pattern="spiral-clockwise" />
```

### With Custom Color

```tsx
<DotLoader color="purple" />
```

### With Preset Size

```tsx
<DotLoader size="xs" />  {/* 12px */}
<DotLoader size="sm" />  {/* 15px */}
<DotLoader size="md" />  {/* 18px - default */}
<DotLoader size="lg" />  {/* 24px */}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `pattern` | `AnimationPattern` | `"horizontal-wave"` | Animation pattern to display (56 options) |
| `color` | `DotColor` | `"cyan"` | Color theme for dots (8 options) |
| `size` | `"xs" \| "sm" \| "md" \| "lg"` | `"md"` | Preset size (12px, 15px, 18px, 24px) |
| `className` | `string` | - | Additional CSS classes for the container |

## Animation Patterns

### Wave Patterns (8)

Sequential wave animations moving across the grid.

```tsx
<DotLoader pattern="horizontal-wave" />
<DotLoader pattern="horizontal-wave-reverse" />
<DotLoader pattern="vertical-wave" />
<DotLoader pattern="vertical-wave-reverse" />
<DotLoader pattern="zigzag-horizontal" />
<DotLoader pattern="zigzag-vertical" />
<DotLoader pattern="bounce-horizontal" />
<DotLoader pattern="bounce-vertical" />
```

### Diagonal Patterns (4)

Diagonal wave propagation across the grid.

```tsx
<DotLoader pattern="diagonal-forward" />
<DotLoader pattern="diagonal-backward" />
<DotLoader pattern="diagonal-reverse" />
<DotLoader pattern="diagonal-reverse-backward" />
```

### Center Patterns (4)

Animations radiating from or converging to the center.

```tsx
<DotLoader pattern="center-outward" />
<DotLoader pattern="center-inward" />
<DotLoader pattern="spiral-clockwise" />
<DotLoader pattern="spiral-counterclockwise" />
```

### Corner Patterns (5)

Animations starting from corners.

```tsx
<DotLoader pattern="corner-top-left" />
<DotLoader pattern="corner-top-right" />
<DotLoader pattern="corner-bottom-left" />
<DotLoader pattern="corner-bottom-right" />
<DotLoader pattern="corners-inward" />
```

### Rotation Patterns (5)

Circular and rotating motion patterns.

```tsx
<DotLoader pattern="rotate-clockwise" />
<DotLoader pattern="rotate-counterclockwise" />
<DotLoader pattern="cross-rotate" />
<DotLoader pattern="pinwheel" />
```

### Complex Patterns (6)

Sophisticated alternating and geometric patterns.

```tsx
<DotLoader pattern="checkerboard-a" />
<DotLoader pattern="checkerboard-b" />
<DotLoader pattern="alternating-rows" />
<DotLoader pattern="alternating-columns" />
<DotLoader pattern="x-pattern" />
<DotLoader pattern="plus-pattern" />
```

### Special Patterns (4)

Unique special-purpose patterns.

```tsx
<DotLoader pattern="single-row" />
<DotLoader pattern="single-column" />
<DotLoader pattern="cross-expand" />
<DotLoader pattern="random" />
```

### Minimal Patterns (7)

Minimalist patterns with fewer active dots.

```tsx
<DotLoader pattern="single-dot-center" />
<DotLoader pattern="top-row" />
<DotLoader pattern="bottom-row" />
<DotLoader pattern="left-column" />
<DotLoader pattern="right-column" />
<DotLoader pattern="opposite-corners-a" />
<DotLoader pattern="opposite-corners-b" />
```

### Edge Patterns (4)

Patterns focusing on the grid perimeter.

```tsx
<DotLoader pattern="four-corners-only" />
<DotLoader pattern="frame-wave" />
<DotLoader pattern="frame-bounce" />
<DotLoader pattern="edges-only" />
```

### Quad Patterns (4)

Patterns animating quadrant sections.

```tsx
<DotLoader pattern="quad-top-left" />
<DotLoader pattern="quad-top-right" />
<DotLoader pattern="quad-bottom-left" />
<DotLoader pattern="quad-bottom-right" />
```

### Shape Patterns (7)

L-shapes, T-shapes, and perimeter patterns.

```tsx
<DotLoader pattern="l-shape-tl" />
<DotLoader pattern="l-shape-tr" />
<DotLoader pattern="l-shape-bl" />
<DotLoader pattern="l-shape-br" />
<DotLoader pattern="t-shape-horizontal" />
<DotLoader pattern="t-shape-vertical" />
```

## Color Options

All colors automatically adapt to dark mode.

```tsx
<DotLoader color="cyan" />      {/* Light: cyan-400, Dark: cyan-300 */}
<DotLoader color="purple" />    {/* Light: purple-400, Dark: purple-300 */}
<DotLoader color="green" />     {/* Light: green-400, Dark: green-300 */}
<DotLoader color="orange" />    {/* Light: orange-400, Dark: orange-300 */}
<DotLoader color="pink" />      {/* Light: pink-400, Dark: pink-300 */}
<DotLoader color="blue" />      {/* Light: blue-400, Dark: blue-300 */}
<DotLoader color="red" />       {/* Light: red-400, Dark: red-300 */}
<DotLoader color="yellow" />    {/* Light: yellow-400, Dark: yellow-300 */}
```

## Customization Examples

### Large Loader with Spacing

```tsx
<DotLoader
  dotSize={12}
  gap={8}
  pattern="spiral-clockwise"
  color="purple"
/>
```

### Fast Animation

```tsx
<DotLoader
  cycleDuration={400}
  pattern="rotate-clockwise"
/>
```

### Slow, Minimal Animation

```tsx
<DotLoader
  cycleDuration={1200}
  pattern="single-dot-center"
  dotSize={10}
/>
```

### Centered in Container

```tsx
<div className="flex items-center justify-center min-h-screen">
  <DotLoader pattern="pinwheel" color="cyan" />
</div>
```

## Pattern Categories Reference

Access pattern metadata programmatically:

```tsx
import { ANIMATION_PATTERNS, PATTERN_CATEGORIES } from "@/components/ui/dot-loader/animation-patterns"

// Get all wave patterns
const wavePatterns = PATTERN_CATEGORIES.wave.patterns
// ["horizontal-wave", "horizontal-wave-reverse", ...]

// Get pattern metadata
const patternInfo = ANIMATION_PATTERNS["spiral-clockwise"]
// {
//   key: "spiral-clockwise",
//   nameJa: "らせん(時計回り)",
//   nameEn: "Spiral Clockwise",
//   description: "Spirals clockwise from the outside edge",
//   category: "center"
// }
```

## Accessibility

The component automatically respects `prefers-reduced-motion`:

```css
@media (prefers-reduced-motion: reduce) {
  .dot {
    animation: none !important;
    opacity: 0.5;
  }
}
```

When motion reduction is preferred, all dots display at 50% opacity without animation.

## TypeScript Support

Full TypeScript support with exported types:

```tsx
import type {
  DotLoaderProps,
  AnimationPattern,
  DotColor,
  AnimationPatternDefinition
} from "@/components/ui/dot-loader/types"

const pattern: AnimationPattern = "spiral-clockwise"
const color: DotColor = "purple"

const props: DotLoaderProps = {
  pattern,
  color,
  dotSize: 8,
  gap: 4,
  cycleDuration: 600
}
```

## Advanced Usage

### Dynamic Pattern Selection

```tsx
"use client"

import { useState } from "react"
import { DotLoader } from "@/components/ui/dot-loader/dot-loader"
import { PATTERN_CATEGORIES } from "@/components/ui/dot-loader/animation-patterns"
import type { AnimationPattern } from "@/components/ui/dot-loader/types"

export function DynamicLoader() {
  const [pattern, setPattern] = useState<AnimationPattern>("horizontal-wave")

  return (
    <div>
      <DotLoader pattern={pattern} />
      <select onChange={(e) => setPattern(e.target.value as AnimationPattern)}>
        {Object.entries(PATTERN_CATEGORIES).map(([category, { patterns }]) =>
          patterns.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))
        )}
      </select>
    </div>
  )
}
```

### Pattern Showcase Grid

```tsx
import { DotLoader } from "@/components/ui/dot-loader/dot-loader"
import { PATTERN_CATEGORIES } from "@/components/ui/dot-loader/animation-patterns"

export function PatternShowcase() {
  return (
    <div className="grid grid-cols-4 gap-8">
      {Object.entries(PATTERN_CATEGORIES).map(([category, { label, patterns }]) => (
        <div key={category}>
          <h3 className="text-sm font-medium mb-4">{label}</h3>
          <div className="space-y-4">
            {patterns.map((pattern) => (
              <div key={pattern} className="flex items-center gap-4">
                <DotLoader pattern={pattern} color="cyan" />
                <span className="text-xs">{pattern}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
```

## License

MIT
