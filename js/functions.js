/*Hace que la barra se esconda cuando se hace scroll*/

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-72px";
  }
  prevScrollpos = currentScrollPos;
}

/*Menú extra en móvil*/
function openNav() {
  document.getElementById("mySidenav").style.height = "72px";
  document.getElementById("wrapper").style.marginTop = "72px";
  document.getElementById("navbar").style.marginTop = "72px";
}

function closeNav() {
  document.getElementById("mySidenav").style.height = "0";
  document.getElementById("wrapper").style.marginTop = "0";
  document.getElementById("navbar").style.marginTop = "0";
}

/*Carousel*/

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}