export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      background: '#0D1117',
      color: '#fff',
      fontFamily: 'Inter, system-ui, sans-serif',
      display: 'flex',
      flexDirection: 'column',
    }}>
      {/* Nav */}
      <nav style={{
        padding: '24px 48px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid #1e2530',
      }}>
        <span style={{ fontSize: '22px', fontWeight: 700, color: '#00C4A7', letterSpacing: '-0.5px' }}>Qventiv</span>
        <a href="mailto:vibash@qventiv.com" style={{
          background: '#00C4A7',
          color: '#0D1117',
          padding: '10px 24px',
          borderRadius: '8px',
          fontWeight: 600,
          fontSize: '14px',
          textDecoration: 'none',
        }}>Get Free Audit</a>
      </nav>

      {/* Hero */}
      <section style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '80px 24px',
        textAlign: 'center',
        maxWidth: '800px',
        margin: '0 auto',
      }}>
        <span style={{
          background: '#00C4A71a',
          color: '#00C4A7',
          border: '1px solid #00C4A740',
          padding: '6px 16px',
          borderRadius: '100px',
          fontSize: '13px',
          fontWeight: 500,
          marginBottom: '24px',
          display: 'inline-block',
        }}>AI-Powered Website QA & Funnel Monitoring</span>
        <h1 style={{
          fontSize: 'clamp(36px, 6vw, 64px)',
          fontWeight: 800,
          lineHeight: 1.1,
          marginBottom: '24px',
          letterSpacing: '-1px',
        }}>
          Your Website is Losing Leads.<br />
          <span style={{ color: '#00C4A7' }}>We Fix That — Silently.</span>
        </h1>
        <p style={{
          fontSize: '18px',
          color: '#8892a4',
          lineHeight: 1.7,
          marginBottom: '40px',
          maxWidth: '600px',
        }}>
          Qventiv monitors your property listing pages, lead forms, and CTAs 24/7.
          We catch broken flows and conversion killers before they cost you leads —
          and deliver a clean async report. No calls. No guesswork. Just results.
        </p>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <a href="mailto:vibash@qventiv.com?subject=Free QA Audit Request" style={{
            background: '#00C4A7',
            color: '#0D1117',
            padding: '14px 32px',
            borderRadius: '10px',
            fontWeight: 700,
            fontSize: '16px',
            textDecoration: 'none',
          }}>Get a Free Audit →</a>
          <a href="mailto:vibash@qventiv.com" style={{
            background: '#1a2130',
            color: '#fff',
            padding: '14px 32px',
            borderRadius: '10px',
            fontWeight: 600,
            fontSize: '16px',
            textDecoration: 'none',
            border: '1px solid #2a3444',
          }}>vibash@qventiv.com</a>
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: '80px 24px', maxWidth: '1000px', margin: '0 auto', width: '100%' }}>
        <h2 style={{ textAlign: 'center', fontSize: '32px', fontWeight: 700, marginBottom: '48px', color: '#fff' }}>
          What We Monitor
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
        }}>
          {[
            { icon: '📋', title: 'Lead Form Testing', desc: 'We test every form on every device and browser. If it breaks, you know before your clients do.' },
            { icon: '⚡', title: 'Page Speed Monitoring', desc: 'Slow pages kill conversions. We track load times and alert you when performance drops.' },
            { icon: '📱', title: 'Mobile Responsiveness', desc: 'Over 70% of property searches happen on mobile. We make sure your site works flawlessly.' },
            { icon: '🔗', title: 'Broken Link Detection', desc: 'Dead links and 404 errors damage trust. We catch them automatically.' },
            { icon: '📈', title: 'CTA Visibility Checks', desc: 'Your call-to-action buttons must be visible and clickable. We verify this across all screens.' },
            { icon: '📊', title: 'Async Audit Reports', desc: 'No calls, no meetings. We send you a clean, detailed report you can act on immediately.' },
          ].map((f) => (
            <div key={f.title} style={{
              background: '#111827',
              border: '1px solid #1e2a3a',
              borderRadius: '12px',
              padding: '28px',
            }}>
              <div style={{ fontSize: '28px', marginBottom: '12px' }}>{f.icon}</div>
              <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '8px', color: '#fff' }}>{f.title}</h3>
              <p style={{ color: '#8892a4', fontSize: '14px', lineHeight: 1.6 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        background: '#00C4A710',
        border: '1px solid #00C4A730',
        borderRadius: '16px',
        margin: '0 auto 80px',
        maxWidth: '700px',
        width: 'calc(100% - 48px)',
        padding: '48px 32px',
        textAlign: 'center',
      }}>
        <h2 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '12px' }}>Ready to stop losing leads silently?</h2>
        <p style={{ color: '#8892a4', marginBottom: '28px', fontSize: '16px' }}>Reply with your website URL. We run the audit and send you the report. Free. No commitment.</p>
        <a href="mailto:vibash@qventiv.com?subject=Free QA Audit Request" style={{
          background: '#00C4A7',
          color: '#0D1117',
          padding: '14px 36px',
          borderRadius: '10px',
          fontWeight: 700,
          fontSize: '16px',
          textDecoration: 'none',
          display: 'inline-block',
        }}>Request Free Audit</a>
      </section>

      {/* Footer */}
      <footer style={{
        borderTop: '1px solid #1e2530',
        padding: '24px 48px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: '#8892a4',
        fontSize: '13px',
        flexWrap: 'wrap',
        gap: '12px',
      }}>
        <span style={{ color: '#00C4A7', fontWeight: 700 }}>Qventiv</span>
        <span>AI-Powered Website QA & Funnel Monitoring</span>
        <a href="mailto:vibash@qventiv.com" style={{ color: '#00C4A7', textDecoration: 'none' }}>vibash@qventiv.com</a>
      </footer>
    </main>
  )
}
