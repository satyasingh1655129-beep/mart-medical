// nav.js - FINAL with TOP-LEFT BACK + BOTTOM NAV
// 1. BOTTOM NAV
let nav = document.createElement('div');
nav.style.cssText = "position:fixed;bottom:0;left:0;right:0;background:white;display:flex;justify-content:space-around;padding:12px 0;border-top:1px solid #ddd;z-index:9999;box-shadow:0 -2px 10px rgba(0,0,0,0.1)";
nav.innerHTML = `
  <button onclick="location.href='index.html'" style="border:none;background:none;font-weight:bold;font-size:14px">🏠 HOME</button>
  <button onclick="location.href='pharmacy.html'" style="border:none;background:none;font-weight:bold;font-size:14px">💊 PHARMACY</button>
  <button onclick="location.href='hospital.html'" style="border:none;background:none;font-weight:bold;font-size:14px">🏥 HOSPITAL</button>
  <button onclick="location.href='cart.html'" style="border:none;background:none;font-weight:bold;font-size:14px">🛒 CART</button>
`;
document.body.appendChild(nav);

// 2. TOP-LEFT FIX BACK BUTTON
let backBtn = document.createElement('div');
backBtn.style.cssText = "position:fixed;top:10px;left:10px;z-index:99999;background:#0d47a1;color:white;padding:7px 16px;border-radius:20px;font-weight:bold;font-size:13px;box-shadow:0 2px 6px rgba(0,0,0,0.3);cursor:pointer;display:flex;align-items:center;gap:4px";
backBtn.innerHTML = "← BACK";

// Agar HOME page hai to BACK mat dikhao
if (window.location.pathname.includes('index.html') || window.location.pathname === '/' || window.location.pathname === '/NG-Care/') {
  backBtn.style.display = 'none';
}

backBtn.onclick = function(){ 
  window.history.back(); 
};
document.body.appendChild(backBtn);
