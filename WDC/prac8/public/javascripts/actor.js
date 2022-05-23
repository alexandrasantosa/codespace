var actors = [];
function get_actor(){
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
            console.log("success1");
            let data = '';
            if (this.readyState == 4 && this.status == 200) {
                console.log("success");
                actors = JSON.parse(this.responseText);

                for(i=0; i<actors.length; i++)
                {
                    data = data +
                    `<tr>
                    <td>${actors[i].first_name}</td>
                    <td>${actors[i].last_name}</td>
                    </tr>`;
                }
             document.getElementById("actors").innerHTML = data;
            }
        };
    xmlhttp.open("GET", "/users/actor", true);
    xmlhttp.setRequestHeader("Content-type", "application/json");
    xmlhttp.send();


}

