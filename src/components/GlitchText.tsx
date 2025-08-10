import React, { useEffect, useState } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
}

export const GlitchText: React.FC<GlitchTextProps> = ({ text, className = '' }) => {
  const [glitchText, setGlitchText] = useState(text);

  useEffect(() => {
    const glitchChars = '!@#$%^&*(){}[];,.<>?';
    const interval = setInterval(() => {
      if (Math.random() > 0.95) {
        const glitched = text
          .split('')
          .map(char => Math.random() > 0.9 ? glitchChars[Math.floor(Math.random() * glitchChars.length)] : char)
          .join('');
        setGlitchText(glitched);
        setTimeout(() => setGlitchText(text), 100);
      }
    }, 150);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <h1 className={`glitch-text ${className}`} data-text={text}>
      {glitchText}
    </h1>
  );
};