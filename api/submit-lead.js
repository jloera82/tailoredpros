// Vercel serverless function — proxies lead submissions to Standard
// Information server-side, since exchange.standardinformation.io has no
// CORS headers and rejects direct browser POSTs.
//
// Requires LEAD_CAPTURE_API_KEY set in the Vercel project's environment
// variables (Settings -> Environment Variables). Never exposed to the
// client — this file only runs on Vercel's servers.

const DEFAULT_CAPTURE_URL = 'https://exchange.standardinformation.io/capture_test'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ status: 'denied', errors: 'Method not allowed' })
    return
  }

  const apiKey = process.env.LEAD_CAPTURE_API_KEY
  if (!apiKey) {
    res.status(500).json({ status: 'denied', errors: 'Lead capture is not configured' })
    return
  }

  const captureUrl = process.env.LEAD_CAPTURE_URL || DEFAULT_CAPTURE_URL

  try {
    const upstream = await fetch(captureUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(req.body),
    })

    const data = await upstream.json().catch(() => null)
    res.status(upstream.status).json(data ?? { status: 'denied', errors: 'Invalid response from lead capture service' })
  } catch (err) {
    console.error('Lead capture proxy error:', err)
    res.status(502).json({ status: 'denied', errors: 'Failed to reach lead capture service' })
  }
}
