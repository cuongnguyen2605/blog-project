const knex= require('../../database/knex-connection');

class searchAdvance {
    articleSearching(condition){
        let getArticles = knex.select('articles.*', 'credentials.username')
            .table('articles')
            .leftJoin('credentials',{'credentials.user_id':'articles.author'})
            .where(1,'=',1);

        if(condition.title) {
            getArticles = getArticles.andWhere('articles.title','like','%'+condition.title+'%');
        }

        if(condition.author) {
            getArticles = getArticles.andWhere('articles.title','like','%'+condition.title+'%');
        }

        if(condition.startedDate) {
            getArticles = getArticles.andWhere('articles.title','like','%'+condition.startedDate+'%');
        }

        if(condition.finishedDate) {
            getArticles = getArticles.andWhere('articles.title','like','%'+condition.finishedDate+'%');
        }

        return getArticles;
    }
}

module.exports = searchAdvance;