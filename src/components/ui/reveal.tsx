import type { ReactNode } from "react";

/* Scroll reveals are intentionally disabled — content is present and visible
   from first paint. The wrapper is kept so page structure stays unchanged. */
export function Reveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return <div className={`reveal ${className}`.trim()}>{children}</div>;
}
