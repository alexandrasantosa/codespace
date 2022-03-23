/*3.1*/
var m=1;
function mouse_over(){
     document.getElementById("mcount").innerHTML=m++;
}

var num=0;
function add_posts(){
    var tar=document.getElementsByTagName("textarea")[0].value;
    var x=document.createElement("p");
    var y=document.createElement("p");
    var d=document.createElement("button");
    d.innerHTML="X";

    /*classname*/
    x.className="post-time";
    y.className="post-content";
    x.innerHTML= new Date();
    y.innerHTML=tar;



    /* for 3-8 */
    var c=document.getElementById("posts").appendChild(x).appendChild(d);
   /* document.getElementById("posts").appendChild(d);*/
    var f=document.getElementById("posts").appendChild(y);

    if(document.getElementById("n1")


    /*3-8*/
  if(d.addEventListener("click", () => {
      x.remove();
      y.remove();
  }
  ));
}



/*3-3 */
function open_menu()

{
    var mn=document.getElementById("main");
    mn.style.display="none";
    var mnu =document.getElementById("menu");
    mnu.style.display="";

}

function back_menu(){
    var mn=document.getElementById("main");
    mn.style.display="";
    var mnu =document.getElementById("menu");
    mnu.style.display="none";
}

/* 3-5 */
function change_color(e){
    document.body.style.backgroundColor=e.value;
}


