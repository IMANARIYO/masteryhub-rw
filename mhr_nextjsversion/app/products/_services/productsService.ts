import { count } from 'drizzle-orm';
import { db } from '../../../db';
import { products } from '../../../db/schema';
import type { NewProduct, Product } from '../_types';

export async function queryAllProducts(): Promise<Product[]> {
  return db
    .select({
      id: products.id,
      title: products.title,
      description: products.description,
      price: products.price,
      thumbnail: products.thumbnail,
      rating: products.rating,
      stock: products.stock,
      brand: products.brand,
      category: products.category,
    })
    .from(products);
}

export async function queryProductCount(): Promise<number> {
  const [row] = await db.select({ value: count() }).from(products);
  return Number(row.value);
}

export async function insertProducts(data: NewProduct[]): Promise<void> {
  await db.insert(products).values(data).onConflictDoNothing();
}
