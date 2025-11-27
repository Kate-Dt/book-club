import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

type AvatarProps = {
  src?: string;
  alt?: string;
  size?: number; // px
  className?: string;
};

export const Avatar = ({
  src,
  alt = "",
  size = 40,
  className,
}: AvatarProps) => {
  const dimension = { width: size, height: size };

  const base =
    "flex items-center justify-center rounded-full bg-gray-100 text-gray-600 text-sm font-medium overflow-hidden";

  const initial = alt ? alt.charAt(0).toUpperCase() : "?";

  return (
    <div className={twMerge(clsx(base, className))} style={dimension}>
      {src ? (
        <img src={src} alt={alt} className="h-full w-full object-cover" />
      ) : (
        initial
      )}
    </div>
  );
};
