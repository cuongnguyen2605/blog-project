const articleRepo = require('../../app/articles/article-repository');
let articleRepository = new articleRepo();

module.exports = (req, res, next) => {
    // articleRepository.getAuthorId(req.params.articleId).then((articleAuthor) => {
    //     console.log(articleAuthor);
    // });
    // console.log(req.session.user_id);
    if (articleRepository.getAuthorId(req.params.articleId) === req.session.user_id || req.session.role === "moderators") {
        return next();
    }

    res.redirect('/');
};