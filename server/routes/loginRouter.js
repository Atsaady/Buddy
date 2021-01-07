const express=require('express');
var router= express.Router();
const mongoose= require('mongoose');
const Schema=mongoose.Schema;
const coneectionString='mongodb+srv://Nivo11:sheleg11@cluster0.k9bri.mongodb.net/Buddy_db?retryWrites=true&w=majority';
mongoose.connect(coneectionString,{ useUnifiedTopology: true, useNewUrlParser: true  });
const User=require('../schema/userSchema')
                                     



router.post('/',function(request,response){
    User.insertMany([{
        name:request.body.userName,
        lastName:"1",
        email:"1",
        password:request.body.password,
        isAdmin:false
    }])
    response.send({messege:'hi'});

});

router.get('/',(request,response)=>{
console.log(User.find());

});

module.exports=router;