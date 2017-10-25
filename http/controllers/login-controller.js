const Authenticator  = require('../../app/auth/Authenticator');
let auth = new Authenticator();
module.exports = function (req, res) {
    auth.authenticate(req.credentialRaw)
        .then(result=>{
            if(result === false){
                 return res.render('login',{message: " Username or password is not correct!"});
             }
             if(result.getRole() === 'banner'){
                 return res.render('login',{message: " Your account was banned!"});
             }
             //set cookie and session
            req.session.username = result.getUsername();
            req.session.role = result.getRole();
            req.session.user_id = result.getUserId();
            res.cookie('status','yes');
            //
             if(result.getRole() === 'member'){
                 return res.redirect('/articles');
             }
             if(result.getRole() === 'moderator'){
                 return res.redirect('articles/list');
             }
             if(result.getRole() === 'admin'){
                 return res.redirect('/admin/credentials');
             }
        });


};