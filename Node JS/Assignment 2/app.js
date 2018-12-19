const express = require('express');

const app = express();

// prevent GET /favicon.ico request
app.get('/favicon.ico', (req, res) => res.status(204));

app.use('/users', (req, res) => {
    console.log('In "users" middleware!');
    res.send('<h1>This is the "Users" page!</h1>' );
});

app.use('/', (req, res) => {
    console.log('In "main" middleware');
    res.send('<h1>This is the main page</h1>');
})

app.listen(3000);