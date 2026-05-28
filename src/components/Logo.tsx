"use client";

import React from "react";

interface LogoProps {
  showText?: boolean;
  showTagline?: boolean;
  dark?: boolean;
  className?: string;
}

export default function Logo({
  showText = true,
  showTagline = true,
  dark = false,
  className = "",
}: LogoProps) {
  if (dark) {
    // Default: Dark Theme Footer Logo (blends seamlessly with dark navy footer background)
    return (
      <div className={`flex items-center select-none ${className}`}>
        <img
          src="/logo-cover-v2labs-black.jpeg"
          alt="V2 Labs"
          className="h-10 sm:h-[48px] w-auto object-contain"
        />
      </div>
    );
  }

  // Default: Light Theme Header Logo (blends seamlessly with white header background and mix-blend-mode multiply for transparency)
  return (
    <div className={`flex items-center select-none ${className}`}>
      <img
        src="/logo-cover-v2labs.jpeg"
        alt="V2 Labs"
        className="h-[54px] sm:h-[76px] w-auto object-contain mix-blend-multiply"
      />
    </div>
  );
}
