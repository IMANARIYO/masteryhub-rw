import { queryAllProducts, queryProductCount } from '../_services/productsService';
import type { GetProductsResult } from '../_types';

export async function getProducts(): Promise<GetProductsResult> {
  const [products, total] = await Promise.all([
    queryAllProducts(),
    queryProductCount(),
  ]);

  return { products, total };
}
