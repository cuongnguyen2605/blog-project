//const Credential = require('../../app/credentials/credential');
const md5 = require('md5');
module.exports = (req, res, next)=>{
    let checkPass = /^[a-zA-Z0-9!@#$%^&*]{5,15}$/;
    let checkPhone =/^0.[0-9]{8,10}$/;
    let checkGmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let listValue ={
        username: req.body.username.trim(),
        fullname: req.body.fullname.trim(),
        password: req.body.password,
        passwordConfirm: req.body.passwordConfirm,
        phone : req.body.phoneNumber,
        email : req.body.email.trim(),
        address: req.body.address.trim()
    };
    if(!listValue.fullname){
       return res.render('signup',{message: '4', listValue: listValue});
    }
    if(!listValue.username){
        return res.render('signup',{message: 'Please enter username again',listValue: listValue});
    }
    if(!listValue.password || !checkPass.test(listValue.password)){
        return res.render('signup',{message: '1',listValue: listValue});
    }
    if(!listValue.passwordConfirm || !checkPass.test(listValue.passwordConfirm)){
        return res.render('signup',{message: 'you password must between 6 to 16 character'
                                    ,listValue: listValue});
    }
    if(listValue.password !== listValue.passwordConfirm){

        return res.render('signup',{message: 'password and confirm password different'
                            ,listValue: listValue});
    }
    if(listValue.phoneNumber && !checkPhone.test(listValue.phoneNumber)){
        return res.render('signup',{message: '2',listValue: listValue});
    }
    if(listValue.email && !checkGmail.test(listValue.email)){
        return res.render('signup',{message: '3',listValue: listValue});
    }
    req.listValue = listValue;
    console.log(listValue);
    next();

};