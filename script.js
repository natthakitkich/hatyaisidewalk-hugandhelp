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
  let start = 0;
  const duration = 1500;
  const t0 = performance.now();

  function tick(t) {
    const p = Math.min((t - t0) / duration, 1);
    el.textContent = prefix + Math.floor(p * value).toLocaleString("th-TH");
    if (p < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

const impact = document.getElementById("impactSection");
let done = false;

new IntersectionObserver(entries => {
  if (entries[0].isIntersecting && ready && !done) {
    animate("totalAmount", totalAmount, "฿");
    animate("partnerCount", partnerCount);
    done = true;
  }
}, { threshold: 0.4 }).observe(impact);

/* PARALLAX LOGO */
const logo = document.getElementById("parallaxLogo");
const heroH = window.innerHeight;

window.addEventListener("scroll", () => {
  const p = Math.min(scrollY / heroH, 1);
  logo.style.transform = `translateY(${p * -120}px) scale(${1 - p * 0.4})`;
});
