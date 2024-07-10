import { NextResponse } from 'next/server';
import { getCookie } from 'cookies-next';
import { BASE_URL, COOKIE_NAME } from "@constants";

export async function GET(req, { params }) {
  const { partnerId } = params;
  const token = getCookie(COOKIE_NAME.TOKEN, { req });

  try {
    const response = await fetch(`${BASE_URL}/models/partner/${partnerId}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Access-Control-Allow-Credentials': 'true',
      },
      credentials: 'include',
    });
    const data = await response.json();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch partner models' }, { status: 500 });
  }
}
