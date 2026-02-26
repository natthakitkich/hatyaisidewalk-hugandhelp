/* ===============================
   RANDOM BACKGROUND (ONE COLOR)
=============================== */
const bgColors = [
  "#f2eeef",
  "#ffb5fd",
  "#ff9383",
  "#7ebdfd",
  "#7ebdfd",
  "#fde152"
];

const chosen = bgColors[Math.floor(Math.random() * bgColors.length)];
document.documentElement.style.setProperty("--bg-color", chosen);

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
   COUNT UP
=============================== */
function animate(id, value, prefix = "") {
  const el = document.getElementById(id);
  const duration = 1600;
  const start = performance.now();

  function tick(now) {
    const p = Math.min((now - start) / duration, 1);
    el.textContent =
      prefix + Math.floor(p * value).toLocaleString("th-TH");
    if (p < 1) requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
}

/* ===============================
   IMPACT TRIGGER (SAFE)
=============================== */
const impact = document.getElementById("impactSection");
let impactDone = false;

if (impact) {
  new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && ready && !impactDone) {
        animate("totalAmount", totalAmount, "฿");
        animate("partnerCount", partnerCount);
        impactDone = true;
      }
    });
  }, { threshold: 0.2 }).observe(impact);
}

/* ===============================
   SECTION REVEAL (NO DEAD STATE)
=============================== */
const sections = document.querySelectorAll(".section");

const reveal = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.15 }
);

sections.forEach(sec => {
  reveal.observe(sec);

  /* reveal immediately if already in viewport */
  if (sec.getBoundingClientRect().top < window.innerHeight * 0.85) {
    sec.classList.add("show");
  }
});

/* ===============================
   PARALLAX
=============================== */
const logo = document.getElementById("parallaxLogo");
const palm = document.querySelector(".decor.palm");
const flower = document.querySelector(".decor.flower");
const heroH = window.innerHeight;

window.addEventListener("scroll", () => {
  const y = window.scrollY;
  const p = Math.min(y / heroH, 1);

  if (logo) {
    logo.style.transform =
      `translateY(${p * -120}px) scale(${1 - p * 0.35})`;
  }

  if (palm) {
    palm.style.transform =
      `translateY(${y * 0.18}px) rotate(${y * 0.02}deg)`;
  }

  if (flower) {
    flower.style.transform =
      `translateY(${y * 0.14}px)`;
  }
});
