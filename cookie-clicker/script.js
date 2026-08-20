let cookies = 0;
let cookiesPerClick = 1;
let cookiesPerSecond = 0;

// ราคาเริ่มต้นของอัปเกรด
let clickerCost = 10;
let grandmaCost = 15;
let factoryCost = 100;

// ดึง Elements จาก HTML
const cookieCountEl = document.getElementById("cookie-count");
const cpsEl = document.getElementById("cps");
const cookieBtn = document.getElementById("cookie-btn");

const buyClickerBtn = document.getElementById("buy-clicker");
const clickerCostEl = document.getElementById("clicker-cost");

const buyGrandmaBtn = document.getElementById("buy-grandma");
const grandmaCostEl = document.getElementById("grandma-cost");

const buyFactoryBtn = document.getElementById("buy-factory");
const factoryCostEl = document.getElementById("factory-cost");

// ฟังก์ชันอัปเดตหน้าจอ
function updateUI() {
    cookieCountEl.innerText = Math.floor(cookies);
    cpsEl.innerText = cookiesPerSecond;

    clickerCostEl.innerText = clickerCost;
    grandmaCostEl.innerText = grandmaCost;
    factoryCostEl.innerText = factoryCost;

    // เปิด/ปิด ปุ่มซื้อตามจำนวนคุกกี้ที่มี
    buyClickerBtn.disabled = cookies < clickerCost;
    buyGrandmaBtn.disabled = cookies < grandmaCost;
    buyFactoryBtn.disabled = cookies < factoryCost;
}

// ระบบคลิกคุกกี้
cookieBtn.addEventListener("click", () => {
    cookies += cookiesPerClick;
    updateUI();
});

// ระบบซื้อ Clicker Extra
buyClickerBtn.addEventListener("click", () => {
    if (cookies >= clickerCost) {
        cookies -= clickerCost;
        cookiesPerClick += 1;
        clickerCost = Math.round(clickerCost * 1.5); // เพิ่มราคาขึ้น 50%
        updateUI();
    }
});

// ระบบซื้อคุณยาย
buyGrandmaBtn.addEventListener("click", () => {
    if (cookies >= grandmaCost) {
        cookies -= grandmaCost;
        cookiesPerSecond += 1;
        grandmaCost = Math.round(grandmaCost * 1.5);
        updateUI();
    }
});

// ระบบซื้อโรงงาน
buyFactoryBtn.addEventListener("click", () => {
    if (cookies >= factoryCost) {
        cookies -= factoryCost;
        cookiesPerSecond += 10;
        factoryCost = Math.round(factoryCost * 1.5);
        updateUI();
    }
});

// Loop ผลิตคุกกี้อัตโนมัติทุกๆ 1 วินาที
setInterval(() => {
    cookies += cookiesPerSecond;
    updateUI();
}, 1000);

// อัปเดต UI ครั้งแรก
updateUI();
