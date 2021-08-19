'use strict';
const express = require('express');
const router = express.Router();
const signinMiddle= require('../middlewares/signin.middle')

router.post('/signin',signinMiddle, (req, res) => {
  const user = {
    user: req.user,
  };
    res.status(200).json(user);
  });
module.exports = router