var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var date;
router.get('/last.txt',function(req,res){
  res.send(date);
  date=new Date();
});
var incr=0;
router.get('/color.html',function(req,res,next){
  res.send(
    '<DOCTYPE html>\
    <html>\
    <head>\
    <title></title>\

    </head>\
    <body>\
    <h1 id="heading1">Test</h1>\
    <script>\
    var incr='+incr+';var hea=document.getElementById("heading1");\
    if(incr==0){\
      incr=++;\
      incr.innerText="red";\
      incr.style.color="red";\


    </body>
  )
}
)
var inc=0;
router.get('/color.txt',function(req,res,next){
  var color="";
  inc++;
  if(inc ==1 ){
    color="red";
  } else if (inc == 2 ){
    color="yellow";
  }else if (inc == 3){
    color="green";
  }else if (inc == 4){
    color="blue";
    inc=0;
  }
  res.send(color);
});



module.exports = router;
