import { Star } from 'lucide-react'
import { REVIEWS_BY_CITY } from '../data/testimonials.js'
import './Testimonials.css'

export default function Testimonials({ area }) {
  const city = area?.city ?? 'Austin'
  const reviews = REVIEWS_BY_CITY[city] ?? REVIEWS_BY_CITY.Austin

  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="testimonials-title">Trusted by Homeowners in {city}</h2>

        <div className="testimonials-grid">
          {reviews.map((review) => (
            <div className="review-card" key={review.name}>
              <div className="review-stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={15} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="review-quote">&ldquo;{review.quote}&rdquo;</p>
              <div className="review-person">
                <img src={review.avatar} alt={review.name} />
                <div>
                  <p className="review-name">{review.name}</p>
                  <p className="review-location">{city}, TX</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
