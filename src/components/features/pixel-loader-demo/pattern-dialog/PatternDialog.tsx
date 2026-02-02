"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { PixelLoader } from "@/components/features/pixel-loader/PixelLoader";
import type {
  AnimationPattern,
  PixelColor,
} from "@/components/features/pixel-loader/types";
import { ANIMATION_PATTERNS } from "@/components/features/pixel-loader/animation-patterns";

interface PatternDialogProps {
  pattern: AnimationPattern | null;
  color: PixelColor;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function PatternDialog({
  pattern,
  color,
  open,
  onOpenChange,
}: PatternDialogProps) {
  const [copied, setCopied] = useState(false);

  if (!pattern) return null;

  const info = ANIMATION_PATTERNS[pattern];

  const usageCode = `<PixelLoader pattern="${pattern}" color="${color}" />`;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(usageCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{info.nameEn}</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          {/* Preview */}
          <div className="flex flex-col items-center gap-3 py-6 bg-muted/30 rounded-lg">
            <PixelLoader pattern={pattern} color={color} size="lg" />
            <p className="text-sm text-muted-foreground text-center px-4">
              {info.description}
            </p>
          </div>

          {/* Usage */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-medium text-muted-foreground">
                Usage
              </span>
              <button
                onClick={handleCopy}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                type="button"
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
            <pre className="bg-muted p-3 rounded-lg text-xs overflow-x-auto">
              <code>{usageCode}</code>
            </pre>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
