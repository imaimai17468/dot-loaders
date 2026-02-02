"use client";

import { useState } from "react";

const INSTALL_COMMAND =
  "npx shadcn@latest add https://dot-loaders.vercel.app/registry/dot-loader.json";

export function InstallCommand() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(INSTALL_COMMAND);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center gap-2 bg-muted rounded-lg p-1 max-w-fit">
      <code className="text-sm px-3 py-2 select-all">{INSTALL_COMMAND}</code>
      <button
        onClick={handleCopy}
        className="shrink-0 px-3 py-2 text-sm font-medium bg-background hover:bg-accent rounded-md transition-colors"
        type="button"
      >
        {copied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
}
