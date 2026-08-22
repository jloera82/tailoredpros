import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import PageHeader from '../components/PageHeader.jsx'
import CTA from '../components/CTA.jsx'
import './Faq.css'

const FAQS = [
  {
    q: 'How often will I need pest control treatments?',
    a: 'Most homes do well on a quarterly treatment plan, though we’ll recommend a schedule based on your inspection and the specific pests you’re dealing with.',
  },
  {
    q: 'Are your treatments safe for kids and pets?',
    a: 'Yes. We use EPA-registered, family- and pet-safe products, and our technicians will let you know if any brief wait time is needed after treatment.',
  },
  {
    q: 'What areas do you service?',
    a: 'We proudly serve homeowners across Texas, including Austin, Houston, San Antonio, Dallas, Fort Worth, and El Paso.',
  },
  {
    q: 'How much does pest control cost?',
    a: 'Pricing depends on your home’s size, the pests involved, and how often you’d like service. We’ll give you an exact, no-obligation quote after a free inspection.',
  },
  {
    q: 'What if I still see pests after treatment?',
    a: 'If pests return between scheduled visits, we’ll come back and re-treat at no extra charge — that’s part of our guarantee.',
  },
  {
    q: 'Do I need to leave my home during treatment?',
    a: 'Usually not. Most treatments are targeted and low-odor, so you can stay in your home. We’ll always tell you if a specific product needs time to dry or settle.',
  },
  {
    q: 'Are you licensed and insured?',
    a: 'Yes. All of our technicians are licensed, background-checked, and fully insured for your peace of mind.',
  },
  {
    q: 'How do I get started?',
    a: 'Just request a free inspection online or give us a call. We’ll walk your property, build a custom plan, and get you scheduled.',
  },
]

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <>
      <PageHeader
        eyebrow="Got Questions?"
        title="Frequently Asked Questions"
        subtitle="Can't find what you're looking for? Give us a call and we'll be happy to help."
      />

      <section className="faq-section">
        <div className="container faq-container">
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <div className={`faq-item ${isOpen ? 'is-open' : ''}`} key={item.q}>
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  {item.q}
                  <span className="faq-toggle-icon">
                    {isOpen ? <Minus size={16} strokeWidth={2.5} /> : <Plus size={16} strokeWidth={2.5} />}
                  </span>
                </button>
                {isOpen && <p className="faq-answer">{item.a}</p>}
              </div>
            )
          })}
        </div>
      </section>

      <CTA />
    </>
  )
}
