import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { ContactForm } from "@/components/ui/ContactForm";

export const metadata = {
  title: "Apostolic Governing Council (AGC)",
  description: "The central executive and legislative authority within the Faith International Baptist Convention Inc. Worldwide Fellowship.",
};

export default function AGCPage() {
  return (
    <div>
      <PageHeader
        title="Apostolic Governing Council"
        description="The central executive and legislative authority within the Faith International Baptist Convention Inc. Worldwide Fellowship"
        breadcrumbs={[
          { label: "About", href: "/about" },
          { label: "AGC" }
        ]}
        icon="🕊️"
      />

      <Section className="pt-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Description */}
          <div className="bg-white/80 backdrop-blur rounded-2xl p-8 lg:p-12 shadow-lg border border-black/5 mb-12">
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[hsl(var(--brand))] to-[hsl(var(--brand))]/80 flex items-center justify-center shadow-lg">
                <span className="text-3xl">🕊️</span>
              </div>
            </div>
            
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <p className="text-lg md:text-xl text-[hsl(var(--ink))]/80 leading-relaxed">
                The Apostolic Governing Council (AGC) stands as the <strong className="text-[hsl(var(--brand))]">central executive and legislative authority</strong> within the Faith International Baptist Convention Inc. Worldwide Fellowship, serving under the spiritual oversight of the Apostolic and Patriarchal Household.
              </p>
              <p className="text-[hsl(var(--ink))]/80 leading-relaxed">
                Established by Apostolic Decree and governed under <strong className="text-[hsl(var(--brand))]">Act of Parliament No. 27 of 1995</strong> and the Apostolic Constitution of the Worldwide Fellowship, the AGC embodies the divine principles of order, accountability, and collaborative governance. It operates as the bridge between the Sacred Congregation of Apostles and the Apostolic and Patriarchal Holy Synod, ensuring that all ecclesiastical, doctrinal, and administrative mandates flow in harmony with Apostolic tradition and global Fellowship directives.
              </p>
            </div>
          </div>

          {/* Purpose and Function */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/80 backdrop-blur rounded-2xl p-8 shadow-lg border border-black/5 text-center">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-[hsl(var(--brand))]/10 flex items-center justify-center">
                  <span className="text-xl">🎯</span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-[hsl(var(--brand))]">Purpose & Function</h3>
              </div>
              
              <div className="space-y-4">
                {[
                  "Implementing the Apostolic Vision set forth by the Apostolic Bishop and Patriarchal Leader",
                  "Coordinating strategic decisions across the Seven Pillars of the Worldwide Fellowship",
                  "Supervising the operations of Secretariats, Councils, and Commissions, ensuring transparency, efficiency, and adherence to Apostolic order",
                  "Advising the Holy Synod on matters of doctrine, discipline, and governance affecting the global Fellowship",
                  "Maintaining covenant unity among international affiliates, national councils, and local congregations within the Apostolic network"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-[hsl(var(--brand))]/5 transition-colors group">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[hsl(var(--accent))] flex items-center justify-center text-white text-sm font-bold group-hover:scale-110 transition-transform">
                      {index + 1}
                    </div>
                    <p className="text-[hsl(var(--ink))]/80 leading-relaxed text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Composition and Structure */}
            <div className="bg-white/80 backdrop-blur rounded-2xl p-8 shadow-lg border border-black/5 text-center">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-[hsl(var(--brand))]/10 flex items-center justify-center">
                  <span className="text-xl">🏛️</span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-[hsl(var(--brand))]">Composition & Structure</h3>
              </div>
              
              <div className="space-y-4">
                {[
                  "Appointed Apostolic Officers representing each of the Seven Pillars",
                  "Secretariat Heads and Deputy Secretaries-General from across the Fellowship",
                  "Regional and Continental Representatives serving under the authority of the Apostolic Bishop and Patriarchal Leader"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-[hsl(var(--brand))]/5 transition-colors group">
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[hsl(var(--accent))] mt-2 group-hover:scale-125 transition-transform"></div>
                    <p className="text-[hsl(var(--ink))]/80 leading-relaxed text-sm">{item}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-[hsl(var(--accent))]/5 rounded-lg border border-[hsl(var(--accent))]/20 text-center">
                <p className="text-[hsl(var(--ink))]/80 text-sm leading-relaxed">
                  <strong className="text-[hsl(var(--brand))]">Guided by Jethro Principles:</strong> Decisions are guided by the Jethro Principles of Apostolic Administration, ensuring that leadership is delegated with wisdom, accountability, and stewardship rooted in Biblical precedent.
                </p>
              </div>
            </div>
          </div>

          {/* Spiritual Mandate and Oversight */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Spiritual Mandate */}
            <div className="bg-gradient-to-br from-[hsl(var(--accent))]/10 to-[hsl(var(--accent))]/5 rounded-2xl p-8 border border-[hsl(var(--accent))]/20 text-center">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-[hsl(var(--accent))]/20 flex items-center justify-center">
                  <span className="text-xl">📖</span>
                </div>
                <h3 className="text-xl font-serif font-bold text-[hsl(var(--brand))]">Spiritual Mandate</h3>
              </div>
              
              <div className="text-center mb-6">
                <blockquote className="text-lg font-serif italic text-[hsl(var(--brand))] font-bold mb-2">
                  "Let all things be done decently and in order."
                </blockquote>
                <p className="text-sm text-[hsl(var(--ink))]/70">1 Corinthians 14:40</p>
              </div>
              
              <p className="text-[hsl(var(--ink))]/80 leading-relaxed text-sm text-center">
                In every decision, deliberation, and directive, the Apostolic Governing Council seeks to uphold the sacred trust of <strong className="text-[hsl(var(--brand))]">divine order, unity in governance, and faithful service</strong> to the global body of Christ.
              </p>
            </div>

            {/* Oversight and Reporting */}
            <div className="bg-gradient-to-br from-[hsl(var(--brand))]/10 to-[hsl(var(--brand))]/5 rounded-2xl p-8 border border-[hsl(var(--brand))]/20 text-center">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-[hsl(var(--brand))]/20 flex items-center justify-center">
                  <span className="text-xl">⚖️</span>
                </div>
                <h3 className="text-xl font-serif font-bold text-[hsl(var(--brand))]">Oversight & Reporting</h3>
              </div>
              
              <div className="space-y-4">
                <p className="text-[hsl(var(--ink))]/80 leading-relaxed text-sm text-center">
                  The Apostolic Governing Council reports directly to the <strong className="text-[hsl(var(--brand))]">Apostolic and Patriarchal Holy Synod</strong>, while maintaining close collaboration with the Sacred Congregation of Apostles and the Department of Ecclesiastical Administrative Affairs.
                </p>
                <div className="p-4 bg-[hsl(var(--brand))]/5 rounded-lg border border-[hsl(var(--brand))]/20 text-center">
                  <p className="text-[hsl(var(--ink))]/80 text-sm leading-relaxed">
                    <strong className="text-[hsl(var(--brand))]">Policy Nerve Center:</strong> Functions as the policy nerve center of the Worldwide Fellowship, ensuring that every Secretariat, Council, and Institution operates within its ordained spiritual and administrative parameters.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Reporting Section */}
      <Section className="bg-gradient-to-b from-[hsl(var(--brand))]/5 to-transparent pt-16 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[hsl(var(--accent))] to-[hsl(var(--accent))]/80 flex items-center justify-center shadow-lg">
                <span className="text-2xl">📋</span>
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[hsl(var(--ink))] mb-4">
              Report to the AGC
            </h2>
            <p className="text-[hsl(var(--ink))]/70 leading-relaxed max-w-2xl mx-auto">
              Submit reports, concerns, or communications directly to the Apostolic Governing Council. All submissions are reviewed with care and confidentiality.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur rounded-2xl p-8 shadow-lg border border-black/5">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Contact Information */}
              <div>
                <h3 className="text-xl font-serif font-bold text-[hsl(var(--brand))] mb-6">Contact the AGC</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 rounded-lg border border-black/5">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[hsl(var(--brand))]/10 flex items-center justify-center">
                      <span>📧</span>
                    </div>
                    <div>
                      <p className="font-semibold text-[hsl(var(--ink))]">Official Communications</p>
                      <p className="text-sm text-[hsl(var(--ink))]/70">agc@fibc.org</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-4 rounded-lg border border-black/5">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[hsl(var(--accent))]/10 flex items-center justify-center">
                      <span>⚠️</span>
                    </div>
                    <div>
                      <p className="font-semibold text-[hsl(var(--ink))]">Urgent Matters</p>
                      <p className="text-sm text-[hsl(var(--ink))]/70">Use the form for immediate attention</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-4 rounded-lg border border-black/5">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[hsl(var(--brand))]/10 flex items-center justify-center">
                      <span>🔒</span>
                    </div>
                    <div>
                      <p className="font-semibold text-[hsl(var(--ink))]">Confidentiality</p>
                      <p className="text-sm text-[hsl(var(--ink))]/70">All communications are handled with strict confidentiality</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Reporting Form */}
              <div>
                <h3 className="text-xl font-serif font-bold text-[hsl(var(--brand))] mb-6">Submit a Report</h3>
                <AGCReportingForm />
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

// Custom reporting form component for AGC
function AGCReportingForm() {
  return (
    <form className="space-y-6">
      <div>
        <label htmlFor="reporter-name" className="block text-sm font-medium text-[hsl(var(--ink))]/80 mb-2">
          Your Name *
        </label>
        <input
          type="text"
          id="reporter-name"
          name="name"
          required
          className="w-full px-4 py-3 rounded-brand border border-black/10 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))] focus:border-transparent transition-all"
          placeholder="Enter your full name"
        />
      </div>
      
      <div>
        <label htmlFor="reporter-email" className="block text-sm font-medium text-[hsl(var(--ink))]/80 mb-2">
          Email Address *
        </label>
        <input
          type="email"
          id="reporter-email"
          name="email"
          required
          className="w-full px-4 py-3 rounded-brand border border-black/10 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))] focus:border-transparent transition-all"
          placeholder="your.email@example.com"
        />
      </div>

      <div>
        <label htmlFor="report-type" className="block text-sm font-medium text-[hsl(var(--ink))]/80 mb-2">
          Report Type *
        </label>
        <select
          id="report-type"
          name="reportType"
          required
          className="w-full px-4 py-3 rounded-brand border border-black/10 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))] focus:border-transparent transition-all"
        >
          <option value="">Select report type</option>
          <option value="governance">Governance Matter</option>
          <option value="doctrinal">Doctrinal Concern</option>
          <option value="administrative">Administrative Issue</option>
          <option value="disciplinary">Disciplinary Matter</option>
          <option value="general">General Communication</option>
        </select>
      </div>
      
      <div>
        <label htmlFor="report-message" className="block text-sm font-medium text-[hsl(var(--ink))]/80 mb-2">
          Report Details *
        </label>
        <textarea
          id="report-message"
          name="message"
          required
          rows={6}
          className="w-full px-4 py-3 rounded-brand border border-black/10 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))] focus:border-transparent transition-all resize-none"
          placeholder="Please provide detailed information about your report or communication..."
        />
      </div>

      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="confidential"
          name="confidential"
          className="mt-1 w-4 h-4 text-[hsl(var(--brand))] border-black/20 rounded focus:ring-[hsl(var(--accent))]"
        />
        <label htmlFor="confidential" className="text-sm text-[hsl(var(--ink))]/80">
          This matter requires confidential handling
        </label>
      </div>
      
      <button
        type="submit"
        className="w-full bg-[hsl(var(--brand))] text-white px-6 py-3 rounded-brand font-semibold hover:bg-[hsl(var(--brand))]/90 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))] transition-colors"
      >
        Submit Report to AGC
      </button>
      
      <p className="text-xs text-[hsl(var(--ink))]/60 text-center">
        All reports are reviewed by the appropriate AGC officers and handled according to Fellowship protocols.
      </p>
    </form>
  );
}
