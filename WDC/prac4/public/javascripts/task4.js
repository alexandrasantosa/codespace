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
     var xmlhttp= new XMLHttpRequest();
     xmlhttp.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
            document.getElementById("postcont").innerHTML=this.responseText;
        }
     };
    xmlhttp.open("GET","/content.ajax",true);
    xmlhttp.send();
 }



function color_request(){
    var xmlhttp= new XMLHttpRequest();
    xmlhttp.onreadystatechange=function(){
        if(this.readyState ==4 && this.status == 200){
            //get the header
            var hea1=document.getElementById('col1');
            hea1.innerHTML=this.responseText;
            var he1=hea1.innerHTML;


            //if statement to change the header color
            if (he1 == "red" ){
                //first change was red
                hea1.style.color="red";
            }

            if (he1 == "yellow" ){
                //first change was yellow
                hea1.style.color="yellow";
            }

            if (he1  == "green" ){
                //first change was gren
               hea1.style.color="green";
            }

            if (he1 == "blue" ){
                //first change was blue
                hea1.style.color="blue";
            }
        }
    };

    xmlhttp.open("GET","/color.txt",true);
    xmlhttp.send();

}