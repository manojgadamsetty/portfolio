function Contact() {
  return (
    <main id="main-content" style={{ maxWidth: '900px' }}>
      <section style={{ padding: '6rem 2rem 2rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', animation: 'fadeInUp 0.8s ease-out' }}>Get in Touch</h1>
        
        <div style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '1.05rem', animation: 'fadeInUp 0.8s ease-out 0.1s both' }}>
          <p style={{ marginBottom: '2rem' }}>
            I'm always open to interesting conversations about mobile security, enterprise identity platforms, 
            system architecture, and how technology can solve real-world problems at scale.
          </p>

          <h2 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: 'var(--text)' }}>Connect with Me</h2>
          <div style={{ marginBottom: '2rem' }}>
            <p style={{ marginBottom: '0.5rem' }}>
              📧 Email: <a href="mailto:your-email@example.com" style={{ color: 'var(--primary)', textDecoration: 'none' }}>your-email@example.com</a>
            </p>
            <p style={{ marginBottom: '0.5rem' }}>
              💼 LinkedIn: <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'none' }}>LinkedIn Profile</a>
            </p>
            <p style={{ marginBottom: '0.5rem' }}>
              🐙 GitHub: <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'none' }}>GitHub Profile</a>
            </p>
            <p>
              🐦 Twitter/X: <a href="https://x.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'none' }}>@yourhandle</a>
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Contact
