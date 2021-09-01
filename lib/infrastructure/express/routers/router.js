const express = require('express');
const router = express.Router();
const discount= require('./v1/discount');
const user = require('./v1/user');
const {authHandlerSymbol}=require('../../config/constant').SECURITY
const Dependencies= require('../../../interface/DI/initiateDependencies');
const authHandler=Dependencies[authHandlerSymbol]
console.log(authHandler.validation)
router.use('/api/v1/user', user);
router.use('/api/v1/product/discount',authHandler.validation, discount);



module.exports = router;
