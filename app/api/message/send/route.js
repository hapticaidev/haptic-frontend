import { NextResponse } from "next/server";
import { getCookie } from "cookies-next";
import { BASE_URL, COOKIE_NAME } from "@constants";

export async function POST(req) {
	const { partnerId, modelId, message } = await req.json();
  const token = getCookie(COOKIE_NAME.TOKEN, { req });

	if (message.length < 1) {
		return NextResponse.json({ error: "Please enter a message." }, { status: 400 });
	}

	try {
		const fetch1 = await fetch(`${BASE_URL}/chat/partner/${partnerId}/model/${modelId}`, {
			method: "POST",
			headers: {
				Authorization: `Bearer ${token}`,
				"Access-Control-Allow-Credentials": "true",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ prompt: message }),
			// signal: AbortSignal.timeout(60000),
		});
		const fetch2 = await fetch(`${BASE_URL}/chat/partner/${partnerId}/model/${modelId}`, {
			method: "POST",
			headers: {
				Authorization: `Bearer ${token}`,
				"Access-Control-Allow-Credentials": "true",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ prompt: message }),
			// signal: AbortSignal.timeout(60000),
		});

		// Execute both fetch requests in parallel
		const responses = await Promise.all([fetch1, fetch2]);

		// Check if both responses are okay
		const errors = responses.filter((response) => !response.ok);
		if (errors.length > 0) {
			const errorMessages = await Promise.all(
				errors.map(async (error) => {
					const errorData = await error.json();
					return `Error ${error.status}: ${errorData.error || error.statusText}`;
				})
			);
			return NextResponse.json({ error: errorMessages.join(", ") }, { status: 500 });
		}

		// Convert responses to JSON
		const data = await Promise.all(responses.map((response) => response.json()));

		// Return the response as a string array
		const response = data.map((item) => item.response);

		return NextResponse.json(response, { status: 200 });
	} catch (error) {
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
}
