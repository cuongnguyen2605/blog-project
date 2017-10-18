const Credential = require('../../app/credentials/credential');
module.exports = function (req,res,next) {
    if(!req.body.username){
        return res.render('login',{message: 'Please enter username'});
    }
    if(!req.body.password){
        return res.render('login',{message: 'Please enter password'});
    }
    let credential = new Credential(req.body.username, req.body.password);

    req.credential = credential;
    next();
};