import React from "react";

export default function TextWithBlackOutline({ children }) {
  return (
    <div
      style={{
        color: "white",
        textShadow:
          "-1px -1px 0 #C4D7B2, 1px -1px 0 #C4D7B2, -1px 1px 0 #C4D7B2, 1px 1px 0 #C4D7B2",
      }}
    >
      {children}
    </div>
  );
}
