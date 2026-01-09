import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, subject, message } = body;

        // Validate input
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        // Here you would integrate Nodemailer or SendGrid
        // For now, we'll simulate a successful email send to the console
        console.log("Email received:", { name, email, subject, message });

        // Simulate delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        return NextResponse.json(
            { message: "Message sent successfully!" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Contact API Error:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
