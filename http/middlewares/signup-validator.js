const Credential = require('../../app/credentials/credential');
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
    if(!listValue.fullname){
       return res.render('signup',{message: '4'
                                    ,fullname: listValue.fullname
                                    ,username: listValue.username
                                    ,password: listValue.password
                                    , email: listValue.email
                                    , phone: listValue.phoneNumber
                                    , address: listValue.address});
    }
    if(!listValue.username){
        return res.render('signup',{message: 'Please enter username again'
                                    ,fullname: listValue.fullname
                                    ,username: listValue.username
                                    ,password: listValue.password
                                    , email: listValue.email
                                    , phone: listValue.phoneNumber
                                    , address: listValue.address});
    }
    if(!listValue.password || !checkPass.test(listValue.password)){
        return res.render('signup',{message: '1'
                                    ,username: listValue.username
                                    ,password: listValue.password
                                    , email: listValue.email
                                    , phone: listValue.phoneNumber
                                    ,fullname: listValue.fullname
                                    , address: listValue.address});
    }
    if(!listValue.passwordConfirm || !checkPass.test(listValue.passwordConfirm)){
        return res.render('signup',{message: 'you must capitalize the first character, the number of password between 8 to 16 character'
                                    ,fullname: listValue.fullname
                                    ,username: listValue.username
                                    ,password: listValue.password
                                    , email: listValue.email
                                    , phone: listValue.phoneNumber
                                    , address: listValue.address});
    }
    if(listValue.password !== listValue.passwordConfirm){

        return res.render('signup',{message: 'password and confirm password different'
                                    ,username: listValue.username
                                    ,password: listValue.password
                                    , email: listValue.email
                                    , phone: listValue.phoneNumber
                                    ,fullname: listValue.fullname
                                    , address: listValue.address});
    }
    if(listValue.phoneNumber && !checkPhone.test(listValue.phoneNumber)){
        return res.render('signup',{message: '2'
                                    ,username: listValue.username
                                    ,password: listValue.password
                                    , email: listValue.email
                                    , phone: listValue.phoneNumber
                                     ,fullname: listValue.fullname
                                    , address: listValue.address});
    }
    if(listValue.email && !checkGmail.test(listValue.email)){
        return res.render('signup',{message: '3'
                                    ,username: listValue.username
                                    ,password: listValue.password
                                    , email: listValue.email
                                    , phone: listValue.phoneNumber
                                    ,fullname: listValue.fullname
                                    , address: listValue.address});
    }
    req.credential = new Credential(listValue.username, listValue.password);
    req.listValue = listValue;
    next();

};