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



module.exports = router;
