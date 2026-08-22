import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import PageHeader from '../components/PageHeader.jsx'
import InspectionForm from '../components/InspectionForm.jsx'
import './Contact.css'

const DETAILS = [
  { icon: Phone, label: 'Call or text us', value: '(833) 652-0244', href: 'tel:+18336520244' },
  { icon: Mail, label: 'Email us', value: 'hello@tailoredpros.com', href: 'mailto:hello@tailoredpros.com' },
  { icon: MapPin, label: 'Service area', value: 'Serving homeowners across Texas' },
  { icon: Clock, label: 'Hours', value: 'Mon–Sat, 7am–7pm · 24/7 emergency line' },
]

export default function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="Get In Touch"
        title="Let's Get Your Free Quote"
        subtitle="Tell us a bit about your home and what you're dealing with — we'll match you with a local pro and follow up fast."
      />

      <section className="contact-section">
        <div className="container contact-grid">
          <div className="contact-info">
            {DETAILS.map(({ icon: Icon, label, value, href }) => (
              <div className="contact-detail" key={label}>
                <span className="contact-icon">
                  <Icon size={20} strokeWidth={1.8} />
                </span>
                <div>
                  <p className="contact-label">{label}</p>
                  {href ? (
                    <a className="contact-value contact-value-link" href={href}>
                      {value}
                    </a>
                  ) : (
                    <p className="contact-value">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="contact-form-wrap">
            <InspectionForm />
          </div>
        </div>
      </section>
    </>
  )
}
