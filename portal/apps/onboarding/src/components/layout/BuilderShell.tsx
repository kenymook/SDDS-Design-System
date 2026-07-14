import React from "react";
import { IconRail } from "./IconRail";
import { TopBar } from "./TopBar";
import { Sidebar } from "./Sidebar";
import { sddsTokens } from "../../styles/tokens";

export function BuilderShell({ role, level, progress, selectedTaskId, done, onSelectRole, onSelectLevel, onOpenTask, children }: any) {
  return (
    <div
      style={{
        ...sddsTokens,
        minHeight: "100vh",
        background: "var(--sdds-bg-default-primary)",
        color: "var(--sdds-text-default-primary)",
        fontFamily: "Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
        display: "flex",
      }}
    >
      <IconRail />
      <div style={{ flex: 1, minWidth: 0 }}>
        <TopBar role={role} level={level} progress={progress} />
        <div style={{ display: "flex" }}>
          <Sidebar
            selectedRoleId={role.id}
            selectedLevelId={level.id}
            selectedTaskId={selectedTaskId}
            done={done}
            onSelectRole={onSelectRole}
            onSelectLevel={onSelectLevel}
            onOpenTask={onOpenTask}
          />
          {children}
        </div>
      </div>
    </div>
  );
}
