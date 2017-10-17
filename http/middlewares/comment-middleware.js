const Comment = require('../../app/comments/comment');

module.exports = (req, res, next) => {
    let comment = req.body.comment;

    req.checkBody('comment', 'Content is not empty!').notEmpty();

    let error = req.validationErrors();

    if (error) {
        res.redirect('/articles/detail/' + req.params.article_id);
    } else {
        req.comment = new Comment(comment, new Date());
        req.comment.setUserId(req.session.user_id);
        req.comment.setArticleId(req.params.article_id);
        next();
    }
};