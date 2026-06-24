import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children:  ReactNode;
  className?: string;
  id?:        string;
  as?:        "section" | "div" | "article" | "main" | "aside";
}

export function Section({
  children,
  className,
  id,
  as: Tag = "section",
}: SectionProps) {
  return (
    <Tag
      id={id}
      className={cn("relative py-16 md:py-24 lg:py-28", className)}
    >
      {children}
    </Tag>
  );
}
