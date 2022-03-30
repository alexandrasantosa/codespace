//task4.1

function time_stamp(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange=function(){
        if(this.readyState==4 && this.status){
            document.getElementById("ts").innerHTML="This page was last viewed" +this.responseText;
        }
    };
    xmlhttp.open("GET","/last.txt",true);
    xmlhttp.send();
}