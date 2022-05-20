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
var c=0;
var prev='';
router.post('/pass-it-on',function(req,res,next){
  var b_mess=req.body.message;
  if(b_mess==''){
    res.status(400).send();
  }
  else {
    if (c>0){
     res.send(prev);
     prev=b_mess;
      c++
  } else {
    if (c ==0 && b_mess!=''){
      res.send('first');
      prev=b_mess;
      c++
    }
  }
  }

});

/*Task 1-3*/
router.post('/combine',function(req,res){
  let output="";
  for (var i=0 ; i<(req.body.lines.length); i++){
    output += (req.body.lines[i] + req.body.suffix + "\n");
  }
  res.send(output);
});




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
