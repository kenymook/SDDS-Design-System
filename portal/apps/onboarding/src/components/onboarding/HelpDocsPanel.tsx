import React, { useState } from "react";
import { helpDocsContent } from "../../content";
import { T } from "../../styles/tokens";
import { Panel } from "../ui";

export function HelpDocsPanel() {
  const [open, setOpen] = useState(false);

  return (
    <section style={{ marginTop: 28 }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          border: "1px solid " + T.border,
          background: T.panel,
          color: T.text,
          borderRadius: 12,
          padding: "16px 18px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        <div>
          <div style={{ fontWeight: 800 }}>{helpDocsContent.title}</div>
          <div style={{ color: T.muted, fontSize: 13, marginTop: 4 }}>{helpDocsContent.description}</div>
        </div>
        <div style={{ color: T.subtle }}>{open ? "Свернуть" : "Открыть"}</div>
      </button>

      {open && (
        <div style={{ display: "grid", gap: 12, marginTop: 14 }}>
          {helpDocsContent.sections.map((section: any) => (
            <Panel key={section.title} style={{ padding: 18 }}>
              <div style={{ color: T.text, fontWeight: 800 }}>{section.title}</div>
              {section.items ? (
                <ul style={{ color: T.muted, lineHeight: 1.7 }}>
                  {section.items.map((item: string) => <li key={item}>{item}</li>)}
                </ul>
              ) : (
                <p style={{ color: T.muted }}>{section.text}</p>
              )}
            </Panel>
          ))}
        </div>
      )}
    </section>
  );
}
