const knex= require('../../database/knex-connection');

class SearchAdvance {
    setTitle(title){
        this.title = title;
    }
    getTitle(){
        return this.title;
    }
    setAuthor(author){
        this.author = author;
    }
    getAuthor(){
        return this.author;
    }
    setStartDate(start){
        this.start = start;
    }
    getStartDate(){
        return this.start;
    }
    setEndDate(end){
        this.end = end;
    }
    getEndDate(){
        return this.end;
    }
    getQuery(){
        return knex.table('articles').innerJoin('credentials','articles.author','=','credentials.user_id')
            .whereRaw('articles.title=? and credentials.username=? and create_at between ? and ?'
            , [this.getTitle(),this.getAuthor(),this.getStartDate(), this.getEndDate()]);
    }
}

module.exports = SearchAdvance;