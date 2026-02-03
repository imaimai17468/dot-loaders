# PixelLoader

A customizable 3×3 pixel grid loading animation component with 56 distinct animation patterns, 8 color options, and full dark mode support.

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
npx shadcn@latest add https://pixel-loaders.vercel.app/r/pixel-loader.json
```

## Usage

### Basic Usage

```tsx
import { PixelLoader } from "@/components/ui/pixel-loader/pixel-loader"

export default function LoadingPage() {
  return <PixelLoader />
}
```

### With Custom Pattern

```tsx
<PixelLoader pattern="spiral-clockwise" />
```

### With Custom Color

```tsx
<PixelLoader color="purple" />
```

### With Preset Size

```tsx
<PixelLoader size="xs" />  {/* 12px */}
<PixelLoader size="sm" />  {/* 15px */}
<PixelLoader size="md" />  {/* 18px - default */}
<PixelLoader size="lg" />  {/* 24px */}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `pattern` | `AnimationPattern` | `"horizontal-wave"` | Animation pattern to display (56 options) |
| `color` | `PixelColor` | `"cyan"` | Color theme for pixels (8 options) |
| `size` | `"xs" \| "sm" \| "md" \| "lg"` | `"md"` | Preset size (12px, 15px, 18px, 24px) |
| `className` | `string` | - | Additional CSS classes for the container |

## Color Options

All colors automatically adapt to dark mode.

```tsx
<PixelLoader color="cyan" />
<PixelLoader color="purple" />
<PixelLoader color="green" />
<PixelLoader color="orange" />
<PixelLoader color="pink" />
<PixelLoader color="blue" />
<PixelLoader color="red" />
<PixelLoader color="yellow" />
```

## Accessibility

The component automatically respects `prefers-reduced-motion`:

```css
@media (prefers-reduced-motion: reduce) {
  .pixel {
    animation: none !important;
    opacity: 0.5;
  }
}
```

## TypeScript Support

Full TypeScript support with exported types:

```tsx
import type {
  PixelLoaderProps,
  AnimationPattern,
  PixelColor,
  PixelLoaderSize
} from "@/components/ui/pixel-loader/types"
```

## License

MIT
