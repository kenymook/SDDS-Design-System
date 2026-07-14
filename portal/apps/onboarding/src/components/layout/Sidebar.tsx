import React from "react";
import { roles } from "../../content";
import { getLevelStatus, getRoleProgress } from "../../utils/onboarding";
import { T } from "../../styles/tokens";
import { Badge } from "../ui";

export function Sidebar({ selectedRoleId, selectedLevelId, selectedTaskId, done, onSelectRole, onSelectLevel, onOpenTask }: any) {
  return (
    <aside
      style={{
        width: 270,
        background: T.panel,
        borderRight: "1px solid " + T.border,
        height: "calc(100vh - 44px)",
        overflow: "auto",
        flexShrink: 0,
      }}
    >
      <div style={{ padding: "16px 14px", borderBottom: "1px solid " + T.border }}>
        <div style={{ color: T.text, fontWeight: 700, fontSize: 14 }}>Onboarding</div>
        <div style={{ color: T.subtle, marginTop: 6, fontSize: 12 }}>Выберите роль и проходите шаги сверху вниз</div>
      </div>

      <div style={{ padding: 8 }}>
        {roles.map((role: any) => {
          const roleActive = role.id === selectedRoleId;
          const progress = getRoleProgress(role, done);

          return (
            <div key={role.id} style={{ borderBottom: "1px solid " + T.border, padding: "6px 0" }}>
              <button
                onClick={() => onSelectRole(role.id)}
                style={{
                  width: "100%",
                  border: "none",
                  background: "transparent",
                  color: roleActive ? T.text : T.muted,
                  padding: "9px 10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  cursor: "pointer",
                  textAlign: "left",
                }}
              >
                <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ color: T.subtle }}>›</span>
                  <span>{role.title}</span>
                </span>
                <span style={{ color: progress.percent === 100 ? T.accent : T.subtle, fontSize: 12 }}>{progress.percent}%</span>
              </button>

              {roleActive && (
                <div style={{ paddingBottom: 6 }}>
                  {role.levels.map((level: any) => {
                    const activeLevel = level.id === selectedLevelId;
                    const status = getLevelStatus(role, level, done);

                    return (
                      <div key={level.id} style={{ marginTop: 4 }}>
                        <button
                          onClick={() => onSelectLevel(level.id)}
                          style={{
                            width: "100%",
                            border: "none",
                            background: activeLevel ? T.active : "transparent",
                            color: activeLevel ? T.text : T.muted,
                            borderRadius: 6,
                            padding: "8px 10px 8px 28px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            cursor: "pointer",
                            textAlign: "left",
                          }}
                        >
                          <span>{level.title}</span>
                          <Badge tone={status === "done" ? "accent" : "neutral"}>
                            {status === "done" ? "done" : status === "progress" ? "in progress" : "todo"}
                          </Badge>
                        </button>

                        {activeLevel &&
                          level.tasks.map((task: any) => {
                            const key = role.id + ":" + task.id;
                            const checked = Boolean(done[key]);
                            const activeTask = selectedTaskId === task.id;

                            return (
                              <button
                                key={task.id}
                                onClick={() => onOpenTask(task.id)}
                                style={{
                                  width: "100%",
                                  border: "none",
                                  background: activeTask ? T.hover : "transparent",
                                  color: activeTask ? T.text : T.subtle,
                                  borderRadius: 6,
                                  padding: "7px 10px 7px 44px",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "space-between",
                                  cursor: "pointer",
                                  textAlign: "left",
                                  gap: 8,
                                }}
                              >
                                <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{task.title}</span>
                                <span
                                  style={{
                                    width: 14,
                                    height: 14,
                                    borderRadius: 999,
                                    border: "1px solid " + (checked ? T.accent : T.borderHover),
                                    background: checked ? T.accent : "transparent",
                                    color: "#07120A",
                                    display: "inline-flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: 9,
                                    flexShrink: 0,
                                  }}
                                >
                                  {checked ? "✓" : ""}
                                </span>
                              </button>
                            );
                          })}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </aside>
  );
}
