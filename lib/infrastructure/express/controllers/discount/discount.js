'use strict';

module.exports=class {

    constructor(discountService) {

        this.discountService=discountService
        this.checkProductDiscount=this.checkProductDiscount.bind(this)

    }


    async checkProductDiscount(req, res, next){
        try {
             let {discountAmount,discount}=await this.discountService.checkProductDiscount(
                req.body.productId,
                req.body.invoiceAmount,
                req.dbName
            )
            res.json({...req.json,
                data:{
                    discountAmount,
                    discount,
                }
            });

        } catch (e) {

            next(e)

        }


    }




}


