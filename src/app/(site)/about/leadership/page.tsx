import { Section } from "@/components/ui/Section";
import { PersonCard } from "@/components/ui/PersonCard";
import { EmptyState } from "@/components/ui/EmptyState";
import { LEADERSHIP } from "@/lib/data/leadership";
import { ABOUT } from "@/lib/seed";

export const metadata = {
  title: "Member Profiles",
  description: "Meet the members of Faith International Baptist Convention Inc.",
};

export default function MemberProfilesPage() {
  return (
    <div>
      <Section>
        <h1 className="text-3xl font-serif tracking-tight">Member Profiles</h1>
        <p className="mt-4 text-black/70 max-w-3xl">{ABOUT.leadershipIntro}</p>
        
        {LEADERSHIP.length > 0 ? (
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {LEADERSHIP.map((person) => (
              <PersonCard key={person.id} person={person} />
            ))}
          </div>
        ) : (
          <EmptyState
            title="Member Profiles Coming Soon"
            description="We're preparing detailed profiles of our fellowship members. Check back soon to learn about the officers, leaders, and key members of our worldwide fellowship."
            action={{
              label: "Learn About Our Structure",
              href: "/governance"
            }}
            icon="👥"
          />
        )}
      </Section>
    </div>
  );
}
