import { NextResponse } from 'next/server';
import { seedProducts } from '../../../products/_server/seedProducts';

export const dynamic = 'force-dynamic';

export async function POST(): Promise<NextResponse> {
  try {
    const data = await seedProducts();
    return NextResponse.json({ success: true, message: 'Seed completed successfully', data });
  } catch (error) {
    console.error('[app/api/products/seed/route.ts > POST]', error);
    return NextResponse.json(
      { success: false, message: 'Seed failed' },
      { status: 500 }
    );
  }
}
