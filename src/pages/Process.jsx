import { ClipboardCheck, Users, Calendar, ShieldCheck } from 'lucide-react'
import PageHeader from '../components/PageHeader.jsx'
import HowItWorks from '../components/HowItWorks.jsx'
import CTA from '../components/CTA.jsx'
import './Process.css'

const EXPECTATIONS = [
  {
    icon: Calendar,
    title: 'We schedule around you',
    desc: 'Pick a time that works for your day — including evenings and weekends in most service areas.',
  },
  {
    icon: ClipboardCheck,
    title: 'A full property walkthrough',
    desc: 'Your technician checks entry points, moisture issues, and pest activity inside and out.',
  },
  {
    icon: Users,
    title: 'A plan you understand',
    desc: 'No jargon, no upsell pressure — just a clear explanation of what we found and what we recommend.',
  },
  {
    icon: ShieldCheck,
    title: 'Follow-through you can count on',
    desc: 'If pests return between scheduled visits, so do we — at no extra charge.',
  },
]

export default function Process() {
  return (
    <>
      <PageHeader
        eyebrow="How It Works"
        title="Our Simple, Proven Process"
        subtitle="Getting rid of pests shouldn't be complicated. Here's exactly what happens from your first call to a pest-free home."
      />

      <HowItWorks />

      <section className="expect-section">
        <div className="container">
          <div className="expect-head">
            <p className="eyebrow">At Your Inspection</p>
            <h2>What to Expect on Day One</h2>
          </div>

          <div className="expect-grid">
            {EXPECTATIONS.map(({ icon: Icon, title, desc }) => (
              <div className="expect-card" key={title}>
                <span className="expect-icon">
                  <Icon size={22} strokeWidth={1.8} />
                </span>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="guarantee-section">
        <div className="container guarantee-inner">
          <div>
            <p className="eyebrow">Our Promise</p>
            <h2>The Tailored Pros Guarantee</h2>
            <p className="guarantee-desc">
              If pests come back between treatments, we come back too — free of charge. We stand
              behind every visit until the problem is actually solved, not just masked.
            </p>
          </div>
          <div className="guarantee-stat">
            <span>100%</span>
            <p>Satisfaction guaranteed on every service plan</p>
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
