import { Bug, Hammer, Rat, SprayCan, BedDouble, PawPrint, Building2, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import CTA from '../components/CTA.jsx'
import './Services.css'

const SERVICES = [
  {
    icon: Bug,
    title: 'General Pest Control',
    desc: 'Year-round protection against ants, roaches, spiders, and other common household invaders.',
  },
  {
    icon: Hammer,
    title: 'Termite Control',
    desc: "Inspections and targeted treatments that protect your home's structure from costly termite damage.",
  },
  {
    icon: Rat,
    title: 'Rodent Control',
    desc: 'Humane trapping and exclusion services to keep mice and rats out of your walls and attic.',
  },
  {
    icon: SprayCan,
    title: 'Mosquito Control',
    desc: 'Yard treatments that cut mosquito populations so you can actually enjoy your outdoor space.',
  },
  {
    icon: BedDouble,
    title: 'Bed Bug Treatment',
    desc: 'Discreet, thorough elimination that gets rid of bed bugs and keeps them from coming back.',
  },
  {
    icon: PawPrint,
    title: 'Wildlife Removal',
    desc: 'Safe, humane removal of raccoons, squirrels, and other unwanted wildlife from your property.',
  },
  {
    icon: Building2,
    title: 'Commercial Pest Control',
    desc: 'Custom pest management programs for restaurants, offices, and multi-unit properties.',
  },
]

export default function Services() {
  return (
    <>
      <PageHeader
        eyebrow="What We Offer"
        title="Our Pest Control Services"
        subtitle="From routine prevention to specialized treatments, our licensed technicians handle it all — safely and effectively."
      />

      <section className="services-section">
        <div className="container">
          <div className="services-grid">
            {SERVICES.map(({ icon: Icon, title, desc }) => (
              <div className="service-card" key={title}>
                <span className="service-icon">
                  <Icon size={26} strokeWidth={1.8} />
                </span>
                <h3 className="service-title">{title}</h3>
                <p className="service-desc">{desc}</p>
                <Link className="service-link" to="/contact">
                  Get a Free Quote <ArrowRight size={15} strokeWidth={2.5} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
