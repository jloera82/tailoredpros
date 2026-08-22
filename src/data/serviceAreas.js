export const MAIN_PHONE = '(833) 652-0244'
export const FALLBACK_AREA = { city: 'Your Area', state: '', ip: '' }

export function telHref(phone) {
  return `tel:+1${phone.replace(/\D/g, '')}`
}

async function fromIpwhoIs() {
  const res = await fetch('https://ipwho.is/')
  const data = await res.json()
  if (!data?.success || !data.city) throw new Error('ipwho.is: no city')
  return { city: data.city, state: data.region_code || data.region || '', ip: data.ip || '' }
}

async function fromIpapiCo() {
  const res = await fetch('https://ipapi.co/json/')
  const data = await res.json()
  if (!data?.city) throw new Error('ipapi.co: no city')
  return { city: data.city, state: data.region_code || data.region || '', ip: data.ip || '' }
}

async function fromGeoJs() {
  const res = await fetch('https://get.geojs.io/v1/ip/geo.json')
  const data = await res.json()
  if (!data?.city) throw new Error('geojs.io: no city')
  return { city: data.city, state: data.region || '', ip: data.ip || '' }
}

const PROVIDERS = [fromIpwhoIs, fromIpapiCo, fromGeoJs]

// Tries each free IP-geolocation provider in turn (some get blocked by ad
// blockers/privacy extensions), falling back to a generic label if all fail.
export async function detectLocation() {
  for (const provider of PROVIDERS) {
    try {
      const result = await provider()
      if (result?.city) return result
    } catch {
      // try the next provider
    }
  }
  return FALLBACK_AREA
}
