import { ShieldCheck, Leaf, Award, Clock } from 'lucide-react'
import PageHeader from '../components/PageHeader.jsx'
import WhyChooseUs from '../components/WhyChooseUs.jsx'
import CTA from '../components/CTA.jsx'
import './WhyUs.css'

const STATS = [
  { value: '12+', label: 'Years in business' },
  { value: '9,500+', label: 'Homes protected' },
  { value: '4.9/5', label: 'Average customer rating' },
  { value: '<24hrs', label: 'Average response time' },
]

const BADGES = [
  { icon: ShieldCheck, lines: ['Safe for Kids', '& Pets'] },
  { icon: Leaf, lines: ['Eco-Friendly', 'Solutions'] },
  { icon: Award, lines: ['Licensed &', 'Insured Experts'] },
  { icon: Clock, lines: ['Fast Response', 'Guaranteed'] },
]

export default function WhyUs() {
  return (
    <>
      <PageHeader
        eyebrow="About Tailored Pros"
        title="Local Experts, Real Results"
        subtitle="We're a family-owned pest control company built on one idea: treat every home like it's our own."
      />

      <section className="stats-section">
        <div className="container stats-grid">
          {STATS.map((stat) => (
            <div className="stat-item" key={stat.label}>
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <WhyChooseUs />

      <section className="badges-section">
        <div className="container badges-grid">
          {BADGES.map(({ icon: Icon, lines }) => (
            <div className="badge-item" key={lines[0]}>
              <span className="badge-icon">
                <Icon size={24} strokeWidth={1.8} />
              </span>
              <span className="badge-text">
                {lines[0]}
                <br />
                {lines[1]}
              </span>
            </div>
          ))}
        </div>
      </section>

      <CTA />
    </>
  )
}
