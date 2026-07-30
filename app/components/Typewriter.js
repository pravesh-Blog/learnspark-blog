'use client'
import { useState,useEffect } from "react";

export default function TypewriterText({ text, className }) {
  const [displayText, setDisplayText] = useState('')

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      if (index <= text.length) {
        setDisplayText(text.slice(0, index))
        index++
      } else {
        clearInterval(interval)
      }
    }, 40)

    return () => clearInterval(interval)
  }, [text])

  return <p className={className}>{displayText}</p>
}