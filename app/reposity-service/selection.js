const knex = require("../../database/knex-connection");
class Selection{

    run(username, password){ // overload run func
        switch(arguments.length){
            case 0:
                return knex.from('articles')
                    .innerJoin('credentials','credentials.user_id','articles.author');
           break;
            case 1:
                return knex.from('profiles')
                    .innerJoin('credentials','credentials.user_id','profiles.user_id')
                    .where('credentials.username', username);
            break;
            case 2:
                return knex('credentials').where('username', username)
                    .andWhere('password',password);
             break;
        }

    }
    dance(article_id){
        return knex.from('articles')
            .innerJoin('credentials','credentials.user_id','articles.author')
            .where('article_id', article_id);

    }



}
// var a = new Selection();
// a.dance(1).then(result=>{
//     "use strict";
//     console.log(result);
// }) //done

module.exports = Selection;
