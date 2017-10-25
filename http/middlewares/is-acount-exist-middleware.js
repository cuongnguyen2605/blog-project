const CredentialService = require('../../app/credentials/credential-service');
let credentialService = new CredentialService();
module.exports = (req, res, next)=>{
  credentialService.checkUsername(req.listValue)
      .then(result=>{
          console.log(result);
          if(!result[0]){
              next();
          }
          else return res.render('signup',{message: '55', listValue: req.listValue});
      })
}