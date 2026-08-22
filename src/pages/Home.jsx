import { useEffect, useState } from 'react'
import Hero from '../components/Hero.jsx'
import TrustBar from '../components/TrustBar.jsx'
import WhyChooseUs from '../components/WhyChooseUs.jsx'
import HowItWorks from '../components/HowItWorks.jsx'
import Testimonials from '../components/Testimonials.jsx'
import CTA from '../components/CTA.jsx'
import { detectLocation, FALLBACK_AREA } from '../data/serviceAreas.js'

export default function Home() {
  const [area, setArea] = useState(FALLBACK_AREA)

  useEffect(() => {
    let cancelled = false

    detectLocation().then((result) => {
      if (!cancelled) setArea(result)
    })

    return () => {
      cancelled = true
    }
  }, [])

  return (
    <>
      <Hero />
      <TrustBar area={area} />
      <WhyChooseUs />
      <HowItWorks />
      <Testimonials area={area} />
      <CTA />
    </>
  )
}
