const knex = require('../../database/knex-connection');
const md5 = require('md5');

class Insertion{ // insertion done
    run(username, password,fullname, phoneNumber,email, address){
       switch(arguments.length){
           case 3:
                 knex.raw('insert into credentials values(?, ?, ?, ?)'
                    ,[null,username, md5(password), 'member'])
                    .then(()=>{
                         knex.select().from('credentials').where('username',username)
                            .then(result=>{
                               return knex.insert({profile_id: null,user_id: result[0].user_id,fullname: fullname,
                               phone: null, email: null, address: null, created: knex.fn.now()}).into('profiles');
                            })
                    });
            break;
           case 6:
                knex.raw('insert into credentials values(?, ?, ?, ?)'
                   ,[null,username, md5(password), 'member'])
                   .then(()=>{
                       knex.select().from('credentials').where('username',username)
                           .then(result=>{
                               return knex.insert({profile_id: null,user_id: result[0].user_id,
                                   fullname: fullname,
                                   email: email, phone: phoneNumber, address: address
                                    ,created: knex.fn.now()})
                                   .into('profiles');
                           })
                   });
               break;

       }
    }
}
 module.exports = Insertion;