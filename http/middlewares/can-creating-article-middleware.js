module.exports = (req, res, next) => {
    if (req.session.role === "member" || req.session.role === "moderator") {
        return next();
    }

    res.redirect('login');
};