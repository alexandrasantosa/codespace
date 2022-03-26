var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var date;
router.get('/last.txt',function(req,res,next){
  res.send(date);
  date=new Date();
});

var inc=0;
router.get('/color.txt',function(req,res,next){
  var color="";
  inc++;
  if(inc ==1 ){
    color="red";
  } else if (inc == 2 ){
    color="yellow";
  }else if (inc == 3){
    color="blue";
    inc=0;
  }
  res.send(color);
});
module.exports = router;
