import { useState } from 'react'
import { CheckCircle2, ChevronDown, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import './InspectionForm.css'

const TOTAL_STEPS = 4

const PEST_OPTIONS = [
  'Ants',
  'Bed Bugs',
  'Cockroaches',
  'Fleas & Ticks',
  'Mice & Rodents',
  'Mosquitoes',
  'Spiders',
  'Termites',
  'Wasps & Bees',
  'Other / Not Sure',
]

const PROPERTY_TYPES = ['Single family home', 'Multi-unit', 'Commercial', 'Condo', 'Mobile home']
const SERVICE_NEEDS = ['Extermination', 'Inspection', 'Prevention', 'Removal']
const URGENCY_OPTIONS = ['Within 1 week', 'Within 2 weeks', 'Within 1 month', 'Timing is flexible']
const CALL_TIMES = ['Morning', 'Afternoon', 'Evening', 'Any time']

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

const INITIAL_ANSWERS = {
  owner: '',
  pestType: '',
  propertyType: '',
  serviceNeed: '',
  urgency: '',
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  bestTime: '',
  address: '',
  city: '',
  state: '',
  zip: '',
}

function OptionCard({ label, selected, onSelect }) {
  return (
    <button type="button" className={`option-card ${selected ? 'is-selected' : ''}`} onClick={onSelect}>
      <span className="option-radio">
        <span className="option-radio-dot" />
      </span>
      {label}
    </button>
  )
}

function Field({ label, children }) {
  return (
    <label className="field">
      <span>{label}</span>
      {children}
    </label>
  )
}

function isStepValid(step, a) {
  switch (step) {
    case 1:
      return Boolean(a.pestType && a.propertyType)
    case 2:
      return Boolean(a.serviceNeed && a.urgency)
    case 3:
      return Boolean(
        a.firstName.trim() &&
          a.lastName.trim() &&
          a.phone.replace(/\D/g, '').length === 10 &&
          /^\S+@\S+\.\S+$/.test(a.email) &&
          a.bestTime
      )
    case 4:
      return Boolean(a.address.trim() && a.city.trim() && a.state.trim() && a.zip.trim().length >= 5)
    default:
      return true
  }
}

export default function InspectionForm() {
  const [phase, setPhase] = useState('gate')
  const [answers, setAnswers] = useState(INITIAL_ANSWERS)

  const set = (field, value) => setAnswers((a) => ({ ...a, [field]: value }))

  const selectOwner = (value) => {
    set('owner', value)
    window.setTimeout(() => setPhase(1), 280)
  }

  const goBack = () => setPhase((p) => (p === 1 ? 'gate' : p - 1))
  const goNext = () => setPhase((p) => (p === TOTAL_STEPS ? 'success' : p + 1))

  const restart = () => {
    setAnswers(INITIAL_ANSWERS)
    setPhase('gate')
  }

  const isFunnelStep = typeof phase === 'number'
  const stepValid = isFunnelStep && isStepValid(phase, answers)

  return (
    <div className="hero-card">
      {phase === 'gate' && (
        <>
          <h3 className="hero-card-title">
            Get Your <span className="text-green">Free</span>
            <br />
            Pest Inspection
          </h3>
          <p className="hero-card-sub">Quick. Easy. No Obligation.</p>

          <p className="hero-card-question">Do you own this property?</p>
          <div className="option-grid two-col">
            <OptionCard label="Yes" selected={answers.owner === 'yes'} onSelect={() => selectOwner('yes')} />
            <OptionCard label="No" selected={answers.owner === 'no'} onSelect={() => selectOwner('no')} />
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
        </>
      )}

      {isFunnelStep && (
        <>
          <p className="eyebrow form-eyebrow">Free Quote Request</p>
          <h3 className="hero-card-title">Get matched with a local pro</h3>

          <div className="stepper-progress">
            {Array.from({ length: TOTAL_STEPS }).map((_, i) => {
              const n = i + 1
              const state = n < phase ? 'is-complete' : n === phase ? 'is-active' : ''
              return <span className={`stepper-segment ${state}`} key={n} />
            })}
          </div>
          <p className="stepper-label">
            Step {phase} of {TOTAL_STEPS}
          </p>

          <div className="form-step" key={phase}>
            {phase === 1 && (
              <>
                <div className="field">
                  <span>What pest are you dealing with?</span>
                  <div className="select-wrap">
                    <select value={answers.pestType} onChange={(e) => set('pestType', e.target.value)}>
                      <option value="">Select one</option>
                      {PEST_OPTIONS.map((pest) => (
                        <option key={pest} value={pest}>
                          {pest}
                        </option>
                      ))}
                    </select>
                    <ChevronDown size={16} strokeWidth={2.5} className="select-chevron" />
                  </div>
                </div>

                <p className="hero-card-question">Property type</p>
                <div className="option-grid two-col">
                  {PROPERTY_TYPES.map((type) => (
                    <OptionCard
                      key={type}
                      label={type}
                      selected={answers.propertyType === type}
                      onSelect={() => set('propertyType', type)}
                    />
                  ))}
                </div>
              </>
            )}

            {phase === 2 && (
              <>
                <p className="hero-card-question">What do you need?</p>
                <div className="option-grid two-col">
                  {SERVICE_NEEDS.map((need) => (
                    <OptionCard
                      key={need}
                      label={need}
                      selected={answers.serviceNeed === need}
                      onSelect={() => set('serviceNeed', need)}
                    />
                  ))}
                </div>

                <p className="hero-card-question">How soon do you need this handled?</p>
                <div className="option-grid two-col">
                  {URGENCY_OPTIONS.map((u) => (
                    <OptionCard
                      key={u}
                      label={u}
                      selected={answers.urgency === u}
                      onSelect={() => set('urgency', u)}
                    />
                  ))}
                </div>
              </>
            )}

            {phase === 3 && (
              <>
                <div className="field-grid two-col">
                  <Field label="First name">
                    <input type="text" value={answers.firstName} onChange={(e) => set('firstName', e.target.value)} />
                  </Field>
                  <Field label="Last name">
                    <input type="text" value={answers.lastName} onChange={(e) => set('lastName', e.target.value)} />
                  </Field>
                </div>
                <div className="field-grid two-col">
                  <Field label="Phone">
                    <input
                      type="tel"
                      value={answers.phone}
                      onChange={(e) => set('phone', formatPhone(e.target.value))}
                    />
                  </Field>
                  <Field label="Email">
                    <input type="email" value={answers.email} onChange={(e) => set('email', e.target.value)} />
                  </Field>
                </div>

                <p className="hero-card-question">Best time to call</p>
                <div className="option-grid two-col">
                  {CALL_TIMES.map((time) => (
                    <OptionCard
                      key={time}
                      label={time}
                      selected={answers.bestTime === time}
                      onSelect={() => set('bestTime', time)}
                    />
                  ))}
                </div>
              </>
            )}

            {phase === 4 && (
              <>
                <Field label="Street address">
                  <input type="text" value={answers.address} onChange={(e) => set('address', e.target.value)} />
                </Field>
                <div className="field-grid two-col">
                  <Field label="City">
                    <input type="text" value={answers.city} onChange={(e) => set('city', e.target.value)} />
                  </Field>
                  <Field label="State">
                    <input type="text" value={answers.state} onChange={(e) => set('state', e.target.value)} />
                  </Field>
                </div>
                <div className="field-grid two-col">
                  <Field label="Zip code">
                    <input type="text" value={answers.zip} onChange={(e) => set('zip', e.target.value)} />
                  </Field>
                  <span />
                </div>

                <p className="consent-text">
                  By submitting, you agree that Tailored Pros and up to three local service partners
                  may contact you by phone, text, or email about your request — including using
                  automated dialing or pre-recorded messages — even if your number is on a
                  do-not-call list. Consent isn&rsquo;t required to purchase services. See our{' '}
                  <Link to="/privacy">Privacy Policy</Link> and <Link to="/terms">Terms</Link>.
                </p>
              </>
            )}
          </div>

          <div className="step-nav">
            <button type="button" className="step-back-btn" onClick={goBack}>
              Back
            </button>
            <button type="button" className="step-continue-btn" disabled={!stepValid} onClick={goNext}>
              {phase === TOTAL_STEPS ? 'Get my free quotes' : 'Continue'}
              <ArrowRight size={16} strokeWidth={2.5} />
            </button>
          </div>
        </>
      )}

      {phase === 'success' && (
        <div className="form-success">
          <span className="form-success-icon">
            <CheckCircle2 size={30} strokeWidth={2} />
          </span>
          <h3 className="hero-card-title">
            You&rsquo;re All Set{answers.firstName ? `, ${answers.firstName}` : ''}!
          </h3>
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
