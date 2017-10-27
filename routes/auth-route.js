const router = require('express').Router();
const SignupValidator = require('../http/middlewares/signup-validator');
const IsExistedAcountMiddleware = require('../http/middlewares/is-acount-exist-middleware');
const SignupController = require('../http/controllers/signup-controller');
const LoginMiddleware = require('../http/middlewares/login-middleware');
//const IsExistedUserMiddleware = require('../http/middlewares/loginMiddleware');
const LoginController = require('../http/controllers/login-controller');
const md5 = require('md5');
// cuc nay cua sign in
router.get('/',(req, res ,next)=>{
    if(req.cookies.status === md5('yes') && req.session.role === 'member'){
        res.redirect('/articles');
    }
    else if(req.cookies.status === md5('yes') && req.session.role === 'moderator'){
        res.redirect('/articles/list');
    }
    else if(req.cookies.status === md5('yes') && req.session.role === 'admin'){
        res.redirect('/admin/credentials');
    }
    else return next();

},(req, res)=>{
    "use strict";
    res.render('login', {message: ""});
});
router.post('/signin', LoginMiddleware, LoginController);
//


// cuc nay la sign up
router.get('/signup',(req, res)=>{
    "use strict";
    res.render('signup',{message:"", listValue:""}) ;
});
router.post('/signup',SignupValidator,IsExistedAcountMiddleware,SignupController);
//

//sign out
router.get('/signout',(req, res)=>{
    res.cookie('status',md5('no'));
    req.session = null;
    res.redirect('/');
});
module.exports= router;