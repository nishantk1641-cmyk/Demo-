# Bloom & Grace website

Responsive floral/event website inspired by the supplied reference image.

## Included
- Responsive layout and mobile navigation
- Scroll-triggered reveal animations (respects reduced-motion preferences)
- Gallery lightbox
- Inquiry form validation that composes an email
- Google Maps listing link provided by you
- Plain HTML, CSS and JavaScript; no build step required

## Run
Open `index.html` in a browser, or upload the folder to any static host (Netlify, GitHub Pages, Vercel, etc.).

## Before publishing
1. Open `script.js` and replace `replace-with-real-business-email@example.com` with the business's real enquiry email.
2. Confirm the business name and all copy match the business at your Google Maps link.
3. Replace the stock gallery photos with the business's own licensed photos.
4. The inquiry form uses `mailto:` and therefore depends on the visitor having an email app configured. For direct website submissions, connect a form backend/service (for example Formspree) or a custom API.
5. The Google Maps short link is used for directions; the public listing details could not be independently confirmed from the shortened URL in this environment.

## Files
- `index.html` — page structure and styles
- `script.js` — navigation, animations, gallery, inquiry form
