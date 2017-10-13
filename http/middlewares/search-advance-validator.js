module.exports = (req, res, next)=>{
    if(!req.body.title || !req.body.author || !req.body.start || !req.body.end){
       return res.render('search-advance',{message: "Please enter fill the fields !"});
    }

    let condition={
        title: req.body.title,
        author: req.body.author,
        start: req.body.start,
        end: req.body.end
    }

    req.condition =  condition;
    next();
}