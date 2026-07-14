import React from "react";
import { T } from "../../styles/tokens";
import { Badge } from "../ui";
import { HelpDocsPanel } from "./HelpDocsPanel";
import { LearningContract } from "./LearningContract";
import { NextStep } from "./NextStep";
import { TaskCard } from "./TaskCard";

export function ActionFirstPage({ role, level, done, onToggleTask, onOpenTask }: any) {
  return (
    <main style={{ flex: 1, height: "calc(100vh - 44px)", overflow: "auto", background: T.bg }}>
      <div style={{ maxWidth: 920, margin: "0 auto", padding: "40px 48px 96px" }}>
        <div style={{ marginBottom: 24 }}>
          <div style={{ color: T.accent, fontSize: 13, fontWeight: 700 }}>SDDS onboarding</div>
          <h1 style={{ color: T.text, fontSize: 38, lineHeight: 1.1, margin: "8px 0 12px" }}>Пройдите SDDS через действия, не через чтение</h1>
          <p style={{ color: T.muted, fontSize: 17, lineHeight: 1.7, margin: 0 }}>
            SDDS — foundation дизайн-система: она даёт токены, компоненты и базовые правила, на которых строятся продуктовые дизайн-системы.
          </p>
        </div>

        <LearningContract role={role} />
        <NextStep role={role} level={level} done={done} onOpenTask={onOpenTask} />

        <section style={{ marginTop: 24 }}>
          <div style={{ display: "flex", alignItems: "end", justifyContent: "space-between", gap: 16, marginBottom: 12 }}>
            <div>
              <h2 style={{ color: T.text, fontSize: 24, margin: 0 }}>
                {role.title}: {level.title}
              </h2>
              <p style={{ color: T.muted, margin: "6px 0 0" }}>{level.description}</p>
            </div>
            <Badge>
              {level.tasks.filter((task: any) => done[role.id + ":" + task.id]).length}/{level.tasks.length} задач
            </Badge>
          </div>
          <div style={{ display: "grid", gap: 10 }}>
            {level.tasks.map((task: any) => (
              <TaskCard key={task.id} role={role} task={task} done={done} onOpenTask={onOpenTask} onToggleTask={onToggleTask} />
            ))}
          </div>
        </section>

        <HelpDocsPanel />
      </div>
    </main>
  );
}
