var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


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
var firsttext='first';
router.post('/pass-it-on', function(req, res, next) {
    if(req.body.message == ' ' || ! req.body.message)
    {
        res.send(400);
    } else
    {
        var mess = req.body.message;
        res.send(firsttext);
        firsttext = mess;
    }
});


var output;
router.post('/combine', function(req, res) {
    let output="";
    for(var i=0; i<(req.body.lines.length); i++){
    output+= (req.body.lines[i] + req.body.suffix + "\n");
    }
    res.send(output);
});

module.exports = router;
