const mysqlConnection = require('../../database/mysql-connection');
const CommentService = require('../../app/comments/comment-service');

const commentService = new CommentService(mysqlConnection);

getComment = (req, res, next) => {
    commentService.getComment(req.params.id)
        .then((comment) => {
            res.render('comment', {
                comment: comment
            });
        })
        .catch(next)
};

createComment = (req, res, next) => {
    commentService.createComment(req.comment)
        .then(() => {
            res.redirect('/articles/detail/' + req.params.article_id);
        })
        .catch(next)
};

deleteComment = (req, res, next) => {
    commentService.deleteComment(req.params.comment_id)
        .then(() => {
            res.redirect('/articles/detail/' + req.params.article_id);
        })
        .catch(next)
};

exports.getComment = getComment;
exports.createComment = createComment;
exports.deleteComment = deleteComment;