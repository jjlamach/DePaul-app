var path = require('path');
var Request = require('tedious').Request;
var express = require('express');
var path = require('path');
var http = require('http');
var bodyParser = require('body-parser');
var app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.json());

const port = process.env.PORT || '5000';

var server = app.listen(port, function () {
  console.log('Server is running on port ' + port);
});





app.get('/', function (req, res) {

  var Connection = require('tedious').Connection;

    // config for your database
    var config = {
      userName: 'Capstone',
      password: 'Wnt4csc394',
      server: 'xforce.database.windows.net',
      options:
        {
          database: 'csc394'
          , encrypt: true
        }
    };

    // connect to your database
    // sql.close();
  var connection = new Connection(config);

  connection.on('connect', function(err) {

      if (err) console.log(err);

      // create Request object
    request = new Request(
      "SELECT * FROM csc394.dbo.COURSES3$ FOR JSON PATH",
      function(err, rowCount, rows)
      {
       // res.send(rowCount);
        console.log(rowCount + ' row(s) returned');
        process.exit();
      }
    );
    var ar = [];
    request.on('row', function(columns) {
      columns.forEach(function(column) {
        res.send(column.value);

      });
    });
    var con = connection.execSql(request);


    });
  });
