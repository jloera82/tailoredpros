import { Phone } from 'lucide-react'
import Logo from './Logo.jsx'
import './Footer.css'

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Our Process', href: '#process' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <Logo />

        <nav className="footer-nav">
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <a className="footer-phone" href="tel:+18336520244">
          <span className="phone-icon">
            <Phone size={14} strokeWidth={2.5} fill="currentColor" />
          </span>
          (833) 652-0244
        </a>
      </div>

      <div className="container">
        <div className="footer-divider" />
        <div className="footer-bottom">
          <p>© 2026 Tailored Pros, All Rights Reserved.</p>
          <div className="footer-legal">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
