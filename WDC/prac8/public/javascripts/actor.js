var actors = [];
function show_actor(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
            let d = '';
            if (this.readyState == 4 && this.status == 200) {
                console.log("getdatabase1");
                actors = JSON.parse(this.responseText);
                for(i=0; i<actors.length; i++)
                {
                    d = d +
                    `<tr>
                    <td>${actors[i].first_name}</td>
                    <td>${actors[i].last_name}</td>
                    </tr>`;
                }
             document.getElementById("actors").innerHTML = d;
            }
        };
    xmlhttp.open("GET", "/users/actor", true);
    xmlhttp.setRequestHeader("Content-type", "application/json");
    xmlhttp.send();

}



