var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/*Task2-1*/
router.get('/actor',function(req,res,next){
  req.pool.getConnection(function(err.connection))
})

module.exports = router;
