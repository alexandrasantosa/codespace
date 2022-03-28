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
  var inc='+inc+';
  var h1)
module.exports = router;
