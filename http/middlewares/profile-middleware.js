const Profile = require('../../app/profiles/profile');

let profile = new Profile();

module.exports = function (req, res, next) {
    let fullname = req.body.fullname;
    let email = req.body.email;

    req.checkBody('fullname', 'Fullname is require.').notEmpty();
    req.checkBody('email', 'Email is require.').notEmpty();
    req.checkBody('email', 'Email is wrong format').isEmail();

    let errors = req.validationErrors();

    if (errors) {
        res.redirect('/profile/' + req.params.username);
    }
    else {
        profile.setFullname(fullname);
        profile.setUsername(req.params.username);
        profile.setEmail(email);
        profile.setAddress(req.body.address);
        req.profile = profile;
        next();
    }
};