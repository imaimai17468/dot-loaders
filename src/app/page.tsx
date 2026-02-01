import { DotLoader } from "@/components/features/dot-loader/DotLoader";
import { ModeToggle } from "@/components/shared/mode-toggle/ModeToggle";

export default function Home() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-16">
      <div className="flex flex-col items-center gap-8">
        <h1 className="font-bold text-4xl">Dot Loader Demo</h1>
        <DotLoader />
        <p className="text-muted-foreground text-sm">
          9×9 grid with wave animation and glow effect
        </p>
      </div>

      <div className="flex items-center gap-3">
        <span className="text-sm">Toggle theme to test dark mode glow:</span>
        <ModeToggle />
      </div>
    </div>
  );
}
