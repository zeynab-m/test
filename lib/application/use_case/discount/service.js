'use strict';


const errors = require('../../domain/utils/errors');

module.exports=class {


    constructor(productRepository,categoryRepository) {

        this.productRepository=productRepository;
        this.categoryRepository=categoryRepository;
        this.checkProductDiscount=this.checkProductDiscount.bind(this);

    }
    async  checkProductDiscount(productId,invoiceAmount,dbName){

        const productData = await this.productRepository.findProduct(productId,dbName);
        if(!productData[0]){
            throw new errors.itemInfoNotFound('product')
        }
        let {discount,categoryId}=productData[0]
        if (!discount) {
            discount = await this.categoryRepository.CheckAncestorsDiscount(categoryId,dbName)
            discount=discount.sort(function (a,b){a.path.length>b.path.length})
            for (let ele of discount){
                if (ele.discount) {
                    discount = ele.discount
                    break
                }else {
                    discount=null
                }
            }
        }
        let discountAmount= discount?Math.ceil((discount.percent/100* invoiceAmount) / 500) * 500:-1

        return {discountAmount,discount} ;

    }




}
