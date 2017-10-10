//Search by key word
const knex= require('../../database/knex-connection');

class quickSearch{
    articleSearching(condition) {
        return knex.select('articles.*','credentials.username')
            .table('articles')
            .leftJoin('credentials',{'credentials.user_id':'articles.author'})
            .where('articles.title','like','%'+condition+'%')
            .orWhere('credentials.username','like','%'+condition+'%')
            .orWhere('articles.content','like','%'+condition+'%');
    }
}

module.exports=quickSearch;