const bcrypt = require('bcrypt');
const autheModel = require('../models/auth.model');
// const { Sequelize, DataTypes } = require('sequelize');
// let sequelize = new Sequelize("postgres://localhost:5432/user", {});
// const modelDB = new autheModel(sequelize, DataTypes)
module.exports = async (req,res,next)=>{

  console.log(req.body);
  console.log('inside try',req.body);
  req.body.password = await bcrypt.hash(req.body.password, 10);
  console.log(req.body.password);
  console.log('inside try------->',req.body);
    try {
     
        req.body.password = await bcrypt.hash(req.body.password, 10);
        
        const record = await autheModel.create({
          username : req.body.username,
          password: req.body.password
        });
        console.log('record',record);
        // res.status(200).json(record);
        next()
      } catch (e) {
        next('error in signup')
        //    res.status(403).send("Error Creating User"); 
    }
    // try {
    //   let userRecord = await users.create(req.body);
    //   console.log('userRecord--------->',userRecord);
    //   const output = {
    //     user: userRecord,
    //     token: userRecord.token
    //   };
    //   res.status(201).json(output);
    // } catch (e) {
    //   next(e.message)
    // }

}

