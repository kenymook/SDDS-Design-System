import React from "react";
import { T } from "../../styles/tokens";

export function Panel({ children, style }: any) {
  return (
    <div
      style={{
        background: T.panel,
        border: "1px solid " + T.border,
        borderRadius: 12,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
