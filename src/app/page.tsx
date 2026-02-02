import { DotLoaderDemo } from "@/components/features/dot-loader-demo/DotLoaderDemo";
import { InstallCommand } from "@/components/features/dot-loader-demo/install-command/InstallCommand";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Install Command */}
        <div className="mb-8">
          <InstallCommand />
        </div>

        {/* Demo */}
        <DotLoaderDemo />
      </div>
    </main>
  );
}
