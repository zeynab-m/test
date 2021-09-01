'use strict';
const discountSchema = require('./validator/schema/discount')
const validation = require('./validator/validator')
const {discountControllerSymbol}=require('../../../config/constant').CONTROLLER
const Dependencies= require('../../../../interface/DI/initiateDependencies');
const discountController=Dependencies[discountControllerSymbol]

const express = require('express');
const router = express.Router();



router.post(
    '/check-product-discount',
    validation.body(discountSchema.check),
    discountController.checkProductDiscount
)



module.exports = router;
