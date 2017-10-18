
module.exports = (req, res)=>{
    "use strict";
    req.registrator.register(req.credential, req.profile);
    res.render('signup',{message: 'signup successfuly'});
}