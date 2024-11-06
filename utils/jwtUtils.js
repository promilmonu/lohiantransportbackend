const jwt = require('jsonwebtoken')
const { secretKey } = require('../configuration/jwtConfig')

exports.generateToken = (user) =>{
    const payload={
        id:user._id,
        email:user.email,
        name:user.name
    }

    return jwt.sign(payload, secretKey, {expiresIn:"1h"});
}


