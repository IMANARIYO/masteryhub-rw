import { NextResponse } from 'next/server';
import { getProducts } from '../../products/_server/getProducts';

export async function GET(): Promise<NextResponse> {
  try {
    const data = await getProducts();
    return NextResponse.json({ success: true, message: 'Products fetched', data });
  } catch (error) {
    console.error('[app/api/products/route.ts > GET]', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch products' },
      { status: 500 }
    );
  }
}
