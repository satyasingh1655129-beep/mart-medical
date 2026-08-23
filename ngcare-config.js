function loadLogo(id){
 let c = JSON.parse(localStorage.getItem('NGCARE_LOGO_CONFIG') || '{"text":"NGcare Login","color":"#ff2b2b"}');
 let el = document.getElementById(id);
 if(el){
   el.innerHTML = `<div style="display:flex;align-items:center;gap:8px;justify-content:center"><div style="width:36px;height:36px;background:${c.color};border-radius:8px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:24px;font-weight:900">+</div><span style="font-size:28px;font-weight:900;color:#0d2a7a">${c.text}</span></div>`;
 }
}
