const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const mainRoutes = require('./routes/main');
const usersRoutes = require('./routes/users');

const app = express();

// prevent GET /favicon.ico request
app.get('/favicon.ico', (req, res) => res.status(204));
// parse the body of the input
app.use(bodyParser.urlencoded({extended: false}));
// get access to the public directory
app.use(express.static(path.join(__dirname, 'public')));

// handle request for '/user' and '/' request
app.use('/users', usersRoutes);
app.use('/', mainRoutes);

app.listen(3000);