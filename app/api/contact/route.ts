import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/contact-schema";
import { site } from "@/content/data";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
    }

    const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID;

    if (!formId) {
      // Dev / bootstrap fallback: accept payload so UI works without Formspree
      console.info("[contact]", parsed.data);
      return NextResponse.json({
        ok: true,
        fallback: true,
        mailto: site.email,
      });
    }

    const res = await fetch(`https://formspree.io/f/${formId}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: parsed.data.name,
        email: parsed.data.email,
        message: parsed.data.message,
        _subject: `Portfolio — message de ${parsed.data.name}`,
      }),
    });

    if (!res.ok) {
      return NextResponse.json({ error: "Formspree error" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
