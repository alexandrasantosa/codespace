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


var incr = 0;
router.get('/color.html', function(req, res, next) {
  if(incr%4 == 0){
    res.send(`<!DOCTYPE html> <html lang="en">
<head>
<title>Express</title>
  <link rel="stylesheet" href="/stylesheets/style.css">
</head>
<body>
  <h1 style="color:red">red</h1>
</body>

</html>`);
  }
  if (incr%4 == 1){
    res.send(`<!DOCTYPE html> <html lang="en">

<head>
  <title>Express</title>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="/stylesheets/style.css">
</head>

<body>
  <h1 style="color:yellow">yellow</h1>
</body>

</html>`);
  }
  if (incr%4 == 2){
    res.send(`<!DOCTYPE html> <html lang="en">

<head>
  <title>Express</title>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="/stylesheets/style.css">
</head>

<body>
  <h1 style="color:green">green</h1>
</body>

</html>`);
  }
  if (incr%4 == 3){
    res.send(`<!DOCTYPE html> <html lang="en">

<head>
  <title>Express</title>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="/stylesheets/style.css">
</head>

<body>
  <h1 style="color:blue">blue</h1>
</body>

</html>`);
  }
  incr ++;
});





module.exports = router;
