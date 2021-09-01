const {authHandlerSymbol}= require('../../../infrastructure/config/constant').SECURITY
const JwtTokenManager= require('../../../infrastructure/security/JwtTokenManager')

module.exports=(diContainer)=> {

    diContainer.constructor(authHandlerSymbol, {dependency:[],conn:JwtTokenManager});
}



