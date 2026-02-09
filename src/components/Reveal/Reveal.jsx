"use client";

import React from "react";

function Reveal({ children }) {
  const [isRevealed, setIsRevealed] = React.useState(false);

  if (!isRevealed) {
    return (
      <div className="reveal">
        <button onClick={() => setIsRevealed(true)}>Reveal Content</button>
      </div>
    );
  }

  return children;
}

export default Reveal;
