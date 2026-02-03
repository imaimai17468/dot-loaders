import type { Metadata } from "next";
// oxlint-disable-next-line import/no-unassigned-import -- CSS side-effect import
import "./globals.css";
import { Header } from "@/components/shared/header/Header";
import { ThemeProvider } from "@/components/shared/theme-provider/ThemeProvider";

const siteName = "Pixel Loaders";
const siteDescription =
  "A customizable 3×3 pixel grid loading animation component for React. 56 animation patterns, 8 colors, dark mode support. Install via shadcn/ui CLI.";
const siteUrl = "https://pixel-loaders.vercel.app";

export const metadata: Metadata = {
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    "React",
    "Loading Animation",
    "Pixel Loader",
    "shadcn/ui",
    "Tailwind CSS",
    "Next.js",
    "TypeScript",
    "Component Library",
    "UI Components",
    "Animation Patterns",
    "Dark Mode",
    "Accessibility",
  ],
  authors: [{ name: "imaimai17468", url: "https://github.com/imaimai17468" }],
  creator: "imaimai17468",
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName,
    title: siteName,
    description: siteDescription,
    images: [
      {
        url: "/ogp-image.png",
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
    images: ["/ogp-image.png"],
    creator: "@imaimai17468",
  },
  icons: {
    icon: "/icon-128x128.png",
    apple: "/icon-128x128.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body
        className="antialiased"
        style={{
          fontFamily:
            '"Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic Pro", "ヒラギノ角ゴ Pro W3", "メイリオ", Meiryo, "游ゴシック", YuGothic, sans-serif',
        }}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-dvh flex-col gap-16">
            <Header />
            <div className="flex w-full flex-1 justify-center px-6 md:px-4">
              <div className="container w-full">{children}</div>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
