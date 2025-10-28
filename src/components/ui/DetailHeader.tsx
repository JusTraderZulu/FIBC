import Image from "next/image";
import { ImageMeta } from "@/lib/types";
import { Container } from "./Container";

interface DetailHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  image?: ImageMeta;
  breadcrumb?: { label: string; href: string }[];
}

export function DetailHeader({ title, subtitle, description, image, breadcrumb }: DetailHeaderProps) {
  return (
    <div className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-[hsl(var(--brand))]/5 to-transparent">
      <Container>
        {breadcrumb && (
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center space-x-2 text-sm">
              {breadcrumb.map((item, index) => (
                <li key={item.href} className="flex items-center">
                  {index > 0 && <span className="mx-2 text-black/40">/</span>}
                  <a
                    href={item.href}
                    className="text-[hsl(var(--brand))] hover:underline focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        )}
        
        <div className={`grid gap-8 ${image ? 'lg:grid-cols-2' : 'lg:grid-cols-1'} items-center`}>
          <div className={image ? '' : 'max-w-4xl'}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif tracking-tight text-[hsl(var(--ink))]">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-4 text-lg sm:text-xl text-[hsl(var(--brand))] font-medium">
                {subtitle}
              </p>
            )}
            {description && (
              <p className="mt-6 text-base sm:text-lg text-black/70 leading-relaxed max-w-3xl">
                {description}
              </p>
            )}
          </div>
          
          {image && (
            <div className="relative aspect-[4/3] rounded-brand overflow-hidden shadow-lg">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                priority={image.priority}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}
