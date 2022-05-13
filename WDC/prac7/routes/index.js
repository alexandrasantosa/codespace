var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


var a = 1;
router.get('/cookie', function(req, res) {
    if(req.cookies === "undefined" || !"task3_1" )
    {
        res.cookie('task3_1', 1);
        res.send();
    }else{
        res.cookie('task3_1', a++);
        res.send();
    }
});

module.exports = router;
