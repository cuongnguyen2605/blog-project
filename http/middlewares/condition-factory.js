const SearchAdvance = require('../../app/search/search-advance');
let searchAdvance = new SearchAdvance();

module.exports = (req, res, next)=>{
      searchAdvance.setTitle(req.condition.title);
    searchAdvance.setAuthor(req.condition.author);
    searchAdvance.setStartDate(req.condition.start);
    searchAdvance.setEndDate(req.condition.end);
    req.searchAdvance = searchAdvance;
    next();
}