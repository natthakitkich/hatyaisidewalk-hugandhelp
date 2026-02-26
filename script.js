/* RANDOM BACKGROUND */
const colors = ["#f2eeef","#ffb5fd","#ff9383","#7ebdfd","#fde152"];
document.body.style.setProperty(
  "--bg-color",
  colors[Math.floor(Math.random() * colors.length)]
);

/* GOOGLE SHEETS */
const SHEET_ID = "1EJFuhZVhscWjO_BTzntYsGpcXO2-vYIK4h3I2qQtw48";
const SHEET_GID = "2024806268";
const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?gid=${SHEET_GID}&tqx=out:json`;

let total = 0;
let count = 0;

fetch(url)
  .then(r => r.text())
  .then(t => {
    const j = JSON.parse(t.substr(47).slice(0, -2));
    j.table.rows.forEach(r => {
      const v = r.c[3]?.v;
      if (typeof v === "number") {
        total += v;
        count++;
      }
    });
    animate("totalAmount", total, "฿");
    animate("partnerCount", count);
  });

function animate(id, val, prefix = "") {
  const el = document.getElementById(id);
  const start = performance.now();
  const dur = 1600;

  function tick(t) {
    const p = Math.min((t - start) / dur, 1);
    el.textContent =
      prefix + Math.floor(p * val).toLocaleString("th-TH");
    if (p < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

/* REVEAL */
const io = new IntersectionObserver(
  es => es.forEach(e => e.isIntersecting && e.target.classList.add("show")),
  { threshold: 0.25 }
);

document.querySelectorAll(".section").forEach(s => io.observe(s));

/* PARALLAX LOGO */
const logo = document.getElementById("parallaxLogo");
const heroH = window.innerHeight;

window.addEventListener("scroll", () => {
  const p = Math.min(window.scrollY / heroH, 1);
  if (logo) {
    logo.style.transform =
      `translateY(${p * -120}px) scale(${1 - p * 0.4})`;
  }
});
