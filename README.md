# Tailored Pros

Pest control marketing site — React + Vite, multi-page (React Router), with a
lead-capture form wired into the Standard Information exchange.

## Local development

```bash
npm install
npm run dev
```

## Deploying to cPanel

The site is a static SPA plus one PHP proxy script (`public/api/submit-lead.php`)
that forwards form submissions to Standard Information server-side, since their
capture endpoint has no CORS headers and rejects direct browser requests.

1. **Set your real API key locally first**, so it gets built into the deploy:
   copy `public/api/lead-capture-config.example.php` to
   `public/api/lead-capture-config.php` and fill in your Standard Information
   API key. This file is gitignored — never commit it.

2. **Build**:
   ```bash
   npm run build
   ```
   This produces a `dist/` folder containing everything that needs to go on
   the server: the built frontend, `.htaccess` (SPA routing + caching rules),
   and `api/submit-lead.php` + `api/lead-capture-config.php`.

3. **Upload the contents of `dist/`** (not the folder itself — its contents)
   to your cPanel account's web root, typically `public_html/` (or a
   subdirectory if you're deploying under a subfolder), via cPanel's File
   Manager or an FTP/SFTP client.

4. **Confirm `mod_rewrite` is enabled** on your hosting (it is on virtually
   all cPanel accounts by default) — this is what makes `.htaccess` route
   things like `/services` or `/contact` to the app instead of 404ing.

5. **Verify**: visit the live site, submit the quote form, and confirm you
   land on the success screen. Check `public_html/api/` isn't publicly
   browsable-as-source (PHP executes rather than serving as text on any
   correctly configured PHP host, so this is safe by default).

When you're ready to send real (non-test) leads, edit
`lead-capture-config.php` on the server and change `capture_url` to
`https://exchange.standardinformation.io/capture`, then re-upload just that
file.
