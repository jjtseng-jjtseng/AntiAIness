(function () {
  "use strict";
  var menuButton = document.querySelector(".menu-toggle");
  var nav = document.querySelector("#nav");
  function closeMenu() {
    if (!menuButton || !nav) return;
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation");
    nav.classList.remove("open");
  }
  if (menuButton && nav) {
    menuButton.addEventListener("click", function () {
      var open = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!open));
      menuButton.setAttribute("aria-label", open ? "Open navigation" : "Close navigation");
      nav.classList.toggle("open", !open);
    });
    nav.querySelectorAll("a").forEach(function (link) { link.addEventListener("click", closeMenu); });
    document.addEventListener("keydown", function (event) { if (event.key === "Escape") closeMenu(); });
    window.addEventListener("resize", function () { if (window.innerWidth > 640) closeMenu(); });
  }

  var projectData = {
    home: {count:"01",category:"AT HOME",title:"A helpful little<br>home hub.",desc:"Keep your smart home tools together, automate the everyday, and make your space a little more yours.",tags:["Wi-Fi","Ethernet","GPIO"]},
    camera: {count:"02",category:"OUT IN THE WORLD",title:"A camera with<br>your point of view.",desc:"Connect a camera and turn a tiny computer into a wildlife watcher, time-lapse maker, or your own creative vision system.",tags:["Camera","MIPI","Python"]},
    desktop: {count:"03",category:"AT YOUR DESK",title:"A desktop that<br>starts a lot.",desc:"Plug in a screen, keyboard, and mouse. Browse, create, learn Linux, or turn that spare monitor into something useful.",tags:["Dual 4K","Wi-Fi","USB 3"]},
    robot: {count:"04",category:"IN MOTION",title:"Give your idea<br>a set of wheels.",desc:"Connect sensors and motors through add-on hardware, then write the instructions that bring a robot to life.",tags:["GPIO","Sensors","Motors"]}
  };
  var tabs = Array.prototype.slice.call(document.querySelectorAll(".project-tab"));
  var panel = document.querySelector("#project-panel");
  function selectProject(key, focus) {
    var item = projectData[key];
    if (!item) return;
    tabs.forEach(function (tab) {
      var active = tab.dataset.project === key;
      tab.classList.toggle("active", active);
      tab.setAttribute("aria-selected", String(active));
      tab.tabIndex = active ? 0 : -1;
      if (active && focus) tab.focus();
    });
    document.querySelector("#project-count").textContent = item.count;
    document.querySelector("#project-category").textContent = item.category;
    document.querySelector("#project-title").innerHTML = item.title;
    document.querySelector("#project-desc").textContent = item.desc;
    document.querySelector("#project-tags").innerHTML = item.tags.map(function (tag) { return "<span>" + tag + "</span>"; }).join("");
    document.querySelector("#project-art").dataset.mode = key;
    panel.setAttribute("aria-labelledby", "tab-" + key);
  }
  tabs.forEach(function (tab, index) {
    tab.addEventListener("click", function () { selectProject(tab.dataset.project, false); });
    tab.addEventListener("keydown", function (event) {
      if (!["ArrowRight", "ArrowLeft", "Home", "End"].includes(event.key)) return;
      event.preventDefault();
      var next = index;
      if (event.key === "ArrowRight") next = (index + 1) % tabs.length;
      if (event.key === "ArrowLeft") next = (index - 1 + tabs.length) % tabs.length;
      if (event.key === "Home") next = 0;
      if (event.key === "End") next = tabs.length - 1;
      selectProject(tabs[next].dataset.project, true);
    });
  });

  var modelData = {
    "1": {label:"1 GB · THE FOCUSED START",title:"A small start<br>with big range.",copy:"A wallet-friendlier way into Raspberry Pi 5 for focused projects, controllers, and learning by doing."},
    "2": {label:"2 GB · THE MAKER",title:"Make room<br>to experiment.",copy:"A practical starting point for simple projects, connected devices, and your first steps with Raspberry Pi OS."},
    "4": {label:"4 GB · THE CREATOR",title:"A little more<br>room to play.",copy:"A balanced option for desktop use, coding, media, and the projects you have not thought of yet."},
    "8": {label:"8 GB · THE ALL-ROUNDER",title:"Room to try<br>something new.",copy:"A flexible place to start for everyday computing, creative projects, and plenty of room to explore."},
    "16": {label:"16 GB · THE POWER USER",title:"More headroom<br>for bigger builds.",copy:"The most memory in the Raspberry Pi 5 family for demanding multitasking and professional applications."}
  };
  document.querySelectorAll(".model-option").forEach(function (option) {
    option.addEventListener("click", function () {
      var item = modelData[option.dataset.memory];
      document.querySelectorAll(".model-option").forEach(function (other) {
        var selected = option === other;
        other.classList.toggle("selected", selected);
        other.setAttribute("aria-pressed", String(selected));
      });
      document.querySelector("#selected-label").textContent = item.label;
      document.querySelector("#selected-title").innerHTML = item.title;
      document.querySelector("#selected-copy").textContent = item.copy;
    });
  });
}());
