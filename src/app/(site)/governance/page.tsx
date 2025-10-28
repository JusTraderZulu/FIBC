import HolySynodSection from "@/components/governance/HolySynodSection";
import PillarsGrid from "@/components/governance/PillarsGrid";

export const metadata = {
  title: "Governance | Faith International Baptist Convention Inc. Worldwide Fellowship",
  description:
    "The Apostolic and Patriarchal Holy Synod and the Seven Governance Pillars of the Worldwide Fellowship.",
};

export default function GovernancePage() {
  return (
    <main>
      <HolySynodSection />
      <div className="mx-auto max-w-6xl px-4">
        <hr className="border-t mt-6 mb-2" />
      </div>
      <PillarsGrid />
    </main>
  );
}



