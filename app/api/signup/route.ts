import { NextRequest, NextResponse } from "next/server";

interface SignupData {
  name: string;
  email: string;
  utm?: {
    source?: string;
    medium?: string;
    campaign?: string;
  };
  context?: {
    source?: string;
    variant?: string;
    section?: string;
  };
}

// Optional: force Node runtime if you prefer (then Buffer always existe).
// export const runtime = "nodejs";

function encodeBasicAuth(apiKey: string) {
  const plain = `anystring:${apiKey}`;
  // Node Buffer available?
  if (typeof Buffer !== "undefined" && typeof Buffer.from === "function") {
    return Buffer.from(plain).toString("base64");
  }
  // Edge runtime / browser: btoa may exist
  if (typeof (globalThis as any).btoa === "function") {
    return (globalThis as any).btoa(plain);
  }
  // As fallback, try a small base64 polyfill (shouldn't happen on node/edge)
  throw new Error("No base64 encoder available in this runtime");
}

export async function POST(request: NextRequest) {
  try {
    const data: SignupData = await request.json();

    // Validate input
    if (!data.name || typeof data.name !== "string" || data.name.trim().length === 0) {
      return NextResponse.json({ error: "Name is required" }, { status: 400 });
    }

    if (!data.email || typeof data.email !== "string") {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json({ error: "Please enter a valid email address" }, { status: 400 });
    }

    const normalizedEmail = data.email.toLowerCase().trim();

    // Build tags array
    const tags: string[] = ["website", "newsletter"];

    // UTM tags
    if (data.utm?.source) tags.push(`utm-source:${data.utm.source}`);
    if (data.utm?.medium) tags.push(`utm-medium:${data.utm.medium}`);
    if (data.utm?.campaign) tags.push(`utm-campaign:${data.utm.campaign}`);

    // Context tags
    if (data.context?.source) tags.push(`source:${data.context.source}`);
    if (data.context?.variant) tags.push(`variant:${data.context.variant}`);
    if (data.context?.section) tags.push(`section:${data.context.section}`);

    // If Mailchimp not configured, return success but log locally (useful in dev)
    const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;
    const MAILCHIMP_LIST_ID = process.env.MAILCHIMP_LIST_ID;
    const MAILCHIMP_DC = process.env.MAILCHIMP_DC;

    if (!MAILCHIMP_API_KEY || !MAILCHIMP_LIST_ID || !MAILCHIMP_DC) {
      console.warn(
        "Mailchimp env vars missing. Skipping Mailchimp call.",
        { MAILCHIMP_API_KEY: !!MAILCHIMP_API_KEY, MAILCHIMP_LIST_ID: !!MAILCHIMP_LIST_ID, MAILCHIMP_DC: !!MAILCHIMP_DC, tags }
      );
      // Optionally store locally or in a dev store here
      return NextResponse.json({ success: true, skipped: true, message: "Mailchimp not configured (dev mode)" }, { status: 201 });
    }

    // Call Mailchimp
    const url = `https://${MAILCHIMP_DC}.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}/members`;

    const auth = encodeBasicAuth(MAILCHIMP_API_KEY);

    const body = {
      email_address: normalizedEmail,
      status: "subscribed",
      merge_fields: {
        FNAME: data.name.trim(),
      },
      tags,
    };

    const mailchimpResponse = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Basic ${auth}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!mailchimpResponse.ok) {
      let text: any;
      try {
        text = await mailchimpResponse.json();
      } catch (e) {
        text = await mailchimpResponse.text();
      }

      // Log details (careful con info sensible; en prod podrías reducir)
      console.error("Mailchimp error response:", mailchimpResponse.status, text);

      // If member already exists, Mailchimp returns 400 with title 'Member Exists'
      if (mailchimpResponse.status === 400 && text && (text.title === "Member Exists" || (text.title && /exists/i.test(text.title)))) {
        return NextResponse.json({ success: true, message: "Already subscribed" }, { status: 200 });
      }

      return NextResponse.json({ error: "Mailchimp subscription failed", detail: text }, { status: 502 });
    }

    // Success
    // Optionally read result:
    // const mcData = await mailchimpResponse.json();

    return NextResponse.json({ success: true, message: "Successfully subscribed!" }, { status: 201 });
  } catch (error) {
    console.error("Signup error:", error);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
