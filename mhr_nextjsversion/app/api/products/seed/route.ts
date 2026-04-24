import { NextResponse } from 'next/server';
import { seedProducts } from '../../../products/_server/seedProducts';

export async function POST() {
  try {
    const data = await seedProducts();
    return NextResponse.json({ data, message: 'Seed completed successfully' });
  } catch (error) {
    console.error('[app/api/products/seed/route.ts > POST]', error);
    return NextResponse.json(
      { error: 'Seed failed', code: 'SEED_FAILED' },
      { status: 500 }
    );
  }
}
