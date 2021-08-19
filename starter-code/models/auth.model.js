'use strict';
const autheModel= (sequelize, DataTypes) => {
    const model = sequelize.define('lab6', {
      username: { type: DataTypes.STRING, required: true, unique: true },
      password: { type: DataTypes.STRING, required: true },
      
    }); 
    return model;
  }
  
  module.exports = autheModel;