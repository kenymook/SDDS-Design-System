import React, { useState } from "react";
import { T, transition } from "../../styles/tokens";

export function Button({ children, onClick, variant = "secondary", style }: any) {
  const [hover, setHover] = useState(false);
  const primary = variant === "primary";

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        border: primary ? "none" : "1px solid " + (hover ? T.borderHover : T.border),
        background: primary ? T.accent : hover ? T.hover : T.panel2,
        color: primary ? "#07120A" : T.text,
        borderRadius: 8,
        padding: "9px 12px",
        fontWeight: 700,
        cursor: "pointer",
        transition,
        ...style,
      }}
    >
      {children}
    </button>
  );
}
