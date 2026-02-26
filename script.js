/* ===============================
   Hatyai Sidewalk – script.js
   =============================== */

/* ---------- Scroll Fade-up Animation ---------- */
document.addEventListener("DOMContentLoaded", () => {
  const fadeUps = document.querySelectorAll(".fade-up");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.2 }
  );

  fadeUps.forEach(el => observer.observe(el));
});

/* ---------- Google Sheets Fetch ---------- */
const sheetURL =
  "https://docs.google.com/spreadsheets/d/1EJFuhZVhscWjO_BTzntYsGpcXO2-vYIK4h3I2qQtw48/gviz/tq?tqx=out:json";

fetch(sheetURL)
  .then(res => res.text())
  .then(text => {
    const json = JSON.parse(text.substring(47).slice(0, -2));
    const rows = json.table.rows;

    let totalAmount = 0;
    let partnerCount = 0;

    rows.forEach(row => {
      if (!row.c) return;

      // Column D = Amount
      const amount = row.c[3] && row.c[3].v;

      if (typeof amount === "number") {
        totalAmount += amount;
        partnerCount++;
      }
    });

    animateNumber("totalAmount", totalAmount, "฿");
    animateNumber("partnerCount", partnerCount, "");
  })
  .catch(err => {
    console.error("Error loading Google Sheets data:", err);
  });

/* ---------- Apple-style Count-up Animation ---------- */
function animateNumber(elementId, value, prefix = "") {
  const el = document.getElementById(elementId);
  if (!el) return;

  const duration = 1800; // ms
  const start = performance.now();

  function update(now) {
    const progress = Math.min((now - start) / duration, 1);
    const current = Math.floor(progress * value);
    el.textContent = prefix + current.toLocaleString();

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}    });

    animateNumber("totalAmount", total, "฿");
    animateNumber("partnerCount", partners, "");
  });


// 3. Count-up animation
function animateNumber(id, value, prefix) {
  const el = document.getElementById(id);
  let current = 0;
  const increment = value / 60;

  const interval = setInterval(() => {
    current += increment;
    if (current >= value) {
      current = value;
      clearInterval(interval);
    }
    el.textContent = prefix + Math.floor(current).toLocaleString();
  }, 16);
}
