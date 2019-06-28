var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var mysql = require('mysql');
var db = require('../db-config.json');



var con = mysql.createConnection({
  host: db.host,
  user: db.user,
  password: db.password,
  database: db.database
})


router.get('/', function (req, res, next) {
    console.log("side 시작 !");

    console.log(req.query.uid);

    var sql = "SELECT * FROM user WHERE UID = ?";

    con.query(sql, [req.query .uid], function (error, result) {
        if (error) throw error;
        else {
            res.json({
                Headers:{
                    "hashtag": result[0].inputhastag,
                    "phashtag": result[0].apihashtag,
                    "goal": result[0].goal
                }
            }
            );
        }

    })

});
module.exports = router;
