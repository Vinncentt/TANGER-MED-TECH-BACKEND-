const express = require('express');
const router = express.Router();

//this package use try catche by default so we dont have to use myself
//const router = require('express-promise-router')();

const reservationsControllers = require('../../app/controllers/reservations');


router.route('/')
    .post(reservationsControllers.create)
    .get(reservationsControllers.getAll);

router.route('/single')
    .delete(reservationsControllers.delete)
    .get(reservationsControllers.getSingle)
    .post(reservationsControllers.checkAvailability);
module.exports = router;