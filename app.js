const express = require('express');

const logger = require('morgan');

const Mongoose = require('mongoose');

const bodyParser = require('body-parser');

const session = require('express-session');

var cors = require('cors');


Mongoose.connect('mongodb://localhost/TangerMedTech', () => {
    console.log('connected to mongoDB database');
});

const app = express();
//anabling cors on the server 
app.use(cors());
//sessions setup 
const oneDay = 1000 * 60 * 60 * 24;

app.use(session({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized: true,
    cookie: { maxAge: oneDay },
    resave: false
}));

//routes

const roles = require('./routes/roles');
const users = require('./routes/users');
const reservations = require('./routes/reservations');
const docks = require('./routes/docks');
const auth = require('./routes/auth');
const custom = require('./routes/customFees');
const container = require('./routes/conteneur');

//middleware

app.use(logger('dev'));
app.use(bodyParser.json());

//routes

app.use('/roles', roles);
app.use('/users', users);
app.use('/reservations', reservations);
app.use('/docks', docks);
app.use('/auth', auth);
app.use('/customs', custom);
app.use('/container', container);
//catche 404 error and forward theme to the error handler

app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

//error handler function

app.use((err, req, res, next) => {
    const status = err.status || 500;

    //respond to client

    res.status(status).json({
        error: {
            message: error.message
        }
    });

    //respond to ourselves

    console.error(err);
});

//start the server

const port = app.get('port') || 3030;

app.listen(port, () => {
    console.log(`server in listening on port ${port}`);
});