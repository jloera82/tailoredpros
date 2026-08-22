import { Check } from 'lucide-react'
import './WhyChooseUs.css'

const POINTS = [
  'Targeted treatments for long-term protection',
  'Eco-friendly products that are safe for your family & pets',
  'Thorough inspections and customized solutions',
  'Preventative strategies to keep pests away',
  'Friendly, local experts you can trust',
]

export default function WhyChooseUs() {
  return (
    <section className="why-us">
      <div className="container why-us-inner">
        <div className="why-us-content">
          <p className="eyebrow">Why Choose Tailored Pros?</p>
          <h2 className="why-us-title">
            Pest Control You Can
            <br />
            Count On
          </h2>
          <span className="why-us-underline" />
          <p className="why-us-desc">
            We combine expert knowledge, advanced treatments, and a customer-first approach to
            deliver lasting results.
          </p>
          <ul className="why-us-list">
            {POINTS.map((point) => (
              <li key={point}>
                <span className="check-badge">
                  <Check size={13} strokeWidth={3} />
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="why-us-media">
          <img
            src="https://images.pexels.com/photos/5998820/pexels-photo-5998820.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Happy family relaxing with their dog at home"
          />
        </div>
      </div>
    </section>
  )
}
