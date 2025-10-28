import { Container } from "./Container";

interface EmptyStateProps {
  title: string;
  description: string;
  action?: {
    label: string;
    href: string;
  };
  icon?: string;
}

export function EmptyState({ title, description, action, icon = "📋" }: EmptyStateProps) {
  return (
    <div className="py-16 sm:py-20">
      <Container>
        <div className="text-center max-w-lg mx-auto">
          <div className="text-4xl mb-4">{icon}</div>
          <h2 className="text-2xl font-serif tracking-tight text-[hsl(var(--ink))]">
            {title}
          </h2>
          <p className="mt-4 text-black/70 leading-relaxed">
            {description}
          </p>
          {action && (
            <div className="mt-8">
              <a
                href={action.href}
                className="inline-flex items-center rounded-brand bg-[hsl(var(--brand))] text-white px-6 py-3 font-semibold hover:bg-[hsl(var(--brand))]/90 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))] transition-colors"
              >
                {action.label}
              </a>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}
