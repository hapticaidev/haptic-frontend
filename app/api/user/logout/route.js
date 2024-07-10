import { NextResponse } from 'next/server';
import { BASE_URL } from '@constants';

export async function POST() {
  try {
    const response = await fetch(`${BASE_URL}/user/logout`, {
      method: 'POST',
    });
    const data = await response.json();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to logout user' }, { status: 500 });
  }
}
