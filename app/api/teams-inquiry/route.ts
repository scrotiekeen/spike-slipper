import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { schoolProgram, contactName, email } = body;

  if (!schoolProgram || !contactName || !email) {
    return Response.json(
      { error: "School/program, name, and email are required." },
      { status: 400 }
    );
  }

  // Stub — connect to Resend notification + CRM before public launch
  console.log("[teams-inquiry] new request:", {
    school: schoolProgram,
    name: contactName,
    email,
    teamSize: body.teamSize,
    season: body.season,
  });

  return Response.json({ ok: true }, { status: 200 });
}
