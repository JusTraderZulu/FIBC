import { EventItem } from "@/lib/types";
import { Badge } from "./Badge";

interface EventMetaProps {
  event: EventItem;
  showDate?: boolean;
  showStatus?: boolean;
  showCategory?: boolean;
  showLocation?: boolean;
}

export function EventMeta({ 
  event, 
  showDate = true, 
  showStatus = true, 
  showCategory = true,
  showLocation = true 
}: EventMetaProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const getStatusColor = (status: EventItem['status']) => {
    switch (status) {
      case 'upcoming': return 'bg-green-100 text-green-800';
      case 'ongoing': return 'bg-blue-100 text-blue-800';
      case 'completed': return 'bg-gray-100 text-gray-800';
      case 'tba': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusLabel = (status: EventItem['status']) => {
    switch (status) {
      case 'upcoming': return 'Upcoming';
      case 'ongoing': return 'In Progress';
      case 'completed': return 'Completed';
      case 'tba': return 'Date TBA';
      default: return 'Unknown';
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-2 text-sm">
      {showStatus && (
        <Badge className={getStatusColor(event.status)}>
          {getStatusLabel(event.status)}
        </Badge>
      )}
      
      {showCategory && event.category && (
        <Badge className="bg-[hsl(var(--brand))]/10 text-[hsl(var(--brand))]">
          {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
        </Badge>
      )}
      
      {showDate && event.date && (
        <span className="text-black/70">
          📅 {formatDate(event.date)}
        </span>
      )}
      
      {showLocation && event.location && (
        <span className="text-black/70">
          📍 {event.location}
        </span>
      )}
    </div>
  );
}
