import Link from "next/link";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

export type BreadcrumbProps = {
  items: BreadcrumbItem[];
  className?: string;
};

export function Breadcrumb({ items, className = "" }: BreadcrumbProps) {
  if (items.length <= 1) return null;

  return (
    <nav aria-label="Breadcrumb" className={`flex items-center space-x-1 text-sm ${className}`}>
      <Link 
        href="/" 
        className="text-[hsl(var(--ink))]/60 hover:text-[hsl(var(--brand))] transition-colors"
      >
        Home
      </Link>
      
      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-1">
          <svg 
            className="w-4 h-4 text-[hsl(var(--ink))]/40" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          
          {item.href && index < items.length - 1 ? (
            <Link 
              href={item.href}
              className="text-[hsl(var(--ink))]/60 hover:text-[hsl(var(--brand))] transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-[hsl(var(--ink))] font-medium">
              {item.label}
            </span>
          )}
        </div>
      ))}
    </nav>
  );
}

