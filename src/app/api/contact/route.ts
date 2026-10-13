import { NextResponse } from "next/server";

const BUDGETS = new Set([
  "under-25k",
  "25k-75k",
  "75k-150k",
  "150k-plus",
  "undecided",
]);

type ContactBody = {
  name?: unknown;
  email?: unknown;
  company?: unknown;
  budget?: unknown;
  message?: unknown;
  website?: unknown;
};

function asTrimmedString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let body: ContactBody;

  try {
    body = (await request.json()) as ContactBody;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 },
    );
  }

  const name = asTrimmedString(body.name);
  const email = asTrimmedString(body.email);
  const company = asTrimmedString(body.company);
  const budget = asTrimmedString(body.budget) || "undecided";
  const message = asTrimmedString(body.message);
  const website = asTrimmedString(body.website);

  if (
    name.length < 2 ||
    name.length > 80 ||
    !isValidEmail(email) ||
    email.length > 120 ||
    company.length > 120 ||
    message.length < 10 ||
    message.length > 2000 ||
    !BUDGETS.has(budget) ||
    website.length > 200
  ) {
    return NextResponse.json(
      { ok: false, error: "Please check your details and try again." },
      { status: 400 },
    );
  }

  // Honeypot: pretend success without logging the submission.
  if (website) {
    return NextResponse.json(
      {
        ok: true,
        message: "Thank you. Our team will respond within one business day.",
        id: `alt-ignored-${Date.now()}`,
      },
      { status: 201 },
    );
  }

  const id = `alt-${Date.now()}`;
  console.log("[contact]", email, name, company || "(no company)", budget);

  return NextResponse.json(
    {
      ok: true,
      message: "Thank you. Our team will respond within one business day.",
      id,
    },
    { status: 201 },
  );
}
