import type { Metadata } from 'next';
import { getProducts } from './_server/getProducts';
import ProductsList from './_components/ProductsList';

export const metadata: Metadata = {
  title: 'Products',
  description: 'Browse all available products',
};

export default async function ProductsPage() {
  const { products, total } = await getProducts();

  return (
    <main className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <ProductsList initialProducts={products} total={total} />
    </main>
  );
}
