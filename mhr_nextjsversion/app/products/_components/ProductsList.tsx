'use client';

import Image from 'next/image';
import type { Product } from '../_types';

type Props = {
  initialProducts: Product[];
  total: number;
};

export default function ProductsList({ initialProducts, total }: Props): React.JSX.Element {
  return (
    <section>
      <p className="text-sm text-gray-500 mb-6">{total} products found</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {initialProducts.map((product) => (
          <div
            key={product.id}
            className="border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white"
          >
            <div className="relative h-48 w-full">
              <Image
                src={product.thumbnail}
                alt={product.title}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </div>
            <div className="p-4 space-y-1">
              <h2 className="font-semibold text-sm line-clamp-1">{product.title}</h2>
              <p className="text-xs text-gray-500 line-clamp-2">{product.description}</p>
              <div className="flex items-center justify-between pt-2">
                <span className="font-bold text-indigo-600">${product.price.toFixed(2)}</span>
                <span className="text-xs text-yellow-500">★ {product.rating?.toFixed(1)}</span>
              </div>
              <p className="text-xs text-gray-400 capitalize">{product.category}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
