const Registrator = require('../../app/resister-service/registrator');
const Profile = require('../../app/profiles/profile');
let registrators = new Registrator();
module.exports = (req, res, next)=>{
    req.registrator = registrators;
    req.registrator.checkExistedAcount(req.credential)
        .then(result=>{
            if(result === true){
                let profile = new Profile();
                profile.setPhone(req.listValue.phoneNumber);
                profile.setFullname(req.listValue.fullname);
                profile.setEmail(req.listValue.email);
                profile.setAddress(req.listValue.address);
                profile.setUsername(req.listValue.username);
                req.profile= profile;
                next();
            }

            else return res.render('signup',{message:"username existed !"});
        })
}