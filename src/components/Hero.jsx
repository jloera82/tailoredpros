import { ArrowRight } from 'lucide-react'
import { useState } from 'react'
import './Hero.css'

const JOIN_AVATARS = [
  'https://randomuser.me/api/portraits/women/65.jpg',
  'https://randomuser.me/api/portraits/men/54.jpg',
  'https://randomuser.me/api/portraits/women/21.jpg',
]

export default function Hero() {
  const [ownsProperty, setOwnsProperty] = useState('yes')

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

        <div className="hero-card">
          <h3 className="hero-card-title">
            Get Your <span className="text-green">Free</span>
            <br />
            Pest Inspection
          </h3>
          <p className="hero-card-sub">Quick. Easy. No Obligation.</p>

          <p className="hero-card-question">1. Is this property owned by you?</p>
          <div className="hero-card-toggle">
            <button
              type="button"
              className={ownsProperty === 'no' ? 'is-active' : ''}
              onClick={() => setOwnsProperty('no')}
            >
              No
            </button>
            <button
              type="button"
              className={ownsProperty === 'yes' ? 'is-active' : ''}
              onClick={() => setOwnsProperty('yes')}
            >
              Yes
            </button>
          </div>

          <div className="hero-card-social">
            <div className="avatar-stack">
              {JOIN_AVATARS.map((src) => (
                <img key={src} src={src} alt="" />
              ))}
            </div>
            <p>
              Join <strong>500+ homeowners</strong> who trust Tailored Pros
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
