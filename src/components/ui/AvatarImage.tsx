"use client";

interface AvatarImageProps {
  src: string;
  alt: string;
  size: number;
  className?: string;
}

export function AvatarImage({ src, alt, size, className }: AvatarImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={className}
      onError={(e) => {
        (e.target as HTMLImageElement).src =
          `https://ui-avatars.com/api/?name=${encodeURIComponent(alt)}&size=${size}&background=6366f1&color=fff&bold=true`;
      }}
    />
  );
}
