// ngcare-config.js
function getLogoConfig(){
  return JSON.parse(localStorage.getItem('NGCARE_LOGO')) || JSON.stringify({
    text: "NGcare Login",
    plusBg: "#ff2b2b",
    textColor: "#0d2a7a"
  }));
}

function loadLogo(id){
  let c = JSON.parse(getLogoConfig());
  let el = document.getElementById(id);
  if(!el) return;
  el.innerHTML = `<div style="display:flex;align-items:center;gap:8px;justify-content:center">
  <div style="width:36px;height:36px;background:${c.plusBg};border-radius:8px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:24px;font-weight:900">+</div>
  <span style="font-size:30px;font-weight:900;color:${c.textColor}">${c.text}</span></div>`;
}
