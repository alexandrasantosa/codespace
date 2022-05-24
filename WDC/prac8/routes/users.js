var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* Task2-1 */
router.get('/actor', function(req, res, next){
  req.pool.getConnection( function(error,connection){
      if(error) {
          res.sendStatus(500);
          return;
      }
      //squery to get all the last name and last name from actor
      var query = `SELECT first_name, last_name FROM actor;`;
      connection.query(query, function(error, rows, fields){
          connection.release();
          if(error) {
              res.sendStatus(500);
              return;
          }
          res.json(rows);
      });
  });
});

router.post('/addactor',function(req,res,next){
  var firstname=req.body.firstname;
  var lastname=req.body.firstname;
  req.pool.getConnection(function(error,connection){
    if(error) {
      res.sendStatus(500);
      return;
  }
  var query = "INSERT INTO actor(first_name, last_name) VALUES(?, ?); ";
  connection.query(query,[firstname,lastname],
    )

  })

})






module.exports = router;
