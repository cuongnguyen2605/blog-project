module.exports.searchingDataFilter = (req, res, next) => {
    if(req.body.title) {
        req.conditionSearcher = {
            condition: req.body.title,
            searchType: "searchByTitle"
        }
        next();
    }
    if(req.body.author) {
        req.conditionSearcher = {
            searchType: "searchByAuthor",
            condition: req.body.author
        }
        next();
    }
    if(req.body.date) {
        req.conditionSearcher = {
            searchType: "searchByDate",
            condition: req.body.date
        }
        next();
    }
    if(!req.body.title && !req.body.author && !req.body.date) {
        req.conditionSearcher = {
            searchType: "noCondition",
            condition: ""
        }
        next();
    }
}