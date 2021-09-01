'use strict'

module.exports={

    SUPPORTED_DATABASE:{

        MONGO: 'mongo',
        POSTGRES: 'postgres',

    },
    CONTROLLER:{

        userControllerSymbol: 'userController',
        discountControllerSymbol: 'discountController',


    },
    ENTITY:{

        userEntitySymbol: 'userEntity',
        discountEntitySymbol: 'discountEntity',
        productEntitySymbol: 'productEntity',
        categoryEntitySymbol: 'categoryEntity',

    },
    REPOSITORY:{

        userRepositorySymbol: 'userRepository',
        productRepositorySymbol: 'productRepository',
        discountRepositorySymbol: 'discountRepository',
        categoryRepositorySymbol: 'categoryRepository',

    },
    SERVICE:{

        userServiceSymbol: 'userService',
        discountServiceSymbol: 'discountService',


    },
    UTIL:{

        cryptoHandlerSymbol: 'cryptoHandler',

    },
    SECURITY:{

        authHandlerSymbol: 'authHandler',

    },


}
