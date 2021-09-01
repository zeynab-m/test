
const product = (product) => {
  return {

    id: product.id || 0,
    categoryId: product.categoryId || 0,
    discount:product.discountId? {id:product.discountId,title:product.discountTitle,description:product.discountDescription,percent:product.discountPercent,code:product.discountCode}:null,
    title:product.title,
    price: product.price,
    metaDate: product.metaDate,
    specification: product.specification,
    deletedAt:product.deletedAt,
    createdAt:product.createdAt,
    updatedAt:product.updatedAt,

  };
};
const category = (category) => {

  return {

    id: category.id,
    parentId: category.parentId,
    discount:category.discountId? {id:category.discountId,title:category.discountTitle,description:category.discountDescription,percent:category.discountPercent,code:category.discountCode}:null,
    title:category.title,
    path: category.path,
    metaDate: category.metaDate,
    specification: category.specification,
    deletedAt:category.deletedAt,
    createdAt:category.createdAt,
    updatedAt:category.updatedAt,

  };
};

const serializer = (data,serializeSchema) => {
  let schema = schemaDetector(serializeSchema)
  if (!data) {
    return null
  }
  if (Array.isArray(data)) {
    return data.map(schema)
  }
  return schema(data)
}
function schemaDetector(serializeSchema){

  switch (serializeSchema){
    case'product':
      return product
      break;
    case'category':
      return category
      break;

  }

}
module.exports = serializer
