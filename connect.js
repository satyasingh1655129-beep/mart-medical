// ngcare.js - 1 file se Style + JS connect
(function(){
  // 1. Style.css connect
  var css = document.createElement('link');
  css.rel = 'stylesheet';
  css.href = 'style.css';
  document.head.appendChild(css);

  // 2. QR Scanner library connect
  var qr = document.createElement('script');
  qr.src = 'https://unpkg.com/html5-qrcode@2.3.8/html5-qrcode.min.js';
  document.head.appendChild(qr);

  // 3. Common.js connect
  qr.onload = function(){
    var js = document.createElement('script');
    js.src = 'common.js';
    document.body.appendChild(js);
  };
})();
