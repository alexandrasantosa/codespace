/*3.1*/
var m=1;
function mouseOver(){
     document.getElementById("mcount").innerHTML=m++;
}

function add_post(){
    var textar=document.getElementsByTagName("textarea")[0].value;
    var x=document.createElement("p");
    var y=document.createElement("p");
    x.className="post-time";
    y.className="post-content";
    x.innerHTML= new Date();
    y.innerHTML=textar;

}