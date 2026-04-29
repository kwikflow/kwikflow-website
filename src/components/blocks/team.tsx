'use client'

export function Team() {
  return (
    <section className="section">
      <div className="container" style={{ textAlign: 'center', maxWidth: '900px' }}>
        <span className="eyebrow">Wie je aan de lijn krijgt</span>
        <h2 className="section-heading">Geen callcenter. Geen ticketsysteem. Gewoon Team Kwikflow.</h2>
        <p className="section-sub" style={{ marginBottom: '48px' }}>
          Kwikflow is een klein team dat zich volledig richt op vakmensen in Nederland. We zijn geen techbedrijf met 100 mensen op kantoor — we zijn ondernemers die het vak snappen en zelf de telefoon opnemen als jij belt.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '20px',
          marginBottom: '40px',
        }}>
          <div style={{
            padding: '28px 24px',
            background: 'linear-gradient(180deg, rgba(13, 22, 46, 0.55), rgba(20, 32, 64, 0.4))',
            border: '1px solid rgba(244, 246, 251, 0.06)',
            borderRadius: '16px',
            textAlign: 'left',
          }}>
            <div style={{ fontSize: '32px', fontWeight: 600, color: '#00C8E8', letterSpacing: '-0.025em', marginBottom: '8px' }}>1 op 1</div>
            <div style={{ fontSize: '14px', color: '#8A93A8', lineHeight: '1.5' }}>
              Vaste contactpersoon vanaf dag één. Geen tickets, geen wachtrijen.
            </div>
          </div>

          <div style={{
            padding: '28px 24px',
            background: 'linear-gradient(180deg, rgba(13, 22, 46, 0.55), rgba(20, 32, 64, 0.4))',
            border: '1px solid rgba(244, 246, 251, 0.06)',
            borderRadius: '16px',
            textAlign: 'left',
          }}>
            <div style={{ fontSize: '32px', fontWeight: 600, color: '#00C8E8', letterSpacing: '-0.025em', marginBottom: '8px' }}>BENELUX</div>
            <div style={{ fontSize: '14px', color: '#8A93A8', lineHeight: '1.5' }}>
              We werken met vakmensen in Nederland en België. Lokaal, gefocust, schaalbaar voor jou.
            </div>
          </div>

          <div style={{
            padding: '28px 24px',
            background: 'linear-gradient(180deg, rgba(13, 22, 46, 0.55), rgba(20, 32, 64, 0.4))',
            border: '1px solid rgba(244, 246, 251, 0.06)',
            borderRadius: '16px',
            textAlign: 'left',
          }}>
            <div style={{ fontSize: '32px', fontWeight: 600, color: '#00C8E8', letterSpacing: '-0.025em', marginBottom: '8px' }}>7 dagen</div>
            <div style={{ fontSize: '14px', color: '#8A93A8', lineHeight: '1.5' }}>
              Van eerste gesprek tot werkende setup. We gaan niet zitten wachten.
            </div>
          </div>
        </div>

        <div style={{
          padding: '24px 32px',
          background: 'linear-gradient(180deg, rgba(13, 22, 46, 0.55), rgba(20, 32, 64, 0.4))',
          border: '1px solid rgba(0, 200, 232, 0.2)',
          borderRadius: '16px',
          borderLeft: '3px solid #00C8E8',
          maxWidth: '720px',
          margin: '0 auto',
        }}>
          <p style={{ fontSize: '17px', fontStyle: 'italic', color: '#F4F6FB', lineHeight: '1.6', margin: 0 }}>
            "We werken alleen met vakmensen. Geen 1000 klanten, wel 100% focus."
          </p>
          <p style={{ fontSize: '13px', color: '#8A93A8', marginTop: '12px', letterSpacing: '0.06em', textTransform: 'uppercase', margin: 0 }}>
            — Team Kwikflow
          </p>
        </div>
      </div>
    </section>
  )
}
