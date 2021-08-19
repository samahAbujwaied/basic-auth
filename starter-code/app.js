'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const autheModel = require('./models/auth.model');
const POSTGRES_URI = "postgres://localhost:5432/user";
let sequelize = new Sequelize(POSTGRES_URI, {});

const AutheModel = autheModel(sequelize, DataTypes);

module.exports={
  db:sequelize ,
  AutheModel:AutheModel
}