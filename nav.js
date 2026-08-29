// nav.js - FINAL FIXED - PHARMACY JAISA
let nav = document.createElement('div');
nav.style.cssText = "position:fixed;bottom:0;left:0;right:0;background:white;display:flex;justify-content:space-around;padding:5px 0;border-top:2px solid #0d47a1;z-index:9999";

let path = window.location.pathname;
let isHome = path.includes('index.html') || path.endsWith('/') || path.endsWith('/mart-medical');
let isPharmacy = path.includes('pharmacy.html');
let isHospital = path.includes('hospital.html');
let isCart = path.includes('cart.html');

function activeStyle(isActive){
  return isActive ? "background:#0d47a1;color:white;border-radius:25px;" : "background:none;color:#0d47a1;";
}

nav.innerHTML = `
  <button onclick="location.replace('index.html')" style="border:none;font-weight:bold;font-size:9px;line-height:10px;flex:1;padding:6px 2px;white-space:nowrap;${activeStyle(isHome)}"><span style="font-size:18px;display:block;margin-bottom:2px">🏠</span>HOME</button>
  <button onclick="location.replace('pharmacy.html')" style="border:none;font-weight:bold;font-size:9px;line-height:10px;flex:1;padding:6px 2px;white-space:nowrap;${activeStyle(isPharmacy)}"><span style="font-size:18px;display:block;margin-bottom:2px">💊</span>PHARMACY</button>
  <button onclick="location.replace('hospital.html')" style="border:none;font-weight:bold;font-size:9px;line-height:10px;flex:1;padding:6px 2px;white-space:nowrap;${activeStyle(isHospital)}"><span style="font-size:18px;display:block;margin-bottom:2px">🏥</span>HOSPITAL</button>
  <button onclick="location.replace('cart.html')" style="border:none;font-weight:bold;font-size:9px;line-height:10px;flex:1;padding:6px 2px;white-space:nowrap;${activeStyle(isCart)}"><span style="font-size:18px;display:block;margin-bottom:2px">🛒</span>CART</button>
`;
document.body.appendChild(nav);

// Back Button Lock
let backBtn = document.createElement('div');
backBtn.id = "fixBackBtn";
backBtn.style.cssText = "position:fixed;top:12px;left:12px;z-index:99999;background:#0d47a1;color:white;padding:7px 16px;border-radius:20px;font-weight:bold;font-size:13px;cursor:pointer;display:none;align-items:center";
backBtn.innerHTML = "← BACK";

function checkBack(){
  let cat = document.getElementById('catPage');
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
    history.replaceState({page:"home"}, "", "");
    history.pushState({page:"home"}, "", "");
  } else {
    // Home pe hai to back lock - band nahi hoga dusre button pe
    if(isHome){
       // kuch mat karo, yahin raho
       return;
    } else {
       location.replace('index.html');
    }
  }
};
document.body.appendChild(backBtn);
document.body.style.paddingBottom="85px";
