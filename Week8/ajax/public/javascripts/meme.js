function getMeme() {

  // Create new AJAX request
  var xhttp = new XMLHttpRequest();

  // Define function that runs on response
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("meme").src = "/images/"+this.responseText;
    }
  };

  // Open connection
  xhttp.open("GET", "/ajax/memeday", true);

  // Send request
  xhttp.send();

}
