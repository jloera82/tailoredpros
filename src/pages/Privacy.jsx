import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import './Legal.css'

export default function Privacy() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Privacy Policy" subtitle="Last updated August 22, 2026" />

      <section className="legal-section">
        <div className="container legal-content">
          <h2>Information We Collect</h2>
          <p>
            When you request a free inspection or quote through our site, we collect the
            information you provide directly — such as your name, phone number, email address,
            property address, and details about the pest issue you&rsquo;re experiencing. We do
            not ask for payment or financial information through this form.
          </p>

          <h2>Approximate Location</h2>
          <p>
            To show you the service area and business details most relevant to you, we look up an
            approximate location (city and state) based on your IP address using third-party
            geolocation providers. This is a general estimate — not precise GPS tracking — and is
            never combined with your submitted contact details unless you explicitly provide them
            through our quote form.
          </p>

          <h2>How We Use Your Information</h2>
          <p>
            We use the information you submit to respond to your request, schedule an inspection,
            and follow up by phone, text, or email. By submitting the quote form, you agree that
            Tailored Pros and up to three local service partners may contact you about your
            request — including using automated dialing or pre-recorded messages — even if your
            number is on a do-not-call list. Consent isn&rsquo;t required to purchase services.
          </p>

          <h2>Third-Party Services</h2>
          <p>
            We use trusted third-party services to operate this site, including IP-geolocation
            providers (to personalize local content) and Google Reviews (to display and collect
            customer reviews). These providers may process your IP address in accordance with
            their own privacy policies.
          </p>

          <h2>Your Choices</h2>
          <p>
            You can ask us to access, correct, or delete the information you&rsquo;ve submitted at
            any time by contacting us using the details on our{' '}
            <Link to="/contact">Contact page</Link>. We do not sell your personal information to
            third parties.
          </p>

          <h2>Contact Us</h2>
          <p>
            Questions about this policy? Reach us at{' '}
            <a href="mailto:hello@tailoredpros.com">hello@tailoredpros.com</a> or{' '}
            <a href="tel:+18336520244">(833) 652-0244</a>.
          </p>
        </div>
      </section>
    </>
  )
}
