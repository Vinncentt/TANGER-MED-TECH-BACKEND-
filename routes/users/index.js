const express = require('express');
const router = express.Router();

//this package use try catche by default so we dont have to use myself
//const router = require('express-promise-router')();

const usersControllers = require('../../app/controllers/users');

router.route('/')
    .post(usersControllers.create)
    .get(usersControllers.getAll);

router.route('/single')
    .get(usersControllers.getSingle)
    .delete(usersControllers.delete)
    .patch(usersControllers.update)

module.exports = router;