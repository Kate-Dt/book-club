"use client";

import type { ReactNode } from "react";
import { Button } from "@bc/ui";

interface ClientButtonWrapperProps {
  children: ReactNode;
} 

export function ClientButtonWrapper({ children }: ClientButtonWrapperProps) {
  const handleClick = () => console.log("clicked");
  return <Button onClick={handleClick}>{children}</Button>;
}
