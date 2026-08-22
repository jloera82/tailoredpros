import { Phone, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from './Logo.jsx'
import './Header.css'

const NAV_LINKS = [
  { label: 'Services', to: '/services' },
  { label: 'Our Process', to: '/our-process' },
  { label: 'Why Us', to: '/why-us' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Contact', to: '/contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="container site-header-inner">
        <Logo />

        <nav className={`main-nav ${open ? 'is-open' : ''}`}>
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) => (isActive ? 'is-active' : '')}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </NavLink>
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
