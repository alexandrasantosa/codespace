var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
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


module.exports = router;
