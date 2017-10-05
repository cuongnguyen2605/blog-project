const articleRepo = require('../../app/articles/article-repository');
let articleRepository = new articleRepo();

module.exports = (req, res, next) => {
    if (articleRepository.getAuthorId(req.params.articleId) === req.session.user_id || req.session.role === "moderators") {
        return next();
    }

    res.redirect('login');
};