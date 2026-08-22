// Node/Express server for cPanel's "Setup Node.js App" (Passenger).
// Serves the pre-built frontend (dist/) and proxies lead submissions to
// Standard Information server-side, since their capture endpoint has no
// CORS headers and rejects direct browser requests.
//
// Application startup file: server.js
// Requires npm run build to have produced dist/ before deploying, and
// LEAD_CAPTURE_API_KEY set under the app's Environment Variables in cPanel.

import express from 'express'
import fetch from 'node-fetch'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const distDir = path.join(__dirname, 'dist')

const DEFAULT_CAPTURE_URL = 'https://exchange.standardinformation.io/capture_test'

const app = express()
app.use(express.json())
app.use(express.static(distDir))

app.all('/api/submit-lead', (req, res, next) => {
  if (req.method !== 'POST') {
    res.status(405).json({ status: 'denied', errors: 'Method not allowed' })
    return
  }
  next()
})

app.post('/api/submit-lead', async (req, res) => {
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
    res
      .status(upstream.status)
      .json(data ?? { status: 'denied', errors: 'Invalid response from lead capture service' })
  } catch (err) {
    console.error('Lead capture proxy error:', err)
    res.status(502).json({ status: 'denied', errors: 'Failed to reach lead capture service' })
  }
})

// SPA fallback: any other GET request goes to index.html so React Router
// can handle client-side routes like /services or /contact.
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(distDir, 'index.html'))
})

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
