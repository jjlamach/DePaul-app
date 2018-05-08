var express = require('express');
var mongojs = require('mongojs');
var router = express.Router();

/* Use the Course Schema to model the data.*/
const Course = require('../models/course');

/*
    To run server:
    - Uses Nodemon to watch for changes.
    - Within the crud-backend directory, type: nodemon
*/


/*
parameter 1: your database connection
parameter 2: the table you want to use
*/
var database = mongojs('mongodb://jlama:juliolama@ds115360.mlab.com:15360/juliodb',['COURSES']);

/* This gets all courses.
http://localhost:3000/api/courses
*/
router.get('/courses', function(req, res, next) {
    database.COURSES.find(function(error, course) {
        if(error) {
            res.send(error);
        }
        res.json(course);
    });
});

/*
Gets you one course
http://localhost:3000/api/courses/5aee5bea3fdac107d26af2d6
Gets you the course with 5aee5bea3fdac107d26af2d6 as ID.
*/
router.get('/course/:id', function(req, res, next) {
    database.COURSES.findOne({_id: mongojs.ObjectId(req.params.id)}, function(error, course){
        if(error) {
            res.send(error);
        }
        res.json(course);
    });
});

/* Adding a Course. */
router.post('/course', function(req, res, next) {
    var newCourse = req.body;  // the course 
    database.COURSE.save(course, function(err, newCourse) {
        if(err) {
            res.send(err);
        } else {
            res.json(newCourse);
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

/* Update a course.*/
router.put('/course/:id', function(req, res, next) {
    var someCourse = req.body;
    var updatedCourse = {};
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