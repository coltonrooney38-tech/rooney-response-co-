import LegalLayout from './LegalLayout.jsx'

export default function Terms() {
  return (
    <LegalLayout eyebrow="Legal" title="Terms of Service" updated="November 2026">
      <section>
        <h2>Using this website</h2>
        <p>
          This website provides information about Rooney Response Co. and its services. By using it you agree to these terms.
          Content is provided for general information and may change without notice.
        </p>
      </section>
      <section>
        <h2>Services</h2>
        <p>
          AI agents, automations and websites are delivered under a separate written agreement that sets out scope, pricing,
          timelines and responsibilities. If that agreement conflicts with these terms, the agreement wins.
        </p>
      </section>
      <section>
        <h2>AI-generated conversations</h2>
        <p>
          Our agents are trained on information you provide. You are responsible for keeping that information (services,
          prices, hours, policies) accurate. We monitor and tune agents, but no automated system is error-free, and urgent or
          sensitive matters are routed to a human.
        </p>
      </section>
      <section>
        <h2>Intellectual property</h2>
        <p>
          The design, copy and code of this website belong to Rooney Response Co. Client websites and content we produce are
          handed over as set out in each client agreement.
        </p>
      </section>
      <section>
        <h2>Contact</h2>
        <p>
          Questions about these terms? Email{' '}
          <a href="mailto:colt_rooney@icloud.com" className="text-primary hover:underline">colt_rooney@icloud.com</a>.
        </p>
      </section>
    </LegalLayout>
  )
}
