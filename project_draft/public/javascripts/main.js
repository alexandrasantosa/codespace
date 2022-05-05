let slideIndex = 1;
slide_show(slideIndex);

// Next/previous controls
function plus_slides(n) {
  slide_show(slideIndex += n);
}

// Thumbnail image controls
function current_slide(n) {
  slide_show(slideIndex = n);
}

function slide_show(n) {
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

/* Log-in popup */
function open_form() {
  document.getElementById("loginform").style.display = "block";
}

function close_form() {
  document.getElementById("loginform").style.display = "none";
}