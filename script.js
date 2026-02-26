/* ===============================
   Hatyai Sidewalk – Data Script
   =============================== */

const SHEET_ID = "1EJFuhZVhscWjO_BTzntYsGpcXO2-vYIK4h3I2qQtw48";
const SHEET_GID = "2024806268";

const sheetURL =
  `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?gid=${SHEET_GID}&tqx=out:json`;

fetch(sheetURL)
  .then(res => res.text())
  .then(text => {
    const jsonText = text.substring(47).slice(0, -2);
    const data = JSON.parse(jsonText);

    const rows = data.table.rows;

    let totalAmount = 0;
    let partnerCount = 0;

    rows.forEach(row => {
      if (!row.c) return;

      // Column D (Amount)
      const amountCell = row.c[3];
      const amount = amountCell && amountCell.v;

      if (typeof amount === "number") {
        totalAmount += amount;
        partnerCount += 1;
      }
    });

    animateNumber("totalAmount", totalAmount, "฿");
    animateNumber("partnerCount", partnerCount);
  })
  .catch(err => {
    console.error("Google Sheets error:", err);
  });

/* Apple-style count up */
function animateNumber(id, value, prefix = "") {
  const el = document.getElementById(id);
  if (!el) return;

  const duration = 1800;
  const start = performance.now();

  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const current = Math.floor(progress * value);
    el.textContent = prefix + current.toLocaleString("th-TH");

    if (progress < 1) {
      requestAnimationFrame(tick);
    }
  }

  requestAnimationFrame(tick);
}
/* ===============================
   Parallax Logo (Apple-style)
   =============================== */

const logo = document.getElementById("parallaxLogo");
const heroHeight = window.innerHeight;

window.addEventListener("scroll", () => {
  if (!logo) return;

  const scrollY = window.scrollY;

  // จำกัดระยะที่ effect ทำงาน (เฉพาะใน hero)
  const progress = Math.min(scrollY / heroHeight, 1);

  // ค่าที่เราคุม
  const scale = 1 - progress * 0.4;       // จาก 1 → 0.6
  const translateY = progress * -120;     // เลื่อนขึ้นเล็กน้อย

  logo.style.transform = `
    translateY(${translateY}px)
    scale(${scale})
  `;
});
