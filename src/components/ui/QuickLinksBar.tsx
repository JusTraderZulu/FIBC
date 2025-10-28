import { Container } from "./Container";

export function QuickLinksBar() {
  const items = [
    { 
      label: "Governance", 
      sub: "Apostolic structure", 
      href: "/governance",
      icon: "🏛️"
    },
    { 
      label: "Media", 
      sub: "Watch online", 
      href: "/media-devotions",
      icon: "📺"
    },
    { 
      label: "Churches", 
      sub: "Worldwide locations", 
      href: "/churches",
      icon: "globe" // Special indicator for spinning globe
    },
    { 
      label: "Events", 
      sub: "What's happening", 
      href: "/events",
      icon: "📅"
    },
  ];
  
  return (
    <div className="bg-white border-y border-black/5">
      <Container>
        <ul className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-black/5">
          {items.map((it) => (
            <li key={it.label}>
              <a 
                className="group block py-6 px-4 hover:bg-[hsl(var(--brand))]/5 transition-colors text-center" 
                href={it.href}
              >
                {/* Icon */}
                <div className="text-3xl mb-2">
                  {it.icon === "globe" ? (
                    <span className="inline-block animate-spin-slow">🌍</span>
                  ) : (
                    <span>{it.icon}</span>
                  )}
                </div>
                <div className="font-semibold text-[hsl(var(--ink))] group-hover:text-[hsl(var(--brand))] transition-colors mb-1">
                  {it.label}
                </div>
                <div className="text-sm text-black/60">{it.sub}</div>
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}



