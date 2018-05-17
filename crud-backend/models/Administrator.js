/* Not sure if we need this yet.*/
const mongoose = require('mongoose');
const AdministratorSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    zip: {
        type: Number,
        required: true
    },

    depaulID: {
        type: Number,
        required: true
    },
    degree: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    userID: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});
const Administrator = module.exports = mongoose.model('Administrator', AdministratorSchema);