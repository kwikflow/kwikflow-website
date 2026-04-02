import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, company, phone, message } = await request.json();

    if (!name || !company || !phone) {
      return NextResponse.json({ error: 'Vul alle verplichte velden in.' }, { status: 400 });
    }

    await resend.emails.send({
      from: 'Kwikflow Website <onboarding@resend.dev>',
      to: 'info@kwikflow.nl',
      subject: `Nieuwe aanvraag van ${name} — ${company}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </head>
        <body style="margin:0;padding:0;background:#040812;font-family:'Inter',Arial,sans-serif;">
          <div style="max-width:600px;margin:0 auto;padding:40px 24px;">
            <div style="text-align:center;margin-bottom:32px;">
              <span style="font-size:24px;font-weight:700;color:#F8FAFC;">Kwik</span><span style="font-size:24px;font-weight:700;color:#00C8E8;">flow</span>
            </div>
            <div style="background:#0A1628;border:1px solid rgba(0,200,232,0.2);border-radius:16px;padding:32px;">
              <h2 style="color:#F8FAFC;font-size:20px;margin:0 0 24px 0;">Nieuwe aanvraag via website</h2>
              <table style="width:100%;border-collapse:collapse;">
                <tr>
                  <td style="padding:8px 0;color:#94A3B8;font-size:14px;width:120px;">Naam</td>
                  <td style="padding:8px 0;color:#F8FAFC;font-size:14px;font-weight:600;">${name}</td>
                </tr>
                <tr>
                  <td style="padding:8px 0;color:#94A3B8;font-size:14px;">Bedrijf</td>
                  <td style="padding:8px 0;color:#F8FAFC;font-size:14px;font-weight:600;">${company}</td>
                </tr>
                <tr>
                  <td style="padding:8px 0;color:#94A3B8;font-size:14px;">Telefoon</td>
                  <td style="padding:8px 0;color:#F8FAFC;font-size:14px;font-weight:600;">${phone}</td>
                </tr>
                ${message ? `<tr>
                  <td style="padding:8px 0;color:#94A3B8;font-size:14px;vertical-align:top;">Bericht</td>
                  <td style="padding:8px 0;color:#F8FAFC;font-size:14px;">${message.replace(/\n/g, '<br/>')}</td>
                </tr>` : ''}
              </table>
            </div>
            <p style="color:#475569;font-size:12px;text-align:center;margin-top:24px;">
              Dit bericht is verstuurd via kwikflow.nl
            </p>
          </div>
        </body>
        </html>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Verzenden mislukt.' }, { status: 500 });
  }
}
