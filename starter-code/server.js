'use strict';

const express = require('express');
const auth = require('./models/auth.model')
const signinRout = require('./routes/signin')
const signupRout = require('./routes/signup')
const app = express();

app.use(express.json()); 

app.use(express.urlencoded({ extended: true }));
app.use(signinRout);
app.use(signupRout);

function start(port) {
    app.listen(port, ()=> console.log(`Will run on port ${port}`))
}

module.exports = {
    app: app,
    start: start,   
}