const mongoose = require('mongoose');
/* Course schema */
// I was using mongoose initially but I changed to mongojs, I need to change this
const CourseSchema = mongoose.Schema({
    CRSE_ID: {
        type: String,
        required: true
    },
    ACAD_GROUP: {
        type: String,
        required: true
    },
    SUBJECT: {
        type: String,
        required: true
    },
    CATALOG_NBR: {
        type: String,
        required: true
    },

    DESCR: {
        type: String,
        required: true
    },
    EFFDT: {
        type: String,
        required: true
    },
    EFF_STATUS: {
        type: String,
        required: true
    },

    EQUIV_CRSE_ID: {
        type: String,
        required: true
    },
    CONSENT: {
        type: String,
        required: true
    },
    ALLOW_MULT_ENROLL: {
        type: String,
        required: true
    },

    UNITS_ACAD_PROG: {
        type: Number,
        required: true
    },
    CRSE_REPEATABLE: {
        type: String,
        required: true
    },

    UNITS_REPEAT_LIMIT: {
        type: Number,
        required: true
    },

    CRSE_REPEAT_LIMIT: {
        type: Number,
        required: true
    },

    GRADING_BASIS: {
        type: String,
        required: true
    },
    GRADE_ROSTER_PRINT: {
        type: String,
        required: true
    },

    SSR_COMPONENT: {
        type: String,
        required: true
    },
    COURSE_TITLE_LONG: {
        type: String,
        required: true
    },
    COMPONENT_PRIMARY: {
        type: String,
        required: true
    },
    DESCRLONG: {
        type: String,
        required: true
    }
});

const course = module.exports = mongoose.model('course',CourseSchema);