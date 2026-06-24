import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?:    string;
  title:       string;
  description?: string;
  align?:      "left" | "center" | "right";
  className?:  string;
}

const alignStyles = {
  left:   "text-left",
  center: "text-center mx-auto",
  right:  "text-right ml-auto",
} as const;

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", alignStyles[align], className)}>
      {eyebrow && (
        <p className="mb-3 font-mono text-[0.6875rem] font-normal
                      tracking-[0.2em] uppercase text-gold/70">
          {eyebrow}
        </p>
      )}
      <h2 className="font-heading text-2xl font-semibold leading-tight
                     tracking-tight text-foreground
                     md:text-[1.875rem] lg:text-[2.125rem]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 font-body text-base leading-[1.75]
                      text-foreground-secondary">
          {description}
        </p>
      )}
    </div>
  );
}
