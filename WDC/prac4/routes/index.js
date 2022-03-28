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

var inc = 0;
router.get('/color.html', function(req,res){
res.send('<!DOCTYPE html>\
     <html>\
      <head>\
      <title></title>\
</head>\
<body>\
<h1 id="hea"></h1>\
<script>\
var inc='
+ inc +
';var h= document.getElementById("hea");\
if(inc == 0){\
inc++;\
h.innerText = "red";\
h.style.color = "red"\
}else if(inc == 1){\
h.innerText = "yellow";\
h.style.color = "yellow"\
}else if(inc == 2){\
h.innerText = "green";\
h.style.color = "green"\
}else if(inc == 3){\
h.innerText = "blue";\
h.style.color = "blue"\
}\
</script>\
</body>\
</html>\
');

inc++;
if(inc== 4){
inc= 0;
}

});

module.exports = router;
