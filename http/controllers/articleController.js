const articles = require('../../app/articles/Articles');
const articleRepo = require('../../app/articles/ArticleRepository');

let articleRepository = new articleRepo();

module.exports.getAllArticlesWithMember = (req, res, next) => {
    articleRepository.getAllArticles()
        .then((articles) => {
            res.render(__dirname + '/../../views/ArticlesListWithMember.ejs', {articles: articles});
        })
        .catch(next);
}

module.exports.getAllArticlesWithModerator = (req, res, next) => {
    articleRepository.getAllArticles()
        .then((articles) => {
            res.render(__dirname + '/../../views/ArticlesListWithModerator.ejs', {articles: articles});
        })
        .catch(next);
}

module.exports.articleDetail = (req, res, next) => {

    articleRepository.getArticle(req.params.articleId)
        .then((article) => {
            res.render(__dirname + '/../../views/ArticleDetail.ejs', {article: article});
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
            res.render(__dirname + '/../../views/ArticleEditor.ejs', {article: article});
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