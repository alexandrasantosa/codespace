var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/*Task 2-2*/
router.post('/*', function(req, res, next) {
  console.log("POST from a user");
  next();
});

/*Task 2-3*/
router.post('/*', function(req, res, next) {
if(req.get('Content-Type')!= req.is('application/json'))
{
res.send(412);
} else {
  next();
    }
});


module.exports = router;
