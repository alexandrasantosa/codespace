// Show Login Page
function showLogin() {

    // // the whole main thing in the content
    // var main = document.getElementById("main_page");

    // the hidden section (login area)
    var login = document.getElementById("Login");
    var signup = document.getElementById("Signup");
    
    // appear the hidden page (login area)
    login.style.display = "block";
    signup.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == Login) {
        Login.style.display = "none";
        Signup.style.display = "none";
    }
    else if (event.target == Signup) {
        Signup.style.display = "none";
    }
}

// Show Main page
function returnMain() {

    var login = document.getElementById('Login');
    login.style.display = 'none';

    var signup = document.getElementById('Signup');
    signup.style.display = 'none';
}