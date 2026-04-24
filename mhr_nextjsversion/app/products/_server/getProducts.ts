import { queryAllProducts, queryProductCount } from '../_services/productsService';
import type { GetProductsResult } from '../_types';

export async function getProducts(): Promise<GetProductsResult> {
  try {
    const [products, total] = await Promise.all([
      queryAllProducts(),
      queryProductCount(),
    ]);
    return { products, total };
  } catch (error) {
    console.error('[app/products/_server/getProducts.ts > getProducts]', error);
    // DB not available (build time or missing config) — return empty state
    return { products: [], total: 0 };
  }
}
