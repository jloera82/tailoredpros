export const SERVICE_AREAS = [
  { city: 'Austin', phone: '(512) 555-0142', reviews: 412 },
  { city: 'Houston', phone: '(713) 555-0198', reviews: 587 },
  { city: 'San Antonio', phone: '(210) 555-0173', reviews: 350 },
  { city: 'Dallas', phone: '(214) 555-0126', reviews: 468 },
  { city: 'Fort Worth', phone: '(817) 555-0159', reviews: 291 },
  { city: 'El Paso', phone: '(915) 555-0184', reviews: 226 },
]

export function pickServiceArea() {
  return SERVICE_AREAS[Math.floor(Math.random() * SERVICE_AREAS.length)]
}

export function telHref(phone) {
  return `tel:+1${phone.replace(/\D/g, '')}`
}
