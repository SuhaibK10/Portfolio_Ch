import { type HTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  hover?:   boolean;
  padding?: "sm" | "md" | "lg" | "none";
}

const paddingStyles = {
  none: "",
  sm:   "p-4",
  md:   "p-6",
  lg:   "p-8",
} as const;

export function Card({
  children,
  className,
  hover   = true,
  padding = "md",
  ...rest
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl bg-card border border-border/70",
        paddingStyles[padding],
        hover && [
          "transition-all duration-500",
          "hover:border-gold/20",
          "hover:shadow-[0_0_48px_rgb(201_168_92/0.04)]",
        ],
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
