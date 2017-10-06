const ArticleSearchingService = require('../../app/search/article-searching-service');
const Service = require('../../app/reposity-service/service');
let articleSearchingService = new ArticleSearchingService();
let service = new Service();
module.exports.search = (req, res, next) => {
    articleSearchingService.search(req.conditionSearcher.searchType, req.conditionSearcher.condition)
        .then((articles) => {
            res.render('articles-list-with-member', {
                articles: articles,
                username: req.session.username
                ,role: req.session.role
            })
        }).catch(next);
};

//
module.exports.searchAdvance = (req, res)=>{

  service.getServiceSearch(req.arr).then(articles=>{
          res.render('articles-list-with-member', {articles: articles
                                                    ,username: req.session.username
                                                    ,role: req.session.role});
  });
}