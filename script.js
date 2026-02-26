// 1. Scroll animation
const observers = document.querySelectorAll('.fade-up');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.2 });

observers.forEach(el => observer.observe(el));


// 2. Google Sheets fetch
const sheetURL = "https://docs.google.com/spreadsheets/d/SPREADSHEET_ID/gviz/tq?tqx=out:json";

fetch(sheetURL)
  .then(res => res.text())
  .then(text => {
    const json = JSON.parse(text.substring(47).slice(0, -2));
    const rows = json.table.rows;

    let total = 0;
    let partners = 0;

    rows.forEach(row => {
      if (!row.c) return;

      const amount = row.c[3] && row.c[3].v;
      const status = row.c[8] && row.c[8].v;

      if (typeof amount === "number") {
        total += amount;
        partners++;
      }
    });

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
