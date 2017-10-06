module.exports = (req, res, next) => {
    if (req.session.role !== "admin") {
        res.redirect('/');
    }

    next();
};