import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { email } = body;

  if (!email || typeof email !== "string" || !email.includes("@")) {
    return Response.json({ error: "Valid email required." }, { status: 400 });
  }

  // Stub — wire to Resend or Loops before public launch
  console.log("[waitlist] new signup:", email.trim().toLowerCase());

  return Response.json({ ok: true }, { status: 200 });
}
