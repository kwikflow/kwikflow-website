import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message, services, company, phone } = body;

    if (!name) {
      return NextResponse.json({ error: 'Naam is verplicht.' }, { status: 400 });
    }

    const servicesText = Array.isArray(services) && services.length > 0
      ? services.join(', ')
      : 'Niet opgegeven';

    await transporter.sendMail({
      from: `"Kwikflow Website" <${process.env.GMAIL_USER}>`,
      to: 'info@kwikflow.nl',
      replyTo: email || undefined,
      subject: `Nieuwe aanvraag van ${name}`,
      html: `
        <div style="font-family:'Inter',Arial,sans-serif;background:#040812;color:#F8FAFC;padding:40px;border-radius:16px;max-width:600px;">
          <div style="text-align:center;margin-bottom:24px;">
            <span style="font-size:24px;font-weight:700;">Kwik</span><span style="font-size:24px;font-weight:700;color:#00C8E8;">flow</span>
          </div>
          <div style="background:#0A1628;border:1px solid rgba(0,200,232,0.2);border-radius:12px;padding:32px;">
            <h2 style="color:#00C8E8;font-size:18px;margin:0 0 20px;">Nieuwe aanvraag via website</h2>
            <table style="width:100%;border-collapse:collapse;">
              <tr><td style="padding:8px 0;color:#94A3B8;font-size:14px;width:120px;">Naam</td><td style="padding:8px 0;color:#F8FAFC;font-size:14px;font-weight:600;">${name}</td></tr>
              ${email ? `<tr><td style="padding:8px 0;color:#94A3B8;font-size:14px;">Email</td><td style="padding:8px 0;color:#F8FAFC;font-size:14px;font-weight:600;">${email}</td></tr>` : ''}
              ${company ? `<tr><td style="padding:8px 0;color:#94A3B8;font-size:14px;">Bedrijf</td><td style="padding:8px 0;color:#F8FAFC;font-size:14px;font-weight:600;">${company}</td></tr>` : ''}
              ${phone ? `<tr><td style="padding:8px 0;color:#94A3B8;font-size:14px;">Telefoon</td><td style="padding:8px 0;color:#F8FAFC;font-size:14px;font-weight:600;">${phone}</td></tr>` : ''}
              ${message ? `<tr><td style="padding:8px 0;color:#94A3B8;font-size:14px;vertical-align:top;">Bericht</td><td style="padding:8px 0;color:#F8FAFC;font-size:14px;">${String(message).replace(/\n/g, '<br/>')}</td></tr>` : ''}
              <tr><td style="padding:8px 0;color:#94A3B8;font-size:14px;vertical-align:top;">Interesse in</td><td style="padding:8px 0;color:#F8FAFC;font-size:14px;">${servicesText}</td></tr>
            </table>
          </div>
          <p style="color:#475569;font-size:12px;text-align:center;margin-top:20px;">Verstuurd via kwikflow.nl</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (e) {
    console.error('Contact form error:', e);
    return NextResponse.json({ error: 'Failed' }, { status: 500 });
  }
}
