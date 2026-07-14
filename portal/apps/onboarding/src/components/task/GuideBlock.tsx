import React from "react";
import { T } from "../../styles/tokens";
import { Panel } from "../ui";

export function GuideBlock({ title, items, tone }: any) {
  const color = tone === "danger" ? T.danger : tone === "accent" ? T.accent : T.text;

  return (
    <Panel style={{ padding: 16, borderColor: tone === "danger" ? T.danger : tone === "accent" ? T.accent : T.border }}>
      <div style={{ color, fontWeight: 800, marginBottom: 10 }}>{title}</div>
      <ul style={{ color: T.muted, margin: 0, paddingLeft: 18, lineHeight: 1.7 }}>
        {items.map((item: string) => <li key={item}>{item}</li>)}
      </ul>
    </Panel>
  );
}
