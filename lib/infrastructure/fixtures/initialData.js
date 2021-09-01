let diContainer= require('../../interface/DI/createContainer')
const dbName = process.env.DB_NAME

const productRepository=diContainer.get('productRepository')
const discountRepository=diContainer.get('discountRepository')
const categoryRepository=diContainer.get('categoryRepository')

const discountEntity=diContainer.get('discountEntity')
const productEntity=diContainer.get('productEntity')
const categoryEntity=diContainer.get('categoryEntity')

const config = process.env.DB_NAME





/*function generateUUId(){
    let ids=[]
for(let i=0;i<20;i++){
    ids.push(    cryptoHandler.uuidGenerator()
    )
}
console.log({ids})
}
generateUUId()*/
module.exports=()=>{

    return {

        init
    }
    async function init(){

        let defaultDiscounts=require('./defaultDiscounts')
        let defaultCategories=require('./defaultCategories')
        let defaultProducts=require('./defaultProducts')

        defaultDiscounts=defaultDiscounts.map(ele=>discountEntity.setDiscount(ele))
        defaultCategories=defaultCategories.map(ele=>categoryEntity.setCategory(ele))
        defaultProducts=defaultProducts.map(ele=>productEntity.setProduct(ele))

        await discountRepository.create(defaultDiscounts,dbName)
        await categoryRepository.create(defaultCategories,dbName)
        await productRepository.create(defaultProducts,dbName)


        return true




    }



}

