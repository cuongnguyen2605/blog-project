const Profile = require('../../app/profiles/profile');

module.exports = function (req, res, next) {
    let fullname = req.body.fullname;
    let email = req.body.email;
    let phone = req.body.phone;
    let address = req.body.address;

    req.checkBody('fullname', 'Fullname is require.');
    req.checkBody('email', 'Email is require');

    let errors = req.validationErrors();

    if (errors) {
        res.render('profile', {
            errors: errors
        });
    } else {
        req.profile = new Profile(fullname, email, phone, address);
        console.log(req.profile);
        next();
    }
}