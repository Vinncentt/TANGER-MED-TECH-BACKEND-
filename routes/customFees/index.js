const express = require('express');
const router = express.Router();

//this package use try catche by default so we dont have to use myself
//const router = require('express-promise-router')();

const customControllers = require('../../app/controllers/customFees');


router.route('/')
    .post(customControllers.create)
    .get(customControllers.getAll);
 
module.exports = router;