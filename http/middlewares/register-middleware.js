const Profile = require("../../app/profiles/profile");

module.exports = function (req, res, next) {
    let fullname = req.body.fullname;
    let username = req.body.username;
    let email = req.body.email;
    let phone = req.body.phone;
    let address = req.body.address;
    let created = new Date();

    req.checkBody('fullname', 'Fullname is require.').notEmpty();
    req.checkBody('username', 'Username is require.').notEmpty();
    req.checkBody('email', 'Email is require.').notEmpty();

    let errors = req.validationErrors();

    if (errors) {
        res.render('register', {
            errors: errors
        });
    } else {
        req.profile = new Profile(fullname, username, email, phone, address, created);
        console.log(req.profile);
        next();
    }
};