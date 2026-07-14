import React from "react";
import { findTask, getGuide } from "../../utils/onboarding";
import { T } from "../../styles/tokens";
import { Badge, Button, Panel } from "../ui";
import { GuideBlock } from "./GuideBlock";
import { MiniIllustration } from "./MiniIllustration";

export function TaskDetail({ role, taskId, onDone }: any) {
  const found = findTask(role, taskId);
  const task = found ? found.task : { id: taskId, title: "Задание", link: "" };
  const level = found ? found.level : { title: "" };
  const guide = getGuide(taskId);

  return (
    <main style={{ flex: 1, height: "calc(100vh - 44px)", overflow: "auto", background: T.bg }}>
      <div style={{ maxWidth: 980, margin: "0 auto", padding: "40px 48px 80px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.3fr .9fr", gap: 18, alignItems: "start" }}>
          <div style={{ display: "grid", gap: 14 }}>
            <Panel style={{ padding: 22 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
                <Badge tone="accent">Задание</Badge>
                <Badge>
                  {role.title} / {level.title}
                </Badge>
              </div>
              <h1 style={{ fontSize: 34, lineHeight: 1.1, margin: "0 0 10px" }}>{guide.title}</h1>
              <p style={{ color: T.muted, fontSize: 16, lineHeight: 1.7, margin: 0 }}>{guide.goal}</p>
              <div style={{ color: T.subtle, fontSize: 12, marginTop: 12, fontFamily: "monospace" }}>{task.link}</div>
            </Panel>

            <Panel style={{ padding: 22 }}>
              <h2 style={{ margin: "0 0 14px", fontSize: 22 }}>Что сделать</h2>
              <ol style={{ display: "grid", gap: 12, margin: 0, padding: 0, listStyle: "none" }}>
                {guide.steps.map((step: string, index: number) => (
                  <li key={step} style={{ display: "flex", gap: 12, color: T.muted, lineHeight: 1.6 }}>
                    <span style={{ width: 26, height: 26, borderRadius: 999, background: T.accentSoft, color: T.accent, display: "inline-flex", alignItems: "center", justifyContent: "center", fontWeight: 800, flexShrink: 0 }}>
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </Panel>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              <GuideBlock title="Критерии готовности" items={guide.good} tone="accent" />
              <GuideBlock title="Типичные ошибки" items={guide.mistakes} tone="danger" />
            </div>

            <Panel style={{ padding: 18, background: T.accentSoft, borderColor: T.accent }}>
              <div style={{ color: T.accent, fontWeight: 800, marginBottom: 6 }}>Aha-момент</div>
              <div style={{ color: T.muted, lineHeight: 1.6 }}>{guide.aha}</div>
            </Panel>

            <div>
              <Button variant="primary" onClick={onDone}>
                Готово, отметить выполненным
              </Button>
            </div>
          </div>

          <aside style={{ display: "grid", gap: 14, position: "sticky", top: 20 }}>
            <GuideBlock title="После задания вы будете знать" items={guide.learn} />
            <MiniIllustration taskId={taskId} />
          </aside>
        </div>
      </div>
    </main>
  );
}
