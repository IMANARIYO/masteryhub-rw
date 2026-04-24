import axios from 'axios';
import { insertProducts } from '../_services/productsService';
import type { NewProduct } from '../_types';

interface DummyProduct {
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  rating: number;
  stock: number;
  brand?: string;
  category: string;
}

interface DummyResponse {
  products: DummyProduct[];
}

export async function seedProducts(): Promise<{ inserted: number }> {
  const { data } = await axios.get<DummyResponse>(
    'https://dummyjson.com/products?limit=100'
  );

  const rows: NewProduct[] = data.products.map((p) => ({
    title: p.title,
    description: p.description,
    price: p.price,
    thumbnail: p.thumbnail,
    rating: p.rating,
    stock: p.stock,
    brand: p.brand ?? '',
    category: p.category,
  }));

  await insertProducts(rows);
  return { inserted: rows.length };
}
