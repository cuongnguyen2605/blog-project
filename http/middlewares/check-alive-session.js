const md5 = require('md5');
module.exports = (req, res, next)=>{
    if(req.cookies.status === md5('yes')){
        next();
    }
    else{
        return res.render('page-not-found',{});
    }
}