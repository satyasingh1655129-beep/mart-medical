// ===== common.js - FINAL FOR ALL DASHBOARD =====

// ----- DATABASE -----
function getDB(){ return JSON.parse(localStorage.getItem('mainDB')) || {hospitals:[], pharmacy:[], patients:[]}; }
function saveDB(db){ localStorage.setItem('mainDB', JSON.stringify(db)); }

// Default Hospital Data
if(!localStorage.getItem('mainDB')){
  saveDB({
    hospitals:[
      {id:"H101",name:"Shauma Hospital",address:"Lucknow",km:1.2,lat:26.84,lon:80.94},
      {id:"H102",name:"Cinkay Hospital",address:"Gomti Nagar",km:2.5,lat:26.85,lon:80.95}
    ],
    pharmacy:[],
    patients:[]
  });
}

let db = getDB();
let html5QrCode = null;
let scannerOn = false;

// ----- NAVIGATION -----
function goNav(page){ location.href = page; }

// ----- RENDER HOSPITAL -----
function renderHospital(list){
  let box = document.getElementById('hospitalList');
  if(!box) return;
  list.sort((a,b)=>(a.km||999)-(b.km||999));
  box.innerHTML = list.length==0? "<p style='text-align:center;color:#888;margin-top:20px'>No Hospital Found</p>" :
  list.map((m,i)=>`
    <div class="card">
      <div><b>${i+1}- ${m.name} [${m.id}]</b><br><span style="color:#0a9e00;font-weight:700;font-size:12px">📍 ${m.km||0} KM</span> - ${m.address}</div>
      <button onclick="deleteHospital('${m.id}')" style="background:#d32f2f;color:#fff;border:none;border-radius:6px;padding:5px 10px;font-size:11px;font-weight:700">✕</button>
    </div>
  `).join('');
}

function deleteHospital(id){
  db = getDB();
  db.hospitals = db.hospitals.filter(x=>x.id!=id);
  saveDB(db);
  renderHospital(db.hospitals);
}

// ----- ADD HOSPITAL / PHARMACY / PATIENT -----
function addHospital(name, address){
  db = getDB();
  db.hospitals.push({id:"H"+Date.now(), name:name, address:address, km:0});
  saveDB(db);
  renderHospital(db.hospitals);
}

function addData(type, obj){
  db = getDB();
  obj.id = type.charAt(0).toUpperCase()+Date.now();
  obj.time = new Date().toLocaleString();
  db[type].push(obj);
  saveDB(db);
  alert(type+" Save ho gaya");
}

// ----- SEARCH -----
function setupSearch(){
  let input = document.getElementById('searchAll');
  if(!input) return;
  input.addEventListener('input', function(){
    let v = this.value.toLowerCase();
    let out = document.getElementById('outsideList');
    let main = document.getElementById('hospitalList');
    if(!out) return;
    if(v){
      out.style.display='block';
      if(main) main.style.display='none';
      let f = getDB().hospitals.filter(m=>m.name.toLowerCase().includes(v)||m.id.toLowerCase().includes(v));
      out.innerHTML = f.map(m=>`<div style="padding:12px;border-bottom:1px solid #ddd;background:#fff9c4;font-weight:600">${m.name} [${m.id}]</div>`).join('');
    }else{
      out.style.display='none';
      if(main) main.style.display='flex';
      renderHospital(getDB().hospitals);
    }
  });
}

// ----- SCANNER -----
function startScanner(){
  let r = document.getElementById('reader');
  if(!r) return;
  r.style.display='block';
  scannerOn = true;
  html5QrCode = new Html5Qrcode("reader");
  html5QrCode.start({facingMode:"environment"},{fps:10,qrbox:200},(decoded)=>{
    document.getElementById('searchAll').value = decoded;
    closeScanner();
    renderHospital(getDB().hospitals.filter(m=>m.id.toLowerCase()==decoded.toLowerCase()));
  },()=>{});
}
function closeScanner(){
  if(html5QrCode){ try{html5QrCode.stop();}catch(e){} html5QrCode=null; }
  let r = document.getElementById('reader');
  if(r) r.style.display='none';
  scannerOn = false;
}

// ----- BACK -----
function handleBack(){
  if(scannerOn){ closeScanner(); return; }
  let s = document.getElementById('searchAll');
  if(s && s.value!=""){ s.value=""; renderHospital(getDB().hospitals); return; }
  history.back();
}

// ----- AUTO LOAD -----
document.addEventListener('DOMContentLoaded', ()=>{
  setupSearch();
  if(document.getElementById('hospitalList')){
    renderHospital(getDB().hospitals);
  }
});
