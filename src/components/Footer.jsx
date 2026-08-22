import { Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import Logo from './Logo.jsx'
import './Footer.css'

const NAV_LINKS = [
  { label: 'Services', to: '/services' },
  { label: 'Our Process', to: '/our-process' },
  { label: 'Why Us', to: '/why-us' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Contact', to: '/contact' },
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
                <Link to={link.to}>{link.label}</Link>
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
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
