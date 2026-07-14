import React from "react";
import { T } from "../../styles/tokens";

export function TopBar({ role, level, progress }: any) {
  return (
    <header
      style={{
        height: 44,
        background: T.panel,
        borderBottom: "1px solid " + T.border,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 18px",
      }}
    >
      <div style={{ color: T.muted, fontSize: 13 }}>
        Onboarding / {role.title} / {level.title}
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <span style={{ color: T.muted, fontSize: 13 }}>Progress:</span>
        <div style={{ width: 120, height: 4, borderRadius: 99, background: T.panel2, overflow: "hidden", border: "1px solid " + T.border }}>
          <div style={{ width: progress.percent + "%", height: "100%", background: T.accent }} />
        </div>
        <span style={{ color: T.text, fontSize: 13 }}>{progress.percent}%</span>
        <span style={{ color: T.subtle, fontSize: 12 }}>
          {progress.complete}/{progress.total}
        </span>
      </div>
    </header>
  );
}
