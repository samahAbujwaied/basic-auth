const bcrypt = require('bcrypt');
const base64 = require('base-64');
const autheModel = require('../models/auth.model');
module.exports = async (req,res,next)=>{
       console.log('req.headers.authorization',req.headers.authorization);
    let basicHeaderParts = req.headers.authorization.split(' ');  // ['Basic', 'sdkjdsljd=']
    console.log(basicHeaderParts);
    let encodedString = basicHeaderParts.pop();  // sdkjdsljd=
    let decodedString = base64.decode(encodedString); // "username:password"
    let [username, password] = decodedString.split(':'); // username, password
    try {
        const user = await autheModel.findOne({ where: { username: username } });
        const valid = await bcrypt.compare(password, user.password);
        console.log('user error ', user);
        console.log(valid);
        if (valid) {
        //   res.status(200).json(user);
        console.log(valid);
        next()
        }
        else {
        //   throw new Error('Invalid User')
        next('Invalid UserName and Password')
        }
      } catch (error)
       {
            // res.status(403).send("Invalid Login");
            next('error in signin')
         }

}

