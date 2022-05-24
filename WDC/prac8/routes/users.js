var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* Task2-1 */
router.get('/actor', function(req, res, next){
  req.pool.getConnection( function(err,connection){
      if(err) {
          res.sendStatus(500);
          return;
      }
      //squery to get all the last name and last name from actor
      var query = `SELECT first_name, last_name FROM actor;`;
      connection.query(query, function(err, rows, fields){
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
