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
  if (dark) {
    return (
      <div className={`flex items-center select-none ${className}`}>
        <Image
          src="/logo-cover-v2labs-black.jpeg"
          alt="V2 Labs"
          width={150}
          height={48}
          className="h-10 sm:h-[48px] w-auto object-contain"
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div className={`flex items-center select-none ${className}`}>
      <Image
        src="/logo-global.png"
        alt="V2 Labs"
        width={230}
        height={76}
        className="h-[54px] sm:h-[76px] w-auto object-contain mix-blend-multiply"
        preload={true}
        fetchPriority="high"
      />
    </div>
  );
}
