import { pgTable, serial, text, doublePrecision, integer, real } from 'drizzle-orm/pg-core';

export const products = pgTable('products', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  description: text('description').notNull(),
  price: doublePrecision('price').notNull(),
  thumbnail: text('thumbnail').notNull(),
  rating: real('rating').notNull().default(0),
  stock: integer('stock').notNull().default(0),
  brand: text('brand').default(''),
  category: text('category').notNull(),
});
