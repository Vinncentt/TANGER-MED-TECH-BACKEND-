const express = require('express');
const router = express.Router();

//this package use try catche by default so we dont have to use myself
//const router = require('express-promise-router')();

const docksControllers = require('../../app/controllers/docks');


router.route('/')
    .post(docksControllers.create)
    .get(docksControllers.getAll);

    router.route('/single')
    .get(docksControllers.getSingle);
 
module.exports = router;