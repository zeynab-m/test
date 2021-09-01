'use strict';
const userSchema = require('./validator/schema/user')
const validation = require('./validator/validator')
const {userControllerSymbol}=require('../../../config/constant').CONTROLLER
const Dependencies= require('../../../../interface/DI/initiateDependencies');
const userController=Dependencies[userControllerSymbol]

const express = require('express');
const router = express.Router();



router.post(
    '/register',
    validation.body(userSchema.register),
    userController.register
)

router.post(
    '/login',
    validation.body(userSchema.login),
    userController.login
)


module.exports = router;
