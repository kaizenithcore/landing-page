import { NextRequest, NextResponse } from "next/server";

interface SignupData {
  name: string;
  email: string;
  utm: {
    source: string;
    medium: string;
    campaign: string;
  };
}

// In-memory store for development (replace with database in production)

export async function POST(request: NextRequest) {
  try {
    const data: SignupData = await request.json();

    // Validate input
    if (
      !data.name ||
      typeof data.name !== "string" ||
      data.name.trim().length === 0
    ) {
      return NextResponse.json({ error: "Name is required" }, { status: 400 });
    }

    if (!data.email || typeof data.email !== "string") {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address" },
        { status: 400 },
      );
    }

    const normalizedEmail = data.email.toLowerCase().trim();

    // Store subscriber
    const subscriber = {
      name: data.name.trim(),
      email: normalizedEmail,
      utm: {
        source: data.utm?.source || "",
        medium: data.utm?.medium || "",
        campaign: data.utm?.campaign || "",
      },
      createdAt: new Date().toISOString(),
    };

    // Mailchimp integration
    // Uncomment and configure with your MAILCHIMP_API_KEY and MAILCHIMP_LIST_ID env vars

    if (process.env.MAILCHIMP_API_KEY && process.env.MAILCHIMP_LIST_ID) {
      const mailchimpResponse = await fetch(
        `https://${process.env.MAILCHIMP_DC}.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_LIST_ID}/members`,
        {
          method: "POST",
          headers: {
            Authorization: `Basic ${Buffer.from(
              `anystring:${process.env.MAILCHIMP_API_KEY}`,
            ).toString("base64")}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email_address: normalizedEmail,
            status: "subscribed",
            merge_fields: {
              FNAME: data.name.trim(),
            },
            tags: ["website", "kaizenith", "early-access"],
          }),
        },
      );

      if (!mailchimpResponse.ok) {
        const error = await mailchimpResponse.json();
        console.error("Mailchimp error:", error);
        throw new Error("Failed to subscribe");
      }
    }

    // Log for debugging (remove in production)
    console.log("New subscriber:", subscriber);

    return NextResponse.json(
      { success: true, message: "Successfully subscribed!" },
      { status: 201 },
    );
  } catch (error) {
    console.error("Signup error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
