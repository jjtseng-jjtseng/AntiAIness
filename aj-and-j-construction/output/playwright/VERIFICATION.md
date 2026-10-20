# Browser verification — October 20, 2026

Verified in Chromium using Playwright CLI against a local HTTP server and by opening the HTML file directly.

## Passed interactions

- Gallery filters display the matching category; restoring All spaces displays all four cards.
- Project preview opens and passes its matching service into the planner.
- Missing required budget/timeframe prevents advancement.
- Valid project details advance to contact details.
- Invalid email prevents completion.
- Back navigation preserves entered information.
- A completed planner displays the correct service and entered information.
- Download saves the expected text filename. The downloaded file was opened and checked for the selected project, budget, timeframe, name, email, phone, ZIP, and description.
- Closing and reopening the planner clears personal details.
- Estimator changes reset the square-footage range and default appropriately.
- Outdoor example at 250 sq ft / essentials: $7,500–$10,500.
- Outdoor example at 250 sq ft / premium: $13,100–$18,300.
- Outdoor example at 500 sq ft / premium: $26,300–$36,800.
- Estimator range is carried into the planner.
- FAQ answers expand and opening another closes the previous answer.
- Privacy dialog opens; native dialogs close using Escape.
- Mobile navigation opens and closes after choosing a link.
- Mobile service detail, preselection, and completed planner work.
- Planner dialog fits the mobile viewport.
- All main-page photos and both typefaces load.
- Direct file opening supports the planner and calculator, with no server required.
- No horizontal page overflow at widths 320, 390, 768, 1024, and 1440 pixels.
- Browser console check: zero errors and zero warnings after completed QA.
- JavaScript syntax check: `node --check app.js` passes.

Desktop, mobile, gallery, estimator, and completed planner screenshots were inspected. Screenshots are saved in this folder. Only example data was used.

## Repeat the browser checks

From the website folder, start `python -m http.server 5179 --bind 127.0.0.1` in a separate terminal. With Node.js/npm available:

```powershell
npx --yes --package @playwright/cli playwright-cli -s=ajandj open http://127.0.0.1:5179 --headed
npx --yes --package @playwright/cli playwright-cli -s=ajandj resize 1440 1000
npx --yes --package @playwright/cli playwright-cli -s=ajandj run-code --filename=output/playwright/verify-desktop.js
npx --yes --package @playwright/cli playwright-cli -s=ajandj run-code --filename=output/playwright/verify-responsive.js
```

The direct-file check in the responsive script uses the original delivery folder on this machine. Update that path if the website is moved.

## Scope

No backend, email sending, deployed hosting, or real quote submission is implemented or claimed. No cross-browser compatibility claim is made; browser execution was verified in Chromium. Business credentials and real service pricing remain owner-provided content for a future launch.
