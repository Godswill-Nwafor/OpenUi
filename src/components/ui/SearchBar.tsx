"use client";

import { useState, useRef } from "react";
import { Search, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface SearchBarProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function SearchBar({
  placeholder = "Search components...",
  value,
  onChange,
  className,
  size = "md",
}: SearchBarProps) {
  const [internal, setInternal] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const controlled = value !== undefined;
  const val = controlled ? value : internal;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!controlled) setInternal(e.target.value);
    onChange?.(e.target.value);
  };

  const clear = () => {
    if (!controlled) setInternal("");
    onChange?.("");
    inputRef.current?.focus();
  };

  const sizeClasses = {
    sm: "h-9 text-sm px-3",
    md: "h-11 text-sm px-4",
    lg: "h-13 text-base px-5",
  };

  return (
    <div className={cn("relative flex items-center", className)}>
      <Search
        size={size === "sm" ? 14 : 16}
        className="absolute left-3.5 text-muted-foreground pointer-events-none"
      />
      <input
        ref={inputRef}
        type="text"
        value={val}
        onChange={handleChange}
        placeholder={placeholder}
        className={cn(
          "w-full rounded-xl border border-border bg-card",
          sizeClasses[size],
          "pl-10 pr-10 outline-none ring-0",
          "text-foreground placeholder:text-muted-foreground",
          "focus:border-brand focus:ring-2 focus:ring-brand/20",
          "transition-all duration-200",
        )}
      />
      {val && (
        <button
          onClick={clear}
          className="absolute right-3 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X size={14} />
        </button>
      )}
    </div>
  );
}
