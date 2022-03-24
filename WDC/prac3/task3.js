/*Alexandra Belinda Santosa */


/*3.1*/
var inc=1;
function mouse_over(){
     document.getElementById("mcount").innerHTML=inc++;
}


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
    document.getElementById("posts").appendChild(x).appendChild(d);
   /* document.getElementById("posts").appendChild(d);*/
    document.getElementById("posts").appendChild(y);



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
   document.getElementById("main").style.display="none";
   document.getElementById("menu").style.display="";
}

function back_menu(){
   document.getElementById("main").style.display="";
   document.getElementById("menu").style.display="none";
}

/* 3-5 */
function change_color(e){
    document.body.style.backgroundColor=e.value;
}


