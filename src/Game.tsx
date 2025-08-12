import React from "react";

export default function Game({ controlMode }: { controlMode: "timing" | "swipe" }) {
  return (
    <div style={{ height: 400, background: "#0b6b3a", borderRadius: 8, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
      Game Canvas Placeholder — mode: {controlMode}
    </div>
  );
}
