const Service = require('../../app/reposity-service/service');
module.exports = (req, res, next)=>{
    "use strict";
    let obj = new Service();
    obj.getServiceSelect('select', req.body.username) // done
        .then(result=>{
            if(result.length == 0) next();
           else res.render('signup',{message:'this acount existed'});
        });
}