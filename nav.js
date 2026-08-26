// nav.js - FINAL FIXED
let nav = document.createElement('div');
nav.style.cssText = "position:fixed;bottom:0;left:0;right:0;background:white;display:flex;justify-content:space-around;padding:12px 0 15px 0;border-top:1px solid #ddd;z-index:9999;box-shadow:0 -2px 10px rgba(0,0,0,0.1);padding-bottom:calc(12px + env(safe-area-inset-bottom))";
nav.innerHTML = `
  <button onclick="location.href='index.html'" style="border:none;background:none;font-weight:bold;font-size:14px">🏠 HOME</button>
  <button onclick="location.href='pharmacy.html'" style="border:none;background:none;font-weight:bold;font-size:14px">💊 PHARMACY</button>
  <button onclick="location.href='hospital.html'" style="border:none;background:none;font-weight:bold;font-size:14px">🏥 HOSPITAL</button>
  <button onclick="location.href='cart.html'" style="border:none;background:none;font-weight:bold;font-size:14px">🛒 CART</button>
`;
document.body.appendChild(nav);

let backBtn = document.createElement('div');
backBtn.id = "fixBackBtn";
backBtn.style.cssText = "position:fixed;top:12px;left:12px;z-index:99999;background:#0d47a1;color:white;padding:7px 16px;border-radius:20px;font-weight:bold;font-size:13px;box-shadow:0 2px 6px rgba(0,0,0,0.3);cursor:pointer;display:none;align-items:center";
backBtn.innerHTML = "← BACK";

function checkBack(){
  let cat = document.getElementById('catPage');
  let isHome = window.location.pathname.includes('index.html') || window.location.pathname.endsWith('/') || window.location.pathname.endsWith('/mart-medical');
  if(isHome){
    if(cat && cat.style.display === 'block'){ backBtn.style.display='flex'; } 
    else { backBtn.style.display='none'; }
  } else {
    backBtn.style.display='flex';
  }
}
setInterval(checkBack, 300);

backBtn.onclick = function(){
  let catPage = document.getElementById('catPage');
  let homeContent = document.getElementById('homeContent');
  if(catPage && catPage.style.display === 'block'){
    catPage.style.display='none';
    if(homeContent) homeContent.style.display='block';
    backBtn.style.display='none';
  } else {
    window.history.back();
  }
};
document.body.appendChild(backBtn);
document.body.style.paddingBottom="70px";
