import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  glow?: boolean;
}

export const Card: React.FC<CardProps> = ({
  className,
  children,
  glow = false,
  ...props
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl transition-all duration-300",
        "bg-white/80 dark:bg-dark-850/70 backdrop-blur-md",
        "border border-slate-200/80 dark:border-white/10",
        "shadow-sm dark:shadow-none",
        glow && "hover:border-emerald-500/50 hover:shadow-neon-green hover:-translate-y-1",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
