import React from "react";
import { navContent } from "../../content";
import { T, transition } from "../../styles/tokens";

export function IconRail() {
  const items = navContent.items.map((item: any) => ({ ...item, active: item.id === navContent.currentSection }));

  return (
    <aside
      style={{
        width: 56,
        background: "#111820",
        borderRight: "1px solid " + T.border,
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 0",
        flexShrink: 0,
      }}
    >
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 10,
          background: "#3B82F6",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 800,
          fontSize: 14,
        }}
      >
        S
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 14, alignItems: "center" }}>
        {items.map((item: any) => (
          <div
            key={item.id}
            title={item.label}
            style={{
              width: 28,
              height: 28,
              borderRadius: 8,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: item.active ? T.text : T.subtle,
              background: item.active ? T.active : "transparent",
              border: item.active ? "1px solid " + T.borderHover : "1px solid transparent",
              cursor: "pointer",
              transition,
            }}
          >
            {item.icon}
          </div>
        ))}
        <div style={{ width: 20, height: 1, background: T.border, margin: "6px 0" }} />
        <div style={{ width: 28, height: 28, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", color: T.subtle }}>
          ⚙
        </div>
      </div>

      <div style={{ width: 32, height: 32, borderRadius: "50%", background: T.panel2, color: T.muted, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12 }}>
        U
      </div>
    </aside>
  );
}
