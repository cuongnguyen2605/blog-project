const router = require('express').Router();
const SignupMiddleware = require('../http/middlewares/signupMiddleware');
const IsExistedAcountMiddleware = require('../http/middlewares/isExistedAcountMiddleware');
const SignupController = require('../http/controllers/signup-controller');
const LoginRequire = require('../http/middlewares/loginRequire');
const IsExistedUserMiddleware = require('../http/middlewares/loginMiddleware');
const LoginController = require('../http/controllers/login-controller');

// cuc nay cua sign in
router.get('/',(req, res)=>{
    "use strict";
    res.render('login', {message: ""});
});
router.post('/signin', LoginRequire,IsExistedUserMiddleware , LoginController);
//


// cuc nay la sign up
router.get('/signup',(req, res)=>{
    "use strict";
    res.render('signup',{message:''}) ;
});
router.post('/signup',SignupMiddleware,IsExistedAcountMiddleware,SignupController);
//

//sign out
router.get('/signout',(req, res)=>{
    res.cookie('status','no');
    res.render('login',{message: ""});
});
module.exports= router;