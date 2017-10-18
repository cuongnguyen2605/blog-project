const Authenticator  = require('../../app/auth/Authenticator');
const Banner = require('../../app/credentials/banner');
const Member = require('../../app/credentials/member');
const Moderator = require('../../app/credentials/moderator');
const Admin = require('../../app/credentials/admin');
let auth = new Authenticator();
module.exports = function (req, res) {
    auth.authenticate(req.credential)
        .then(result=>{ // la 1 instance of admin, mod, member
            if(result === 0){
               return res.render('login', {message: "your acount not exist!"});
            }
            if(result instanceof Banner){
               return res.render('login', {message: "your acount was banned !"});
            }
            // set session and cookie
            req.session.username = result.getUsername();
            req.session.role = result.getRole();
            req.session.user_id = result.getUserId();
            res.cookie('status','yes');
            //
            if(result instanceof Admin){
              return res.redirect('/admin/credentials');
            }
            if(result instanceof Member){
                return res.redirect('/articles');
            }
            if(result instanceof Moderator){
                return res.redirect('articles/list');
            }
        })

};