
module.exports = (req, res, next)=> {
    let a = {
        title: req.body.title,
        author: "",
        created: ""
    };
    if (!req.body.title) {
        res.render('searchAdvance', {message: 'not empty'});

    }

    if (req.body.author) a.author = req.body.author;
    if (req.body.created) a.created = req.body.created;
    req.arr = a;
    next();
}