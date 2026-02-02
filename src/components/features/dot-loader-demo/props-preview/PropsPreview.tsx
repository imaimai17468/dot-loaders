import { DotLoader } from "@/components/features/dot-loader/DotLoader";
import type { DotLoaderSize } from "@/components/features/dot-loader/types";

const SIZES: Array<{ value: DotLoaderSize; label: string; px: string }> = [
  { value: "xs", label: "xs", px: "12px" },
  { value: "sm", label: "sm", px: "15px" },
  { value: "md", label: "md", px: "18px" },
  { value: "lg", label: "lg", px: "24px" },
];

export function PropsPreview() {
  return (
    <div className="flex flex-col gap-8">
      {/* Size Preview */}
      <div>
        <h2 className="text-sm font-medium text-muted-foreground mb-4">Size</h2>
        <div className="flex items-end gap-8">
          {SIZES.map(({ value, label, px }) => (
            <div key={value} className="flex flex-col items-center gap-2">
              <DotLoader size={value} />
              <div className="text-center">
                <span className="text-xs font-medium">{label}</span>
                <span className="text-xs text-muted-foreground ml-1">
                  ({px})
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Props Table */}
      <div>
        <h2 className="text-sm font-medium text-muted-foreground mb-4">
          Props
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 pr-4 font-medium">Prop</th>
                <th className="text-left py-2 pr-4 font-medium">Type</th>
                <th className="text-left py-2 font-medium">Default</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr className="border-b border-border/50">
                <td className="py-2 pr-4">
                  <code className="text-foreground">pattern</code>
                </td>
                <td className="py-2 pr-4">
                  <code>AnimationPattern</code>
                </td>
                <td className="py-2">
                  <code>"horizontal-wave"</code>
                </td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-4">
                  <code className="text-foreground">color</code>
                </td>
                <td className="py-2 pr-4">
                  <code>"cyan" | "purple" | "green" | ...</code>
                </td>
                <td className="py-2">
                  <code>"cyan"</code>
                </td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-4">
                  <code className="text-foreground">size</code>
                </td>
                <td className="py-2 pr-4">
                  <code>"xs" | "sm" | "md" | "lg"</code>
                </td>
                <td className="py-2">
                  <code>"md"</code>
                </td>
              </tr>
              <tr>
                <td className="py-2 pr-4">
                  <code className="text-foreground">className</code>
                </td>
                <td className="py-2 pr-4">
                  <code>string</code>
                </td>
                <td className="py-2">
                  <code>-</code>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
