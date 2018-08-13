import { schema } from 'normalizr';

const category = new schema.Entity('categories',{}
);

export const schemaFilters = {categories: new schema.Array(category)};