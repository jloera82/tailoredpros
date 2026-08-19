import { Search, Target, ShieldCheck, Home } from 'lucide-react'
import './HowItWorks.css'

const STEPS = [
  {
    icon: Search,
    step: 'Step 01',
    title: 'Inspect',
    desc: 'We identify the problem and assess your home.',
  },
  {
    icon: Target,
    step: 'Step 02',
    title: 'Treat',
    desc: 'We use safe, effective treatments to eliminate pests.',
  },
  {
    icon: ShieldCheck,
    step: 'Step 03',
    title: 'Protect',
    desc: 'We create a prevention plan to keep pests away.',
  },
  {
    icon: Home,
    step: 'Step 04',
    title: 'Peace of Mind',
    desc: 'Enjoy a safer, healthier home year-round.',
  },
]

export default function HowItWorks() {
  return (
    <section className="how-it-works" id="process">
      <div className="container">
        <div className="how-it-works-head">
          <p className="eyebrow">Our Simple Process</p>
          <h2>How It Works</h2>
        </div>

        <div className="steps">
          {STEPS.map(({ icon: Icon, step, title, desc }, i) => (
            <div className="step" key={title}>
              {i < STEPS.length - 1 && <span className="step-connector" />}
              <span className="step-icon">
                <Icon size={26} strokeWidth={1.8} />
              </span>
              <span className="step-label">{step}</span>
              <h3 className="step-title">{title}</h3>
              <p className="step-desc">{desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="how-it-works-divider container" />
    </section>
  )
}
