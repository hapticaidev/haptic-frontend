import { NextResponse } from "next/server";
const nodemailer = require("nodemailer");

// To handle a POST request to /api
export async function POST(request) {
	const password = process.env.HAPTIC_TOKEN;
	const myEmail = process.env.HAPTIC_EMAIL;

	const data = await request.json();

	const { email, name, description, nature } = data;

	const transport = nodemailer.createTransport({
		host: "server53.web-hosting.com",
		port: 465,
		secure: true,
		auth: {
			user: myEmail,
			pass: password,
		},
	});

	const mailOptions = {
		from: myEmail,
		to: myEmail,
		// cc: email, (uncomment this line if you want to send a copy to the sender)
		subject: `Message from ${name} (${email}) for ${nature}`,
		text: description,
	};

	const sendMailPromise = () =>
		new Promise((resolve, reject) => {
			transport.sendMail(mailOptions, function (err) {
				if (!err) {
					resolve("Email sent");
				} else {
					reject(err.message);
				}
			});
		});

	try {
		await sendMailPromise();
		return NextResponse.json({ message: "Email sent" }, { status: 200 });
	} catch (err) {
		return NextResponse.json({ error: err }, { status: 500 });
	}
}
