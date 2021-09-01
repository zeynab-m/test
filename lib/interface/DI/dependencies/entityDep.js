const {userEntitySymbol,discountEntitySymbol,productEntitySymbol,categoryEntitySymbol}= require('../../../infrastructure/config/constant').ENTITY
const {userEntity}= require('../../../application/domain/user/userEntity')
const {discountEntity}= require('../../../application/domain/discount/discountEntity')
const {categoryEntity}= require('../../../application/domain/category/categoryEntity')
const {productEntity}= require('../../../application/domain/product/productEntity')


module.exports=(diContainer)=> {

    diContainer.constructor(userEntitySymbol, {dependency:[],conn:userEntity});
    diContainer.constructor(discountEntitySymbol, {dependency:[],conn:discountEntity});
    diContainer.constructor(categoryEntitySymbol, {dependency:[],conn:categoryEntity});
    diContainer.constructor(productEntitySymbol, {dependency:[],conn:productEntity});


}



