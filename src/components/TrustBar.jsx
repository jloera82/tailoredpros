import { ShieldCheck, Leaf, Award, Clock, Star } from 'lucide-react'
import './TrustBar.css'

const ITEMS = [
  { icon: ShieldCheck, lines: ['Safe for Kids', '& Pets'] },
  { icon: Leaf, lines: ['Eco-Friendly', 'Solutions'] },
  { icon: Award, lines: ['Licensed &', 'Insured Experts'] },
  { icon: Clock, lines: ['Fast Response', 'Guaranteed'] },
]

export default function TrustBar() {
  return (
    <div className="trust-bar-wrap">
      <div className="container">
        <div className="trust-bar">
          {ITEMS.map(({ icon: Icon, lines }) => (
            <div className="trust-item" key={lines[0]}>
              <span className="trust-icon">
                <Icon size={22} strokeWidth={1.8} />
              </span>
              <span className="trust-text">
                {lines[0]}
                <br />
                {lines[1]}
              </span>
            </div>
          ))}

          <div className="trust-rating">
            <div className="trust-stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
              ))}
              <span className="trust-score">4.9/5</span>
            </div>
            <p className="trust-caption">
              From 500+ happy
              <br />
              homeowners
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
