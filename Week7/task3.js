/*Alexandra Belinda Santosa */


/*3.1*/
var inc=1;
function mouse_over(){
     var mc=document.getElementById("mcount");
     mc.innerHTML=inc++;
}


function add_posts(){
    /*var tar=document.getElementsByTagName("textarea")[0].value;*/
    /*var x=document.createElement("p");
    /*x.innerHTML= new Date();*/
    /*var y=document.createElement("p");*/
   /* y.innerHTML=tar;*/
   /* var d=document.createElement("button");*/
    /*d.innerHTML="X";*/

    /*classname*/
    /*x.className="post-time";
    y.className="post-content"; */




   var num=document.querySelectorAll('input[type="number"]')[0].value;
   console.log(num);
   for(var n=0;n<num;n++){
    var tar=document.getElementsByTagName("textarea")[0].value;
    var x=document.createElement("p");
    x.innerHTML= new Date();
    var y=document.createElement("p");
    y.innerHTML=tar;
    var d=document.createElement("button");
    d.innerHTML="X";

    x.className="post-time";
    y.className="post-content";

    /* for 3-8 */ /*('input[type=radio]')*/
   var p1= document.getElementById("posts").appendChild(x).appendChild(d);
   /* document.getElementById("posts").appendChild(d);*/
   var p2=document.getElementById("posts").appendChild(y);


   }

   var col_check=document.querySelectorAll('input[type="radio"]')[0].checked;
   console.log(col_check);
   var col_check_1=document.querySelectorAll('input[type="radio"]')[1].checked;
   console.log(col_check_1);
   if(col_check==true){
       y.style.color="blue";
   }

   if(col_check_1==true){
       y.style.color="red";
   }

  /*3-8*/
   if(d.addEventListener("click", () => {
    x.remove();
    p2.remove();
    }
    ));
    /*3-8*/
}



/*3-3 */
function open_menu(){
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


