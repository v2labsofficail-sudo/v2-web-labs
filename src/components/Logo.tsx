import Image from "next/image";

interface LogoProps {
  showText?: boolean;
  showTagline?: boolean;
  dark?: boolean;
  className?: string;
}

export default function Logo({
  dark = false,
  className = "",
}: LogoProps) {
  // Check if the caller has specified any height utility classes (e.g. h-8, h-10, h-[40px])
  const hasHeightClass = /\bh-\[?\w+\]?/.test(className) || /\bh-\d+/.test(className);
  
  // If no height is specified, default to a sleek and professional height (h-8 for mobile, sm:h-[38px] for desktop)
  const finalClassName = hasHeightClass ? className : `h-8 sm:h-[38px] ${className}`;

  if (dark) {
    return (
      <div className={`flex items-center select-none ${finalClassName}`}>
        <Image
          src="/logo-cover-v2labs-black.jpeg"
          alt="V2 Labs"
          width={120}
          height={38}
          className="h-full w-auto object-contain"
          style={{ width: 'auto', height: 'auto' }}
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div className={`flex items-center select-none ${finalClassName}`}>
      <Image
        src="/logo-global.png"
        alt="V2 Labs"
        width={150}
        height={50}
        className="h-full w-auto object-contain mix-blend-multiply"
        style={{ width: 'auto', height: 'auto' }}
        preload={true}
        fetchPriority="high"
      />
    </div>
  );
}
