import { NextResponse } from "next/server";
import { BASE_URL } from "@constants";

export async function GET(req, { params }) {
	const { walletAddress } = params;

	try {
		const response = await fetch(`${BASE_URL}/user/nonce/${walletAddress}`, { cache: 'no-cache', });
		const data = await response.json();
		return NextResponse.json(data, { status: 200 });
	} catch (error) {
		return NextResponse.json({ error: "Failed to fetch user nonce" }, { status: 500 });
	}
}
