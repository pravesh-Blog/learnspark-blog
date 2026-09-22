'use client'

import { useState, useEffect } from "react";

export default function TypewriterText({ text, className }) {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;

    // Start typing immediately
    const typeNextCharacter = () => {
      if (index < text.length) {
        index++;
        setDisplayText(text.slice(0, index));
      }
    };

    // First character immediately
    typeNextCharacter();

    const interval = setInterval(typeNextCharacter, 30);

    return () => clearInterval(interval);
  }, [text]);

  return <p className={className}>{displayText}</p>;
}