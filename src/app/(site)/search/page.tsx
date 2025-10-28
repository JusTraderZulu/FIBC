"use client";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { EmptyState } from "@/components/ui/EmptyState";
import { search, getSearchSuggestions } from "@/lib/search";
import { SearchResult } from "@/lib/types";

function SearchPageContent() {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('q') || '');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  
  const suggestions = getSearchSuggestions();

  useEffect(() => {
    const performSearch = async () => {
      if (query.trim().length < 2) {
        setResults([]);
        return;
      }
      
      setIsSearching(true);
      // Add a small delay to simulate search (and prevent too many rapid searches)
      await new Promise(resolve => setTimeout(resolve, 300));
      const searchResults = search(query);
      setResults(searchResults);
      setIsSearching(false);
    };

    performSearch();
  }, [query]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Update URL with search query
    const url = new URL(window.location.href);
    url.searchParams.set('q', query);
    window.history.pushState({}, '', url.toString());
  };

  const getTypeIcon = (type: SearchResult['type']) => {
    switch (type) {
      case 'person': return '👤';
      case 'governance': return '🏛️';
      case 'institution': return '🏢';
      case 'media': return '📺';
      case 'event': return '📅';
      default: return '📄';
    }
  };

  const getTypeLabel = (type: SearchResult['type']) => {
    switch (type) {
      case 'person': return 'Leadership';
      case 'governance': return 'Governance';
      case 'institution': return 'Institution';
      case 'media': return 'Media';
      case 'event': return 'Event';
      default: return 'Content';
    }
  };

  return (
    <Section>
      <h1 className="text-3xl font-serif tracking-tight">Search</h1>
      <p className="mt-4 text-black/70 max-w-3xl">
        Find information about our leadership, governance structure, institutions, and more.
      </p>
      
      {/* Search Form */}
      <form onSubmit={handleSubmit} className="mt-8 max-w-2xl">
        <div className="flex gap-3">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for leadership, governance, institutions..."
            className="flex-1 px-4 py-3 rounded-brand border border-black/10 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))] focus:border-transparent transition-all"
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-brand bg-[hsl(var(--brand))] text-white font-semibold hover:bg-[hsl(var(--brand))]/90 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))] transition-colors"
          >
            Search
          </button>
        </div>
      </form>
      
      {/* Search Suggestions */}
      {!query && (
        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-4">Popular searches</h2>
          <div className="flex flex-wrap gap-2">
            {suggestions.map(suggestion => (
              <button
                key={suggestion}
                onClick={() => setQuery(suggestion)}
                className="px-3 py-2 text-sm rounded-brand bg-black/5 text-black/70 hover:bg-black/10 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))] transition-colors"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>
      )}
      
      {/* Search Results */}
      {query.trim().length >= 2 && (
        <div className="mt-12">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-xl font-semibold">
              {isSearching ? 'Searching...' : `Results for "${query}"`}
            </h2>
            {!isSearching && results.length > 0 && (
              <span className="text-sm text-black/60">
                {results.length} result{results.length !== 1 ? 's' : ''}
              </span>
            )}
          </div>
          
          {isSearching ? (
            <div className="text-center py-8">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-[hsl(var(--brand))]"></div>
            </div>
          ) : results.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {results.map((result) => (
                <Card
                  key={result.id}
                  title={result.title}
                  description={result.description}
                  href={result.url}
                >
                  <div className="mt-3 flex items-center gap-2 text-xs text-black/60">
                    <span>{getTypeIcon(result.type)}</span>
                    <span>{getTypeLabel(result.type)}</span>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <EmptyState
              title="No results found"
              description={`We couldn't find anything matching "${query}". Try different keywords or browse our sections directly.`}
              action={{
                label: "Browse Governance",
                href: "/governance"
              }}
              icon="🔍"
            />
          )}
        </div>
      )}
    </Section>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div>Loading search...</div>}>
      <SearchPageContent />
    </Suspense>
  );
}
