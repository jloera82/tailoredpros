import { useEffect, useState } from 'react'
import { Star, ChevronRight } from 'lucide-react'
import './TrustBar.css'

const FALLBACK_CITY = 'Your Area'

function GoogleIcon(props) {
  return (
    <svg viewBox="0 0 48 48" width="18" height="18" {...props}>
      <path
        fill="#FFC107"
        d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.7-6.1 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.6 6.5 29.6 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.7-.4-3.5z"
      />
      <path
        fill="#FF3D00"
        d="M6.3 14.7l6.6 4.8C14.6 16 18.9 13 24 13c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.6 6.5 29.6 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"
      />
      <path
        fill="#4CAF50"
        d="M24 44c5.5 0 10.5-2.1 14.3-5.6l-6.6-5.6C29.7 34.6 27 35.5 24 35.5c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z"
      />
      <path
        fill="#1976D2"
        d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.3 4.3-4.2 5.7l6.6 5.6C39.7 37 44 31 44 24c0-1.3-.1-2.7-.4-3.5z"
      />
    </svg>
  )
}

export default function TrustBar() {
  const [city, setCity] = useState(FALLBACK_CITY)

  useEffect(() => {
    let cancelled = false

    fetch('https://ipwho.is/')
      .then((res) => res.json())
      .then((data) => {
        if (!cancelled && data?.success && data.city) {
          setCity(data.city)
        }
      })
      .catch(() => {
        /* keep fallback city */
      })

    return () => {
      cancelled = true
    }
  }, [])

  return (
    <div className="trust-bar-wrap">
      <div className="container">
        <div className="trust-bar">
          <div className="local-business">
            <p className="local-eyebrow">Serving Your Area 24/7</p>
            <h3 className="local-name">Tailored Pros of {city}</h3>
          </div>

          <div className="reviews-block">
            <div className="reviews-info">
              <p className="reviews-label">Our Google Reviews</p>
              <div className="reviews-rating">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                ))}
                <span className="reviews-score">4.9</span>
                <span className="reviews-count">(500+ reviews)</span>
              </div>
              <a className="reviews-cta" href="#reviews">
                <GoogleIcon />
                Leave us a review
              </a>
            </div>

            <a className="local-phone" href="tel:+18336520244">
              (833) 652-0244
              <span className="local-phone-chevron">
                <ChevronRight size={18} strokeWidth={3} />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
