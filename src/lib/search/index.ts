// Phase 2 Search functionality for Faith International Baptist Convention Inc.
import { SearchResult, SearchIndex } from "../types";
import { PILLARS } from "../data/pillars";
import { SECRETARIATS } from "../data/secretariats";
import { COUNCILS } from "../data/councils";
import { INSTITUTIONS } from "../seed";
import { MEDIA } from "../data/media";
import { LEADERSHIP } from "../data/leadership";

// Build search index from all content
function buildSearchIndex(): SearchIndex {
  const index: SearchIndex = {};
  
  // Add governance items (pillars, secretariats, councils)
  const allGovernance = [
    ...PILLARS.map(item => ({
      type: 'governance' as const,
      id: item.id,
      slug: item.slug,
      title: item.name,
      description: item.blurb,
      url: `/governance/${item.slug}`,
    })),
    ...SECRETARIATS.map(item => ({
      type: 'governance' as const,
      id: item.id,
      slug: item.slug,
      title: item.name,
      description: item.blurb,
      url: `/governance/${item.slug}`,
    })),
    ...COUNCILS.map(item => ({
      type: 'governance' as const,
      id: item.id,
      slug: item.slug,
      title: item.name,
      description: item.blurb,
      url: `/governance/${item.slug}`,
    })),
  ];
  
  // Add institutions
  const institutions = INSTITUTIONS.map(item => ({
    type: 'institution' as const,
    id: item.name.toLowerCase().replace(/\s+/g, '-'),
    slug: item.name.toLowerCase().replace(/\s+/g, '-'),
    title: item.name,
    description: item.blurb,
    url: '/institutions',
  }));
  
  // Add leadership
  const leadership = LEADERSHIP.map(person => ({
    type: 'person' as const,
    id: person.id,
    slug: person.slug,
    title: `${person.name} - ${person.title}`,
    description: person.bio || `${person.title} at Faith International Baptist Convention Inc.`,
    url: `/about/leadership/${person.slug}`,
  }));
  
  // Add media
  const media = MEDIA.map(item => ({
    type: 'media' as const,
    id: item.id,
    slug: item.slug,
    title: item.title,
    description: item.description,
    url: item.externalUrl || `/media-devotions/${item.slug}`,
  }));
  
  // Combine all results
  const allResults = [...allGovernance, ...institutions, ...leadership, ...media];
  
  // Build searchable index
  allResults.forEach(result => {
    const searchText = `${result.title} ${result.description}`.toLowerCase();
    const words = searchText.split(/\s+/);
    
    words.forEach(word => {
      const cleanWord = word.replace(/[^a-z0-9]/g, '');
      if (cleanWord.length > 2) {
        if (!index[cleanWord]) {
          index[cleanWord] = [];
        }
        // Avoid duplicates
        if (!index[cleanWord].find(r => r.id === result.id)) {
          index[cleanWord].push(result);
        }
      }
    });
  });
  
  return index;
}

// Create the search index
const searchIndex = buildSearchIndex();

export function search(query: string, limit = 10): SearchResult[] {
  if (!query || query.trim().length < 2) {
    return [];
  }
  
  const cleanQuery = query.toLowerCase().trim();
  const queryWords = cleanQuery.split(/\s+/);
  const results = new Map<string, SearchResult>();
  
  queryWords.forEach(word => {
    const cleanWord = word.replace(/[^a-z0-9]/g, '');
    
    // Exact matches
    if (searchIndex[cleanWord]) {
      searchIndex[cleanWord].forEach(result => {
        results.set(result.id, result);
      });
    }
    
    // Partial matches
    Object.keys(searchIndex).forEach(indexWord => {
      if (indexWord.includes(cleanWord) || cleanWord.includes(indexWord)) {
        searchIndex[indexWord].forEach(result => {
          results.set(result.id, result);
        });
      }
    });
  });
  
  // Convert to array and sort by relevance (title matches first)
  return Array.from(results.values())
    .sort((a, b) => {
      const aScore = a.title.toLowerCase().includes(cleanQuery) ? 1 : 0;
      const bScore = b.title.toLowerCase().includes(cleanQuery) ? 1 : 0;
      return bScore - aScore;
    })
    .slice(0, limit);
}

export function getSearchSuggestions(): string[] {
  return [
    "Leadership",
    "General Assembly", 
    "Seven Pillars",
    "Secretariats",
    "Education",
    "Media",
    "Governance",
    "Councils",
    "Training",
    "Seminary"
  ];
}
