const router = require('express').Router();

const articlesMiddleware = require('../http/middlewares/article-data-converter');
const articlesValidator = require('../http/middlewares/article-validator');
const articlesController = require('../http/controllers/article-controller');
const articleStatusConverter = require('../http/middlewares/article-status-converter');
const moderatorRequireMiddleware = require('../http/middlewares/moderator-require-middleware');
// const articleSearchingController = require('../http/controllers/SearchingArticleController');
// const aritcleSearchingDataFilter = require('../middleware/ArticleSearchingDataFilter');

router.get('/', articlesController.getAllArticlesWithMember);

router.get('/detail/:articleId', articlesController.articleDetail);

router.get('/createnew', (req, res) => {
    return res.render('article-creator.ejs');
});

router.post('/savenew', articlesValidator.articleDataRequired, articlesMiddleware.newArticleConverter, articlesController.articleCreating);

router.get('/edit/:articleId', articlesController.getArticle);

router.post('/savechanges/:articleId', articlesValidator.articleDataRequired, articlesMiddleware.articleConverterWithEditing, articlesController.articleEditing);

//Accept, Reject Or Delete a Artilcle
router.get('/list', moderatorRequireMiddleware, articlesController.getAllArticlesWithModerator);

router.get('/accept/:articleId', moderatorRequireMiddleware, articleStatusConverter.acceptedArticle, articlesController.statusChanging);

router.get('/reject/:articleId', moderatorRequireMiddleware, articleStatusConverter.rejectedArticle, articlesController.statusChanging);

router.get('/unreject/:articleId', moderatorRequireMiddleware, articleStatusConverter.waitingArticle, articlesController.statusChanging);

router.get('/delete/:articleId', moderatorRequireMiddleware, articlesController.articleDeleting);

//Search

// router.post('/search', aritcleSearchingDataFilter.searchingDataFilter, articleSearchingController.search);

module.exports = router;