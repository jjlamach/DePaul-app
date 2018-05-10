var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();

// 'app' will use these routes.
const route = require('./routes/routes');



// port
const PORT = 3000;


/*
Cross-Origin Resource Sharing (CORS) is a mechanism that uses additional HTTP headers 
to let a user agent gain permission to access selected resources from a server on a different 
origin (domain) than the site currently in use.
Middleware
*/
app.use(cors());

//body-parser for json format, another middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


// when: '/api will use the routes in this folder
app.use('/api', route);


app.get('/', (req, res, next) => {
    res.send('Working');
});
app.listen(PORT, () => {
    console.log('Server started on:' + PORT);
});