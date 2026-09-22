import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().max(150).optional(),
  message: z.string().min(10, "Message must be at least 10 characters").max(3000),
  intent: z.enum(["job", "freelance", "aptiscript", "collaboration", "other"]).default("job"),
  hp_website: z.string().max(0).optional().or(z.literal("")),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const parseResult = contactSchema.safeParse(body);
    if (!parseResult.success) {
      const errorMsg = parseResult.error.issues[0]?.message || "Invalid form submission";
      return NextResponse.json(
        { success: false, error: errorMsg },
        { status: 400 }
      );
    }

    const { name, email, subject, message, intent, hp_website } = parseResult.data;

    // Check honeypot
    if (hp_website && hp_website.length > 0) {
      return NextResponse.json({ success: true, message: "Message received." });
    }

    // In production, send email if RESEND_API_KEY is configured
    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey) {
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "Portfolio Contact <onboarding@resend.dev>",
            to: process.env.CONTACT_RECEIVER_EMAIL || "contact.sudais1@gmail.com",
            subject: `[Portfolio Inquiry: ${intent.toUpperCase()}] ${subject || "New Message from " + name}`,
            text: `Name: ${name}\nEmail: ${email}\nInquiry Type: ${intent}\n\nMessage:\n${message}`,
          }),
        });
      } catch (err) {
        console.error("Resend API delivery error:", err);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Thank you for reaching out! Your message has been sent successfully. I will get back to you shortly.",
    });
  } catch (error) {
    console.error("Error in /api/contact:", error);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred. Please try again or reach out via email directly." },
      { status: 500 }
    );
  }
}
