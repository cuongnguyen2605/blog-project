const Registrator = require('../../app/resister-service/registrator');


module.exports = (req, res, next)=>{
    "use strict";
    let registrator = new Registrator(req.body.username, req.body.password, req.body.fullname);
    registrator.checkExistedAcount() // done
        .then(result=>{
            if(result.length == 0){
                registrator.setAddress(req.body.address);
                registrator.setEmail(req.body.email);
                registrator.setPhone(req.body.phoneNumber);
                req.registrator = registrator;
                next()
            }
           else res.render('signup',{message:'this acount existed'});
        });
}