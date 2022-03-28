var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var date;
router.get('/last.txt',function(req,res,next){
  res.send(date);
  date=new Date();
});

var inc=0;
router.get('/color.html',function(req,res,next){
  res.send('<!DOCTYPE html>\
  <html>\
  <head>\
  <title></title>\
  </head>\
  <body>\
  <h1 id="heading1"></h1>\
  <script>\
  var inc='+inc+'; var hea = document.getElementById("heading1");\
  if(inc == 0){\
  inc++;\
  hea.innerText = "red";\
  hea.style.color = "red"\
  }else if(inc == 1){\
  hea.innerText = "yellow";\
  hea.style.color = "yellow"\
  }else if(inc== 2){\
  hea.innerText = "green";\
  hea.style.color = "green"\
  }else if(inc == 3){\
  hea.innerText = "blue";\
  hea.style.color = "blue"\
  }\
  </script>\
  </body>\
  </html>\
  ');
inc++;
if(inc == 4){
inc= 0;
}

});


module.exports = router;
