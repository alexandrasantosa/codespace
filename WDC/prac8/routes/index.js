var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/*Task2-1*/
router.get('/actor',function(req,res,next){
  req.pool.getConnection(function(err.connection){
    if(err) {
      res.sendStatus(500);
      return;
  }
  var query = `SELECT first_name, last_name FROM actor;`;
  connection.query(query, function(err, rows, fields){
      connection.release();  //release connection
      if(err) {
          res.sendStatus(500);
          return;
      }
      res.json(rows);
  });
  });
});

router.post('/add-actor', function(req, res, next) {
  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
req.pool.getConnection( function(err,connection){
      if(err) {
          res.sendStatus(500);
          return;
      }

      var query = "INSERT INTO actor(first_name, last_name) VALUES(?, ?); ";
      value = [firstName, lastName];
      connection.query(query, value,function(err, rows, fields){
          connection.release();
          if(err) {
              res.sendStatus(500);
              return;
          }
          res.json(rows);
      });
  });
});


module.exports = router;
