var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/actor', function(req, res, next){

  //console.log('actor get');
  req.pool.getConnection( function(err,connection){
      if(err) {
          //console.log(err);
          res.sendStatus(500);
          return;
      }
      //console.log('actor get2');
      var query = `SELECT first_name, last_name FROM actor;`;
      connection.query(query, function(err, rows, fields){
          connection.release();  //release connection
          if(err) {
              //console.log(err);
              res.sendStatus(500);
              return;
          }
          //console.log(rows);
          res.json(rows); // send response
      });
  });
});

router.post('/add-actor', function(req, res, next) {
  // console.log(req.body);
  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
req.pool.getConnection( function(err,connection){
      if(err) {
          //console.log(err);
          res.sendStatus(500);
          return;
      }
      // console.log("Re:");

      // let data_array = {
      //     first_name: req.body.first_name,
      //     last_name: req.body.last_name
      // };

      var query = "INSERT INTO actor(first_name, last_name) VALUES(?, ?); ";
      //var query = 'INSERT INTO actor (first_name, last_name) VALUES (?, ?)';
      //console.log("Re2:");
      //console.log(req.body.first_name);
      value = [firstName, lastName];

      connection.query(query, value,
          function(err, rows, fields){
          connection.release();  //release connection
          if(err) {
              // console.log(err);
              res.sendStatus(500);
              return;
          }
          res.json(rows); // send response
          //res.end();
          //console.log(rows);
      });
  });
});

module.exports = router;
