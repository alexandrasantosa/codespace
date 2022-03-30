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

//task4.4

function contact_button(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
            document.getElementById("main").innerHTML=this.responseText;
        }
    };
    xmlhttp.open("GET","/contact.ajax",true);
    xmlhttp.send();
}

function search_button(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
            document.getElementById("main").innerHTML=this.responseText;
        }
    };
    xmlhttp.open("GET","/search.ajax",true);
    xmlhttp.send();
}

function about_button(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
            document.getElementById("main").innerHTML=this.responseText;
        }
    };
    xmlhttp.open("GET","/about.ajax",true);
    xmlhttp.send();
}

//task 4-5
 function get_content(){
     var xmlhttp= newXMLHttpRequest();
     xmlhttp.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
            document.getElementById("postcont").innerHTML=this.responseText;
        }
     }

 }