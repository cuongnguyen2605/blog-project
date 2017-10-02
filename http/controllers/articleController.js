const mysqlConnection = require('../../database/knexfile');
const articles = require('../../app/articles/Articles');
const articleRepo = require('../../app/articles/ArticleRepository');

let article = new articles();
let articleRepository = new articleRepo();

module.exports.getAllArticlesWithMember = function (req, res, next) {
    articleRepository.getAllArticles()
        .then((articles) => {
            res.render(__dirname + '/../../views/ArticlesListWithMember.ejs', {articles: articles})
        })
        .catch(next);
}

module.exports.getAllArticlesWithModerator = function (req, res, next) {
    articleRepository.getAllArticles()
        .then((articles) => {
            res.render(__dirname + '/../../views/ArticlesListWithModerator.ejs', {articles: articles})
        })
        .catch(next);
}

module.exports.articleDetail = function (req, res, next) {

    articleRepository.getArticle(req.params.articleId)

        .then((article) => {
            res.render(__dirname + '/../../views/ArticleDetail.ejs', {article: article})
        })
        .catch(next);
}

module.exports.articleCreating = function (req, res) {
    return articleRepository.articleCreating(req.article)
        .then(() => {
            res.redirect('/articles')
        });
}

module.exports.getArticle = function (req, res, next) {
    articleRepository.getArticle(req.params.articleId)
        .then((article) => {
            res.render(__dirname + '/../../views/ArticleEditor.ejs', {article: article})
        })
        .catch(next);
}

module.exports.articleEditing = function (req, res) {
    return articleRepository.articleEditing(req.article)
        .then(() => {
            res.redirect('/articles/detail/' + req.params.articleId)
        });
}

module.exports.articleAccepting = function (req, res) {
    return articleRepository.articleStatusChanging("accepted", req.params.articleId)
        .then(() => {
            res.redirect('/articles/list')
        });
}

module.exports.articleRejecting = function (req, res) {
    return articleRepository.articleStatusChanging("rejected", req.params.articleId)
        .then(() => {
            res.redirect('/articles/list')
        });
}

module.exports.articleUnrejecting = function (req, res) {
    return articleRepository.articleStatusChanging("waiting", req.params.articleId)
        .then(() => {
            res.redirect('/articles/list')
        });
}

module.exports.articleDeleting = function (req, res) {
    return articleRepository.articleDeleting(req.params.articleId)
        .then(() => {
            res.redirect('/articles/list')
        });
}