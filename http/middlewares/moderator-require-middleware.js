module.exports = (req, res, next) => {
    if (req.session.role !== "moderators") {
        res.redirect('login');
    }
    next();
};