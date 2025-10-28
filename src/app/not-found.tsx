import { Section } from "@/components/ui/Section";

export const metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <Section>
      <div className="text-center max-w-lg mx-auto">
        <div className="text-6xl mb-6">🔍</div>
        <h1 className="text-3xl font-serif tracking-tight text-[hsl(var(--ink))] mb-4">
          Page Not Found
        </h1>
        <p className="text-black/70 mb-8 leading-relaxed">
          We couldn't find the page you're looking for. It may have been moved or doesn't exist.
        </p>
        <div className="space-y-4">
          <a
            href="/"
            className="inline-flex items-center rounded-brand bg-[hsl(var(--brand))] text-white px-6 py-3 font-semibold hover:bg-[hsl(var(--brand))]/90 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))] transition-colors"
          >
            Back to Home
          </a>
          <div className="text-sm text-black/60">
            or{" "}
            <a
              href="/search"
              className="text-[hsl(var(--brand))] hover:underline focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))]"
            >
              search our site
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
