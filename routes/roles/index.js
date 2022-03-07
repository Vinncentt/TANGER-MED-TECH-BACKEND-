const express = require('express');
const router = express.Router();

//this package use try catche by default so we dont have to use myself
//const router = require('express-promise-router')();

const rolesControllers = require('../../app/controllers/roles');


router.route('/')
    .post(rolesControllers.create)
    .get(rolesControllers.getAll);

router.route('/single')
    .get(rolesControllers.getSingle)
    .patch(rolesControllers.update)
    .delete(rolesControllers.delete);
module.exports = router;