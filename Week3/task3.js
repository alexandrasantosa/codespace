
/*3.1*/
var m=1;
function mouseOverFunction(){
     //m=m+1;
     document.getElementById("mcount").innerHTML=m++;
}

/*3-2*/
function aposts(){

  var tarea=document.getElementsByTagName("textarea")[0].value;
  var x=document.createElement("p");
  var y=document.createElement("p");
  x.className="post-time";
  y.className="post-content";
  x.innerHTML= new Date();
  y.innerHTML=tarea;


  document.getElementById("posts").appendChild(x);
  document.getElementById("posts").appendChild(y);

}

function remove_post(){
  var myobj = document.getElementById("posts");
  myobj.remove();
}


/*3-3 */
function openmenu()

{
    var main=document.getElementById("main");
    main.style.display="none";
    var menu =document.getElementById("menu");
    menu.style.display="";

}

function backmenu()

{
    var main=document.getElementById("main");
    main.style.display="";
    var menu =document.getElementById("menu");
    menu.style.display="none";

}