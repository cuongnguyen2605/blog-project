const express = require('express');
const router = require('express').Router();

const articlesMiddleware = require('../http/middlewares/articlesDataConverter');
const articlesValidator = require('../http/middlewares/articleValidator');
const articlesController = require('../http/controllers/articleController');
// const articleSearchingController = require('../http/controllers/SearchingArticleController');
// const aritcleSearchingDataFilter = require('../middleware/ArticleSearchingDataFilter');

router.get('/', articlesController.getAllArticlesWithMember);

router.get('/list', articlesController.getAllArticlesWithModerator);

router.get('/detail/:articleId', articlesController.articleDetail);

router.get('/createnew', (req, res) => {
    return res.render('ArticleCreator.ejs');
});

router.post('/savenew', articlesValidator.articleDataRequired, articlesMiddleware.newArticleConverter, articlesController.articleCreating);

router.get('/edit/:articleId', articlesController.getArticle);

router.post('/savechanges/:articleId', articlesValidator.articleDataRequired, articlesMiddleware.articleConverterWithEditing, articlesController.articleEditing);

//Accept, Reject Or Delete a Artilcle
router.get('/accept/:articleId', articlesController.articleAccepting);

router.get('/reject/:articleId', articlesController.articleRejecting);

router.get('/unreject/:articleId', articlesController.articleUnrejecting);

router.get('/delete/:articleId', articlesController.articleDeleting);

//Search

// router.post('/search', aritcleSearchingDataFilter.searchingDataFilter, articleSearchingController.search);

module.exports = router;