import React from "react";
import { T } from "../../styles/tokens";
import { Panel } from "../ui";

function StepBox({ title, text }: any) {
  return (
    <div style={{ background: T.panel2, border: "1px solid " + T.border, borderRadius: 10, padding: 12, textAlign: "center" }}>
      <div style={{ color: T.text, fontWeight: 700 }}>{title}</div>
      <div style={{ color: T.muted, fontSize: 12, marginTop: 4 }}>{text}</div>
    </div>
  );
}

function MockForm({ accent, title }: any) {
  return (
    <div style={{ background: T.panel2, border: "1px solid " + T.border, borderRadius: 12, padding: 14 }}>
      <div style={{ color: T.text, fontWeight: 700, marginBottom: 10 }}>{title}</div>
      <div style={{ height: 22, borderRadius: 7, background: "#2A3441", marginBottom: 8 }} />
      <div style={{ height: 24, width: 70, borderRadius: 8, background: accent }} />
    </div>
  );
}

export function MiniIllustration({ taskId }: any) {
  if (taskId === "d-2-1" || taskId === "m-1-2" || taskId === "dev-1-2") {
    return (
      <Panel style={{ padding: 18 }}>
        <div style={{ color: T.text, fontWeight: 800, marginBottom: 14 }}>White-label в одном взгляде</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: 14, alignItems: "center" }}>
          <MockForm accent="#3B82F6" title="Theme A" />
          <div style={{ color: T.subtle }}>→</div>
          <MockForm accent="#8B5CF6" title="Theme B" />
        </div>
        <div style={{ color: T.muted, fontSize: 13, marginTop: 14 }}>Структура та же. Меняются только значения токенов темы.</div>
      </Panel>
    );
  }

  if (taskId === "d-2-3") {
    return (
      <Panel style={{ padding: 18 }}>
        <div style={{ color: T.text, fontWeight: 800, marginBottom: 14 }}>Error ≠ Negative</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          <div style={{ border: "1px solid " + T.danger, borderRadius: 10, padding: 12 }}>
            <div style={{ color: T.text, fontWeight: 700 }}>TextField</div>
            <div style={{ color: T.danger, marginTop: 8 }}>View=Error</div>
            <div style={{ color: T.muted, fontSize: 12 }}>данные невалидны</div>
          </div>
          <div style={{ border: "1px solid " + T.danger, borderRadius: 10, padding: 12 }}>
            <div style={{ color: T.text, fontWeight: 700 }}>Button</div>
            <div style={{ color: T.danger, marginTop: 8 }}>View=Negative</div>
            <div style={{ color: T.muted, fontSize: 12 }}>действие опасное</div>
          </div>
        </div>
      </Panel>
    );
  }

  return (
    <Panel style={{ padding: 18 }}>
      <div style={{ color: T.text, fontWeight: 800, marginBottom: 14 }}>Композиция SDDS</div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr auto 1fr", gap: 10, alignItems: "center" }}>
        <StepBox title="Component" text="TextField 48 M" />
        <div style={{ color: T.subtle }}>+</div>
        <StepBox title="Props" text="View, Size" />
        <div style={{ color: T.subtle }}>→</div>
        <StepBox title="UI" text="форма" />
      </div>
    </Panel>
  );
}
