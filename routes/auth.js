var express = require('express');
var router = express.Router();
//config
const config =  require('../config');

//jwt
var jwt = require('jsonwebtoken');

/**
 * Receive email and password
 * Find user
 * generate token
 */
router.post('/login', (req, res, next)=> {
    const { email, password } = req.body.userData;

    if( email === undefined || password === undefined ) {
        res.status(401).json({
            sucess : false,
            code : '00101_API_ERROR_01',
            message : "E-mail e/or password invalid."
        });
    } else {
        //find in user mongodb
        let tokenData = {
            id : 101
        }
        let generatedToken = jwt.sign(tokenData, config.JTW_KEY, { expires : 'in'});
        res.json({
            sucess : false,
            token : generatedToken
        })  
    }
});


module.exports = router;