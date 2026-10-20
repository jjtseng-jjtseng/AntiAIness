async (page) => {
  const results = [];
  const verify = (name, condition) => {
    if (!condition) throw new Error(name);
    results.push(name);
  };
  await page.goto("http://127.0.0.1:5179/");
  for (const width of [320, 390, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    verify(
      `No horizontal overflow at ${width}px`,
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    );
  }
  await page.setViewportSize({ width: 390, height: 844 });
  await page.screenshot({ path: "output/playwright/mobile.png" });
  await page.getByRole("button", { name: "Open navigation" }).click();
  verify(
    "Mobile menu opens",
    await page
      .getByRole("navigation", { name: "Mobile navigation" })
      .isVisible(),
  );
  await page
    .getByRole("navigation", { name: "Mobile navigation" })
    .getByRole("link", { name: "What we do" })
    .click();
  verify(
    "Mobile menu closes after navigation",
    await page
      .getByRole("navigation", { name: "Mobile navigation" })
      .isHidden(),
  );
  await page.locator(".service-card").nth(0).click();
  verify(
    "Mobile service detail opens",
    await page.locator("#project-dialog").isVisible(),
  );
  await page.getByRole("button", { name: "Make it yours" }).click();
  verify(
    "Mobile quote service prefilled",
    (await page.locator("#quote-service").inputValue()) ===
      "Kitchen renovation",
  );
  verify(
    "Mobile dialog fits viewport",
    await page
      .locator("#quote-dialog")
      .evaluate((el) => el.getBoundingClientRect().width <= innerWidth),
  );
  await page
    .locator("#quote-budget")
    .selectOption({ label: "I’d like some guidance" });
  await page
    .locator("#quote-timeline")
    .selectOption({ label: "Just exploring" });
  await page.getByRole("button", { name: "Next: your details" }).click();
  await page.locator("#quote-name").fill("Mobile Example");
  await page.locator("#quote-email").fill("mobile@example.com");
  await page.getByRole("button", { name: "Create my project brief" }).click();
  verify(
    "Mobile planner completes",
    await page.locator("#quote-success").isVisible(),
  );
  await page.screenshot({ path: "output/playwright/mobile-planner.png" });
  await page.getByRole("button", { name: "Close project planner" }).click();
  for (const selector of ["#projects", "#why-us", "#pricing", "#faq"])
    await page.locator(selector).scrollIntoViewIfNeeded();
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.screenshot({
    path: "output/playwright/mobile-full.png",
    fullPage: true,
  });
  verify(
    "Local photos load",
    await page
      .locator("main img")
      .evaluateAll((images) =>
        images.every((image) => image.complete && image.naturalWidth > 0),
      ),
  );
  verify(
    "Font faces load",
    await page.evaluate(
      () =>
        document.fonts.check('400 16px "DM Sans"') &&
        document.fonts.check('400 16px "DM Serif Display"'),
    ),
  );
  await page.goto(
    "file:///C:/Users/tseng/OneDrive/Desktop/examplecode/aj-and-j-construction/index.html",
  );
  await page.getByRole("button", { name: "Bring your ideas to life" }).click();
  verify(
    "Direct file open supports planner",
    await page.locator("#quote-dialog").isVisible(),
  );
  await page.keyboard.press("Escape");
  await page.locator("#estimate-service").selectOption("bathroom");
  verify(
    "Direct file open supports estimator",
    (await page.locator("#estimate-price").innerText()) === "$9,000 – $12,600",
  );
  await page.goto("http://127.0.0.1:5179/");
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.screenshot({ path: "output/playwright/desktop.png" });
  return results;
};
