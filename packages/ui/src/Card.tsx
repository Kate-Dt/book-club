import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import React from "react";

type CardProps = React.HTMLAttributes<HTMLDivElement>;

export const Card = ({ className, ...props }: CardProps) => {
  const base =
    "rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-colors";

  return <div className={twMerge(clsx(base, className))} {...props} />;
};
