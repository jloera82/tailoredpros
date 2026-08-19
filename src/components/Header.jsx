import { Phone, Menu, X } from 'lucide-react'
import { useState } from 'react'
import Logo from './Logo.jsx'
import './Header.css'

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Our Process', href: '#process' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header" id="top">
      <div className="container site-header-inner">
        <Logo />

        <nav className={`main-nav ${open ? 'is-open' : ''}`}>
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a className="btn btn-primary phone-btn nav-phone-btn" href="tel:+18336520244">
            <span className="phone-icon">
              <Phone size={14} strokeWidth={2.5} fill="currentColor" />
            </span>
            (833) 652-0244
          </a>
        </nav>

        <a className="btn btn-primary phone-btn desktop-only" href="tel:+18336520244">
          <span className="phone-icon">
            <Phone size={14} strokeWidth={2.5} fill="currentColor" />
          </span>
          (833) 652-0244
        </a>

        <button className="menu-toggle" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  )
}
