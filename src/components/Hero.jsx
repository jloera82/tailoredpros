import { ArrowRight } from 'lucide-react'
import InspectionForm from './InspectionForm.jsx'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="container hero-inner">
        <div className="hero-content">
          <p className="eyebrow hero-eyebrow">Protect Your Home. Protect Your Family.</p>
          <h1 className="hero-title">
            Reliable Pest Control
            <br />
            for a <span className="text-green">Safer,</span>
            <br />
            <span className="text-green">Healthier Home</span>
          </h1>
          <p className="hero-desc">
            Expert pest management solutions tailored to your home. Safe, effective, and
            eco-friendly treatments you can trust.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#contact">
              Get Your Free Inspection <ArrowRight size={18} strokeWidth={2.5} />
            </a>
            <a className="btn btn-outline" href="#services">
              View Our Services
            </a>
          </div>
        </div>

        <InspectionForm />
      </div>
    </section>
  )
}
