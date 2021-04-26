window.onscroll = function() {scroll()};

function scroll() {
  // Navbar muncul
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } 
  // Navbar hidden
  else {
    document.getElementById("navbar").style.top = "-50px";
  }
}


function a1() {
  var y = document.getElementById("a1");
  y.style.visibility = "visible";
}

function Hasil() {
  var berat = document.formBMI.berat.value;
  var tinggi = document.formBMI.tinggi.value;
  var bagi  = tinggi*tinggi/10000;
  var bmi = berat/bagi;
  document.formBMI.meaning.value  = bmi;
}
