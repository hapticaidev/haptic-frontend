import { NextResponse } from 'next/server';
import { BASE_URL } from '@constants';

export async function POST(req) {
  const { walletAddress, sign } = await req.json();

  try {
    const response = await fetch(`${BASE_URL}/user/login`, {
      method: 'POST',
      cache: 'no-cache',
      headers: {
        Authorization: `Bearer ${walletAddress}+${sign}`,
        'Access-Control-Allow-Credentials': true,
      },
      credentials: 'include',
    });
    const data = await response.json();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to authenticate user' }, { status: 500 });
  }
}
