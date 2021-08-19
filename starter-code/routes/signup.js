'use strict';
const express = require('express');
const bcrypt = require('bcrypt');

const router = express.Router();
const signupMiddle= require('../middlewares/signup.middle')

router.post('/signup',signupMiddle ,async (req, res) => {
  res.status(200).json(req.record);

 });
module.exports = router