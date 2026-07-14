import React from "react";
import { learningContracts } from "../../content";
import { T } from "../../styles/tokens";
import { Panel } from "../ui";

export function LearningContract({ role }: any) {
  const contract = learningContracts[role.id] || learningContracts.designer;
  const items = contract.outcomes;

  return (
    <Panel style={{ padding: 18, marginBottom: 16 }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
        <div>
          <div style={{ color: T.text, fontWeight: 800, marginBottom: 8 }}>После прохождения вы сможете</div>
          <ul style={{ color: T.muted, margin: 0, paddingLeft: 18, lineHeight: 1.7 }}>
            {items.map((item: string) => <li key={item}>{item}</li>)}
          </ul>
        </div>
        <div>
          <div style={{ color: T.text, fontWeight: 800, marginBottom: 8 }}>Какие вопросы закроем</div>
          <ul style={{ color: T.muted, margin: 0, paddingLeft: 18, lineHeight: 1.7 }}>
            {learningContracts.commonQuestions.map((item: string) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </div>
    </Panel>
  );
}
