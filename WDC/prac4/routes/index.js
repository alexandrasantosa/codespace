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


var a=1;
var time_stamp="";
router.get('/log.html', function(req, res){
  if(a++==1){
    time_stamp=new Date();
  }else {
   time_stamp=time_stamp+"<br>"+(new Date());
   res.send(time_stamp);
  }
});

var inc=0;
router.get('/color.txt',function(req,res){
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
