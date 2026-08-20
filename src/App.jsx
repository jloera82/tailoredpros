import { useState } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import TrustBar from './components/TrustBar.jsx'
import WhyChooseUs from './components/WhyChooseUs.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import Testimonials from './components/Testimonials.jsx'
import CTA from './components/CTA.jsx'
import Footer from './components/Footer.jsx'
import { pickServiceArea } from './data/serviceAreas.js'

export default function App() {
  const [area] = useState(pickServiceArea)

  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar area={area} />
        <WhyChooseUs />
        <HowItWorks />
        <Testimonials area={area} />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
