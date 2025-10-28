import { Section } from "@/components/ui/Section";
import { MediaCard } from "@/components/ui/MediaCard";
import { EmptyState } from "@/components/ui/EmptyState";
import { MEDIA } from "@/lib/data/media";
import { Badge } from "@/components/ui/Badge";

export const metadata = {
  title: "Media Archive",
  description: "Browse our collection of sermons, devotions, and teaching content.",
};

export default function MediaArchivePage() {
  const featuredMedia = MEDIA.filter(m => m.featured);
  const recentMedia = MEDIA.filter(m => !m.featured).slice(0, 12);
  
  const mediaTypes = Array.from(new Set(MEDIA.map(m => m.type)));

  return (
    <div>
      <Section>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-serif tracking-tight">Media Archive</h1>
            <p className="mt-2 text-black/70">
              Sermons, devotions, and teaching content from Faith International Baptist Convention Inc.
            </p>
          </div>
          
          {/* Media Type Filters */}
          {mediaTypes.length > 0 && (
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-[hsl(var(--brand))] text-white">All</Badge>
              {mediaTypes.map(type => (
                <Badge key={type} className="bg-black/5 text-black/70 hover:bg-black/10 cursor-pointer">
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </Badge>
              ))}
            </div>
          )}
        </div>
        
        {MEDIA.length > 0 ? (
          <>
            {/* Featured Media */}
            {featuredMedia.length > 0 && (
              <div className="mb-12">
                <h2 className="text-2xl font-serif tracking-tight mb-6">Featured</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {featuredMedia.map((media) => (
                    <MediaCard key={media.id} media={media} />
                  ))}
                </div>
              </div>
            )}
            
            {/* Recent Media */}
            {recentMedia.length > 0 && (
              <div>
                <h2 className="text-2xl font-serif tracking-tight mb-6">Recent Content</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {recentMedia.map((media) => (
                    <MediaCard key={media.id} media={media} />
                  ))}
                </div>
              </div>
            )}
          </>
        ) : (
          <EmptyState
            title="Media Archive Coming Soon"
            description="We're preparing a comprehensive archive of sermons, devotions, and teaching content. Check back soon to access our growing library of spiritual resources."
            action={{
              label: "Visit Current Media",
              href: "/media-devotions"
            }}
            icon="📺"
          />
        )}
      </Section>
    </div>
  );
}
