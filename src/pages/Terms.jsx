import PageHeader from '../components/PageHeader.jsx'
import './Legal.css'

export default function Terms() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Terms of Service" subtitle="Last updated August 22, 2026" />

      <section className="legal-section">
        <div className="container legal-content">
          <h2>Using This Site</h2>
          <p>
            This website is provided so you can learn about Tailored Pros&rsquo; services and
            request a free inspection or quote. By using this site, you agree to provide accurate
            information when submitting our quote form and not to misuse the site in any way that
            could disrupt or damage it.
          </p>

          <h2>Quotes &amp; Scheduling</h2>
          <p>
            Submitting a quote request does not create a binding service agreement. Final
            pricing, scope of work, and scheduling are confirmed with you directly by a Tailored
            Pros representative before any service is performed.
          </p>

          <h2>Communication Consent</h2>
          <p>
            By submitting the quote form, you agree that Tailored Pros and up to three local
            service partners may contact you by phone, text, or email about your request —
            including using automated dialing or pre-recorded messages — even if your number is
            on a do-not-call list. Consent isn&rsquo;t required to purchase services, and you can
            opt out of future communications at any time.
          </p>

          <h2>No Guarantee of Availability</h2>
          <p>
            While we do our best to serve every homeowner who reaches out, availability depends on
            your location and current scheduling capacity. We&rsquo;ll always let you know if
            we&rsquo;re unable to serve your area.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            This site and its content are provided &ldquo;as is&rdquo; without warranties of any
            kind. Tailored Pros is not liable for any indirect or incidental damages arising from
            your use of this site.
          </p>

          <h2>Changes to These Terms</h2>
          <p>
            We may update these terms from time to time. Continued use of the site after changes
            are posted means you accept the updated terms.
          </p>

          <h2>Contact Us</h2>
          <p>
            Questions about these terms? Reach us at{' '}
            <a href="mailto:hello@tailoredpros.com">hello@tailoredpros.com</a> or{' '}
            <a href="tel:+18336520244">(833) 652-0244</a>.
          </p>
        </div>
      </section>
    </>
  )
}
