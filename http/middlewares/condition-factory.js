const SearchAdvance = require('../../app/search/search-advance');
const QuickSearch = require('../../app/search/quick-search');
let searchAdvance = new SearchAdvance();
let quickSearch = new QuickSearch();

exports.quickSearchCondition = (req, res, next) => {
    quickSearch.setValue(req.body.value);
    req.quickSearch = quickSearch;
    next();
};

exports.searchAdvanceCondition = (req, res, next) => {
    searchAdvance.setTitle(req.body.title);
    searchAdvance.setAuthor(req.body.author);
    searchAdvance.setStartDate(req.body.start);
    if (req.body.start === "") {
        searchAdvance.setStartDate('2017-1-1');
    }
    searchAdvance.setEndDate(req.body.end);
    if (req.body.end === "") {
        let currentDate = (new Date()).getFullYear() + '-' + ((new Date()).getMonth() + 1) + '-' + (new Date()).getDate();
        searchAdvance.setEndDate(currentDate);
    }
    req.searchAdvance = searchAdvance;
    next();
};