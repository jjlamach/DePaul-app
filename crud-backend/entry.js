var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');




var app = express();


// /**
//  * Securing the Backend API
//  */
// const jwt = require('express-jwt');
// const jwks = require('jwks-rsa');
//
// /*  We are going to implement a JWT middleware that will ensure the validity of our token.
//     We'll require each protected route to have a valid access_token sent in the Authorization header
//  */
// const authorizationChecker = jwt({
//     secret: jwks.expressJwtSecret({
//         cache: true,
//         rateLimit: true,
//         jwksRequestsPerMinute: 5,
//         jwksUri: "https://csc394.auth0.com/.well-known/jwks.json"
//     }),
//     audience: 'http://localhost:3000',
//     issuer: "https://csc394.auth0.com/",
//     algorithms: ['RS256']
// });





// create a connection
mongoose.connect('mongodb://jlama:juliolama@ds115360.mlab.com:15360/juliodb');

mongoose.connection.on('connected', () => {
    console.log('Mongoose connected to mLab');
});


mongoose.connection.on('error', (error) => {
    console.log(error);
});

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


// 'app' will use these routes.
const route = require('./routes/routes');


// when: '/api will use the routes in this folder
app.use('/api', route);



app.get('/', (req, res) => {
    res.send('hi');
    
});




app.listen(PORT, () => {
    console.log('Server started at port:' + PORT);
});
