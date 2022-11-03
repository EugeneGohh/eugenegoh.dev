import React from "react";

export default function Emoji(symbol) {
  return (
    <span
      className="emoji"
      role="img"
      aria-label={symbol.label ? symbol.label : ""}
      aria-hidden={symbol.label ? "false" : "true"}
    >
      {symbol.symbol}
    </span>
  );
}
