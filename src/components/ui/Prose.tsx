import { cn } from "@/lib/utils";

interface ProseProps {
  children: React.ReactNode;
  className?: string;
}

export function Prose({ children, className }: ProseProps) {
  return (
    <div
      className={cn(
        // Typography
        "prose prose-lg max-w-none",
        // Headings
        "prose-headings:font-serif prose-headings:tracking-tight",
        "prose-h1:text-3xl prose-h1:text-[hsl(var(--ink))]",
        "prose-h2:text-2xl prose-h2:text-[hsl(var(--ink))] prose-h2:mt-12 prose-h2:mb-6",
        "prose-h3:text-xl prose-h3:text-[hsl(var(--brand))] prose-h3:mt-8 prose-h3:mb-4",
        // Paragraphs and text
        "prose-p:text-black/80 prose-p:leading-relaxed prose-p:mb-6",
        "prose-strong:text-[hsl(var(--ink))] prose-strong:font-semibold",
        "prose-em:text-[hsl(var(--brand))]",
        // Lists
        "prose-ul:mb-6 prose-li:mb-2 prose-li:text-black/80",
        "prose-ol:mb-6",
        // Links
        "prose-a:text-[hsl(var(--brand))] prose-a:font-medium prose-a:no-underline",
        "hover:prose-a:underline focus:prose-a:outline-none focus:prose-a:ring-2 focus:prose-a:ring-[hsl(var(--accent))]",
        // Quotes
        "prose-blockquote:border-l-4 prose-blockquote:border-[hsl(var(--accent))] prose-blockquote:pl-6",
        "prose-blockquote:text-[hsl(var(--ink))] prose-blockquote:font-medium prose-blockquote:italic",
        // Code (if needed)
        "prose-code:text-[hsl(var(--brand))] prose-code:bg-[hsl(var(--brand))]/5 prose-code:px-1 prose-code:rounded",
        className
      )}
    >
      {children}
    </div>
  );
}
