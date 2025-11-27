"use client";

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ className, ...props }: InputProps) => {
  const base =
    "w-full rounded-2xl border border-gray-200 bg-white px-4 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black/20";

  return <input className={twMerge(clsx(base, className))} {...props} />;
};
