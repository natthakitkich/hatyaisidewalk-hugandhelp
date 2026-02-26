/* GOOGLE SHEETS */
const SHEET_ID = "1EJFuhZVhscWjO_BTzntYsGpcXO2-vYIK4h3I2qQtw48";
const SHEET_GID = "2024806268";
const sheetURL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?gid=${SHEET_GID}&tqx=out:json`;

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

/* COUNT UP */
function animate(id, value, prefix = "") {
  const el = document.getElementById(id);
  const duration = 1600;
  const start = performance.now();

  function tick(now) {
    const p = Math.min((now - start) / duration, 1);
    el.textContent = prefix + Math.floor(p * value).toLocaleString("th-TH");
    if (p < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

/* IMPACT OBSERVER */
const impact = document.getElementById("impactSection");
let done = false;

new IntersectionObserver(entries => {
  if (entries[0].isIntersecting && ready && !done) {
    animate("totalAmount", totalAmount, "฿");
    animate("partnerCount", partnerCount);
    done = true;
  }
}, { threshold: 0.4 }).observe(impact);

/* REVEAL MOTION */
const reveals = document.querySelectorAll(".reveal");
const io = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.25 });

reveals.forEach(el => io.observe(el));

/* PARALLAX LOGO + DECOR */
const logo = document.getElementById("parallaxLogo");
const palm = document.querySelector(".decor.palm");
const flower = document.querySelector(".decor.flower");
const heroH = window.innerHeight;

window.addEventListener("scroll", () => {
  const y = window.scrollY;
  const p = Math.min(y / heroH, 1);

  if (logo) {
    logo.style.transform = `translateY(${p * -120}px) scale(${1 - p * 0.4})`;
  }

  if (palm) {
    palm.style.transform = `translateY(${y * 0.2}px) rotate(${y * 0.02}deg)`;
  }

  if (flower) {
    flower.style.transform = `translateY(${y * 0.15}px)`;
  }
});
