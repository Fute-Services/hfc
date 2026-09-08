# Hiranandani Fortune City — “Arena” · Deployment guide

Everything inside `site/` is a **static build**. There is no backend, no database
and no build step to run — upload the files and serve them.

But this is a **single-page app**, so two things must be right or it will look
broken. Both were verified against this exact build.

---

## 1. Deploy at the domain root, not in a sub-folder

Every asset is referenced from `/` — for example `/assets/index-C8tKTede.js`.

| Deploy location | Result |
|---|---|
| `https://example.com/` | Works |
| `https://example.com/arena/` | **Blank page** — the browser asks for `/assets/...`, which does not exist |

If it *must* live in a sub-folder, the app has to be rebuilt with a matching
base path — that is a code change, not a server setting:

```js
// vite.config.ts
export default defineConfig({ base: '/arena/', ... })
```

Then `npm run build` again.

---

## 2. Every unknown path must serve `index.html` (SPA fallback)

React Router handles routes in the browser. The server only ever has one real
HTML file. Without a fallback rule, `https…/arena_gallery` returns a **404** —
confirmed on this build: `/` gives 200, `/arena_gallery` and
`/arena_unitstadia/101` give 404.

This breaks refreshing a page, opening a shared link, and the kiosk's own
bookmarks. The home page alone will look fine, which is why it is easy to miss.

### Netlify / Cloudflare Pages — already handled

`site/_redirects` is included and does this automatically. Nothing to configure.

### Apache / cPanel / shared hosting

Create `.htaccess` next to `index.html`:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /

  # real files and folders are served as-is
  RewriteCond %{REQUEST_FILENAME} -f [OR]
  RewriteCond %{REQUEST_FILENAME} -d
  RewriteRule ^ - [L]

  # everything else goes to the app
  RewriteRule . /index.html [L]
</IfModule>

AddType image/webp .webp
```

### Nginx

```nginx
root /var/www/arena;
index index.html;

location / {
    try_files $uri $uri/ /index.html;
}

location /assets/ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}
```

### IIS

Create `web.config` next to `index.html`:

```xml
<?xml version="1.0" encoding="utf-8"?>
<configuration>
  <system.webServer>
    <staticContent>
      <remove fileExtension=".webp" />
      <mimeMap fileExtension=".webp" mimeType="image/webp" />
    </staticContent>
    <rewrite>
      <rules>
        <rule name="SPA fallback" stopProcessing="true">
          <match url=".*" />
          <conditions logicalGrouping="MatchAll">
            <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" />
            <add input="{REQUEST_FILENAME}" matchType="IsDirectory" negate="true" />
          </conditions>
          <action type="Rewrite" url="/index.html" />
        </rule>
      </rules>
    </rewrite>
  </system.webServer>
</configuration>
```

### Vercel

Create `vercel.json` at the project root:

```json
{ "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }
```

---

## 3. One line to edit before going live

`index.html` currently points the social preview image at a root-relative path:

```html
<meta property="og:image" content="/og-cover.jpg" />
<meta name="twitter:image" content="/og-cover.jpg" />
```

Some link scrapers (including WhatsApp in places) want an absolute URL. Once the
final domain is known, change both to the full address:

```html
<meta property="og:image" content="https://YOUR-DOMAIN/og-cover.jpg" />
```

Everything else in `index.html` is ready as-is.

---

## The site needs internet access

The 360° tours and videos are embedded from external services, not bundled:

| Content | Host |
|---|---|
| Entrance, Arena, HFC location, Ebony, Golden Willows tours | `futeservices.com` |
| Walkthrough, location and status videos | `fast.wistia.net` |
| Project status and quality videos | `player.vimeo.com` |

On a sales-lounge kiosk these must not be blocked by the local firewall or
network filter. If the kiosk is ever offline, those panels will be blank while
the rest of the site still works.

---

## After deploying — 2-minute smoke test

1. Open the home page.
2. Go to **Gallery**, then **refresh the browser**. If you get a 404, the SPA
   fallback in step 2 is not applied.
3. Open a tower → a floor → tap a unit twice. The unit plan should open.
4. On the Gallery page, press the **left arrow** on the first image — it should
   wrap to the last image, not go blank.
5. Open `/ebony` and `/goldenwillows` — a 360° tour should appear, not a 404.

---

## Rebuilding from source

```bash
npm install      # .npmrc handles the React 19 peer-dependency conflict
npm run build    # output lands in dist/
```

Node 20 or newer.
