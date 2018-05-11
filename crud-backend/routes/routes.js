var express = require('express');
var router = express.Router();

const User = require('../models/User');
const Course = require('../models/Course');


/**
 * Get all the users
 */
router.get('/users', (req, res, next) => {
    User.find(function(err, user){
        if(err) {
            res.json(err);
        }
        else {
            res.json(user);
        }
    });
});

/**
 * Get a user by ID
 */
router.get('/user/:id', function(req, res, next) {
    User.findById({_id: req.params.id}, function(err, result) {
        if(err) {
            res.json(err);
        }
        else {
            res.json(result);
        }
    });
});


/**
 * Get all the courses.
 */
router.get('/courses', (req, res, next) => {
    Course.find(function(err, course){
        if(err) {
            res.json(err);
        }
        else {
            res.json(course);
        }
    });
});

/**
 * Get a course by ID.
 */
router.get('/course/:id', (req, res, next) => {
    Course.findById({_id: req.params.id}, function(err, result){
        if(err) {
            res.json(err);
        }
        else {
            res.json(result);
        }
    });
});



/**
 * Creates a new user and adds it to the User table.
 */
router.post('/user', (req,res, next) => {
    let newUser = new User({
        depaulID: req.body.depaulID,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password,
        userType: req.body.userType
    });
    newUser.save((err, user) => {
        if(err) {
            res.json(err);
        }
        else {
            res.json({mssg: 'User added'});
        }
    });
});

/**
 * Creates a new course and adds it to the Course table.
 */
router.post('/course', (req, res, next) => {
    let newCourse = new Course({
        CRSE_ID: req.body.CRSE_ID,
        ACAD_GROUPD: req.body.ACAD_GROUPD,
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
    });
    newCourse.save((err, course) => {
        if(err) {
            res.json(err);
        }
        else {
            res.json({message: 'Course added'});
        }
    });
});


/**
 * Updates a user with that ID.
 */
router.put('/user/:id', (req, res, next) =>{
    User.findOneAndUpdate({_id: req.params.id}, {
        $set: {
            depaulID: req.body.depaulID,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            password: req.body.password,
            userType: req.body.userType
        }
    },function(err, result) {
        if(err) {
         res.json(err);
        }  else {
            res.json(result);
        }
    })
});

/**
 * Updates a course with that ID.
 */
router.put('/course/:id', (req, res, next) => {
    Course.findOneAndUpdate({_id: req.params.id}, {
        $set: {
        CRSE_ID: req.body.CRSE_ID,
        ACAD_GROUPD: req.body.ACAD_GROUPD,
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
    }, function(err, result) {
        if(err) {
            res.json(err);
        } else {
            res.json(result);
        }
    })
});

/**
 * Deletes a user with that ID.
 */
router.delete('/user/:id', (req, res, next) =>{
    User.remove({_id: req.params.id}, function(err, result){
        if(err){
            res.json(err);
        }
        else {
            res.json(result);
        }
    });
});

/**
 * Deletes a course with that ID.
 */
router.delete('/course/:id', (req, res, next) => {
    Course.remove({_id: req.params.id}, function(err, result){
        if(err) {
            res.json(err);
        }
        else {
            res.json(result);
        }
    });
});

module.exports = router;