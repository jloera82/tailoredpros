# Tailored Pros

Pest control marketing site — React + Vite, multi-page (React Router), with a
lead-capture form wired into the Standard Information exchange via a small
Node/Express server.

## Local development

```bash
npm install
npm run dev
```

## Deploying to cPanel (Node.js App)

`server.js` serves the pre-built frontend (`dist/`) and proxies lead
submissions to Standard Information server-side, since their capture
endpoint has no CORS headers and rejects direct browser requests.

### 1. Build locally

```bash
npm run build
```

This produces `dist/` — the static frontend the server serves.

### 2. In cPanel → Setup Node.js App → Create Application

| Field | Value |
|---|---|
| **Node.js version** | Pick the newest available (18+ or 20+ if offered) — not the old `14.21.3` default. Node 14 doesn't have built-in `fetch`/modern syntax support this app relies on. |
| **Application mode** | **Production** (not Development) |
| **Application root** | Wherever you want the app's files, e.g. `/pestcontrol.tailoredpros.com/v4` |
| **Application URL** | Your domain/subdomain |
| **Application startup file** | `server.js` — **not** the default `package.json` placeholder |

Click **Create**.

### 3. Set environment variables

In the same app's **Environment Variables** section, add:

- `LEAD_CAPTURE_API_KEY` — your Standard Information API key
- `LEAD_CAPTURE_URL` *(optional)* — omit to use their test endpoint; set to
  `https://exchange.standardinformation.io/capture` when ready to go live

This keeps the key off disk entirely — cleaner than a config file.

### 4. Upload the files

Upload these to the **Application root** you set above, via cPanel File
Manager or FTP/SFTP:

- `server.js`
- `package.json` and `package-lock.json`
- the entire `dist/` folder (built in step 1)

(You don't need `src/`, `node_modules/`, or anything else from the repo —
the server only needs the built output plus itself.)

### 5. Install dependencies and start

Back in the Node.js App screen, click **Run NPM Install**, then **Restart**.

### 6. Verify

Visit the live URL, submit the quote form, and confirm you land on the
success screen.

## Alternative: static hosting + PHP (no Node.js App)

If you'd rather not use cPanel's Node.js App feature, `deploy/php-cpanel/`
has a PHP version of the same proxy for plain static hosting instead. Copy
`deploy/php-cpanel/api/lead-capture-config.example.php` to
`lead-capture-config.php` in that folder, fill in your API key, then upload
`dist/` plus that `api/` folder together to `public_html/`. This path
doesn't need Node at all — just standard PHP + `.htaccess` (already in
`dist/` after building).
