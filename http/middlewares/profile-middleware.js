const Profile = require('../../app/profiles/profile');

let profile = new Profile();

module.exports = function (req, res, next) {
    let fullname = req.body.fullname;
    let username = req.params.username;
    let email = req.body.email;
    let phone = req.body.phone;
    let address = req.body.address;

    req.checkBody('fullname', 'Fullname is require.').notEmpty();
    req.checkBody('email', 'Email is require.').notEmpty();
    req.checkBody('email', 'Email is wrong format').isEmail();

    let errors = req.validationErrors();

    if (errors) {
        res.redirect('/profile/' + username);
    }
    else {
        profile.setFullname(fullname);
        profile.setUsername(username);
        profile.setEmail(email);
        profile.setPhone(phone);
        profile.setAddress(address);
        req.profile = profile;
        next();
    }
};