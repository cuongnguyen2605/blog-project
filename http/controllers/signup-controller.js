const Registrator = require('../../app/resister-service/registrator');
let registrator = new Registrator();
module.exports = (req, res)=>{
    "use strict";

    registrator.register(req.listValue)
        .then((profile)=>{
            if(profile.getUsername() === req.listValue.username){
                return res.render('login',{message:"Signup successfully"});
            }
        })
}