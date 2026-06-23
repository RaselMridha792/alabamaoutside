# Boles Holmes White LLC — Static Site

Plain **HTML + CSS + JavaScript** conversion of the Next.js site. No build step, no
framework — open the files directly in a browser or serve the folder with any static
web server.

## Quick start

```bash
# from this folder
python -m http.server 8088
# then open http://localhost:8088/  (redirects to home/home.html)
```

Opening `home/home.html` directly with `file://` also works, but a local server is
recommended so that relative paths and fonts resolve exactly like production.

## Structure

```
site/
├── index.html            # redirects to home/home.html
├── global/
│   ├── global.css        # compiled Tailwind + fonts + custom utilities (shared by every page)
│   └── global.js         # navbar (mobile menu), floating contact widget, generic form handling
├── assets/               # images, svgs, favicon
├── media/                # web font files (.woff2)
├── home/        home.html        home.css   home.js   # Hero counters, FAQ, reviews carousel
├── about/       about.html       about.css
├── attorney/    attorney.html    attorney.css   attorney.js   # practice filter + bio modal
├── contact/     contact.html     contact.css    contact.js    # FAQ accordion
├── media/  →  see media page folder below
├── case-review/ ...
├── personal/ + criminal-defense/ divorce-and-family-law/ dui-defense/
│                personal-injury/ wills-and-probate/
├── professional/ + appellate-litigation/ business-consulting/
│                    business-formation-dissolution/
├── blog/
│   ├── blog.html         # listing
│   └── <slug>.html       # 9 individual posts
└── not-found/  not-found.html
```

Every page folder follows the same convention: `<name>/<name>.html`, `<name>/<name>.css`,
and (only where interactivity is needed) `<name>/<name>.js`. All pages link to the shared
`global/global.css` and `global/global.js`.

## Notes

- Layout and styling come from Tailwind's compiled stylesheet in `global/global.css`, so
  utility classes remain on the HTML elements (faithful to the original design).
- Interactive sections that React rendered conditionally (FAQ answers, the testimonials
  carousel, attorney bios, the video lightbox, the floating contact panel) are rebuilt in
  vanilla JS from the original data.
- Forms show an inline confirmation on submit; wire them to a real endpoint as needed.
- Some images load from the original remote host (`alabamaoutsidecounsel.com`,
  Cloudinary, YouTube). An internet connection is required for those to appear.
- The blog search / category filter on the listing page is presentational (all posts are
  always shown), matching the original site's non-paginated behaviour.
