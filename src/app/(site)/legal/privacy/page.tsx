import { Section } from "@/components/ui/Section";
import { Prose } from "@/components/ui/Prose";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Faith International Baptist Convention Inc. website.",
};

export default function PrivacyPage() {
  return (
    <Section>
      <h1 className="text-3xl font-serif tracking-tight">Privacy Policy</h1>
      <p className="mt-4 text-black/70">
        Last updated: {new Date().toLocaleDateString()}
      </p>
      
      <div className="mt-8">
        <Prose>
          <h2>Information We Collect</h2>
          <p>
            When you visit our website or contact us, we may collect certain information to provide you with better service and communication.
          </p>
          
          <h3>Contact Information</h3>
          <p>
            When you submit our contact form, we collect:
          </p>
          <ul>
            <li>Your name</li>
            <li>Email address</li>
            <li>Message content</li>
          </ul>
          
          <h3>Website Usage</h3>
          <p>
            We may collect basic website analytics to understand how our site is used and to improve the user experience.
          </p>
          
          <h2>How We Use Your Information</h2>
          <p>
            We use the information you provide to:
          </p>
          <ul>
            <li>Respond to your inquiries and requests</li>
            <li>Provide information about our fellowship and services</li>
            <li>Improve our website and services</li>
          </ul>
          
          <h2>Information Sharing</h2>
          <p>
            We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.
          </p>
          
          <h2>Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
          </p>
          
          <h2>Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us at:
          </p>
          <ul>
            <li>Email: privacy@fibc.org</li>
            <li>Address: Faith International Baptist Convention Inc.</li>
          </ul>
        </Prose>
      </div>
    </Section>
  );
}
