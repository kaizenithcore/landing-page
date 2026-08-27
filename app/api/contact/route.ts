import { NextRequest, NextResponse } from "next/server";

interface ContactData {
  email: string;
  message: string;
  area?: string;
}

const CONTACT_FROM = "Kaizenith <contacto@notifications.kaizenith.es>";
const CONTACT_TO = "hola@kaizenith.es";

export async function POST(request: NextRequest) {
  try {
    const data: ContactData = await request.json();

    if (!data.email || typeof data.email !== "string") {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json({ error: "Please enter a valid email address" }, { status: 400 });
    }

    if (!data.message || typeof data.message !== "string" || data.message.trim().length === 0) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    const normalizedEmail = data.email.toLowerCase().trim();
    const area = data.area && typeof data.area === "string" ? data.area : "general";

    const RESEND_API_KEY = process.env.RESEND_API_KEY;

    if (!RESEND_API_KEY) {
      console.warn("RESEND_API_KEY missing. Skipping email send.", { email: normalizedEmail, area });
      return NextResponse.json(
        { success: true, skipped: true, message: "Resend not configured (dev mode)" },
        { status: 201 },
      );
    }

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: CONTACT_FROM,
        to: [CONTACT_TO],
        reply_to: normalizedEmail,
        subject: `Nuevo contacto (${area}) — kaizenith.es`,
        text: `Área: ${area}\nEmail: ${normalizedEmail}\n\nMensaje:\n${data.message.trim()}`,
      }),
    });

    if (!resendResponse.ok) {
      const detail = await resendResponse.text();
      console.error("Resend error:", resendResponse.status, detail);
      return NextResponse.json({ error: "No se pudo enviar el mensaje" }, { status: 502 });
    }

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error("Contact error:", error);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
