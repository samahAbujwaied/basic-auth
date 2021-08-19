'use strict';
require('dotenv').config();

const server = require('./server');
const {db} = require('./app'); 

db.sync().then(()=> {
    server.start(2000);
})
.catch(`error when runing server ${console.error}`);