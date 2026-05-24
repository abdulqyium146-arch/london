import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2).max(100),
  phone: z.string().min(7).max(20),
  email: z.string().email().optional().or(z.literal("")),
  service: z.string().min(1).max(100),
  area: z.string().min(1).max(100),
  message: z.string().min(10).max(1000),
  urgency: z.enum(["emergency", "today", "flexible"]),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = contactSchema.parse(body);

    // In production, send email notification here.
    // e.g. using Resend, SendGrid, Nodemailer, or a webhook.
    // For now, we log and return success.
    console.log("Contact form submission:", {
      ...data,
      timestamp: new Date().toISOString(),
      ip: request.headers.get("x-forwarded-for") ?? "unknown",
    });

    // TODO: Replace with your email service integration
    // await sendEmail({ to: 'info@trustlocklocksmith.co.uk', ...data });

    return NextResponse.json(
      { success: true, message: "Message received. We'll be in touch shortly." },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.errors },
        { status: 400 }
      );
    }
    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
