/* ===============================
   VIEWPORT FIX (iOS SAFE)
=============================== */
function setVH() {
  document.documentElement.style.setProperty(
    "--vh",
    window.innerHeight * 0.01 + "px"
  );
}
setVH();
window.addEventListener("resize", setVH);

/* ===============================
   RANDOM BACKGROUND
=============================== */
const bgColors = ["#f2eeef","#ffb5fd","#ff9383","#7ebdfd","#fde152"];
document.body.style.setProperty(
  "--bg-color",
  bgColors[Math.floor(Math.random() * bgColors.length)]
);

/* ===============================
   GOOGLE SHEETS
=============================== */
const SHEET_ID = "1EJFuhZVhscWjO_BTzntYsGpcXO2-vYIK4h3I2qQtw48";
const SHEET_GID = "2024806268";
const sheetURL =
  `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?gid=${SHEET_GID}&tqx=out:json`;

let totalAmount = 0;
let partnerCount = 0;
let dataReady = false;

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
    dataReady = true;
  });

/* ===============================
   COUNT UP
=============================== */
function animateNumber(id, value, prefix = "") {
  const el = document.getElementById(id);
  const start = performance.now();
  const duration = 1600;

  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    el.textContent =
      prefix + Math.floor(progress * value).toLocaleString("th-TH");
    if (progress < 1) requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
}

/* ===============================
   IMPACT OBSERVER
=============================== */
const impactSection = document.getElementById("impactSection");
let impactPlayed = false;

const impactObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && dataReady && !impactPlayed) {
        animateNumber("totalAmount", totalAmount, "฿");
        animateNumber("partnerCount", partnerCount);
        impactPlayed = true;
      }
    });
  },
  { threshold: 0.4 }
);

if (impactSection) impactObserver.observe(impactSection);

/* ===============================
   SECTION REVEAL
=============================== */
const sections = document.querySelectorAll(".section");

const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.25 }
);

sections.forEach(section => revealObserver.observe(section));

/* ===============================
   PARALLAX LOGO
=============================== */
const logo = document.getElementById("parallaxLogo");
const heroHeight = window.innerHeight;

window.addEventListener("scroll", () => {
  const progress = Math.min(window.scrollY / heroHeight, 1);
  if (logo) {
    logo.style.transform =
      `translateY(${progress * -120}px) scale(${1 - progress * 0.4})`;
  }
});

/* ===============================
   🍎 CITY SCROLL CONTROLLER
=============================== */
const citySection = document.querySelector(".city-scroll");
const cityFrames = document.querySelectorAll(".city-frame");

if (citySection && cityFrames.length) {
  window.addEventListener("scroll", () => {
    const rect = citySection.getBoundingClientRect();
    const totalScroll = citySection.offsetHeight - window.innerHeight;

    const progress = Math.min(
      Math.max(-rect.top / totalScroll, 0),
      0.999
    );

    const index = Math.floor(progress * cityFrames.length);

    cityFrames.forEach((frame, i) => {
      frame.classList.toggle("active", i === index);
    });
  });
}
