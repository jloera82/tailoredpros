// Standard Information / Tailored Pros — Pest Control integration
// https://app.standardinformation.io/integration/ebd686d4-4012-44ae-9f74-c9eb783c57eb

// Defaults to the TEST endpoint so form submissions don't get bought/paid
// for while the integration is still being verified. Switch to
// CAPTURE_PROD_URL once test submissions have been confirmed on the
// Standard Information side.
export const CAPTURE_TEST_URL = 'https://exchange.standardinformation.io/capture_test'
export const CAPTURE_PROD_URL = 'https://exchange.standardinformation.io/capture'
export const CAPTURE_URL = CAPTURE_TEST_URL

// Set VITE_LEAD_CAPTURE_API_KEY in .env.local (gitignored) — see .env.example.
// Note: this is a client-only integration, so the key still ships inside the
// built JS bundle and is visible to anyone who inspects network requests on
// the live site. Keeping it out of an env var only keeps it out of the
// public git history/source browsing; a real secret would need a backend
// proxy to stay hidden from site visitors too.
const API_KEY = import.meta.env.VITE_LEAD_CAPTURE_API_KEY || ''

// Campaign tracking IDs (Sub ID / Offer ID) — replace with real values from
// your Standard Information account when available.
const SOURCE_ID = 'tailoredpros-website'
const OFFER_ID = ''

export const PEST_TYPES = [
  'Ants',
  'Bed bugs',
  'Cockroaches',
  'Mosquitos',
  'Rodents',
  'Spiders',
  'Termites',
  'Ticks',
  'Wasps Hornets Bees',
  'Wood destroying insects',
]

export const PROPERTY_TYPES = ['Single Family Home', 'Multi-Unit', 'Commercial', 'Condo', 'Mobile Home', 'Other']

export const SERVICE_NEEDS = ['Extermination', 'Inspection', 'Prevention', 'Removal']

export const URGENCY_OPTIONS = [
  'Within 1 Week',
  'Within 2 Weeks',
  'Within 1 Month',
  'More Than 1 Month',
  'Timing is Flexible',
]

export const CALL_TIMES = ['Morning', 'Afternoon', 'Evening', 'Any time']

export const PROJECT_STATUSES = ['Planning and Budgeting', 'Ready to Hire']

export const SQUARE_FOOTAGES = ['Under 3000', 'Over 3000']

export const CREDIT_RATINGS = ['Excellent', 'Good', 'Fair', 'Poor', 'Unknown']

export const TCPA_CONSENT_TEXT =
  'By submitting, you agree that Tailored Pros and up to three local service partners may contact you by phone, text, or email about your request — including using automated dialing or pre-recorded messages — even if your number is on a do-not-call list. Consent isn’t required to purchase services.'

export async function getClientIp() {
  try {
    const res = await fetch('https://ipwho.is/')
    const data = await res.json()
    if (data?.ip) return data.ip
  } catch {
    // fall through
  }
  return ''
}

export function buildLeadPayload(answers, ip) {
  return {
    data: {
      pest_type: answers.pestType,
      time_frame: answers.urgency,
      own_property: answers.owner === 'yes' ? 'Yes' : 'No',
      project_type: answers.serviceNeed,
      credit_rating: answers.creditRating,
      property_type: answers.propertyType,
      best_call_time: answers.bestTime,
      project_status: answers.projectStatus,
      square_footage: answers.squareFootage,
    },
    meta: {
      offer_id: OFFER_ID,
      source_id: SOURCE_ID,
      user_agent: navigator.userAgent,
      tcpa_compliant: true,
      landing_page_url: window.location.href,
      tcpa_consent_text: TCPA_CONSENT_TEXT,
      originally_created: new Date().toISOString(),
    },
    contact: {
      first_name: answers.firstName,
      last_name: answers.lastName,
      phone: answers.phone.replace(/\D/g, ''),
      email: answers.email,
      address: answers.address,
      city: answers.city,
      state: answers.state,
      zip_code: answers.zip,
      ip_address: ip,
    },
  }
}

export async function submitLead(answers) {
  const ip = await getClientIp()
  const payload = buildLeadPayload(answers, ip)

  const res = await fetch(CAPTURE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify(payload),
  })

  const result = await res.json().catch(() => null)

  if (!res.ok || result?.status === 'denied') {
    throw new Error(result?.errors || `Lead capture failed with status ${res.status}`)
  }

  return result
}
