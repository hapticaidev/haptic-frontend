import { NextResponse } from "next/server";
import { getCookie } from "cookies-next";
import { BASE_URL, COOKIE_NAME } from "@constants";

export async function POST(req) {
	const { partnerId, modelId, prompt, content, selected } = await req.json();
	const token = getCookie(COOKIE_NAME.TOKEN, { req });

	try {
		const response = await fetch(`${BASE_URL}/feedback`, {
			method: "POST",
			cache: 'no-cache',
			headers: {
				Authorization: `Bearer ${token}`,
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				prompt: prompt,
				modelId: modelId,
				partnerId: partnerId,
				surface: "web",
				preference: {
					type: "single-choice",
					preferenceChoices: content,
					selectedChoice: selected,
				},
			}),
		});

		const data = await response.json();

		return NextResponse.json(data, { status: 200 });
	} catch (error) {
		return NextResponse.json({ error: "Failed to update feedback" }, { status: 500 });
	}
}
