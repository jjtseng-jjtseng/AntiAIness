async (page) => {
  await page.goto("http://127.0.0.1:5179/");
  const results = [];
  const verify = (name, condition) => {
    if (!condition) throw new Error(name);
    results.push(name);
  };
  await page.getByRole("button", { name: "Bathrooms", exact: true }).click();
  verify(
    "Gallery filters to one bathroom",
    (await page.locator(".project-card:visible").count()) === 1,
  );
  await page.locator(".project-card:visible").click();
  verify("Project dialog opens", await page.getByRole("dialog").isVisible());
  await page.getByRole("button", { name: "Make it yours" }).click();
  verify(
    "Project type carries into planner",
    (await page.locator("#quote-service").inputValue()) ===
      "Bathroom renovation",
  );
  await page.getByRole("button", { name: "Next: your details" }).click();
  verify(
    "Missing budget prevents next step",
    await page.locator("#quote-step-1").isVisible(),
  );
  await page
    .locator("#quote-budget")
    .selectOption({ label: "$10,000 – $25,000" });
  await page
    .locator("#quote-timeline")
    .selectOption({ label: "In 3–6 months" });
  await page
    .locator("#quote-description")
    .fill("Walk-in shower, practical storage, warm finishes.");
  await page.getByRole("button", { name: "Next: your details" }).click();
  verify(
    "Valid project advances to details",
    await page.locator("#quote-step-2").isVisible(),
  );
  await page.locator("#quote-name").fill("Alex Example");
  await page.locator("#quote-email").fill("not-an-email");
  await page.getByRole("button", { name: "Create my project brief" }).click();
  verify(
    "Invalid email prevents submission",
    await page.locator("#quote-step-2").isVisible(),
  );
  await page.locator("#quote-email").fill("alex@example.com");
  await page.locator("#quote-phone").fill("555-0100");
  await page.locator("#quote-zip").fill("10001");
  await page.getByRole("button", { name: "Back to your project" }).click();
  verify(
    "Back preserves project data",
    (await page.locator("#quote-description").inputValue()) ===
      "Walk-in shower, practical storage, warm finishes.",
  );
  await page.getByRole("button", { name: "Next: your details" }).click();
  await page.getByRole("button", { name: "Create my project brief" }).click();
  verify(
    "Brief includes selected service",
    (await page.locator("#brief-summary").innerText()).includes(
      "Bathroom renovation",
    ),
  );
  const downloadPromise = page.waitForEvent("download");
  await page
    .getByRole("button", { name: "Download your project brief" })
    .click();
  const download = await downloadPromise;
  await download.saveAs("output/playwright/test-project-brief.txt");
  verify(
    "Download has expected filename",
    download.suggestedFilename() === "AJ-and-J-my-project-brief.txt",
  );
  await page.screenshot({ path: "output/playwright/planner-success.png" });
  await page.keyboard.press("Escape");
  await page
    .getByRole("button", { name: "Let’s build something", exact: true })
    .click();
  verify(
    "Closing clears personal details",
    (await page.locator("#quote-name").inputValue()) === "",
  );
  await page.keyboard.press("Escape");
  await page.locator("#estimate-service").selectOption("outdoor");
  verify(
    "Estimator resets size for service",
    (await page.locator("#project-size").inputValue()) === "250",
  );
  verify(
    "Outdoor estimate is correct",
    (await page.locator("#estimate-price").innerText()) === "$7,500 – $10,500",
  );
  await page.locator("#finish-level").selectOption("1.75");
  verify(
    "Premium finish updates price",
    (await page.locator("#estimate-price").innerText()) === "$13,100 – $18,300",
  );
  await page.locator("#project-size").fill("500");
  await page.locator("#project-size").dispatchEvent("input");
  verify(
    "Square footage updates estimate",
    (await page.locator("#estimate-price").innerText()) === "$26,300 – $36,800",
  );
  await page
    .getByRole("button", { name: "Let’s make a plan", exact: true })
    .click();
  verify(
    "Estimate carries into planner",
    (await page.locator("#estimate-carried").innerText()).includes(
      "$26,300 – $36,800",
    ),
  );
  await page.keyboard.press("Escape");
  await page.locator(".faq-list summary").nth(0).click();
  verify("FAQ expands", (await page.locator("details[open]").count()) === 1);
  await page.locator(".faq-list summary").nth(1).click();
  await page.waitForFunction(
    () => document.querySelectorAll(".faq-list details[open]").length === 1,
  );
  verify(
    "FAQ keeps one answer open",
    (await page.locator("details[open]").count()) === 1,
  );
  await page
    .getByRole("button", { name: "Privacy & demo information" })
    .click();
  verify(
    "Privacy dialog opens",
    await page.locator("#privacy-dialog").isVisible(),
  );
  await page.keyboard.press("Escape");
  await page.locator("#estimate-service").selectOption("kitchen");
  await page.locator("#finish-level").selectOption("1");
  await page.getByRole("button", { name: "All spaces" }).click();
  await page.locator("#projects").scrollIntoViewIfNeeded();
  await page.screenshot({ path: "output/playwright/gallery.png" });
  await page.locator("#pricing").scrollIntoViewIfNeeded();
  await page.screenshot({ path: "output/playwright/pricing.png" });
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.screenshot({
    path: "output/playwright/desktop-full.png",
    fullPage: true,
  });
  return results;
};
