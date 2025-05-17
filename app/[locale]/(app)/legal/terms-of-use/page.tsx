import React from 'react';

const TermsOfUse = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10 font-sans ">
      <h1 className="text-3xl font-bold text-center  mb-2">KOZMOS-SOFT TERMS OF USE</h1>
      <p className="text-center text-sm  mb-10">Last Updated: 05,2023</p>

      {/* Section Template */}
      <div className="space-y-10">
        {/* Section 1 */}
        <section>
          <h2 className="text-xl font-semibold  border-b border-gray-200 pb-2 mb-3">1. Introduction</h2>
          <p className="mb-4">
            <strong>Kozmos-Soft</strong> (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), a software company registered in Sivas, Turkey,
            provides web development, mobile applications, and AI-integrated solutions through our website
            <strong> kozmos-soft.com</strong> (the &quot;Site&quot;) and related services (collectively, the &quot;Services&quot;).
          </p>
          <p>
            By accessing or using our Services, you agree to these Terms of Use. If you disagree with any part, you must
            discontinue use immediately.
          </p>
        </section>

        {/* Section 2 */}
        <section>
          <h2 className="text-xl font-semibold  border-b border-gray-200 pb-2 mb-3">2. Our Services</h2>
          <p className="mb-2 font-medium">We specialize in:</p>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>Custom web development and API integrations</li>
            <li>Cross-platform mobile applications (iOS/Android)</li>
            <li>AI-powered solutions including chatbots and machine learning models</li>
            <li>[Add any other specific services you offer]</li>
          </ul>
          <p>
            <span className="font-semibold">Service Limitations:</span> Our AI integrations may rely on third-party APIs
            (e.g., OpenAI, Google Cloud) and are subject to their availability and terms.
          </p>
        </section>

        {/* Section 3 */}
        <section>
          <h2 className="text-xl font-semibold  border-b border-gray-200 pb-2 mb-3">3. Intellectual Property Rights</h2>
          <p className="mb-2"><strong>Ownership:</strong> All source code, designs, AI models, documentation, and content we create are the exclusive property of Kozmos-Soft unless otherwise agreed in writing.</p>
          <p className="mb-2"><strong>License:</strong> For paid services, we grant you a non-exclusive, non-transferable license to use the deliverables solely for your internal business purposes.</p>
          <p><strong>Restrictions:</strong></p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Reverse-engineer, decompile, or disassemble our software</li>
            <li>Use our AI models to train competing products</li>
            <li>Resell, sublicense, or redistribute our work without permission</li>
          </ul>
        </section>

        {/* Section 4 */}
        <section>
          <h2 className="text-xl font-semibold  border-b border-gray-200 pb-2 mb-3">4. User Responsibilities</h2>
          <p className="mb-2">When using our Services, you agree:</p>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>To provide accurate information and maintain account security</li>
            <li>Not to use our Services for illegal activities or malware distribution</li>
            <li>To comply with all applicable laws (including data protection regulations)</li>
            <li>Not to overload our systems with excessive automated requests</li>
          </ul>
          <p className="mb-2"><strong>AI-Specific Rules:</strong></p>
          <ul className="list-disc pl-6 space-y-1">
            <li>You warrant that you have rights to all input data</li>
            <li>You won&apos;t generate harmful, misleading, or illegal content</li>
            <li>Outputs may require human review for critical applications</li>
          </ul>
        </section>

        {/* Section 5 */}
        <section>
          <h2 className="text-xl font-semibold  border-b border-gray-200 pb-2 mb-3">5. Payments & Refunds</h2>
          <p><strong>Pricing:</strong> Service fees are specified in project proposals or subscription plans. All prices are in [USD/TRY].</p>
          <p><strong>Payment Terms:</strong> [Specify payment schedules, e.g., “50% upfront for projects over $5,000&quot;]</p>
          <p><strong>Refund Policy:</strong> [E.g., &quot;No refunds for custom development work after delivery. Subscription plans may be canceled with 30 days notice.&quot;]</p>
        </section>

        {/* Section 6 */}
        <section>
          <h2 className="text-xl font-semibold  border-b border-gray-200 pb-2 mb-3">6. Privacy & Data Protection</h2>
          <p className="mb-2">We handle data in accordance with:</p>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>Turkey&apos;s Personal Data Protection Law (KVKK)</li>
            <li>GDPR for EU clients (where applicable)</li>
          </ul>
          <p className="mb-2"><strong>Data Processing:</strong> Our AI services may temporarily process your data to generate outputs. We do not retain training data longer than necessary.</p>
          <p>See our full <a href="#" className="text-blue-600 underline hover:text-blue-800">Privacy Policy</a> for details.</p>
        </section>

        {/* Section 7 */}
        <section>
          <h2 className="text-xl font-semibold  border-b border-gray-200 pb-2 mb-3">7. Disclaimers & Limitations</h2>
          <p className="mb-2"><strong>No Warranty:</strong> Services are provided &quot;as-is.&quot; We don&apos;t guarantee:</p>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>Uninterrupted or error-free operation</li>
            <li>Accuracy of AI-generated content</li>
            <li>Results from third-party integrations</li>
          </ul>
          <p><strong>Liability Cap:</strong> Our maximum liability is limited to fees paid for the affected Service in the past 6 months.</p>
        </section>

        {/* Section 8 */}
        <section>
          <h2 className="text-xl font-semibold  border-b border-gray-200 pb-2 mb-3">8. Governing Law & Disputes</h2>
          <p>These Terms are governed by Turkish law. Any disputes will be resolved in Sivas courts.</p>
        </section>

        {/* Section 9 */}
        <section>
          <h2 className="text-xl font-semibold  border-b border-gray-200 pb-2 mb-3">9. Changes & Termination</h2>
          <p>We may update these Terms by posting changes on this page. Continued use constitutes acceptance.</p>
          <p>We reserve the right to terminate access for violations or inactivity.</p>
        </section>

        {/* Section 10 */}
        <section>
          <h2 className="text-xl font-semibold  border-b border-gray-200 pb-2 mb-3">10. Contact Us</h2>
          <p>
            For questions about these Terms:<br />
            <strong>Email:</strong> info@kozmos-soft.com<br />
            <strong>Address:</strong> Sivas Merkez, Turkey
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsOfUse;
