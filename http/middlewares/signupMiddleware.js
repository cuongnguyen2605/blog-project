
module.exports = (req, res, next)=>{
    let listValue ={
        username: req.body.username,
        fullname: req.body.fullname,
        password: req.body.password,
        passwordConfirm: req.body.passwordConfirm,
        phoneNumber: req.body.phoneNumber,
        email : req.body.email,
        address: req.body.address
    };
    req.listValue = listValue;
    

    if(!listValue.fullname){
        res.render('signup',{message: 'Please enter fullname again'});
    }
    if(!listValue.username){
        res.render('signup',{message: 'Please enter username again'});
    }
    if(!listValue.password){
        res.render('signup',{message: 'Please enter password again'});
    }
    if(!listValue.passwordConfirm){
        res.render('signup',{message: 'Please enter confirm password again'});
    }
    if(listValue.password !== listValue.passwordConfirm){
        res.render('signup',{message: 'password and confirm password different'});
    }
    next();

}