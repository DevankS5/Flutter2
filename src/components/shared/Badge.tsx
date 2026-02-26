import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "blue" | "outline";
}

export function Badge({ children, className, variant = "default" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest uppercase",
        variant === "default" && "bg-blue-50 text-blue-600 border border-blue-200/50",
        variant === "blue" && "bg-blue-600 text-white",
        variant === "outline" && "bg-white text-blue-600 border border-blue-200",
        className
      )}
    >
      {children}
    </span>
  );
}
