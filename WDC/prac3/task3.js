/*3.1*/
var m=1;
function mouseOver(){
     document.getElementById("mcount").innerHTML=m++;
}

var num=0;
function aposts(){

    var tarea=document.getElementsByTagName("textarea")[0].value;
    var x=document.createElement("p");
    var y=document.createElement("p");
    var d=document.createElement("button");

    d.innerHTML="X";

    x.className="post-time";
    y.className="post-content";
    x.innerHTML= new Date();
    y.innerHTML=tarea;


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

  var doc2=document.getElementsByClassName("post-content")[0];
  var num=document.getElementsByName("quantity")[0].value;
  var display="";
  var p="";
  for(var i=0;i<num;i++){
    p=p++"<span style='color:"+color+"'>" +doc2.value; + "</span><br/>";

   }
  display = display + dx+ "<br/>" +p;
  x.innerHTML = display;

   }

  num++;

   




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

