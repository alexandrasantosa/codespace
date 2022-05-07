let slide_counter = 1;
slide_show(slide_counter);

// Next/previous controls
function plus_slides(e) {
  slide_show(slide_counter+= e);
}


function slide_show(e) {
  let i;
  let slides = document.getElementsByClassName("slide1");

  if (e > slides.length) {slide_counter= 1}
  if (e < 1) {slide_counter = slides.length}
  for (e = 0; ie< slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slide_counter-1].style.display = "block";

}

/* Log-in popup */
function open_form() {
  document.getElementById("loginform").style.display = "block";
}

function close_form() {
  document.getElementById("loginform").style.display = "none";
}

