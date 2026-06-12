import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// The repo ships a placeholder RESEND_API_KEY. A real key always starts with
// "re_", so this is false until a working key is supplied in the environment.
const API_KEY = process.env.RESEND_API_KEY;
const isConfigured = !!API_KEY && API_KEY.startsWith('re_');

// From must be a Resend-verified sender. Until kwikflow.nl is verified in
// Resend, this falls back to Resend's shared onboarding sender.
const FROM = process.env.CONTACT_FROM_EMAIL || 'Kwikflow Website <onboarding@resend.dev>';
const TO = process.env.CONTACT_TO_EMAIL || 'info@kwikflow.nl';

const esc = (v: unknown) =>
  String(v ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

export async function POST(req: NextRequest) {
  // Never fake a success: if e-mail isn't configured yet, surface an error so
  // the UI shows the WhatsApp/mail fallback instead of a misleading "Bedankt".
  if (!isConfigured) {
    return NextResponse.json({ error: 'email_not_configured' }, { status: 503 });
  }

  try {
    const body = await req.json();
    const { name, email, phone, company, branche, message, services } = body;

    if (!name || (!email && !phone)) {
      return NextResponse.json(
        { error: 'Naam en e-mail of telefoon zijn verplicht.' },
        { status: 400 },
      );
    }

    const servicesText =
      Array.isArray(services) && services.length > 0 ? services.join(', ') : 'Niet opgegeven';

    const row = (label: string, value: unknown) =>
      value
        ? `<tr><td style="padding:8px 0;color:#6B7280;font-size:14px;width:120px;vertical-align:top;">${label}</td><td style="padding:8px 0;color:#16181D;font-size:14px;font-weight:600;">${esc(value)}</td></tr>`
        : '';

    const resend = new Resend(API_KEY);
    const { error } = await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: email || undefined,
      subject: `Nieuwe aanvraag van ${name}`,
      html: `
        <div style="font-family:Inter,Arial,sans-serif;background:#F8FAFC;color:#16181D;padding:40px;max-width:600px;margin:0 auto;">
          <div style="text-align:center;margin-bottom:24px;font-size:24px;font-weight:700;">
            Kwik<span style="color:#00C8E8;">flow</span>
          </div>
          <div style="background:#fff;border:1px solid #E5E7EB;border-radius:12px;padding:32px;">
            <h2 style="color:#16181D;font-size:18px;margin:0 0 20px;">Nieuwe aanvraag via de website</h2>
            <table style="width:100%;border-collapse:collapse;">
              ${row('Naam', name)}
              ${row('E-mail', email)}
              ${row('Telefoon', phone)}
              ${row('Bedrijf', company)}
              ${row('Branche', branche)}
              ${message ? `<tr><td style="padding:8px 0;color:#6B7280;font-size:14px;vertical-align:top;">Bericht</td><td style="padding:8px 0;color:#16181D;font-size:14px;">${esc(message).replace(/\n/g, '<br/>')}</td></tr>` : ''}
              <tr><td style="padding:8px 0;color:#6B7280;font-size:14px;vertical-align:top;">Interesse in</td><td style="padding:8px 0;color:#16181D;font-size:14px;">${esc(servicesText)}</td></tr>
            </table>
          </div>
          <p style="color:#9CA3AF;font-size:12px;text-align:center;margin-top:20px;">Verstuurd via kwikflow.nl</p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: 'send_failed' }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (e) {
    console.error('Contact form error:', e);
    return NextResponse.json({ error: 'server_error' }, { status: 500 });
  }
}
