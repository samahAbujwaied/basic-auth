'use strict'

const autheModel = (sequelize, DataTypes) => sequelize.define('new_users', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true 
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
});
module.exports =autheModel

// 'use strict';
// const clothesData = (sequelize, DataTypes) => sequelize.define('clothes', {
//   name: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   typefood: {
//     type: DataTypes.STRING,
//   },
//   customerId: {
//         type: DataTypes.INTEGER,
//          allowNull: false,
//      }
// });
// module.exports = clothesData;
