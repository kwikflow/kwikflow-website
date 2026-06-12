import { ImageResponse } from 'next/og'

// Branded social/WhatsApp preview, generated at build time (1200x630). Replace
// with a designed PNG in /public + a metadata.openGraph.images entry if desired.
// Colours are literal here on purpose: CSS theme variables are not available
// inside ImageResponse (this renders an image, not the app).
export const alt = 'Kwikflow — AI Automatisering voor Vakmensen'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '90px',
          background: '#F8FAFC',
          backgroundImage:
            'radial-gradient(ellipse 90% 60% at 70% 0%, rgba(0,200,232,0.18) 0%, transparent 60%)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', fontSize: 46, fontWeight: 700, color: '#16181D' }}>
          <span style={{ color: '#00C8E8', marginRight: 14 }}>⚡</span>
          Kwik<span style={{ color: '#00C8E8' }}>flow</span>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: 40, fontSize: 76, fontWeight: 700, color: '#16181D', lineHeight: 1.05, maxWidth: 900 }}>
          <span>Nooit meer een&nbsp;</span>
          <span style={{ color: '#00C8E8' }}>gemiste opdracht.</span>
        </div>
        <div style={{ marginTop: 32, fontSize: 34, color: '#4B5563', maxWidth: 880 }}>
          AI neemt de telefoon op, beantwoordt berichten en haalt leads binnen — terwijl jij gewoon werkt.
        </div>
      </div>
    ),
    { ...size },
  )
}
