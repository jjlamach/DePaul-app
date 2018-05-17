let express = require('express');
let router = express.Router();

const User = require('../models/User');
const Course = require('../models/Course');
const Test = require('../models/Test');
const xCourse = require('../models/xCourse');

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

    let userData = req.body;
    let user = new User(userData);
    user.save((error, newUser) => {
       if(error){
           res.json(error);
       } else {
           res.json(newUser);
       }

  /*  let newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip,
        depaulID: req.body.depaulID,
        degree: req.body.degree,
        email: req.body.email,
        userID: req.body.userID,
        password: req.body.password,
        userType: 'Student'

    }); */
});

/**
 * Registering for an account.
 */
router.post('/registration', (req, res) => {
    let userData = req.body;
    let user = new User(userData);
    user.save((error, newUser) => {
       if(error) {
           res.json({message: 'Could not add user.'});
       } else {
           res.json({message: 'User added.'});
       }
    });
});





/**
 * Creates a new course and adds it to the Course table.
 */
router.post('/course', (req, res, next) => {
    let courseData = req.body;
    let course = new Course(courseData);
    course.save((error, newCourse) => {
       if(error) {
           console.log(error);
       } else {
           console.log('Course added.' + newCourse);
       }
    });
});



/********************************* NEW TABLE METHODS START HERE ********************************/
/**
 * Post a course in the table (Ben's table).
 */
router.post('/xcourse', (req, res, next) => {
    let newCourseData = req.body;
    let course = new xCourse(newCourseData);
    course.save((error, newCourse) => {
       if(error) {
           console.log(error);
       } else {
           console.log('New course added' + newCourse);
       }
    });
});

/**
 * All the courses
 */
router.get('/xcourses', (req, res, next) => {
    Test.find(function(err, course){
        if(err) {
            res.json(err);
        }
        else {
            res.json(course);
        }
    });
});

/**
 * All courses offered in the Fall
 */
router.get('/fall', (req, res, next) => {
    Test.find({OFFERED_FALL: "Y"}, (err, courses) =>{
       if(err) {
           res.json(err);
       }
       else {
           res.json(courses);
       }
    });
});

/**
 * All courses offered in the Winter
 */
router.get('/winter', (req, res, next) => {
   Test.find({OFFERED_WINTER: "Y"}, (err, courses) => {
      if(err) {
          res.json(err);
      } else {
          res.json(courses);
      }
   });
});

/**
 * All courses offered in the Summer
 */
router.get('/summer', (req, res, next) => {
   Test.find({OFFERED_SUMMER: "Y"}, (err, courses) => {
      if(err) {
          res.json(err);
      } else {
          res.json(courses);
      }
   });
});

/**
 * All courses offered in the Spring
 */
router.get('/spring', (req, res, next) => {
    Test.find({OFFERED_SPRING: "Y"}, (err, courses) => {
       if(err) {
           res.json(err);
       } else{
           res.json(courses);
       }
    });
});


/********************************* NEW TABLE METHODS END HERE ********************************/





/**
 * Updates a user with that ID.
 */
router.put('/user/:id', (req, res, next) =>{
    User.findOneAndUpdate({_id: req.params.id}, {
        $set: {
            depaulID: req.body.depaulID,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            password: req.body.password
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

/**
 * Login verification
 */
router.post('/login', (req, res) => {
    let userInfo = req.body;
    User.findOne({userID: userInfo.userID}, (error, user) => {
        if (error) {
            console.log(error);
        } else {
            if (!user) {
                res.status(401).send('Invalid user ID');
            } else if (user.password !== userInfo.password) {
                res.status(401).send('Invalid password');
            } else {
                res.status(200).send(user);
            }
        }
    });
    console.log(userInfo);
});

/**
 * Check if a user exists.
 * @type {Router|router|*}
 */
router.get('/login', (req, res) =>{
   let userData = req.body;
   User.Find({depaulID: userData.depaulID}, function(err, count){
       if(err) {
           res.json(err);
       } else {
           console.log('Wtf');
       }
   });
});


module.exports = router;