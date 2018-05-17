const mongoose = require('mongoose');
const xCourseSchema = mongoose.Schema({
   COURSE_ID: {
       type: String
   },
    OFFERED_FALL: {
       type: String
    },
    OFFERED_WINTER: {
       type: String
    },
    OFFERED_SPRING: {
       type: String
    },

    OFFERED_SUMMER: {
       type: String
    },
    PREREQS: {
       type: String
    },
    ONLINE: {
       type: String
    }
});
const xCourse  = module.exports = mongoose.model('xCourse', xCourseSchema);