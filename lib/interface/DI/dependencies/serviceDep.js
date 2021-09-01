const {userServiceSymbol,discountServiceSymbol}= require('../../../infrastructure/config/constant').SERVICE
const {userRepositorySymbol,categoryRepositorySymbol,productRepositorySymbol}= require('../../../infrastructure/config/constant').REPOSITORY
const {userEntitySymbol}= require('../../../infrastructure/config/constant').ENTITY
const {cryptoHandlerSymbol}= require('../../../infrastructure/config/constant').UTIL
const {authHandlerSymbol}= require('../../../infrastructure/config/constant').SECURITY
const {userService}= require('../../../application/use_case/user')
const {discountService}= require('../../../application/use_case/discount')


module.exports=(diContainer)=> {

    diContainer.constructor(userServiceSymbol, {dependency:[userRepositorySymbol,userEntitySymbol,cryptoHandlerSymbol,authHandlerSymbol],conn:userService});
    diContainer.constructor(discountServiceSymbol, {dependency:[productRepositorySymbol,categoryRepositorySymbol],conn:discountService});

}



