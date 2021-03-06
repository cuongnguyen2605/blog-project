const Searcher = require('../../app/search/searcher');
let searcher = new Searcher();
module.exports = (req, res) => {
    searcher.search(req.searchAdvance)
        .then(articles => {
            res.render('articles-list-with-member',
                {
                    articles: articles,
                    username: req.session.username,
                    role: req.session.role,
                    user_id: req.session.user_id
                });
        })
};