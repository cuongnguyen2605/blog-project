
module.exports = (req, res)=>{
    "use strict";
    req.registrator.register();
    res.render('signup',{message: 'signup successfuly'});
}