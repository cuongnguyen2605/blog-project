
module.exports = (req, res, next)=>{
    let checkPass = /^[A-Z]{1}.[a-zA-Z0-9!@#$%^&*]{6,15}$/;
    let checkPhone =/^0.[0-9]{8,10}$/;
    let checkGmail = /^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/;
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
    if(!listValue.password || !checkPass.test(listValue.password)){
        res.render('signup',{message: '1'});
    }
    if(!listValue.passwordConfirm || !checkPass.test(listValue.passwordConfirm)){
        res.render('signup',{message: 'you must capitalize the first character, the number of password between 8 to 16 character'});
    }
    if(listValue.password !== listValue.passwordConfirm){
        res.render('signup',{message: 'password and confirm password different'});
    }
    if(!checkPhone.test(listValue.phoneNumber)){
        res.render('signup',{message: '2'});
    }
    if(!checkGmail.test(listValue.email)){
        res.render('signup',{message: '3'});
    }

    next();

}