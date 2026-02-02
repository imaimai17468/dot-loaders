# DotLoader Installation Test Guide

This guide walks through testing the DotLoader component installation in a fresh Next.js project.

## Prerequisites

- Node.js 18+ or Bun
- A fresh Next.js 15+ project with App Router
- Tailwind CSS configured
- shadcn/ui initialized

## Installation Steps

### 1. Create Test Project

```bash
# Using npx
npx create-next-app@latest test-dot-loader --typescript --tailwind --app

# Or using bun
bun create next-app test-dot-loader --typescript --tailwind --app

cd test-dot-loader
```

### 2. Initialize shadcn/ui

```bash
npx shadcn@latest init
```

Configuration options:
- Style: Default
- Color: Slate (or any)
- CSS variables: Yes
- Components directory: `@/components`

### 3. Install DotLoader (Manual for Testing)

Since the component isn't in the official registry yet, manually copy the files:

```bash
# Create the directory
mkdir -p components/ui/dot-loader

# Copy all component files
cp /path/to/dot-loaders/registry/ui/dot-loader/dot-loader.tsx components/ui/dot-loader/
cp /path/to/dot-loaders/registry/ui/dot-loader/types.ts components/ui/dot-loader/
cp /path/to/dot-loaders/registry/ui/dot-loader/animation-patterns.ts components/ui/dot-loader/
cp /path/to/dot-loaders/registry/ui/dot-loader/get-animation-delay.ts components/ui/dot-loader/
cp /path/to/dot-loaders/registry/ui/dot-loader/dot-loader.css components/ui/dot-loader/
```

### 4. Create Test Page

Edit `app/page.tsx`:

```tsx
import { DotLoader } from "@/components/ui/dot-loader/dot-loader"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 p-24">
      <h1 className="text-4xl font-bold">DotLoader Test</h1>

      {/* Basic loader */}
      <div>
        <h2 className="text-sm text-muted-foreground mb-2">Default</h2>
        <DotLoader />
      </div>

      {/* Different patterns */}
      <div className="grid grid-cols-3 gap-8">
        <div>
          <h2 className="text-sm text-muted-foreground mb-2">Spiral</h2>
          <DotLoader pattern="spiral-clockwise" color="purple" />
        </div>
        <div>
          <h2 className="text-sm text-muted-foreground mb-2">Wave</h2>
          <DotLoader pattern="horizontal-wave" color="cyan" />
        </div>
        <div>
          <h2 className="text-sm text-muted-foreground mb-2">Pinwheel</h2>
          <DotLoader pattern="pinwheel" color="green" />
        </div>
      </div>

      {/* Custom size */}
      <div>
        <h2 className="text-sm text-muted-foreground mb-2">Large with Gap</h2>
        <DotLoader
          pattern="rotate-clockwise"
          color="orange"
          dotSize={12}
          gap={8}
        />
      </div>
    </main>
  )
}
```

### 5. Test Dark Mode

Update `app/layout.tsx` to add dark mode toggle or class:

```tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark"> {/* Add dark class */}
      <body>{children}</body>
    </html>
  )
}
```

### 6. Run Development Server

```bash
npm run dev
# or
bun dev
```

Visit `http://localhost:3000`

## Verification Checklist

### Visual Tests
- [ ] Default loader displays with cyan color
- [ ] Spiral pattern rotates correctly
- [ ] Wave pattern flows smoothly
- [ ] Pinwheel pattern animates from center
- [ ] Large loader with gap displays correctly
- [ ] All animations loop infinitely
- [ ] Animations are smooth (no jank)

### Pattern Tests
Test a few patterns from each category:

```tsx
// Add to page.tsx
const patterns = [
  "horizontal-wave",
  "diagonal-forward",
  "center-outward",
  "corner-top-left",
  "rotate-clockwise",
  "checkerboard-a",
  "single-row",
  "single-dot-center",
  "four-corners-only",
  "quad-top-left",
  "l-shape-tl",
] as const

<div className="grid grid-cols-4 gap-4">
  {patterns.map((pattern) => (
    <div key={pattern}>
      <DotLoader pattern={pattern} />
    </div>
  ))}
</div>
```

- [ ] All 11 representative patterns work
- [ ] No console errors
- [ ] No TypeScript errors

### Color Tests

```tsx
const colors = ["cyan", "purple", "green", "orange", "pink", "blue", "red", "yellow"] as const

<div className="flex gap-4">
  {colors.map((color) => (
    <DotLoader key={color} pattern="spiral-clockwise" color={color} />
  ))}
</div>
```

- [ ] All 8 colors display correctly
- [ ] Colors look good in light mode
- [ ] Colors look good in dark mode
- [ ] Glow effects are visible

### Customization Tests

```tsx
<DotLoader dotSize={4} />           // Small
<DotLoader dotSize={16} />          // Large
<DotLoader gap={8} />               // With gap
<DotLoader cycleDuration={400} />   // Fast
<DotLoader cycleDuration={1200} />  // Slow
```

- [ ] Dot size changes correctly
- [ ] Gap spacing works
- [ ] Animation speed adjusts
- [ ] No layout shifts

### Accessibility Tests

1. Enable reduced motion in OS settings
2. Reload the page
3. Verify dots display at 50% opacity without animation

- [ ] Reduced motion is respected
- [ ] Dots remain visible but static

### TypeScript Tests

```tsx
import type { AnimationPattern, DotColor } from "@/components/ui/dot-loader/types"

const pattern: AnimationPattern = "spiral-clockwise" // Should work
const color: DotColor = "purple" // Should work
const invalid: AnimationPattern = "invalid" // Should error
```

- [ ] TypeScript autocomplete works
- [ ] Type errors are caught
- [ ] All types are exported correctly

### Build Tests

```bash
npm run build
# or
bun run build
```

- [ ] Build succeeds with no errors
- [ ] No warnings about missing dependencies
- [ ] Bundle size is reasonable
- [ ] Static generation works

## Expected Results

### Build Output
```
Route (app)
├ ○ /          # Static page with loaders
└ ○ /_not-found

○  (Static)  prerendered as static content
```

### Performance
- First Load JS: Should be minimal (<5KB for component)
- No hydration errors
- Smooth 60fps animations
- No memory leaks on pattern changes

### Browser Compatibility
Test in:
- [ ] Chrome/Edge (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Mobile Safari
- [ ] Mobile Chrome

## Troubleshooting

### Issue: Imports not resolving
**Solution**: Check that `@` alias is configured in `tsconfig.json`:
```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

### Issue: Tailwind classes not applying
**Solution**: Ensure `tailwind.config.ts` includes the component path:
```ts
export default {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
}
```

### Issue: CSS animations not working
**Solution**: Verify that `dot-loader.css` is imported in the component file.

### Issue: Dark mode colors not changing
**Solution**: Ensure your project has `darkMode: "class"` in `tailwind.config.ts`:
```ts
export default {
  darkMode: "class",
  // ...
}
```

## Advanced Testing

### Pattern Showcase Component

```tsx
"use client"

import { useState } from "react"
import { DotLoader } from "@/components/ui/dot-loader/dot-loader"
import { PATTERN_CATEGORIES } from "@/components/ui/dot-loader/animation-patterns"
import type { AnimationPattern, DotColor } from "@/components/ui/dot-loader/types"

export function DotLoaderShowcase() {
  const [selectedPattern, setSelectedPattern] = useState<AnimationPattern>("horizontal-wave")
  const [selectedColor, setSelectedColor] = useState<DotColor>("cyan")

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-center p-12 border rounded-lg">
        <DotLoader
          pattern={selectedPattern}
          color={selectedColor}
          dotSize={12}
          gap={4}
        />
      </div>

      <div className="grid grid-cols-3 gap-4">
        {Object.entries(PATTERN_CATEGORIES).map(([key, { label, patterns }]) => (
          <div key={key}>
            <h3 className="font-medium mb-2">{label}</h3>
            <div className="space-y-1">
              {patterns.map((pattern) => (
                <button
                  key={pattern}
                  onClick={() => setSelectedPattern(pattern)}
                  className={`w-full text-left text-sm px-2 py-1 rounded ${
                    selectedPattern === pattern
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-accent"
                  }`}
                >
                  {pattern}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
```

### Random Pattern Generator

```tsx
"use client"

import { useState, useEffect } from "react"
import { DotLoader } from "@/components/ui/dot-loader/dot-loader"
import { PATTERN_CATEGORIES } from "@/components/ui/dot-loader/animation-patterns"
import type { AnimationPattern, DotColor } from "@/components/ui/dot-loader/types"

const allPatterns = Object.values(PATTERN_CATEGORIES).flatMap(cat => cat.patterns)
const colors: DotColor[] = ["cyan", "purple", "green", "orange", "pink", "blue", "red", "yellow"]

export function RandomDotLoader() {
  const [pattern, setPattern] = useState<AnimationPattern>(allPatterns[0])
  const [color, setColor] = useState<DotColor>("cyan")

  useEffect(() => {
    const interval = setInterval(() => {
      setPattern(allPatterns[Math.floor(Math.random() * allPatterns.length)])
      setColor(colors[Math.floor(Math.random() * colors.length)])
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col items-center gap-4">
      <DotLoader pattern={pattern} color={color} dotSize={12} gap={4} />
      <p className="text-sm text-muted-foreground">
        {pattern} • {color}
      </p>
    </div>
  )
}
```

## Success Criteria

All tests pass when:
- ✅ Component installs without errors
- ✅ All 58 patterns animate correctly
- ✅ All 8 colors work in light and dark mode
- ✅ TypeScript types are fully functional
- ✅ Build succeeds with no warnings
- ✅ Performance is excellent (60fps)
- ✅ Accessibility features work
- ✅ No runtime errors in console
- ✅ Works across all major browsers
- ✅ Mobile responsive and performs well

## Next Steps After Testing

1. Document any issues found
2. Fix any bugs discovered
3. Optimize performance if needed
4. Create video demo
5. Prepare for registry submission
6. Write blog post or documentation site
