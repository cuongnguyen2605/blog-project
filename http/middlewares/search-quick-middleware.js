const QuickSearch = require('../../app/search/quick-search');
let quickSearch = new QuickSearch();
module.exports = (req, res, next)=>{
    if(!req.body.value){
        return res.render('articles-list-with-member',{});
    }
    quickSearch.setValue(req.body.value);
    req.quickSearch = quickSearch;
    next();
}