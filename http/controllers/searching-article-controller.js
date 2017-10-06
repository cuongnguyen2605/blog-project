const ArticleSearchingService = require('../../app/search/article-searching-service');

let articleSearchingService = new ArticleSearchingService();

module.exports.search = (req, res, next) => {
    articleSearchingService.search(req.conditionSearcher.searchType, req.conditionSearcher.condition)
        .then((articles) => {
            res.render('articles-list-with-member', {articles: articles,
                                                    username: req.session.username
                                                    ,role: req.session.role})
        }).catch(next);
};