import Link from "next/link";
import { ModeToggle } from "@/components/shared/mode-toggle/ModeToggle";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-transparent backdrop-blur-md">
      <div className="flex items-center justify-between px-6 py-6">
        <div>
          <h1 className="font-bold text-3xl mb-2">
            <Link href="/">Dot Loader Animation Showcase</Link>
          </h1>
          <p className="text-muted-foreground text-sm">
            3×3グリッドの58種類のアニメーションパターン
          </p>
        </div>
        <div className="flex items-center gap-5">
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};
