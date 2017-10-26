module.exports = (req, res, next)=>{
    if(req.cookies.status === 'yes'){
        next();
    }
    else{
        return res.render('page-not-found',{});
    }
}