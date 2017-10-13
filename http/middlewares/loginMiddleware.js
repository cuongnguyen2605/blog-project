const Authenticator = require('../../app/auth/Authenticator');
const md5 = require('md5');
module.exports = function (req,res,next) {
  let username = req.body.username;
  let password = req.body.password;
    let obj =  new Authenticator(username, password);
    obj.authenticate()
        .then(result=>{
            console.log(result);
            if(!result[0]) {
                res.render('login',{message: "Acount not exist"});
            }
            else{
                req.role = result[0].role;
                req.user_id = result[0].user_id;
                next();
            }
        });
};