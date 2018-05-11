var express = require('express');
var mongojs = require('mongojs');
var router = express.Router();


/*
    To run server:
    - Uses Nodemon to watch for changes.
    - Within the crud-backend directory, type: nodemon
     http://localhost:3000/api/...some route
*/


/*
parameter 1: your database connection
parameter 2: the table you want to use
*/
var database = mongojs('mongodb://jlama:juliolama@ds115360.mlab.com:15360/juliodb',['COURSES']);
var databaseTwo = mongojs('mongodb://jlama:juliolama@ds115360.mlab.com:15360/juliodb',['COURSES_TWO']);
var databaseThree = mongojs('mongodb://jlama:juliolama@ds115360.mlab.com:15360/juliodb',['USERS']);

router.get('/courses', function(req, res, next) {
    database.COURSES.find(function(error, course) {
        if(error) {
            res.send(error);
        }
        res.json(course);
    });
});


/*
Get all users
*/
router.get('/users', function(req, res, next) {
    databaseThree.USERS.find(function(err, user) {
        if(err) {
            res.send(err);
        } else {
            res.json(user);
        }
    });
});


/*
    Get a specified course
*/
router.get('/course/:id', function(req, res, next) {
    database.COURSES.findOne({_id: mongojs.ObjectId(req.params.id)}, function(error, course){
        if(error) {
            res.send(error);
        } else {
            res.json(course);
        }
    });
});

/*
    Get a user
*/
router.get('/user/:id', function(req, res, next) {
    databaseThree.USERS.findOne({_id:mongojs.ObjectId(req.params.id)}, function(error, user) {
        if(error) {
            res.send(error);
        } else {
            res.json(user);
        }
    });
});


/* Adding a Course. */
router.post('/course', function(req, res, next) {
    var newCourse = {
    CRSE_ID: req.body.CRSE_ID,
    ACAD_GROUP: req.body.ACAD_GROUP,
    SUBJECT: req.body.SUBJECT,
    CATALOG_NBR: req.body.CATALOG_NBR,
    DESCR: req.body.DESCR,
    EFFDT: req.body.EFFDT,
    EFF_STATUS: req.body.EFF_STATUS,
    EQUIV_CRSE_ID: req.body.EQUIV_CRSE_ID,
    CONSENT: req.body.CONSENT,
    ALLOW_MULT_ENROLL: req.body.ALLOW_MULT_ENROLL,
    UNITS_ACAD_PROG: req.body.UNITS_ACAD_PROG,
    CRSE_REPEATABLE: req.body.CRSE_REPEATABLE,
    UNITS_REPEAT_LIMIT: req.body.UNITS_REPEAT_LIMIT,
    CRSE_REPEAT_LIMIT: req.body.CRSE_REPEAT_LIMIT,
    GRADING_BASIS: req.body.GRADING_BASIS,
    GRADE_ROSTER_PRINT: req.body.GRADE_ROSTER_PRINT,
    SSR_COMPONENT: req.body.SSR_COMPONENT,
    COURSE_TITLE_LONG: req.body.COURSE_TITLE_LONG,
    COMPONENT_PRIMARY: req.body.COMPONENT_PRIMARY,
    DESCRLONG: req.body.DESCRLONG
    }
    
    database.COURSES.save(newCourse, function(err, newCourse) {
        if(err) {
            res.send(err);
        } else {
            console.log('Course added Sucessfully.');
            res.json(newCourse);
        }
    });
});

/* Adding a new user.*/
router.post('/user', function(req, res, next) {
    var newUser = {
        depaulID: req.body.depaulId,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password,
        userType: req.body.userType
    }
    databaseThree.USERS.save(newUser, function(error, newUser){
        if(error) {
            res.send(error);
        } else {
            res.json(newUser);
        }
    });
});


/* Delete a course.*/
router.delete('/course/:id', function(req, res, next) {
    database.COURSES.remove({_id: mongojs.ObjectId(req.params.id)}, function(error, course){
        if(error) {
            res.send(error);
        }
        res.json(course);
    });
});


/* Delete a user.*/
router.delete('/user/:id', function(req, res, next){ 
    databaseThree.COURSE.remove({_id: mongojs.ObjectId(req.params.id)}, function(error, user){
        if(error) {
            res.send(error);
        } else {
            res.json(user);
        }
    });
});




/* Update a course.*/
router.put('/course/:id', function(req, res, next) {
    var someCourse = req.body;
    var updatedCourse = {}; // represents the updated course
    if(!updatedCourse) {
        res.send(400);  //error
        res.json({
            "error": "Course not updated."
        });
    } else {
        database.COURSES.update({_id: mongojs.ObjectId(req.params.id)},updatedCourse,{},function(error, course){
            if(error) {
                res.send(error);
            }
            res.json(course);
        });
    }
});

module.exports = router;