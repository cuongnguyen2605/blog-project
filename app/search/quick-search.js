//Search by key word
const knex= require('../../database/knex-connection');

class QuickSearch{
    setValue(value){
        this.value = value;
    }
    getValue(){
        return this.value;
    }
    getQuery(){
        return knex.table('articles').innerJoin('credentials','articles.author','=','credentials.user_id')
            .whereRaw('articles.title=? or credentials.username=?'
                , [this.getValue(), this.getValue()]);
    }
}

module.exports=QuickSearch;