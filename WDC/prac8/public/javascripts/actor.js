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

function add_actor() {

    var firstName = document.getElementById('actor-first-name').value;
    var lastName = document.getElementById('actor-last-name').value;
    // console.log(firstName, lastName);

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            //console.log("success1");
            // let data2 = '';
            if (this.readyState == 4 && this.status == 200) {
                //console.log("success");
            actors = JSON.parse(this.responseText);
            }
        };

        var data = {"firstName": firstName, "lastName": lastName};

        xhttp.open("POST", "/users/add-actor", true);
        xhttp.setRequestHeader("Content-type", "application/json");



        xhttp.send(JSON.stringify(data));

}

