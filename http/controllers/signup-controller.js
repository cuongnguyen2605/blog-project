
module.exports = (req, res)=>{
    "use strict";
    req.registrator.register(req.credential, req.profile);
    res.render('signup',{message: 'signup successfuly'
                        ,username: req.credential.getUsername()
                        ,password: req.credential.getPassword()
                        , email: req.profile.getEmail()
                        , phone: req.profile.getPhone()
                        ,fullname: req.profile.getFullname()
                        , address: req.profile.getAddress()
                });
}