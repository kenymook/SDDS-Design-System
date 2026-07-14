import React from "react";
import { getGuide, getNextTask } from "../../utils/onboarding";
import { T } from "../../styles/tokens";
import { Badge, Button, Panel } from "../ui";

export function NextStep({ role, level, done, onOpenTask }: any) {
  const next = level.tasks.find((task: any) => !done[role.id + ":" + task.id]) || getNextTask(role, done);

  if (!next) {
    return (
      <Panel style={{ padding: 20, borderColor: T.accent, background: T.accentSoft }}>
        <div style={{ color: T.accent, fontWeight: 800, marginBottom: 8 }}>🎉 Трек завершён</div>
        <div style={{ color: T.muted }}>Все задания пройдены.</div>
      </Panel>
    );
  }

  const guide = getGuide(next.id);

  return (
    <Panel style={{ padding: 20, borderColor: T.accent }}>
      <div style={{ display: "flex", justifyContent: "space-between", gap: 18, alignItems: "start" }}>
        <div>
          <Badge tone="accent">Следующий шаг</Badge>
          <h2 style={{ color: T.text, fontSize: 28, margin: "12px 0 8px" }}>{next.title}</h2>
          <p style={{ color: T.muted, lineHeight: 1.6, margin: 0 }}>{guide.goal}</p>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 14 }}>
            {guide.learn.slice(0, 3).map((item: string) => <Badge key={item}>{item}</Badge>)}
          </div>
        </div>
        <Button variant="primary" onClick={() => onOpenTask(next.id)} style={{ padding: "12px 16px", whiteSpace: "nowrap" }}>
          Начать →
        </Button>
      </div>
    </Panel>
  );
}
