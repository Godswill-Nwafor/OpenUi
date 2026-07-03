"use client";

interface PreviewWrapperProps {
  children: React.ReactNode;
  scale?: number;
  bg?: string;
  center?: boolean;
}

export function PreviewWrapper({
  children,
  scale,
  bg = "bg-gray-950",
  center = true,
}: PreviewWrapperProps) {
  if (scale !== undefined) {
    return (
      <div
        className={`relative h-44 overflow-hidden ${bg}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          style={{
            transform: `scale(${scale})`,
            transformOrigin: "top left",
            width: `${Math.round(100 / scale)}%`,
            position: "absolute",
            top: 0,
            left: 0,
          }}
        >
          {children}
        </div>
      </div>
    );
  }

  return (
    <div
      className={`h-44 overflow-hidden ${bg}${center ? " flex items-center justify-center" : ""}`}
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </div>
  );
}
