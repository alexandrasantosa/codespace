var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Task 1.1 */
router.get('/brew',function(req,res,next){
  if(req.query.drink=="tea")
  {
    res.send('A delicious cup of tea!');
  } else if(req.query.drink=="coffee"){
    res.status(418).send();
  } else {
    res.status(400).send();
  }

});

//Task1-2
var c=0;
var prev='';
router.post('/pass-it-on',function(req,res,next){
  var b_print=req.body.message;
  var a_print=req.body.submit;

  if(b_print==''){
    res.status(400).send();
  }
  else
  {
    if (c >0){
     res.send(prev);
     prev=b_print;

    c++

  }
  else{
    if (c==0 && b_print!=''){
      res.send('first');
      prev=b_print;
      c++
    }
  }
  }
});

module.exports = router;
