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
  <html lang="en"><head>
  <title>Express</title>
    <meta charset="UTF-8"><link rel="stylesheet" href="/stylesheets/style.css">
    <script src="task4.js"></script>
  </head>
  <body>
  <ul style="list-style-type:dot;"> ${arr}</ul>
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
</body></html>`);
  }
  if (incr%4 == 2){
    res.send(`<!DOCTYPE html> <html lang="en">
<head>
  <title>Express</title> <meta charset="UTF-8">
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

//task4-5
var testing=false;
router.get('/accept',function(req,res,next){
  if(testing==true){
    res.status(200);
  }
  testing=true;

});

router.get('/content.ajax',function(req,res,next){
  if(testing==false){
    res.status(403).send('');
  } else {
    res.send('<p>1</p> <p>2</p>');
  }
  testing=true;

});



//task4-4
router.get('/contact.ajax', function(req, res, next) {
  res.send(`<a href ="https://www.gmail.com/">email</a>`);
});
router.get('/search.ajax', function(req, res, next) {
  res.send(`<input><button>search</button>`);
});
router.get('/about.ajax', function(req, res, next) {
  res.send(`<p>Content</p>`);
});


module.exports = router;
