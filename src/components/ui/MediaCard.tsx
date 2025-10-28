import Image from "next/image";
import { MediaItem } from "@/lib/types";
import { Card } from "./Card";
import { Badge } from "./Badge";

interface MediaCardProps {
  media: MediaItem;
  className?: string;
  showMeta?: boolean;
}

export function MediaCard({ media, className, showMeta = true }: MediaCardProps) {
  const getTypeIcon = (type: MediaItem['type']) => {
    switch (type) {
      case 'video': return '🎥';
      case 'audio': return '🎧';
      case 'livestream': return '📺';
      case 'podcast': return '🎙️';
      case 'article': return '📄';
      default: return '📺';
    }
  };

  const getTypeColor = (type: MediaItem['type']) => {
    switch (type) {
      case 'video': return 'bg-red-100 text-red-800';
      case 'audio': return 'bg-purple-100 text-purple-800';
      case 'livestream': return 'bg-blue-100 text-blue-800';
      case 'podcast': return 'bg-green-100 text-green-800';
      case 'article': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDuration = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    if (hours > 0) {
      return `${hours}h ${mins}m`;
    }
    return `${mins}m`;
  };

  // Don't show "Watch" CTA if no external URL
  const href = media.externalUrl ? media.externalUrl : `/media-devotions/${media.slug}`;

  return (
    <Card
      title={media.title}
      description={media.description}
      href={href}
      className={className}
    >
      {media.image && (
        <div className="mb-4 aspect-video relative overflow-hidden rounded-lg">
          <Image
            src={media.image.src}
            alt={media.image.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {media.featured && (
            <div className="absolute top-2 left-2">
              <Badge className="bg-[hsl(var(--accent))] text-black">
                Featured
              </Badge>
            </div>
          )}
        </div>
      )}
      
      {showMeta && (
        <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
          <Badge className={getTypeColor(media.type)}>
            {getTypeIcon(media.type)} {media.type.charAt(0).toUpperCase() + media.type.slice(1)}
          </Badge>
          
          {media.duration && (
            <span className="text-black/60">
              ⏱️ {formatDuration(media.duration)}
            </span>
          )}
          
          {media.publishedAt && (
            <span className="text-black/60">
              📅 {new Date(media.publishedAt).toLocaleDateString()}
            </span>
          )}
        </div>
      )}
      
      {!media.externalUrl && (
        <div className="mt-4 text-xs text-black/50 italic">
          Coming soon
        </div>
      )}
    </Card>
  );
}
