import { NextResponse } from 'next/server';
import { getCookie } from 'cookies-next';
import { BASE_URL, COOKIE_NAME } from "@constants";

export async function POST(req, { params }) {
  const { partnerId, modelId } = params;
  const { prompt } = await req.json();
  const token = getCookie(COOKIE_NAME.TOKEN, { req });

  try {
    const response = await fetch(`${BASE_URL}/chat/partner/${partnerId}/model/${modelId}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Access-Control-Allow-Credentials': 'true',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt }),
    });
    const data = await response.json();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch prompt response' }, { status: 500 });
  }
}
