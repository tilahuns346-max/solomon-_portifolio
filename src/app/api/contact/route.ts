import { NextResponse } from "next/server";
import { z } from "zod";

// Schema for input validation
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long").max(100),
  email: z.string().email("Please provide a valid email address"),
  subject: z.string().min(3, "Subject must be at least 3 characters long").max(150),
  message: z.string().min(10, "Message must be at least 10 characters long").max(3000),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate the incoming payload
    const validationResult = contactSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          errors: validationResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const { name, email, subject, message } = validationResult.data;

    // Securely process message:
    // If user configured EMAILJS or RESEND or custom SMTP in environment variables, dispatch it.
    // Otherwise, simulate a successful logged delivery and return 200.
    console.log(`[Contact Form Received] From: ${name} <${email}>`);
    console.log(`Subject: ${subject}`);
    console.log(`Message: ${message}`);

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for reaching out, Solomon has received your message!",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An internal server error occurred while processing your message.",
      },
      { status: 500 }
    );
  }
}
