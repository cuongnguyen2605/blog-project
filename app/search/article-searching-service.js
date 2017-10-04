const ArticleSearchingByTitle = require('./article-searching-by-title');
const ArticleSearchingByAuthor = require('./article-searching-by-author');
const ArticleSearchingByTime = require('./article-searching-by-time');
const ArticleSearchingWithNullCondition = require('./article-searching-with-null-condition');

class ArticleSearchingService {
    constructor (){
        this.searchingTypeName =  new Map ();
        this.searchingTypeName.set('searchByTitle', new ArticleSearchingByTitle());
        this.searchingTypeName.set('searchByAuthor', new ArticleSearchingByAuthor());
        this.searchingTypeName.set('searchByDate', new ArticleSearchingByTime());
        this.searchingTypeName.set('noCondition', new ArticleSearchingWithNullCondition());

    }

    search (searchingTypeName, condition) {
        return this.searchingTypeName.get(searchingTypeName).articleSearching(condition);
    }
}

module.exports = ArticleSearchingService;