'use strict';
const express = require('express');
const bcrypt = require('bcrypt');

const router = express.Router();
const signupMiddle= require('../middlewares/signup.middle')
const autheModel = require('../models/auth.model')
router.post('/signup', async (req, res) => {
 
  console.log(req.body);
  console.log('inside try',req.body);
  req.body.password = await bcrypt.hash(req.body.password, 10);
  console.log(req.body.password);
  console.log('inside try------->',req.body);
    try {
     
        req.body.password = await bcrypt.hash(req.body.password, 10);
        
        const record = await autheModel.create(
          req.body
        );
        console.log('record',record);
        res.status(200).json(record);
        // next()
      } catch (e) {
        // next('error in signup')
           res.status(403).send("Error Creating User"); 
    }
  // console.log(req.body);

  //   res.status(200).json(record);
 });
module.exports = router