import React from "react";
import { T } from "../../styles/tokens";

export function Badge({ children, tone = "neutral" }: any) {
  const styles: any = {
    neutral: { background: T.panel2, color: T.muted, border: T.border },
    accent: { background: T.accentSoft, color: T.accent, border: "transparent" },
    danger: { background: "rgba(255,90,95,0.12)", color: T.danger, border: "transparent" },
  };

  const s = styles[tone] || styles.neutral;

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "3px 8px",
        borderRadius: 999,
        background: s.background,
        color: s.color,
        border: "1px solid " + s.border,
        fontSize: 12,
        fontWeight: 700,
      }}
    >
      {children}
    </span>
  );
}
