import type { InferSelectModel, InferInsertModel } from 'drizzle-orm';
import type { products } from '../../../db/schema';

export type Product = InferSelectModel<typeof products>;
export type NewProduct = InferInsertModel<typeof products>;

export interface GetProductsResult {
  products: Product[];
  total: number;
}
