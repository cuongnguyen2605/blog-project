module.exports = (req, res, next) => {
    // if(logined && role== 'moderator'){
    //     next();
    // }
    // else {
    //     res.redirect('/login');
    // }
    next();
};