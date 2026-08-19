import { useState } from 'react'
import { ChevronLeft, CheckCircle2, Bug } from 'lucide-react'
import './InspectionForm.css'

const TOTAL_STEPS = 3

const PEST_OPTIONS = ['Ants', 'Rodents', 'Roaches', 'Termites', 'Bed Bugs', 'Not Sure']

const JOIN_AVATARS = [
  'https://randomuser.me/api/portraits/women/65.jpg',
  'https://randomuser.me/api/portraits/men/54.jpg',
  'https://randomuser.me/api/portraits/women/21.jpg',
]

function formatPhone(value) {
  const digits = value.replace(/\D/g, '').slice(0, 10)
  const parts = []
  if (digits.length > 0) parts.push(digits.slice(0, 3))
  if (digits.length > 3) parts.push(digits.slice(3, 6))
  if (digits.length > 6) parts.push(digits.slice(6, 10))
  if (parts.length === 1) return `(${parts[0]}`
  if (parts.length === 2) return `(${parts[0]}) ${parts[1]}`
  if (parts.length === 3) return `(${parts[0]}) ${parts[1]}-${parts[2]}`
  return ''
}

const INITIAL_ANSWERS = { owner: '', pest: '', name: '', phone: '', email: '' }

export default function InspectionForm() {
  const [step, setStep] = useState(1)
  const [answers, setAnswers] = useState(INITIAL_ANSWERS)

  const isDone = step > TOTAL_STEPS
  const progressPct = isDone ? 100 : ((step - 1) / TOTAL_STEPS) * 100

  const selectAndAdvance = (field, value) => {
    setAnswers((a) => ({ ...a, [field]: value }))
    window.setTimeout(() => setStep((s) => Math.min(s + 1, TOTAL_STEPS + 1)), 280)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!answers.name.trim() || answers.phone.replace(/\D/g, '').length < 10) return
    setStep(TOTAL_STEPS + 1)
  }

  const restart = () => {
    setAnswers(INITIAL_ANSWERS)
    setStep(1)
  }

  const contactValid = answers.name.trim().length > 1 && answers.phone.replace(/\D/g, '').length === 10

  return (
    <div className="hero-card">
      {!isDone ? (
        <>
          <h3 className="hero-card-title">
            Get Your <span className="text-green">Free</span>
            <br />
            Pest Inspection
          </h3>
          <p className="hero-card-sub">Quick. Easy. No Obligation.</p>

          <div className="form-progress">
            <div className="form-progress-track">
              <div className="form-progress-fill" style={{ width: `${progressPct}%` }} />
            </div>
            <span className="form-progress-label">
              Step {step} of {TOTAL_STEPS}
            </span>
          </div>

          <div className="form-step" key={step}>
            {step > 1 && (
              <button type="button" className="form-back" onClick={() => setStep((s) => s - 1)}>
                <ChevronLeft size={15} strokeWidth={2.5} />
                Back
              </button>
            )}

            {step === 1 && (
              <>
                <p className="hero-card-question">1. Is this property owned by you?</p>
                <div className="hero-card-toggle">
                  <button
                    type="button"
                    className={answers.owner === 'no' ? 'is-active' : ''}
                    onClick={() => selectAndAdvance('owner', 'no')}
                  >
                    No
                  </button>
                  <button
                    type="button"
                    className={answers.owner === 'yes' ? 'is-active' : ''}
                    onClick={() => selectAndAdvance('owner', 'yes')}
                  >
                    Yes
                  </button>
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <p className="hero-card-question">2. What pest are you dealing with?</p>
                <div className="pest-grid">
                  {PEST_OPTIONS.map((pest) => (
                    <button
                      type="button"
                      key={pest}
                      className={answers.pest === pest ? 'is-active' : ''}
                      onClick={() => selectAndAdvance('pest', pest)}
                    >
                      <Bug size={15} strokeWidth={2} />
                      {pest}
                    </button>
                  ))}
                </div>
              </>
            )}

            {step === 3 && (
              <>
                <p className="hero-card-question">3. Where should we send your quote?</p>
                <form className="contact-form" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    placeholder="Full name"
                    value={answers.name}
                    onChange={(e) => setAnswers((a) => ({ ...a, name: e.target.value }))}
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Phone number"
                    value={answers.phone}
                    onChange={(e) =>
                      setAnswers((a) => ({ ...a, phone: formatPhone(e.target.value) }))
                    }
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email (optional)"
                    value={answers.email}
                    onChange={(e) => setAnswers((a) => ({ ...a, email: e.target.value }))}
                  />
                  <button type="submit" className="btn btn-primary contact-submit" disabled={!contactValid}>
                    Get My Free Quote
                  </button>
                </form>
              </>
            )}
          </div>

          {step === 1 && (
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
          )}
        </>
      ) : (
        <div className="form-success">
          <span className="form-success-icon">
            <CheckCircle2 size={30} strokeWidth={2} />
          </span>
          <h3 className="hero-card-title">You&rsquo;re All Set{answers.name ? `, ${answers.name.split(' ')[0]}` : ''}!</h3>
          <p className="form-success-desc">
            A Tailored Pros specialist will call{' '}
            {answers.phone ? <strong>{answers.phone}</strong> : 'you'} within 24 hours to schedule
            your free inspection.
          </p>
          <button type="button" className="btn form-restart" onClick={restart}>
            Start Over
          </button>
        </div>
      )}
    </div>
  )
}
