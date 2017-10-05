const Article = require('../../app/articles/article');

module.exports.newArticleConverter = (req, res, next) => {
    let title = req.body.title;
    let author = req.session.user_id;
    let create_at = new Date();
    let content = req.body.content;
    let status = "waiting";
    if (req.session.role = "moderator") {
        status = "accepted";
    }

    req.checkBody('title', 'Title is not empty.').notEmpty();
    req.checkBody('content', 'Content is not empty.').notEmpty();

    let errors = req.validationErrors();
    if (errors) {
        res.render('article-creator', {errors: errors});
    } else {
        req.article = new Article(title, content);
        req.article.setAuthorId(author);
        req.article.setCreatedDate(create_at);
        req.article.setStatus(status);
        next();
    }
};

module.exports.articleConverterWithEditing = (req, res, next) => {
    let id = req.params.articleId;
    let title = req.body.title;
    let content = req.body.content;

    req.checkBody('title', 'Title is not empty').notEmpty();
    req.checkBody('content', 'Content is not empty').notEmpty();

    let errors = req.validationErrors();
    if (errors) {
        res.render('article-editor', {errors: errors});
    } else {
        req.article = new Article(title, content);
        req.article.setId(id);
        next();
    }
};