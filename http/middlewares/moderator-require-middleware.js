module.exports = (req, res, next) => {
    if (req.session.role !== "moderator") {
        res.redirect('/');
    }
    next();
};
