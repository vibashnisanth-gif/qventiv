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
        padding: '20px 48px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid #1e2530',
      }}>
        <span style={{ fontSize: '22px', fontWeight: 700, color: '#00C4A7' }}>Qventiv</span>
        <a href="mailto:vibash.qventiv@outlook.com?subject=Free QA Audit Request" style={{
          background: '#00C4A7',
          color: '#000',
          padding: '10px 22px',
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: 600,
          fontSize: '14px',
        }}>Get Free Audit</a>
      </nav>

      {/* Hero */}
      <section style={{
        textAlign: 'center',
        padding: '80px 24px 60px',
        maxWidth: '780px',
        margin: '0 auto',
      }}>
        <div style={{
          display: 'inline-block',
          border: '1px solid #00C4A7',
          borderRadius: '999px',
          padding: '6px 18px',
          fontSize: '13px',
          color: '#00C4A7',
          marginBottom: '28px',
        }}>AI-Powered Website QA & Funnel Monitoring</div>
        <h1 style={{ fontSize: 'clamp(36px, 6vw, 60px)', fontWeight: 800, lineHeight: 1.15, marginBottom: '24px' }}>
          Your Website is Losing Leads.<br />
          <span style={{ color: '#00C4A7' }}>We Fix That — Silently.</span>
        </h1>
        <p style={{ fontSize: '18px', color: '#9ca3af', lineHeight: 1.7, marginBottom: '40px' }}>
          Qventiv monitors your property listing pages, lead forms, and CTAs 24/7.
          We catch broken flows and conversion killers before they cost you leads —
          and deliver a clean async report. No calls. No guesswork. Just results.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="mailto:vibash.qventiv@outlook.com?subject=Free QA Audit Request" style={{
            background: '#00C4A7',
            color: '#000',
            padding: '14px 32px',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 700,
            fontSize: '16px',
          }}>Get a Free Audit →</a>
          <a href="mailto:vibash.qventiv@outlook.com" style={{
            background: '#1a2030',
            color: '#ccc',
            padding: '14px 32px',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 500,
            fontSize: '16px',
            border: '1px solid #2d3748',
          }}>vibash.qventiv@outlook.com</a>
        </div>
      </section>

      {/* Stats Bar */}
      <section style={{
        background: '#111827',
        borderTop: '1px solid #1e2530',
        borderBottom: '1px solid #1e2530',
        padding: '32px 48px',
        display: 'flex',
        justifyContent: 'center',
        gap: '60px',
        flexWrap: 'wrap',
      }}>
        {[['24/7', 'Continuous Monitoring'], ['100%', 'Async Reports — No Calls'], ['Free', 'First Audit on Us'], ['48hr', 'Report Turnaround']].map(([val, label]) => (
          <div key={val} style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '28px', fontWeight: 800, color: '#00C4A7' }}>{val}</div>
            <div style={{ fontSize: '13px', color: '#9ca3af', marginTop: '4px' }}>{label}</div>
          </div>
        ))}
      </section>

      {/* What We Monitor */}
      <section style={{ padding: '80px 48px', maxWidth: '1000px', margin: '0 auto', width: '100%' }}>
        <h2 style={{ textAlign: 'center', fontSize: '32px', fontWeight: 700, marginBottom: '48px' }}>What We Monitor</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
          {[
            { icon: '📋', title: 'Lead Form Testing', desc: 'We test every form on every device and browser. If it breaks, you know before your clients do.' },
            { icon: '⚡', title: 'Page Speed Monitoring', desc: 'Slow pages kill conversions. We track load times and alert you when performance drops.' },
            { icon: '📱', title: 'Mobile Responsiveness', desc: 'Over 70% of property searches happen on mobile. We make sure your site works flawlessly.' },
            { icon: '🔗', title: 'Broken Link Detection', desc: 'Dead links and 404 errors damage trust. We catch them automatically.' },
            { icon: '📈', title: 'CTA Visibility Checks', desc: 'Your call-to-action buttons must be visible and clickable. We verify this across all screens.' },
            { icon: '📊', title: 'Async Audit Reports', desc: 'No calls, no meetings. We send you a clean, detailed report you can act on immediately.' },
          ].map(({ icon, title, desc }) => (
            <div key={title} style={{
              background: '#111827',
              border: '1px solid #1e2530',
              borderRadius: '12px',
              padding: '28px',
            }}>
              <div style={{ fontSize: '28px', marginBottom: '12px' }}>{icon}</div>
              <h3 style={{ fontSize: '17px', fontWeight: 600, marginBottom: '8px' }}>{title}</h3>
              <p style={{ fontSize: '14px', color: '#9ca3af', lineHeight: 1.6 }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section style={{ background: '#111827', padding: '80px 48px', borderTop: '1px solid #1e2530', borderBottom: '1px solid #1e2530' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: '32px', fontWeight: 700, marginBottom: '48px' }}>How It Works</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {[
              { step: '01', title: 'You Reply with Your Website URL', desc: 'No forms, no calls. Just send your site URL and we handle the rest.' },
              { step: '02', title: 'We Run a Full AI-Powered QA Audit', desc: 'Our system checks forms, CTAs, page speed, broken links, and mobile layout — automatically.' },
              { step: '03', title: 'You Get a Clean Async Report', desc: 'Within 48 hours, you receive a detailed PDF report with issues found and recommended fixes. No meeting required.' },
            ].map(({ step, title, desc }) => (
              <div key={step} style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
                <div style={{
                  minWidth: '52px',
                  height: '52px',
                  background: '#00C4A7',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  color: '#000',
                  fontSize: '14px',
                }}>{step}</div>
                <div>
                  <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '6px' }}>{title}</h3>
                  <p style={{ fontSize: '15px', color: '#9ca3af', lineHeight: 1.6 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        textAlign: 'center',
        padding: '80px 24px',
        maxWidth: '700px',
        margin: '0 auto',
      }}>
        <h2 style={{ fontSize: '32px', fontWeight: 700, marginBottom: '16px' }}>Ready to stop losing leads silently?</h2>
        <p style={{ color: '#9ca3af', fontSize: '16px', marginBottom: '36px' }}>
          Reply with your website URL. We run the audit and send you the report. Free. No commitment.
        </p>
        <a href="mailto:vibash.qventiv@outlook.com?subject=Free QA Audit Request" style={{
          background: '#00C4A7',
          color: '#000',
          padding: '16px 40px',
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: 700,
          fontSize: '18px',
          display: 'inline-block',
        }}>Request Free Audit</a>
      </section>

      {/* Footer */}
      <footer style={{
        background: '#0a0e16',
        borderTop: '1px solid #1e2530',
        padding: '32px 48px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '16px',
      }}>
        <div>
          <span style={{ fontSize: '18px', fontWeight: 700, color: '#00C4A7' }}>Qventiv</span>
          <p style={{ fontSize: '13px', color: '#6b7280', marginTop: '4px' }}>AI-Powered Website QA & Funnel Monitoring</p>
        </div>
        <div style={{ fontSize: '13px', color: '#6b7280', textAlign: 'right' }}>
          <a href="mailto:vibash.qventiv@outlook.com" style={{ color: '#00C4A7', textDecoration: 'none' }}>vibash.qventiv@outlook.com</a>
          <p style={{ marginTop: '4px' }}>© 2026 Qventiv. All rights reserved.</p>
        </div>
      </footer>

    </main>
  );
}
