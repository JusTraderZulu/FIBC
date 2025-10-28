import Image from "next/image";
import { Person } from "@/lib/types";
import { Card } from "./Card";

interface PersonCardProps {
  person: Person;
  className?: string;
}

export function PersonCard({ person, className }: PersonCardProps) {
  return (
    <Card
      title={person.name}
      description={person.title}
      href={`/about/leadership/${person.slug}`}
      className={className}
    >
      {person.image && (
        <div className="mb-4 aspect-square relative overflow-hidden rounded-lg">
          <Image
            src={person.image.src}
            alt={person.image.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
      {person.bio && (
        <p className="mt-3 text-sm text-black/60 line-clamp-3">
          {person.bio}
        </p>
      )}
      {person.serviceYears && (
        <p className="mt-2 text-xs text-[hsl(var(--brand))] font-medium">
          {person.serviceYears} years of service
        </p>
      )}
    </Card>
  );
}
