const knex = require("../../database/knex-connection");
class Selection{

    run(username, password){ // overload run func
        switch(arguments.length){
            case 0:
                return knex.from('comments')
                    .innerJoin('credentials','credentials.user_id','comments.user_id')
                    .innerJoin('articles','articles.article_id', 'comment.article_id');
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

    //option select Article
    dance(arr){
        // get length of arr
            let count = 0;
            for(let i in arr){
                if(arr[i] !== null && arr[i] !== undefined && arr[i] !== ""){
                    count++;
                }
            }
        switch(count){
            case 1:
                return knex.select().from('articles').where('title','like','%'+arr.title+'%');
            break;
            case 2:
                return knex.select().from('articles')
                        .innerJoin('credentials','credentials.user_id','articles.author')
                    .where('username','like','%'+arr.author+'%')
                    .andWhere('title','like','%'+arr.title+'%');
            break;
            case 3:
                return knex.select().from('articles')
                    .innerJoin('credentials','credentials.user_id','articles.author')
                    .where('username','like','%'+arr.author+'%')
                    .andWhere('title','like','%'+arr.title+'%')
                    .andWhere('create_at','like','%'+arr.created+'%');
        }
    }



}
// var  test = {
//     title: 'test',
//     author: "",
//     created: undefined
// }
// var a = new Selection();
// a.dance(test).then(result=>{
//     "use strict";
//     console.log(result);
// }) //done

module.exports = Selection;
