const Searcher = require('../../app/search/article-searching-service');
let searcher = new Searcher();

module.exports.search = (req, res, next) => {
    searcher.search(req.searchCondition.searchType, req.searchCondition.condition)
        .then((articles) => {
            res.render('articles-list-with-member', {
                articles: articles,
                username: req.session.username
                ,role: req.session.role
            })
        }).catch(next);
};