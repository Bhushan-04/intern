// const User = require("../model/User");
var db = require('../model');
var User = db.user

var addUser = async (req, res) =>{
    // const jane = User.build({firstName: "Jane", lastName:"singh"});
    const jane = await User.create({firstName:"RObin", lastName:"alex"})
    console.log(jane instanceof User)
    console.log(jane.firstName);
    // await jane.save();
    console.log("Jane was saved to the database");
    console.log(jane.toJSON());
    res.status(200).json(jane.toJSON());
}
var getUsers = async (req, res) =>{
    const data = await User.findAll({});
    res.status(200).json({data})
}

var getUser = async (req, res) =>{
    const data = await User.findOne({
        where:{
            id: req.params.id
        }
    });
    res.status(200).json({data:data})
}

var postUser = async (req, res) =>{
    const postData = req.body;
    if(postData.length> 1){
        var data = await User.createBulk(postData);
    }
    else{
        var data = await User.create(postData);
    }
    res.status(200).json(data);
}

var userDelete = async (req, res) =>{
    const data = await User.destroy({
        where:{
            id: req.params.id
        }
    });
    res.status(200).json("selected data has been deleted")
}

var userUpdate = async (req, res) =>{
    const pdata = req.body;
    var data = await User.update(pdata, {
        where:{
            id: req.params.id
        }
    })
    res.status(200).json(data);
}

module.exports = {
    addUser,
    getUsers,
    getUser,
    postUser,
    userDelete,
    userUpdate
}