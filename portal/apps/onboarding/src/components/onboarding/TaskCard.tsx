import React from "react";
import { getGuide } from "../../utils/onboarding";
import { T } from "../../styles/tokens";
import { Badge, Button, Panel } from "../ui";

export function TaskCard({ role, task, done, onOpenTask, onToggleTask }: any) {
  const key = role.id + ":" + task.id;
  const checked = Boolean(done[key]);
  const guide = getGuide(task.id);

  return (
    <Panel style={{ padding: 14, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, borderColor: checked ? T.accent : T.border }}>
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ color: checked ? T.muted : T.text, fontWeight: 700, textDecoration: checked ? "line-through" : "none" }}>{task.title}</div>
          {checked && <Badge tone="accent">completed</Badge>}
        </div>
        <div style={{ color: T.muted, fontSize: 13, marginTop: 6 }}>{guide.goal}</div>
        <div style={{ color: T.subtle, fontSize: 12, marginTop: 6, fontFamily: "monospace" }}>{task.link}</div>
      </div>

      <div style={{ display: "flex", gap: 8, alignItems: "center", flexShrink: 0 }}>
        <Button onClick={() => onOpenTask(task.id)} variant={checked ? "secondary" : "primary"}>
          {checked ? "Повторить" : "Начать"}
        </Button>
        <button
          onClick={() => onToggleTask(key)}
          style={{
            width: 24,
            height: 24,
            borderRadius: 999,
            border: "1px solid " + (checked ? T.accent : T.borderHover),
            background: checked ? T.accent : "transparent",
            color: "#07120A",
            cursor: "pointer",
          }}
        >
          {checked ? "✓" : ""}
        </button>
      </div>
    </Panel>
  );
}
