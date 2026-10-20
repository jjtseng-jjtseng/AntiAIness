"use strict";

// All demo prices and service defaults live here for easy editing.
const services = {
  kitchen: {
    name: "Kitchen renovation",
    min: 80,
    max: 400,
    size: 150,
    base: 18000,
    rate: 120,
  },
  bathroom: {
    name: "Bathroom renovation",
    min: 30,
    max: 180,
    size: 60,
    base: 9000,
    rate: 150,
  },
  home: {
    name: "Home renovation",
    min: 200,
    max: 2500,
    size: 500,
    base: 35000,
    rate: 70,
  },
  outdoor: {
    name: "Outdoor living",
    min: 100,
    max: 1000,
    size: 250,
    base: 7500,
    rate: 30,
  },
};
const projects = {
  kitchen: {
    title: "The heart of the home",
    service: "Kitchen renovation",
    image: "kitchen",
    alt: "Light-filled kitchen with white cabinetry and warm wood floors",
    description:
      "Imagine a kitchen that makes the everyday feel a little more special. Open sightlines, practical storage, and finishes that invite everyone to stay a while.",
    features: ["Smart storage", "Natural light", "Room to gather"],
    starting: "$18,000",
  },
  bathroom: {
    title: "Your everyday retreat",
    service: "Bathroom renovation",
    image: "bathroom",
    alt: "Modern bathroom with a freestanding bathtub, vessel sink, and calm finishes",
    description:
      "A calmer start to your mornings. Explore a space that balances beautiful materials with the practical details your everyday routine deserves.",
    features: ["Considered lighting", "Warm textures", "Easy everyday care"],
    starting: "$9,000",
  },
  living: {
    title: "Room for real life",
    service: "Home renovation",
    image: "living",
    alt: "Bright and welcoming living room with soft furnishings",
    description:
      "Make space for the way you really live. Think better flow, flexible gathering areas, and thoughtful details that connect your favorite parts of home.",
    features: ["Flexible layouts", "Comfortable gathering", "A connected home"],
    starting: "$35,000",
  },
  outdoor: {
    title: "A breath of fresh air",
    service: "Outdoor living",
    image: "exterior",
    alt: "Contemporary home surrounded by landscaped outdoor space",
    description:
      "Longer evenings. More fresh air. Picture an outdoor space that feels like a natural extension of home, with room to relax, gather, and enjoy the seasons.",
    features: ["Outdoor gathering", "Natural materials", "Room to unwind"],
    starting: "$7,500",
  },
};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const money = (value) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
const quoteDialog = $("#quote-dialog");
const quoteForm = $("#quote-form");
let carriedEstimate = null;
let brief = null;

function showDialog(dialog) {
  if (!dialog.open) dialog.showModal();
  document.body.classList.add("modal-open");
  dialog.scrollTop = 0;
}
function closeDialog(dialog) {
  dialog.close();
}
$$("dialog").forEach((dialog) => {
  $$("[data-close]", dialog).forEach((button) =>
    button.addEventListener("click", () => closeDialog(dialog)),
  );
  dialog.addEventListener("click", (event) => {
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    if (
      event.clientX < bounds.left ||
      event.clientX > bounds.right ||
      event.clientY < bounds.top ||
      event.clientY > bounds.bottom
    )
      closeDialog(dialog);
  });
  dialog.addEventListener("close", () => {
    if (!$$("dialog[open]").length)
      document.body.classList.remove("modal-open");
  });
});

const menuToggle = $(".menu-toggle");
const mobileNav = $("#mobile-nav");
function closeMenu() {
  mobileNav.hidden = true;
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation");
}
menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  mobileNav.hidden = isOpen;
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Open navigation" : "Close navigation",
  );
});
$$("a", mobileNav).forEach((link) => link.addEventListener("click", closeMenu));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});
window.matchMedia("(min-width:761px)").addEventListener("change", (event) => {
  if (event.matches) closeMenu();
});

function setStep(step) {
  for (const number of [1, 2]) {
    const fieldset = $(`#quote-step-${number}`);
    fieldset.hidden = number !== step;
    // Keep step one fields enabled on step two so FormData includes the project.
    fieldset.disabled = number === 2 && step === 1;
    $(`#progress-${number}`).classList.toggle("active", number <= step);
    $(`#progress-${number}`).setAttribute(
      "aria-current",
      number === step ? "step" : "false",
    );
  }
  quoteDialog.scrollTop = 0;
}

function openQuote(service = "", estimate = null) {
  closeMenu();
  quoteForm.reset();
  brief = null;
  carriedEstimate = estimate;
  quoteForm.hidden = false;
  $(".form-progress").hidden = false;
  $("#quote-success").hidden = true;
  $(".quote-header").hidden = false;
  $("#quote-service").value = service;
  const carried = $("#estimate-carried");
  carried.hidden = !estimate;
  carried.textContent = estimate
    ? `Your planning estimate: ${estimate.range} · ${estimate.size} sq ft · ${estimate.finish}`
    : "";
  setStep(1);
  showDialog(quoteDialog);
}
$$("[data-quote]").forEach((button) =>
  button.addEventListener("click", () => openQuote()),
);
$$("[data-service]").forEach((button) =>
  button.addEventListener("click", () => {
    const entry = Object.values(projects).find(
      (project) => project.service === button.dataset.service,
    );
    openProject(Object.keys(projects).find((key) => projects[key] === entry));
  }),
);
quoteDialog.addEventListener("close", () => {
  quoteForm.reset();
  brief = null;
  carriedEstimate = null;
  $("#brief-summary").replaceChildren();
  $("#estimate-carried").textContent = "";
});

$$("[data-filter]").forEach((button) =>
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    $$("[data-filter]").forEach((item) => {
      const active = item === button;
      item.classList.toggle("active", active);
      item.setAttribute("aria-pressed", String(active));
    });
    const cards = $$(".project-card");
    cards.forEach((card) => {
      card.hidden = filter !== "all" && card.dataset.category !== filter;
    });
    $("#project-grid").classList.toggle("filtered", filter !== "all");
    const count = cards.filter((card) => !card.hidden).length;
    $(".gallery-status").textContent =
      `Showing ${count} inspiration ${count === 1 ? "space" : "spaces"}`;
  }),
);

let selectedProject = null;
function openProject(key) {
  const project = projects[key];
  if (!project) return;
  selectedProject = project;
  $("#project-detail-image").src = `assets/${project.image}.jpg`;
  $("#project-detail-image").alt = project.alt;
  $("#project-title").textContent = project.title;
  $("#project-category").textContent =
    project.service.toUpperCase() + " / DESIGN INSPIRATION";
  $("#project-description").textContent = project.description;
  $("#project-starting").textContent =
    `Illustrative starting price: ${project.starting}`;
  $("#project-features").replaceChildren(
    ...project.features.map((feature) => {
      const item = document.createElement("li");
      item.textContent = feature;
      return item;
    }),
  );
  showDialog($("#project-dialog"));
}
$$("[data-project]").forEach((button) =>
  button.addEventListener("click", () => openProject(button.dataset.project)),
);
$("#project-quote").addEventListener("click", () => {
  const service = selectedProject.service;
  closeDialog($("#project-dialog"));
  openQuote(service);
});

function updateEstimate() {
  const service = services[$("#estimate-service").value];
  const size = Number($("#project-size").value);
  const quality = Number($("#finish-level").value);
  const low =
    Math.round((Math.max(service.base, size * service.rate) * quality) / 100) *
    100;
  const high = Math.round((low * 1.4) / 100) * 100;
  $("#size-output").textContent = `${size.toLocaleString()} sq ft`;
  $("#estimate-price").textContent = `${money(low)} – ${money(high)}`;
  const percent = ((size - service.min) / (service.max - service.min)) * 100;
  $("#project-size").style.background =
    `linear-gradient(to right, #647853 ${percent}%, #dfe3d7 ${percent}%)`;
  return {
    range: `${money(low)} – ${money(high)}`,
    size,
    finish: $("#finish-level").selectedOptions[0].textContent,
  };
}
$("#estimate-service").addEventListener("change", () => {
  const service = services[$("#estimate-service").value];
  const slider = $("#project-size");
  slider.min = service.min;
  slider.max = service.max;
  slider.value = service.size;
  $("#size-min").textContent = `${service.min.toLocaleString()} sq ft`;
  $("#size-max").textContent = `${service.max.toLocaleString()} sq ft`;
  updateEstimate();
});
$("#project-size").addEventListener("input", updateEstimate);
$("#finish-level").addEventListener("change", updateEstimate);
$("#estimate-quote").addEventListener("click", () =>
  openQuote(services[$("#estimate-service").value].name, updateEstimate()),
);
updateEstimate();

$("#next-step").addEventListener("click", () => {
  const fields = $$("select, input, textarea", $("#quote-step-1"));
  for (const field of fields) {
    if (!field.reportValidity()) return;
  }
  setStep(2);
  $("#quote-name").focus();
});
$("#previous-step").addEventListener("click", () => {
  setStep(1);
  $("#quote-service").focus();
});
quoteForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(quoteForm);
  brief = Object.fromEntries(formData.entries());
  brief.estimate = carriedEstimate;
  const rows = [
    ["Project", brief.service],
    ["Budget", brief.budget],
    ["Timing", brief.timeline],
    ["Name", brief.name.trim()],
    ["Email", brief.email.trim()],
  ];
  if (brief.phone.trim()) rows.push(["Phone", brief.phone.trim()]);
  if (brief.zip.trim()) rows.push(["ZIP code", brief.zip.trim()]);
  if (carriedEstimate) rows.push(["Estimate", carriedEstimate.range]);
  if (brief.description.trim())
    rows.push(["Your ideas", brief.description.trim()]);
  $("#brief-summary").replaceChildren(
    ...rows.map(([key, value]) => {
      const row = document.createElement("div");
      const term = document.createElement("dt");
      term.textContent = key;
      const detail = document.createElement("dd");
      detail.textContent = value;
      row.append(term, detail);
      return row;
    }),
  );
  quoteForm.hidden = true;
  $(".form-progress").hidden = true;
  $(".quote-header").hidden = true;
  $("#quote-success").hidden = false;
  quoteDialog.scrollTop = 0;
  $("#download-brief").focus();
});
$("#download-brief").addEventListener("click", () => {
  if (!brief) return;
  const contents = [
    "AJ & J Construction — Your Project Brief",
    "=======================================",
    "DEMO: This brief has not been sent. Prices are illustrative.",
    "",
    `Project: ${brief.service}`,
    `Planning budget: ${brief.budget}`,
    `Timeframe: ${brief.timeline}`,
    "",
    `Name: ${brief.name}`,
    `Email: ${brief.email}`,
    `Phone: ${brief.phone || "Not provided"}`,
    `ZIP code: ${brief.zip || "Not provided"}`,
    "",
    "Your ideas:",
    brief.description || "Let’s explore the possibilities together.",
    ...(brief.estimate
      ? [
          "",
          "Illustrative estimate:",
          `${brief.estimate.range} / ${brief.estimate.size} sq ft / ${brief.estimate.finish}`,
          "A planning guide only. Final scope, location, permits and materials affect pricing.",
        ]
      : []),
    "",
    "Next step: Share this brief with your chosen project contact.",
    "No contact service is connected to this concept website.",
  ].join("\r\n");
  const url = URL.createObjectURL(
    new Blob([contents], { type: "text/plain;charset=utf-8" }),
  );
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = "AJ-and-J-my-project-brief.txt";
  document.body.append(anchor);
  anchor.click();
  anchor.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
});

$("#privacy-button").addEventListener("click", () =>
  showDialog($("#privacy-dialog")),
);
$$(".faq-list details").forEach((detail) =>
  detail.addEventListener("toggle", () => {
    if (detail.open)
      $$(".faq-list details")
        .filter((other) => other !== detail)
        .forEach((other) => {
          other.open = false;
        });
  }),
);
$("#year").textContent = new Date().getFullYear();
