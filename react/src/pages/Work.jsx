function Work() {
  return (
    <main id="main-content">
      <section className="work-section" style={{ paddingTop: '2rem', maxWidth: '900px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '3rem', animation: 'fadeInUp 0.8s ease-out' }}>Featured Work</h1>

        <article className="work-card featured animate-on-scroll" style={{ marginBottom: '2rem', padding: '2rem', border: '1px solid var(--border)' }}>
          <div className="badge" style={{ display: 'inline-block', marginBottom: '1rem', color: 'var(--primary)', fontSize: '0.85rem', fontWeight: '600' }}>Featured Project</div>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Enterprise Identity Platform</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
            Leading mobile security initiatives for next-generation enterprise identity platform with Workforce Password Manager
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <span style={{ padding: '0.25rem 0.75rem', backgroundColor: 'var(--light)', borderRadius: '4px', fontSize: '0.85rem' }}>Security</span>
            <span style={{ padding: '0.25rem 0.75rem', backgroundColor: 'var(--light)', borderRadius: '4px', fontSize: '0.85rem' }}>Identity</span>
            <span style={{ padding: '0.25rem 0.75rem', backgroundColor: 'var(--light)', borderRadius: '4px', fontSize: '0.85rem' }}>Enterprise</span>
          </div>
        </article>

        <article className="work-card animate-on-scroll" style={{ marginBottom: '2rem', padding: '2rem', border: '1px solid var(--border)' }}>
          <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>Mobile Security Framework</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
            Built comprehensive iOS and Android security frameworks implementing OWASP Mobile Top 10
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <span style={{ padding: '0.25rem 0.75rem', backgroundColor: 'var(--light)', borderRadius: '4px', fontSize: '0.85rem' }}>iOS</span>
            <span style={{ padding: '0.25rem 0.75rem', backgroundColor: 'var(--light)', borderRadius: '4px', fontSize: '0.85rem' }}>Android</span>
          </div>
        </article>
      </section>
    </main>
  )
}

export default Work
