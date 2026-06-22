import React, { useState, useEffect } from "react";

interface TypewriterProps {
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetween?: number;
}

export default function Typewriter({
  phrases,
  typingSpeed = 80,
  deletingSpeed = 45,
  delayBetween = 2000,
}: TypewriterProps) {
  const [currentText, setCurrentText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText(currentPhrase.substring(0, currentText.length - 1));
      }, deletingSpeed);
    } else {
      timer = setTimeout(() => {
        setCurrentText(currentPhrase.substring(0, currentText.length + 1));
      }, typingSpeed);
    }

    if (!isDeleting && currentText === currentPhrase) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, delayBetween);
    }

    if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, phraseIndex, phrases, typingSpeed, deletingSpeed, delayBetween]);

  return (
    <span className="inline-flex items-center">
      <span>{currentText}</span>
      <span 
        className="ml-1 inline-block w-[3px] h-[0.9em] bg-current align-middle"
        style={{
          animation: "typewriter-cursor-blink 0.8s step-end infinite"
        }}
      />
      <style>{`
        @keyframes typewriter-cursor-blink {
          from, to { background-color: transparent }
          50% { background-color: currentColor }
        }
      `}</style>
    </span>
  );
}
