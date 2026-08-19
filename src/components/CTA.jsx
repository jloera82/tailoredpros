import { ArrowRight, Phone } from 'lucide-react'
import './CTA.css'

export default function CTA() {
  return (
    <section className="cta" id="contact">
      <div className="cta-leaf" aria-hidden="true">
        <svg width="220" height="220" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M32 8C20 20 13 29.5 13 40a19 19 0 0 0 38 0c0-10.5-7-20-19-32Z" fill="currentColor" />
        </svg>
      </div>
      <div className="container cta-inner">
        <div>
          <h2 className="cta-title">Take Back Your Home Today</h2>
          <p className="cta-desc">
            Don&rsquo;t wait for pests to take over. Get your free inspection and experience the
            Tailored Pros difference.
          </p>
        </div>
        <div className="cta-actions">
          <a className="btn btn-white" href="#top">
            Get Your Free Inspection <ArrowRight size={18} strokeWidth={2.5} />
          </a>
          <a className="cta-phone" href="tel:+18336520244">
            <Phone size={17} strokeWidth={2.5} fill="currentColor" />
            (833) 652-0244
          </a>
        </div>
      </div>
    </section>
  )
}
