const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const rootDir = require('./util/path');

const app = express();

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// Prevent GET /favicon.ico
app.get('/favicon.ico', (req,res) => res.status(204));

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', (req, res, next) => {
//     console.log('This always runs');
//     next();
// })

app.use('/admin', adminData.routes); // order of the command is matter
app.use(shopRoutes);

// adding a 404 page
app.use((req, res, next) => {
    res.status(404);
    res.sendFile(path.join(rootDir, 'views', '404.html'));
})

app.listen(3000);