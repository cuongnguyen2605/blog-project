const Credential = require('../../app/credentials/credential');

module.exports = function (req, res) {
    let acount = new Credential(req.body.username, req.role);
    req.session.username = acount.getUsername();
    req.session.role = acount.getRole();
    req.session.user_id = req.user_id;
    res.cookie('status', 'yes');
    if(acount.getRole() === 'member'){
        res.redirect('/articles'); //render den trang tuong ung
    }
    if(acount.getRole() === 'moderator'){
        res.redirect('/articles/list');
    }
    if(acount.getRole() === 'admin'){
        res.redirect('/admin/credentials');
    }
    if(acount.getRole() === 'banner'){
        res.render('page-not-found',{});
    }
}