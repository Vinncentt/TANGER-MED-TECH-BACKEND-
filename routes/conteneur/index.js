const express = require('express');
const router = express.Router();

//this package use try catche by default so we dont have to use myself
//const router = require('express-promise-router')();

const containerController = require('../../app/controllers/conteneur');


router.route('/')
    .post(containerController.create);
 
module.exports = router;