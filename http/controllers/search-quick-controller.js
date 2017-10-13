const Searcher = require('../../app/search/searcher');
let searcher = new Searcher();
module.exports = (req, res)=>{
    searcher.search(req.quickSearch)
        .then(articles=>{
            res.render('articles-list-with-member',{articles: articles, username: req.session.username, role: req.session.role});
        })
}