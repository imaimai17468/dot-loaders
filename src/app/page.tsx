import { PixelLoaderDemo } from "@/components/features/pixel-loader-demo/PixelLoaderDemo";
import { InstallCommand } from "@/components/features/pixel-loader-demo/install-command/InstallCommand";
import { PropsPreview } from "@/components/features/pixel-loader-demo/props-preview/PropsPreview";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Install Command */}
        <div className="mb-8">
          <InstallCommand />
        </div>

        {/* Props & Size Preview */}
        <div className="mb-8 pb-8 border-b border-border/50">
          <PropsPreview />
        </div>

        {/* Demo */}
        <PixelLoaderDemo />
      </div>
    </main>
  );
}
