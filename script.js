/* RANDOM BG */
const colors = ["#f2eeef","#ffb5fd","#ff9383","#7ebdfd","#fde152"];
const bg = colors[Math.floor(Math.random()*colors.length)];
document.documentElement.style.setProperty("--bg-color", bg);

/* GOOGLE SHEETS */
const SHEET_ID = "1EJFuhZVhscWjO_BTzntYsGpcXO2-vYIK4h3I2qQtw48";
const GID = "2024806268";
fetch(`https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?gid=${GID}&tqx=out:json`)
.then(r=>r.text())
.then(t=>{
  const j = JSON.parse(t.substring(47).slice(0,-2));
  let total=0,count=0;
  j.table.rows.forEach(r=>{
    const v=r.c[3]?.v;
    if(typeof v==="number"){ total+=v; count++; }
  });
  animate("totalAmount", total, "฿");
  animate("partnerCount", count);
});

/* COUNT UP */
function animate(id,val,prefix=""){
  const el=document.getElementById(id);
  let s=0;
  function tick(){
    s+=val/60;
    if(s>=val) s=val;
    el.textContent=prefix+Math.floor(s).toLocaleString("th-TH");
    if(s<val) requestAnimationFrame(tick);
  }
  tick();
}

/* REVEAL */
const obs=new IntersectionObserver(es=>{
  es.forEach(e=>{ if(e.isIntersecting)e.target.classList.add("show");});
},{threshold:.2});
document.querySelectorAll(".section").forEach(s=>obs.observe(s));
