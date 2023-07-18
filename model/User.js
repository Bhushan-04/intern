// const {DataTypes} = require('sequelize');

// const sequelize = require(".");

// const sequelize = require('./index')
module.exports = (sequelize, DataTypes) =>{
const User = sequelize.define('user', {
    firstName:{
        type: DataTypes.STRING,
        allowNull:false
    },
    lastName:{
        type: DataTypes.STRING
    }
},{
    //other model options
    //   class extends method required model options
    tableName:'users',
    // timestamps:false
    createdAt:false,
    updatedAt:true
});
return User
}
// module.exports = User;
 
