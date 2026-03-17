// LGS Tarihi: 7 Haziran 2026 Saat 09:30 (Örnek tarih)
var lgsTarihi = new Date("June 7, 2026 09:30:00").getTime();

var x = setInterval(function() {
  var simdi = new Date().getTime();
  var fark = lgsTarihi - simdi;

  // Gün, saat, dakika ve saniye hesaplamaları
  var gun = Math.floor(fark / (1000 * 60 * 60 * 24));
  var saat = Math.floor((fark % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var dakika = Math.floor((fark % (1000 * 60 * 60)) / (1000 * 60));
  var saniye = Math.floor((fark % (1000 * 60)) / 1000);

  // Sonucu id="countdown" olan yere yazdır
  document.getElementById("countdown").innerHTML = gun + " Gün " + saat + " Saat " + dakika + " Dakika " + saniye + " Saniye ";

  // Süre bittiğinde yazacak yazı
  if (fark < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "LGS Başladı!";
  }
}, 1000);