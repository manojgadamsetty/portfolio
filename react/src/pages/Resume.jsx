function Resume() {
  return (
    <main id="main-content" style={{ maxWidth: '900px' }}>
      <section style={{ padding: '2rem 0' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '3rem', animation: 'fadeInUp 0.8s ease-out' }}>Resume</h1>
        
        <div style={{ animation: 'fadeInUp 0.8s ease-out 0.1s both' }}>
          <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>
            Download or view my professional resume below
          </p>
          
          <div style={{ marginBottom: '2rem' }}>
            <a 
              href="/assets/resume.pdf" 
              download 
              style={{
                display: 'inline-block',
                padding: '0.75rem 1.5rem',
                backgroundColor: 'var(--primary)',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '6px',
                fontWeight: '600',
                marginRight: '1rem'
              }}
            >
              📥 Download Resume (PDF)
            </a>
          </div>
        </div>

        <section style={{ marginTop: '2rem' }}>
          <h2 style={{ fontSize: '1.3rem', marginBottom: '1rem', borderBottom: '2px solid var(--primary)', paddingBottom: '0.5rem' }}>Professional Experience</h2>
          <article style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Staff Software Engineer</h3>
            <p style={{ color: 'var(--primary)', fontWeight: '600', marginBottom: '0.25rem' }}>Palo Alto Networks</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>2023 - Present</p>
            <p>Leading mobile security initiatives for enterprise identity platform</p>
          </article>

          <article style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Senior Software Engineer</h3>
            <p style={{ color: 'var(--primary)', fontWeight: '600', marginBottom: '0.25rem' }}>CyberArk</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>2021 - 2023</p>
            <p>Developed enterprise identity and access management solutions</p>
          </article>
        </section>

        <section style={{ marginTop: '2rem' }}>
          <h2 style={{ fontSize: '1.3rem', marginBottom: '1rem', borderBottom: '2px solid var(--primary)', paddingBottom: '0.5rem' }}>Education</h2>
          <article>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>B.E. Electronics & Communication</h3>
            <p style={{ color: 'var(--primary)', fontWeight: '600', marginBottom: '0.25rem' }}>BITS Pilani</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>2010 - 2014</p>
          </article>
        </section>
      </section>
    </main>
  )
}

export default Resume
