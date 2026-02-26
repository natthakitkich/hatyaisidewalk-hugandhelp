/* ================= iOS VIEWPORT FIX ================= */
function setVH() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}
setVH();
window.addEventListener("resize", setVH);

/* ================= RANDOM BACKGROUND ================= */
const colors = ["#f2eeef","#ffb5fd","#ff9383","#7ebdfd","#fde152"];
document.body.style.setProperty(
  "--bg-color",
  colors[Math.floor(Math.random() * colors.length)]
);

/* ================= GOOGLE SHEETS ================= */
const SHEET_ID = "1EJFuhZVhscWjO_BTzntYsGpcXO2-vYIK4h3I2qQtw48";
const SHEET_GID = "2024806268";
const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?gid=${SHEET_GID}&tqx=out:json`;

let total = 0;
let count = 0;

fetch(url)
  .then(r => r.text())
  .then(t => {
    const j = JSON.parse(t.substring(47).slice(0, -2));
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

function animate(id, val, prefix="") {
  const el = document.getElementById(id);
  const start = performance.now();
  const dur = 1600;

  function tick(t){
    const p = Math.min((t-start)/dur,1);
    el.textContent = prefix + Math.floor(p*val).toLocaleString("th-TH");
    if(p<1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

/* ================= REVEAL OBSERVER ================= */
const io = new IntersectionObserver(
  entries => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add("show");
    });
  },
  { threshold: 0.3 }
);

document.querySelectorAll(".reveal").forEach(el => io.observe(el));

/* ================= PARALLAX LOGO ================= */
const logo = document.getElementById("parallaxLogo");
window.addEventListener("scroll",()=>{
  const p = Math.min(window.scrollY / window.innerHeight,1);
  if(logo){
    logo.style.transform =
      `translateY(${p*-120}px) scale(${1-p*0.4})`;
  }
});
