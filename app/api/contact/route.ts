import { NextResponse } from "next/server";

type Payload = {
  intent?: string;
  name?: string;
  email?: string;
  role?: string;
  message?: string;
  company?: string;
  catalogSize?: string;
  wantToSee?: string;
  primaryNeed?: string;
};

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON." }, { status: 400 });
  }

  const name = (body.name || "").trim();
  const email = (body.email || "").trim();
  const role = (body.role || "").trim();
  const intent = (body.intent || "contact").trim();

  if (!name || !email || !role) {
    return NextResponse.json(
      { error: "Name, email, and role are required." },
      { status: 400 },
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email." }, { status: 400 });
  }

  const endpoint = process.env.CONTACT_FORM_ENDPOINT;
  const payload = {
    ...body,
    intent,
    name,
    email,
    role,
    receivedAt: new Date().toISOString(),
  };

  if (endpoint) {
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        console.error("[contact] upstream failed", await res.text());
        return NextResponse.json(
          { error: "Could not deliver message. Try again." },
          { status: 502 },
        );
      }
    } catch (err) {
      console.error("[contact] upstream error", err);
      return NextResponse.json(
        { error: "Could not deliver message. Try again." },
        { status: 502 },
      );
    }
  } else {
    console.log("[contact] inquiry received (dev/demo log)", payload);
  }

  return NextResponse.json({ ok: true });
}
