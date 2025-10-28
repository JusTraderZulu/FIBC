export function SkeletonCard() {
  return (
    <div className="rounded-brand bg-white/70 backdrop-blur border border-black/10 shadow-sm p-4 sm:p-6">
      {/* Image skeleton */}
      <div className="aspect-video bg-black/5 rounded-lg mb-4 animate-pulse" />
      
      {/* Title skeleton */}
      <div className="h-6 bg-black/10 rounded mb-3 animate-pulse" />
      
      {/* Description skeleton */}
      <div className="space-y-2">
        <div className="h-4 bg-black/5 rounded animate-pulse" />
        <div className="h-4 bg-black/5 rounded w-3/4 animate-pulse" />
      </div>
      
      {/* Meta skeleton */}
      <div className="mt-4 flex gap-2">
        <div className="h-5 w-16 bg-black/5 rounded-full animate-pulse" />
        <div className="h-5 w-20 bg-black/5 rounded-full animate-pulse" />
      </div>
    </div>
  );
}

interface SkeletonGridProps {
  count?: number;
  columns?: 1 | 2 | 3;
}

export function SkeletonGrid({ count = 6, columns = 3 }: SkeletonGridProps) {
  const gridClass = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
  }[columns];

  return (
    <div className={`grid ${gridClass} gap-4`}>
      {Array.from({ length: count }, (_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}
