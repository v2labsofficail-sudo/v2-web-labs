import React from 'react';

interface AlternatingTextProps {
  children: string;
}

export default function AlternatingText({ children }: AlternatingTextProps) {
  if (typeof children !== 'string') return <>{children}</>;
  
  const words = children.split(/\s+/).filter(Boolean);
  return (
    <>
      {words.map((word, idx) => {
        const isBlue = idx % 2 === 0;
        return (
          <span
            key={idx}
            className={isBlue ? 'text-[#1161ed]' : 'text-[#111111]'}
            style={{
              WebkitTextFillColor: isBlue ? '#1161ed' : '#111111',
              background: 'none',
              display: 'inline-block'
            }}
          >
            {word}
            {idx < words.length - 1 ? '\u00A0' : ''}
          </span>
        );
      })}
    </>
  );
}
