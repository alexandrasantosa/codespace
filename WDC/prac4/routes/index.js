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





module.exports = router;
