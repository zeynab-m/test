const {discountControllerSymbol,userControllerSymbol}= require('../../infrastructure/config/constant').CONTROLLER
const {productRepositorySymbol,categoryRepositorySymbol,discountRepositorySymbol}= require('../../infrastructure/config/constant').REPOSITORY
const {cryptoHandlerSymbol}= require('../../infrastructure/config/constant').UTIL
const {authHandlerSymbol}= require('../../infrastructure/config/constant').SECURITY

const diContainer = require('./createContainer')

let dependencies={}
dependencies[authHandlerSymbol]=diContainer.get(authHandlerSymbol)
dependencies[cryptoHandlerSymbol]=diContainer.get(cryptoHandlerSymbol)

dependencies[discountControllerSymbol]=diContainer.get(discountControllerSymbol)
dependencies[userControllerSymbol]=diContainer.get(userControllerSymbol)

dependencies[productRepositorySymbol]=diContainer.get(productRepositorySymbol)
dependencies[categoryRepositorySymbol]=diContainer.get(discountRepositorySymbol)


module.exports=dependencies