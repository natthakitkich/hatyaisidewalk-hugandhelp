/* ================= VIEWPORT FIX (iOS SAFE) ================= */
function setVH() {
  document.documentElement.style.setProperty(
    "--vh",
    window.innerHeight * 0.01 + "px"
  );
}
setVH();
window.addEventListener("resize", setVH);

/* ================= RANDOM BG ================= */
const colors = ["#f2eeef","#ffb5fd","#ff9383","#7ebdfd","#fde152"];
document.body.style.setProperty(
  "--bg-color",
  colors[Math.floor(Math.random() * colors.length)]
);

/* ================= COUNT UP ================= */
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

animate("totalAmount",10855,"฿");
animate("partnerCount",23);

/* ================= CITY SCROLL ================= */
const citySection = document.querySelector(".city-scroll");
const frames = document.querySelectorAll(".city-frame");

window.addEventListener("scroll", () => {
  const rect = citySection.getBoundingClientRect();
  const total = citySection.offsetHeight - window.innerHeight;
  const progress = Math.min(Math.max(-rect.top / total, 0), 0.999);
  const index = Math.floor(progress * frames.length);

  frames.forEach((f,i)=>f.classList.toggle("active", i===index));
});

/* ================= PARALLAX LOGO ================= */
const logo = document.getElementById("parallaxLogo");
window.addEventListener("scroll",()=>{
  const p = Math.min(window.scrollY / window.innerHeight,1);
  if(logo){
    logo.style.transform = `translateY(${p*-120}px) scale(${1-p*0.4})`;
  }
});    const p = Math.min((t - start) / dur, 1);
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
/* ===============================
   CITY SCROLL CONTROLLER
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

    cityFrames.forEach((f, i) => {
      f.classList.toggle("active", i === index);
    });
  });
}
