import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import './NotFound.css'

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="container not-found-inner">
        <p className="eyebrow">404</p>
        <h1>Page Not Found</h1>
        <p className="not-found-desc">
          The page you&rsquo;re looking for doesn&rsquo;t exist or may have moved.
        </p>
        <Link className="btn btn-primary" to="/">
          Back to Home <ArrowRight size={18} strokeWidth={2.5} />
        </Link>
      </div>
    </section>
  )
}
