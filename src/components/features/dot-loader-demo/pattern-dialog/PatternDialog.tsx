import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { DotLoader } from "@/components/ui/dot-loader/dot-loader";
import type {
  AnimationPattern,
  DotColor,
} from "@/components/ui/dot-loader/types";
import { ANIMATION_PATTERNS } from "@/components/ui/dot-loader/animation-patterns";

interface PatternDialogProps {
  pattern: AnimationPattern | null;
  color: DotColor;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function PatternDialog({
  pattern,
  color,
  open,
  onOpenChange,
}: PatternDialogProps) {
  if (!pattern) return null;

  const info = ANIMATION_PATTERNS[pattern];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{info.nameEn}</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center gap-6 py-8">
          <DotLoader pattern={pattern} color={color} dotSize={12} gap={4} />
          <div className="text-center">
            <p className="text-sm text-muted-foreground">{info.description}</p>
            <p className="text-xs text-muted-foreground mt-2">
              Pattern:{" "}
              <code className="bg-muted px-1 py-0.5 rounded">{pattern}</code>
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
