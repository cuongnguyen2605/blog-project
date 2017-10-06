const Comment = require('../../app/comments/comment')

module.exports = (req, res, next) => {
    let content = req.body.content;
    let create_at = new Date();

    req.checkBody('content', 'Content is null.');

    let errors = req.validationErrors();

    if (errors) {
        res.render('comment', {
            errors: errors
        });
    } else {
        req.comment = new Comment(content, create_at);
        console.log(req.comment);
        // next();
    }
}