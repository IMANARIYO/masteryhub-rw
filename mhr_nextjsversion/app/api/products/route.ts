import { NextResponse } from 'next/server';
import { getProducts } from '../../products/_server/getProducts';

export async function GET() {
  try {
    const data = await getProducts();
    return NextResponse.json({ data });
  } catch (error) {
    console.error('[app/api/products/route.ts > GET]', error);
    return NextResponse.json(
      { error: 'Failed to fetch products', code: 'FETCH_FAILED' },
      { status: 500 }
    );
  }
}
