/* ===============================
   GOOGLE SHEETS
=============================== */
const SHEET_ID = "1EJFuhZVhscWjO_BTzntYsGpcXO2-vYIK4h3I2qQtw48";
const SHEET_GID = "2024806268";
const sheetURL =
  `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?gid=${SHEET_GID}&tqx=out:json`;

let totalAmount = 0;
let partnerCount = 0;
let ready = false;

fetch(sheetURL)
  .then(res => res.text())
  .then(text => {
    const json = JSON.parse(text.substring(47).slice(0, -2));
    json.table.rows.forEach(row => {
      const amount = row.c[3]?.v;
      if (typeof amount === "number") {
        totalAmount += amount;
        partnerCount++;
      }
    });
    ready = true;
  });

/* ===============================
   COUNT UP (APPLE STYLE)
=============================== */
function animate(id, value, prefix = "") {
  const el = document.getElementById(id);
  const duration = 1600;
  const start = performance.now();

  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const current = Math.floor(progress * value);
    el.textContent = prefix + current.toLocaleString("th-TH");
    if (progress < 1) requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
}

/* ===============================
   IMPACT OBSERVER
=============================== */
const impactSection = document.getElementById("impactSection");
let impactDone = false;

const impactObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && ready && !impactDone) {
        animate("totalAmount", totalAmount, "฿");
        animate("partnerCount", partnerCount);
        impactDone = true;
      }
    });
  },
  { threshold: 0.4 }
);

if (impactSection) {
  impactObserver.observe(impactSection);
}

/* ===============================
   REVEAL MOTION (STORY SCROLL)
=============================== */
const sections = document.querySelectorAll(".section.reveal");

const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.25,
    rootMargin: "0px 0px -120px 0px"
  }
);

sections.forEach(section => {
  revealObserver.observe(section);
});

/* ===============================
   PARALLAX LOGO + DECOR
=============================== */
const logo = document.getElementById("parallaxLogo");
const palm = document.querySelector(".decor.palm");
const flower = document.querySelector(".decor.flower");
const heroHeight = window.innerHeight;

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const progress = Math.min(scrollY / heroHeight, 1);

  if (logo) {
    logo.style.transform =
      `translateY(${progress * -120}px) scale(${1 - progress * 0.4})`;
  }

  if (palm) {
    palm.style.transform =
      `translateY(${scrollY * 0.2}px) rotate(${scrollY * 0.02}deg)`;
  }

  if (flower) {
    flower.style.transform =
      `translateY(${scrollY * 0.15}px)`;
  }
});
