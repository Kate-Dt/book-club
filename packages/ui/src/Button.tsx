"use client";

import * as React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className="px-3 py-2 rounded bg-black text-white hover:opacity-80 transition"
    >
      {children}
    </button>
  );
}
