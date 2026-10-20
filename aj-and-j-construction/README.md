# AJ & J Construction

A complete, responsive customer-facing concept website. Built with plain HTML, CSS, and JavaScript, with locally included photos and fonts. No installation, build step, account, or internet connection is needed to use it.

## Open the website

Double-click **START-WEBSITE.bat**, or open **index.html** in Chrome, Edge, Firefox, or Safari. Keep the assets folder next to the HTML file.

For an optional local HTTP preview, run `python -m http.server 5179 --bind 127.0.0.1` from this folder, then open `http://127.0.0.1:5179`. Stop that server with Ctrl+C.

## Included interactions

- Responsive desktop and mobile navigation with working section links.
- Service cards that open detailed inspiration previews.
- Four-category inspiration gallery with accessible filters.
- Project detail dialogs with a direct path to the matching project planner.
- Cost estimator with project type, square footage, and finish level. Changing project type resets the slider to the appropriate range.
- Two-step project planner with required-field and email validation, back navigation, and estimator carryover.
- Project brief summary and downloadable text file containing all entered project details.
- Expandable FAQ, privacy/demo information, keyboard navigation, native dialog focus trapping, Escape-to-close, and reduced-motion support.

## Demo behavior

The planner does **not** send requests, email customers, store personal data, or connect to a backend. Form values exist only in the current page and are cleared when the planner closes. Downloading a brief saves the information to the visitor's own device. There are no analytics or external scripts.

Prices are made-up planning examples. Stock photos are clearly labeled as inspiration and are not claimed as completed AJ & J work. No client reviews, ratings, years in business, license numbers, or insurance credentials have been fabricated. The service approach is proposed marketing content and should be confirmed before launch.

## Edit the content

- **index.html:** visible copy, service starting prices, FAQs, navigation, and footer.
- **styles.css:** colors, fonts, spacing, responsive layouts, and component styling. Theme colors are in `:root`.
- **app.js:** `services` contains estimator base prices, rates, slider ranges, and defaults. `projects` contains inspiration descriptions and matching starting prices.
- **assets/:** local photos, fonts, favicon, and font licenses.

When changing pricing, update all three places: service cards in `index.html`, estimator values in `services`, and project detail starting prices in `projects`.

The estimator calculates `max(base price, square feet × rate) × finish multiplier`, rounded to the nearest $100. The upper bound is 40% higher, also rounded to $100. This is a demonstration formula, not a construction cost assessment.

Before going live, replace sample pricing and imagery as appropriate, confirm actual services and commitments, add the business's service area and contact information, and connect the planner to a real submission service with an appropriate privacy policy.

## Assets and licenses

Photos are downloaded from Unsplash and included locally under the [Unsplash License](https://unsplash.com/license). These are illustrative stock images. Original image sources:

| File         | Source                                                       |
| ------------ | ------------------------------------------------------------ |
| hero.jpg     | https://images.unsplash.com/photo-1600585154340-be6161a56a0c |
| kitchen.jpg  | https://images.unsplash.com/photo-1556912172-45b7abe8b7e1    |
| bathroom.jpg | https://images.unsplash.com/photo-1620626011761-996317b8d101 |
| exterior.jpg | https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde |
| living.jpg   | https://images.unsplash.com/photo-1600210492486-724fe5c67fb0 |

DM Sans and DM Serif Display are from [Google Fonts](https://fonts.google.com/), distributed under the SIL Open Font License. Both license texts are included in `assets/`. The roof mark, favicon, and service icons are original code-native SVG artwork.

Browser QA artifacts and the verification report are under `output/playwright/`.
