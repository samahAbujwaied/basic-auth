const bcrypt = require('bcrypt');
const base64 = require('base-64');
const AutheModel = require('../models/auth.model')
module.exports = async (req,res,next)=>{
  if (!req.headers.authorization) { return _authError(); }
    let basicHeaderParts = req.headers.authorization.split(' ').pop();  // ['Basic', 'sdkjdsljd=']
    let [username, password] = base64.decode(basicHeaderParts).split(':'); // username, password

    try {
        const user = await AutheModel.findOne({ where: { username: username } });
        console.log(user.password , password);
        const valid = await bcrypt.compare(password, user.password);

        if (valid) {next()}
        else {next('Invalid UserName and Password')}
      } catch (error){next('error in signin') }

    
     
}
