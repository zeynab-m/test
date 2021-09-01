const {userRepositorySymbol,categoryRepositorySymbol,productRepositorySymbol,discountRepositorySymbol}= require('../../../infrastructure/config/constant').REPOSITORY
const {userEntitySymbol,categoryEntitySymbol,productEntitySymbol,discountEntitySymbol}= require('../../../infrastructure/config/constant').ENTITY
const constants = require("../../../infrastructure/config/constant");
const {
    postgresDiscountPicRepository,
    postgresCategoryRepository,
    postgresProductRepository,
    postgresUserRepository,

} = require('../../../infrastructure/repository/postgres')

module.exports=(diContainer)=>{


    switch (process.env.DB_DIALECT){

        case constants.SUPPORTED_DATABASE.MONGO:

            break;
        case constants.SUPPORTED_DATABASE.POSTGRES:

            diContainer.constructor(userRepositorySymbol, {dependency:[userEntitySymbol],conn:postgresUserRepository});
            diContainer.constructor(categoryRepositorySymbol, {dependency:[categoryEntitySymbol],conn:postgresCategoryRepository});
            diContainer.constructor(productRepositorySymbol, {dependency:[productEntitySymbol],conn:postgresProductRepository});
            diContainer.constructor(discountRepositorySymbol, {dependency:[discountEntitySymbol],conn:postgresDiscountPicRepository});

            break;

        default:



    }



}



