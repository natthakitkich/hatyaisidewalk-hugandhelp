/* ================= iOS VIEWPORT FIX ================= */
function setVH() {
  document.documentElement.style.setProperty(
    "--vh",
    window.innerHeight * 0.01 + "px"
  );
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

/* ================= REVEAL ================= */
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

/* ================= CITY FADE ================= */
const cityItems = document.querySelectorAll(".city-item.fade");

const cityObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  },
  { threshold: 0.5 }
);

cityItems.forEach(item => cityObserver.observe(item));

/* ====================================================
   ========== PARTNER LOGO (SUPPORT ALL DRIVE) =========
   ==================================================== */

/* ดึง FILE_ID จาก Google Drive ทุกฟอร์แมตที่พบได้จริง */
function extractDriveFileId(url) {
  if (!url) return null;

  const patterns = [
    /id=([^&]+)/,                 // open?id= / uc?id=
    /\/d\/([^/]+)/,               // file/d/FILE_ID
    /thumbnail\?id=([^&]+)/       // thumbnail?id=
  ];

  for (const p of patterns) {
    const m = url.match(p);
    if (m && m[1]) return m[1];
  }

  return null;
}

fetch(url)
  .then(r => r.text())
  .then(t => {
    const j = JSON.parse(t.substring(47).slice(0, -2));
    const grid = document.getElementById("partnerLogoGrid");
    if (!grid) return;

    j.table.rows.forEach(r => {
      const raw = r.c[5]?.v; // Column F
      const fileId = extractDriveFileId(raw);
      if (!fileId) return;

      const imgUrl = `https://drive.google.com/uc?export=view&id=${fileId}`;

      const circle = document.createElement("div");
      circle.className = "partner-logo-circle";

      const img = document.createElement("img");
      img.src = imgUrl;
      img.alt = "partner logo";

      img.onerror = () => {
        circle.style.display = "none";
      };

      circle.appendChild(img);
      grid.appendChild(circle);
    });
  });
