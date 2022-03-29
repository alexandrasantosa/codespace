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



var arr = "";
router.get('/log.html', function(req, res, next) {
  arr= arr.concat(`<li>${new Date()}</li>`);
    res.send(`<!DOCTYPE html>
  <html lang="en">
  <head>
  <title>Express</title>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="/stylesheets/style.css">
    <script src="html.js"></script>
  </head>
  <body>
  <ul style="list-style-type:dot;">
    ${arr}
  </ul>
  </body>
</html>`);
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
