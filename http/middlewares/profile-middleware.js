const Profile = require('../../app/profiles/profile');

module.exports = function (req, res, next) {
    let fullname = req.body.fullname;
    let email = req.body.email;
    let phone = req.body.phone;
    let address = req.body.address;
    let username = req.params.username;

    // req.checkBody('fullname', 'Fullname is require.').notEmpty();
    // req.checkBody('email', 'Email is require').notEmpty();
    //
    // let errors = req.validationErrors();
    //
    // if (errors) {
    //     res.render('profile', {
    //         errors: errors
    //     });
    // } else {
    req.profile = new Profile(fullname, username, email, phone, address);
    next();
    // }
};