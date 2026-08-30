// cannect.js - 1 file se sab connect
(function(){
  var css = document.createElement('link');
  css.rel = 'stylesheet';
  css.href = 'style.css';
  document.head.appendChild(css);

  var qr = document.createElement('script');
  qr.src = 'https://unpkg.com/html5-qrcode@2.3.8/html5-qrcode.min.js';
  document.head.appendChild(qr);

  qr.onload = function(){
    var js = document.createElement('script');
    js.src = 'common.js';
    document.body.appendChild(js);
  };
})();
