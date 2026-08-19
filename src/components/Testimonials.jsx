import { Star } from 'lucide-react'
import './Testimonials.css'

const REVIEWS = [
  {
    quote:
      'Tailored Pros was professional, thorough, and incredibly effective. We haven’t seen a single pest since!',
    name: 'Sarah T.',
    location: 'Austin, TX',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    quote:
      'I love that they use eco-friendly products. It’s safe for my kids and pets, and it works!',
    name: 'Mark R.',
    location: 'Houston, TX',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    quote:
      'Fast response, great service, and very knowledgeable technicians. Highly recommend!',
    name: 'Jessica M.',
    location: 'San Antonio, TX',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    quote:
      'Finally found a pest control company I can trust. They go above and beyond!',
    name: 'David L.',
    location: 'Dallas, TX',
    avatar: 'https://randomuser.me/api/portraits/men/86.jpg',
  },
]

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="testimonials-title">Trusted by Homeowners Like You</h2>

        <div className="testimonials-grid">
          {REVIEWS.map((review) => (
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
                  <p className="review-location">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
