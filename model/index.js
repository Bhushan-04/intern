const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize("sequelizedb","root","modric123",{
    host:'localhost',
    // logging:false,
    dialect:'mysql'
});
try {
    sequelize.authenticate();
    console.log("connection has been established successfully");
} catch (error) {
    console.log("connection is not established", error);
}

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require('./User')(sequelize, DataTypes); 
// require('./User')(sequelize, DataTypes);

db.sequelize.sync({force:false})
module.exports = db;