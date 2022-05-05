let slide_counter = 1;
slide_show(slide_counter);

// Next/previous controls
function plus_slides(n) {
  slide_show(slide_counter+= n);
}

// Thumbnail image controls
//function current_slide(n) {
  //slide_show(slide_counter = n);
//}

function slide_show(n) {
  let i;
  let slides = document.getElementsByClassName("slide1");

  if (n > slides.length) {slide_counter= 1}
  if (n < 1) {slide_counter = slides.length}
  for (i = 0; i < slides.length; i++) {
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

/* Log-in popup */
function openform() {
  document.getElementById("LoginForm").style.display = "block";
}

function login(form) {
  var un = form.Username.value;
  var pw = form.Password.value;
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("post", "Login", true);
  xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
          loginResults();
      }
  }
}

window.addEventListener(window,"load", function() {
  var loginForm = document.getElementById("LoginForm");
  window.addEventListener(loginForm, "submit", function() {
       login(loginForm);
   });
});

function loginResults() {
  var loggedIn = document.getElementById("LoggedIn");
  var badLogin = document.getElementById("BadLogin");
  if (xmlhttp.responseText.indexOf("failed") == -1) {
      loggedIn.innerHTML = "Logged in as " + xmlhttp.responseText;
      loggedIn.style.display = "block";
      form.style.display = "none";
  } else {
      badLogin.style.display = "block";
      form.Username.select();
      form.Username.className = "Highlighted";
      setTimeout(function() {
          badLogin.style.display = 'none';
      }, 3000);
  }
}