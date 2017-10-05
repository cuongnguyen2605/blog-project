const Registrator = require('../../app/auth/Registrator');

let obj = new Registrator();

module.exports = (req, res)=>{
    "use strict";
    if(! req.body.phoneNumber){ // dang ki ko co email ,phoen ,add
        obj.register(req.body.username, req.body.password, req.body.fullname);
    }
    else {
        obj.register( // dang ki day du
              req.body.username
            , req.body.password
            , req.body.fullname
            , req.body.phoneNumber
            , req.body.email
            , req.body.address
            );

    }
    res.render('signup',{message: 'signup successfuly'});
}