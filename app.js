const express = require('express');
const bodyParser = require('body-parser');
// const User = require('./model/User');
require('./model/index')
var userctrl = require('./controller/userCtrl')
const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// User.sync({force:true});
app.get("/add",userctrl.addUser)
app.get("/user",userctrl.getUsers);
app.get("/user/:id", userctrl.getUser);
app.post("/users", userctrl.postUser);
app.delete("/user/:id", userctrl.userDelete)
app.patch("/user/:id", userctrl.userUpdate)

app.listen(3003, ()=>{
    console.log("heyy server is on");
})
