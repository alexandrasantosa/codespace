/*3.1*/
var m=1;
function mouseOver(){
     document.getElementById("mcount").innerHTML=m++;
}




function add_post(){
    var textar=document.getElementsByTagName("textarea");
    var x=document.createElement("p");
    var y=document.createElement("p");
    var d=new Date();
    x.className="post-time";
    y.className="post-content";
    x.innerHTML=d;

    y.innerHTML=textar[0].value;

    document.getElementsById("posts").appendChild(x);
    document.getElementsById("posts").appendChild(y);


}

/*3-3 */
function open_menu()

{
    var main=document.getElementById("main");
    main.style.display="none";
    var menu =document.getElementById("menu");
    menu.style.display="";

}

function backmenu(){
    var main=document.getElementById("main");
    main.style.display="";
    var menu =document.getElementById("menu");
    menu.style.display="none";
}

/* 3-5 */
function changecolor(e){
    document.body.style.backgroundColor=e.value;
}

