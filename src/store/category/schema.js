import { schema } from 'normalizr';

const products = new schema.Entity('products', {},{
  idAttribute:'id',
  processStrategy: (value, parent,key) => ({
    ...value,
    category:parent.id
  })
})

const category = new schema.Entity('categories',{
    products: new schema.Array(products)
  }
);

export const schemaCategory = {categories: new schema.Array(category)};