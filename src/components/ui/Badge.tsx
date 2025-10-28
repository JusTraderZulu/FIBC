import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "secondary" | "outline";
}

export function Badge({ children, className, variant = "default" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
        {
          "bg-[hsl(var(--brand))] text-white": variant === "default",
          "bg-black/10 text-black/70": variant === "secondary", 
          "border border-black/20 text-black/70": variant === "outline",
        },
        className
      )}
    >
      {children}
    </span>
  );
}