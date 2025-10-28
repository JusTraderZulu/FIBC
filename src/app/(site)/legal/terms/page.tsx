import { Section } from "@/components/ui/Section";
import { Prose } from "@/components/ui/Prose";

export const metadata = {
  title: "Terms of Service",
  description: "Terms of service for Faith International Baptist Convention Inc. website.",
};

export default function TermsPage() {
  return (
    <Section>
      <h1 className="text-3xl font-serif tracking-tight">Terms of Service</h1>
      <p className="mt-4 text-black/70">
        Last updated: {new Date().toLocaleDateString()}
      </p>
      
      <div className="mt-8">
        <Prose>
          <h2>Acceptance of Terms</h2>
          <p>
            By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
          </p>
          
          <h2>Use License</h2>
          <p>
            Permission is granted to temporarily access the materials on Faith International Baptist Convention Inc.'s website for personal, non-commercial transitory viewing only.
          </p>
          
          <h3>This license shall not permit you to:</h3>
          <ul>
            <li>Modify or copy the materials</li>
            <li>Use the materials for any commercial purpose or for any public display</li>
            <li>Attempt to reverse engineer any software contained on the website</li>
            <li>Remove any copyright or other proprietary notations from the materials</li>
          </ul>
          
          <h2>Disclaimer</h2>
          <p>
            The materials on Faith International Baptist Convention Inc.'s website are provided on an 'as is' basis. Faith International Baptist Convention Inc. makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>
          
          <h2>Limitations</h2>
          <p>
            In no event shall Faith International Baptist Convention Inc. or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Faith International Baptist Convention Inc.'s website.
          </p>
          
          <h2>Content Guidelines</h2>
          <p>
            Users are expected to engage with our content respectfully and in accordance with Christian principles and values.
          </p>
          
          <h2>Contact Information</h2>
          <p>
            For questions regarding these terms, please contact us at:
          </p>
          <ul>
            <li>Email: legal@fibc.org</li>
            <li>Address: Faith International Baptist Convention Inc.</li>
          </ul>
        </Prose>
      </div>
    </Section>
  );
}
