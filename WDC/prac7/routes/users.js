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

module.exports = router;
