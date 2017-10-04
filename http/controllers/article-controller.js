const articles = require('../../app/articles/article');
const articleRepo = require('../../app/articles/article-repository');

let articleRepository = new articleRepo();

module.exports.getAllArticlesWithMember = (req, res, next) => {
    articleRepository.getAllArticles()
        .then((articles) => {
            console.log(articles);
            res.render(__dirname + '/../../views/articles-list-with-member.ejs', {articles: articles});
        })
        .catch(next);
}

module.exports.getAllArticlesWithModerator = (req, res, next) => {
    articleRepository.getAllArticles()
        .then((articles) => {
            res.render(__dirname + '/../../views/articles-list-with-moderator.ejs', {articles: articles});
        })
        .catch(next);
}

module.exports.articleDetail = (req, res, next) => {

    articleRepository.getArticle(req.params.articleId)
        .then((article) => {
            res.render(__dirname + '/../../views/article-detail.ejs', {article: article});
        })
        .catch(next);
}

module.exports.articleCreating = (req, res) => {
    return articleRepository.articleCreating(req.article)
        .then((article_id) => {
            res.redirect('/articles/detail/' + article_id);
        });
}

module.exports.getArticle = (req, res, next) => {
    articleRepository.getArticle(req.params.articleId)
        .then((article) => {
            res.render(__dirname + '/../../views/article-editor.ejs', {article: article});
        })
        .catch(next);
}

module.exports.articleEditing = (req, res) => {
    return articleRepository.articleEditing(req.article)
        .then(() => {
            res.redirect('/articles/detail/' + req.params.articleId);
        });
}

module.exports.statusChanging = (req, res) => {
    return articleRepository.articleStatusChanging(req.article.status, req.article.article_id)
        .then(() => {
            res.redirect('/articles/list');
        });
}

module.exports.articleDeleting = (req, res) => {
    return articleRepository.articleDeleting(req.params.articleId)
        .then(() => {
            res.redirect('/articles/list');
        });
}