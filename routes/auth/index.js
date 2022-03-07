const express = require('express');
const router = express.Router();

//this package use try catche by default so we dont have to use myself
//const router = require('express-promise-router')();

const auhtControllers = require('../../app/controllers/authentication');


router.route('/login')
    .post(auhtControllers.login);
module.exports = router;