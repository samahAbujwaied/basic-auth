const bcrypt = require('bcrypt');

const {AutheModel} = require('../app')
module.exports = async (req,res,next)=>{

    try {
        req.body.password = await bcrypt.hash(req.body.password, 10);
        req.record = await AutheModel.create(req.body);
        next()
      } catch (e) {
        next('error in signup') 
    }
}

