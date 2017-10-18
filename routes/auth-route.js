const router = require('express').Router();
const SignupValidator = require('../http/middlewares/signup-validator');
const IsExistedAcountMiddleware = require('../http/middlewares/is-acount-exist-middleware');
const SignupController = require('../http/controllers/signup-controller');
const LoginMiddleware = require('../http/middlewares/login-middleware');
//const IsExistedUserMiddleware = require('../http/middlewares/loginMiddleware');
const LoginController = require('../http/controllers/login-controller');

// cuc nay cua sign in
router.get('/',(req, res)=>{
    "use strict";
    res.render('login', {message: ""});
});
router.post('/signin', LoginMiddleware, LoginController);
//


// cuc nay la sign up
router.get('/signup',(req, res)=>{
    "use strict";
    res.render('signup',{message:''}) ;
});
router.post('/signup',SignupValidator,IsExistedAcountMiddleware,SignupController);
//

//sign out
router.get('/signout',(req, res)=>{
    res.cookie('status','no');
    res.render('login',{message: ""});
});
module.exports= router;