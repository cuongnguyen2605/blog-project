module.exports = (req, res, next) => {
    // if(logined && role== 'admin'){
    //     next();
    // }
    // else {
    //     res.redirect('/login');
    // }
    next();
};