var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/*Task1-1*/
router.get('/brew', function(req, res, next) {
    if(req.query.drink == "tea")
    {
        res.send("A delicious cup of tea!");
    }
    if(req.query.drink == "coffee" )
    {
        res.send(418);
    } else
    {
        res.send(400);
    }
});


/*Task 1-2*/


/*Task 3-1*/
let cookies='';
let a=1;
router.get('/cookie',function(req,res,next){
  if(cookies==''){
    cookies='task3_1';
    res.cookie(cookies,a);
    res.end('cookie');
  } else if ( cookies=="task3_1"){
    a++;
    res.cookie(cookies,a);
    res.end('cookie');
  }
});

module.exports = router;
