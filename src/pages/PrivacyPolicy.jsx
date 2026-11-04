import LegalLayout from './LegalLayout.jsx'

export default function PrivacyPolicy() {
  return (
    <LegalLayout eyebrow="Legal" title="Privacy Policy" updated="November 2026">
      <section>
        <h2>Who we are</h2>
        <p>
          Rooney Response Co. designs and operates AI voice agents, lead follow-up automations and websites for local
          service businesses. This policy explains what information we collect through this website and how we use it.
        </p>
      </section>
      <section>
        <h2>What we collect</h2>
        <p>
          When you submit our contact form we receive your name, email, phone number, business details, your message and any
          files you attach. We also collect basic, anonymous analytics about how the site is used.
        </p>
      </section>
      <section>
        <h2>How we use it</h2>
        <p>
          We use your information only to respond to your enquiry, prepare your lead-response audit and deliver services you
          ask for. We do not sell your data or share it for third-party marketing.
        </p>
      </section>
      <section>
        <h2>Client call and message data</h2>
        <p>
          For clients, our AI agents process call audio, transcripts and messages on your behalf to answer, qualify and book
          leads. That data is handled under our client agreement, stored with reputable infrastructure providers and kept only
          as long as needed to deliver and improve your service.
        </p>
      </section>
      <section>
        <h2>Your rights</h2>
        <p>
          You can ask us at any time to access, correct or delete the information we hold about you. Email{' '}
          <a href="mailto:colt_rooney@icloud.com" className="text-primary hover:underline">colt_rooney@icloud.com</a>.
        </p>
      </section>
    </LegalLayout>
  )
}
