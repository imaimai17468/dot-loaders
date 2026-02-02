import { DotLoaderDemo } from "@/components/features/dot-loader-demo/DotLoaderDemo";
import { ModeToggle } from "@/components/shared/mode-toggle/ModeToggle";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="fixed top-4 right-4">
        <ModeToggle />
      </div>
      <DotLoaderDemo />
    </main>
  );
}
