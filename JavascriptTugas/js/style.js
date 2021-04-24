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


// function hide() {
//   var x = document.getElementById("home");
//   if (x.style.visibility === "visible") {
//     x.style.visibility = "hidden";
//   } else {
//     x.style.visibility = "visible";
//   }
// }
