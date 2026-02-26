import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  enhanced?: boolean;
  hover?: boolean;
  onClick?: () => void;
}

export function GlassCard({ children, className, enhanced = false, hover = false, onClick }: GlassCardProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "rounded-2xl",
        enhanced ? "glass-light-enhanced" : "glass-light",
        hover && "card-hover cursor-pointer",
        className
      )}
    >
      {children}
    </div>
  );
}
