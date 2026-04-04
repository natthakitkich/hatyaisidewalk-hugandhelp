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
const colors = ["#f2eeef", "#ffb5fd", "#ff9383", "#7ebdfd", "#fde152"];
document.body.style.setProperty(
  "--bg-color",
  colors[Math.floor(Math.random() * colors.length)]
);

/* ================= LANGUAGE SYSTEM ================= */
const translations = {
  th: {
    pageTitle: "Hatyai Sidewalk – Amazing Smile",
    heroTitleLine1: "HATYAI SIDEWALK",
    heroTitleLine2: "Amazing Smile",
    heroSub: "เปลี่ยนพลังของงานเทศกาล<br>ให้กลายเป็น “รอยยิ้มของเมือง”",

    impactSupportLabel: "ยอดเงินสนับสนุนจากพาร์ตเนอร์",
    impactPartnerLabel: "จำนวนพาร์ตเนอร์ที่ร่วมฟื้นฟูเมือง",

    storyLogoTitle: "การมีชื่อหรือโลโก้ของธุรกิจ<br>ปรากฏอยู่ในพื้นที่ของงาน",
    storyLogoP1: "ไม่ใช่แค่การแสดงตัวตน แต่คือการบอกกับผู้คนว่าธุรกิจนี้ยังอยู่",
    storyLogoP2: "และยังเลือกดูแลเมืองที่ตัวเองใช้ชีวิตอยู่",

    partnerSectionTitle: "พาร์ตเนอร์ที่ร่วมฟื้นฟูเมือง",

    partnerIntroTitle: "การเข้าร่วมเป็นพาร์ทเนอร์ของโครงการ<br>เป็นการสนับสนุนตามความเหมาะสมของแต่ละธุรกิจ<br>ไม่มีการกำหนดจำนวนขั้นต่ำ",
    partnerBenefitTitle: "สิ่งที่พาร์ทเนอร์จะได้รับ",
    partnerBenefit1: "• การแสดงโลโก้ในพื้นที่งาน",
    partnerBenefit2: "• การประชาสัมพันธ์ในสื่อของโครงการ",
    partnerBenefit3: "• การกล่าวขอบคุณและสรุปผลในช่วงปิดงาน",

    projectPurposeTitle: "โครงการนี้เกิดขึ้นเพื่ออะไร",
    projectPurposeP1:
      "HATYAI SIDEWALK : AMAZING SMILE เกิดขึ้นจากความตั้งใจที่จะสร้างพื้นที่กลางของเมือง พื้นที่ที่เชื่อมโยงผู้คน ชุมชน และภาคธุรกิจ ให้กลับมาเดินเคียงข้างกันอีกครั้ง",
    projectPurposeP2:
      "ผ่านกิจกรรมด้านศิลปะ ดนตรี ไลฟ์สไตล์ และตลาดสร้างสรรค์บนถนนของเมือง เพื่อให้หาดใหญ่กลับมามีชีวิต และให้รอยยิ้มของเมืองเกิดขึ้นอีกครั้ง",

    supportTitle: "การสนับสนุนที่ถูกส่งต่อ",
    support1: "<strong>โรงพยาบาลในพื้นที่หาดใหญ่</strong> – ดูแลชีวิตและกำลังใจ",
    support2: "<strong>โรงเรียนการศึกษาคนตาบอดธรรมสากลหาดใหญ่</strong> – สร้างโอกาสการเรียนรู้",
    support3: "<strong>มูลนิธิบ้านหมายิ้ม</strong> – ดูแลชีวิตสัตว์และสมดุลของเมือง",
    support4: "<strong>โรงเรียนในพื้นที่หาดใหญ่</strong> – สนับสนุนอุปกรณ์และสภาพแวดล้อมการเรียนรู้",

    qrTitle: "ร่วมสนับสนุนฟื้นฟูเมือง",
    qrP1:
      "สามารถร่วมสนับสนุนโครงการได้ผ่าน QR Code ด้านบน<br>เพื่อร่วมเป็นส่วนหนึ่งในการฟื้นฟูและสร้างรอยยิ้มให้กับเมืองหาดใหญ่",
    qrP2:
      "<strong>ไม่กำหนดจำนวนขั้นต่ำในการสนับสนุน</strong><br>ทุกการมีส่วนร่วมสามารถเปลี่ยนเป็นพลังที่มีความหมายได้",
    qrNote:
      "หมายเหตุ: หากองค์กรหรือธุรกิจใดต้องการให้แสดงโลโก้ในพื้นที่ของโครงการ<br>สามารถส่งข้อมูลและรายละเอียดได้ทาง LINE ของโครงการ",

    teamTitle: "👥 ผู้รับผิดชอบโครงการ",
    teamLead: "<strong>หัวหน้าโครงการ</strong><br>นายโชคชัย อินทโชติ",
    teamDeputy: "<strong>รองหัวหน้าโครงการ</strong><br>นางสาวแทนขวัญ ทัศบุตร",
    teamAssistant: "<strong>ผู้ช่วยหัวหน้าโครงการ</strong><br>นายพันธุ์ธัช ด้วงลา",
    teamCoordinator: "<strong>ผู้ประสานงานโครงการ</strong><br>นายณัฏฐกิตติ์ กิชัยรัมย์",

    contactTitle: "📲 ติดต่อโครงการ",
    contactPerson: "ผู้ประสานงานโครงการ<br>คุณณัฏ",

    footerAddress:
      "บริษัท สเมิร์ฟ แอนด์ เฟรนด์ส จำกัด<br>162 ซอย 2 วุฒิธานี ตำบลคอหงส์ อำเภอหาดใหญ่ จังหวัดสงขลา 90110",

    partnerLogoAlt: "โลโก้พาร์ตเนอร์"
  },

  en: {
    pageTitle: "Hatyai Sidewalk – Amazing Smile",
    heroTitleLine1: "HATYAI SIDEWALK",
    heroTitleLine2: "Amazing Smile",
    heroSub: "Turning the energy of a festival<br>into “the smile of the city”",

    impactSupportLabel: "Total support from partners",
    impactPartnerLabel: "Number of partners helping revive the city",

    storyLogoTitle: "Having your business name or logo<br>visible within the event space",
    storyLogoP1: "is not only a way to be seen, but a way to tell people that this business is still here.",
    storyLogoP2: "And it still chooses to care for the city it calls home.",

    partnerSectionTitle: "Partners helping revive the city",

    partnerIntroTitle: "Joining the project as a partner<br>means supporting at a level that suits each business.<br>There is no minimum amount required.",
    partnerBenefitTitle: "What partners will receive",
    partnerBenefit1: "• Logo display within the event area",
    partnerBenefit2: "• Publicity across the project’s media channels",
    partnerBenefit3: "• Acknowledgement and summary mention during the closing period",

    projectPurposeTitle: "Why this project exists",
    projectPurposeP1:
      "HATYAI SIDEWALK : AMAZING SMILE was created with the intention of building a shared space for the city — a space that reconnects people, communities, and businesses so they can walk side by side once again.",
    projectPurposeP2:
      "Through art, music, lifestyle activities, and a creative street market, the project aims to bring Hat Yai back to life and bring back the city’s smile once more.",

    supportTitle: "Where the support is passed on",
    support1: "<strong>Hospitals in Hat Yai</strong> – supporting lives and morale",
    support2: "<strong>Hatyai Universal Blind School</strong> – creating educational opportunities",
    support3: "<strong>Ban Maliyim Foundation</strong> – caring for animal lives and the city’s balance",
    support4: "<strong>Schools in Hat Yai</strong> – supporting equipment and learning environments",

    qrTitle: "Support the city’s revival",
    qrP1:
      "You can support the project by scanning the QR Code above<br>and become part of helping restore and bring smiles back to Hat Yai.",
    qrP2:
      "<strong>No minimum support amount is required.</strong><br>Every contribution can become meaningful energy.",
    qrNote:
      "Note: If any organization or business would like its logo displayed within the project area,<br>please send your information and details via the project LINE.",

    teamTitle: "👥 Project Team",
    teamLead: "<strong>Project Lead</strong><br>Mr. Chokchai Intachot",
    teamDeputy: "<strong>Deputy Project Lead</strong><br>Ms. Thankwan Thatbut",
    teamAssistant: "<strong>Assistant Project Lead</strong><br>Mr. Phanthath Duangla",
    teamCoordinator: "<strong>Project Coordinator</strong><br>Mr. Natthakit Kichairum",

    contactTitle: "📲 Contact the Project",
    contactPerson: "Project Coordinator<br>Khun Nat",

    footerAddress:
      "Smurfs and Friends Co., Ltd.<br>162 Soi 2, Wutthithani, Kho Hong Subdistrict, Hat Yai District, Songkhla 90110",

    partnerLogoAlt: "partner logo"
  },

  zh: {
    pageTitle: "合艾步行街 · Amazing Smile",
    heroTitleLine1: "HATYAI SIDEWALK",
    heroTitleLine2: "Amazing Smile",
    heroSub: "把节庆的能量<br>化作“这座城市的笑容”",

    impactSupportLabel: "合作伙伴支持总额",
    impactPartnerLabel: "参与城市复苏的合作伙伴数量",

    storyLogoTitle: "让企业名称或标志<br>出现在活动现场",
    storyLogoP1: "不只是展示品牌，更是在告诉大家：这家企业依然在这里。",
    storyLogoP2: "并且依然愿意照顾自己生活的这座城市。",

    partnerSectionTitle: "共同参与城市复苏的合作伙伴",

    partnerIntroTitle: "成为本项目合作伙伴<br>可按各企业适合的方式支持项目<br>没有最低金额限制",
    partnerBenefitTitle: "合作伙伴将获得",
    partnerBenefit1: "• 活动现场展示企业标志",
    partnerBenefit2: "• 在项目宣传渠道中获得曝光",
    partnerBenefit3: "• 在活动收尾阶段获得鸣谢与成果总结提及",

    projectPurposeTitle: "这个项目为何而生",
    projectPurposeP1:
      "HATYAI SIDEWALK : AMAZING SMILE 的诞生，是为了打造一个属于城市的公共空间，一个重新连接人群、社区与企业的空间，让大家再次并肩同行。",
    projectPurposeP2:
      "通过艺术、音乐、生活方式活动以及城市街道上的创意市集，让合艾重新焕发生机，也让这座城市再次露出笑容。",

    supportTitle: "支持将被传递到",
    support1: "<strong>合艾地区医院</strong> – 关怀生命与士气",
    support2: "<strong>合艾国际盲校</strong> – 创造学习机会",
    support3: "<strong>Ban Maliyim 基金会</strong> – 关怀动物生命与城市生态平衡",
    support4: "<strong>合艾地区学校</strong> – 支持教学设备与学习环境",

    qrTitle: "一起支持城市复苏",
    qrP1:
      "可扫描上方二维码支持本项目<br>一起参与为合艾带来复苏与笑容。",
    qrP2:
      "<strong>支持金额没有最低限制。</strong><br>每一份参与都能转化成有意义的力量。",
    qrNote:
      "备注：如任何机构或企业希望在项目区域展示其标志，<br>可通过项目 LINE 提交相关资料与详情。",

    teamTitle: "👥 项目负责人",
    teamLead: "<strong>项目负责人</strong><br>โชคชัย อินทโชติ",
    teamDeputy: "<strong>副项目负责人</strong><br>แทนขวัญ ทัศบุตร",
    teamAssistant: "<strong>项目助理负责人</strong><br>พันธุ์ธัช ด้วงลา",
    teamCoordinator: "<strong>项目协调人</strong><br>ณัฏฐกิตติ์ กิชัยรัมย์",

    contactTitle: "📲 联系项目",
    contactPerson: "项目协调人<br>Khun Nat",

    footerAddress:
      "Smurfs and Friends Co., Ltd.<br>162 Soi 2, Wutthithani, Kho Hong, Hat Yai, Songkhla 90110",

    partnerLogoAlt: "合作伙伴标志"
  }
};

let currentLang = localStorage.getItem("siteLang") || "th";

function applyLanguage(lang) {
  const dict = translations[lang] || translations.th;
  currentLang = lang;

  document.documentElement.lang = lang;
  document.title = dict.pageTitle || "Hatyai Sidewalk – Amazing Smile";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const key = el.dataset.i18nHtml;
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  const heroLogo = document.getElementById("parallaxLogo");
  if (heroLogo) {
    heroLogo.alt = dict.pageTitle || "Hatyai Sidewalk – Amazing Smile";
  }

  document.querySelectorAll(".partner-logo-circle img").forEach((img) => {
    img.alt = dict.partnerLogoAlt || "partner logo";
  });

  animate("totalAmount", total, "฿");
  animate("partnerCount", count);

  localStorage.setItem("siteLang", lang);
}

document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    applyLanguage(btn.dataset.lang);
  });
});

/* ================= GOOGLE SHEETS ================= */
const SHEET_ID = "1EJFuhZVhscWjO_BTzntYsGpcXO2-vYIK4h3I2qQtw48";
const SHEET_GID = "2024806268";
const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?gid=${SHEET_GID}&tqx=out:json`;

let total = 0;
let count = 0;

/* ================= UTIL: EXTRACT DRIVE FILE ID ================= */
function extractDriveFileId(link) {
  if (!link) return null;

  const patterns = [
    /id=([^&]+)/,
    /\/d\/([^/]+)/,
    /thumbnail\?id=([^&]+)/
  ];

  for (const p of patterns) {
    const m = link.match(p);
    if (m && m[1]) return m[1];
  }
  return null;
}

/* ================= FETCH SHEET ================= */
fetch(url)
  .then((r) => r.text())
  .then((t) => {
    const json = JSON.parse(t.substring(47).slice(0, -2));
    const rows = json.table.rows;

    total = 0;
    count = 0;

    rows.forEach((r) => {
      const v = r.c[3]?.v;
      if (typeof v === "number") {
        total += v;
        count++;
      }
    });

    animate("totalAmount", total, "฿");
    animate("partnerCount", count);

    const grid = document.getElementById("partnerLogoGrid");
    if (!grid) return;

    grid.innerHTML = "";

    rows.forEach((r) => {
      const rawLink = r.c[5]?.v;
      const fileId = extractDriveFileId(rawLink);
      if (!fileId) return;

      const thumbUrl = `https://drive.google.com/thumbnail?id=${fileId}&sz=w300`;

      const circle = document.createElement("div");
      circle.className = "partner-logo-circle";

      const img = document.createElement("img");
      img.src = thumbUrl;
      img.alt = translations[currentLang]?.partnerLogoAlt || "partner logo";

      img.onerror = () => {
        circle.style.display = "none";
      };

      circle.appendChild(img);
      grid.appendChild(circle);
    });
  })
  .catch((err) => {
    console.error("Failed to fetch sheet data:", err);
  });

/* ================= NUMBER ANIMATION ================= */
function animate(id, val, prefix = "") {
  const el = document.getElementById(id);
  if (!el) return;

  const localeMap = {
    th: "th-TH",
    en: "en-US",
    zh: "zh-CN"
  };

  const locale = localeMap[currentLang] || "th-TH";
  const start = performance.now();
  const dur = 1600;

  function tick(t) {
    const p = Math.min((t - start) / dur, 1);
    el.textContent = prefix + Math.floor(p * val).toLocaleString(locale);
    if (p < 1) requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
}

/* ================= REVEAL ================= */
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("show");
    });
  },
  { threshold: 0.3 }
);

document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

/* ================= PARALLAX LOGO ================= */
const logo = document.getElementById("parallaxLogo");
window.addEventListener("scroll", () => {
  if (!logo) return;
  const p = Math.min(window.scrollY / window.innerHeight, 1);
  logo.style.transform = `translateY(${p * -120}px) scale(${1 - p * 0.4})`;
});

/* ================= CITY FADE ================= */
const cityItems = document.querySelectorAll(".city-item.fade");

const cityObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);
    });
  },
  { threshold: 0.5 }
);

cityItems.forEach((item) => cityObserver.observe(item));

/* ================= APPLE STYLE STAGGER PARTNER LOGOS ================= */
const logoGridObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const logos = entry.target.querySelectorAll(".partner-logo-circle");

        logos.forEach((logo, i) => {
          logo.style.opacity = 0;
          logo.style.transform = "translateY(40px) scale(.9)";

          setTimeout(() => {
            logo.style.transition = "all .8s cubic-bezier(.19,1,.22,1)";
            logo.style.opacity = 1;
            logo.style.transform = "translateY(0) scale(1)";
          }, i * 120);
        });
      }
    });
  },
  { threshold: 0.3 }
);

const grid = document.querySelector("#partnerLogoGrid");
if (grid) logoGridObserver.observe(grid);

/* ================= INIT LANGUAGE ================= */
applyLanguage(currentLang);
