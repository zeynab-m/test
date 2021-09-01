const {userControllerSymbol,discountControllerSymbol}= require('../../../infrastructure/config/constant').CONTROLLER
const {userServiceSymbol,discountServiceSymbol}= require('../../../infrastructure/config/constant').SERVICE
const {expressUserController}= require('../../../infrastructure/express/controllers/user')
const {expressDiscountController}= require('../../../infrastructure/express/controllers/discount')

module.exports=(diContainer)=> {

    diContainer.constructor(userControllerSymbol, {dependency:[userServiceSymbol],conn:expressUserController});
    diContainer.constructor(discountControllerSymbol, {dependency:[discountServiceSymbol],conn:expressDiscountController});
}



