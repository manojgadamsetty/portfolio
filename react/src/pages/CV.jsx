function CV() {
  return (
    <main id="main-content" style={{ maxWidth: '900px' }}>
      <section style={{ padding: '2rem 0' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '3rem', animation: 'fadeInUp 0.8s ease-out' }}>Curriculum Vitae</h1>
        
        <div style={{ animation: 'fadeInUp 0.8s ease-out 0.1s both' }}>
          <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>
            Detailed curriculum vitae and professional background
          </p>
        </div>

        <section style={{ marginTop: '2rem' }}>
          <h2 style={{ fontSize: '1.3rem', marginBottom: '1rem', borderBottom: '2px solid var(--primary)', paddingBottom: '0.5rem' }}>Professional Summary</h2>
          <p style={{ marginBottom: '1rem', lineHeight: '1.8' }}>
            Staff Software Engineer with 10+ years of experience in mobile development and cybersecurity. 
            Specialized in building secure enterprise platforms, mobile security frameworks, and identity management systems.
          </p>
        </section>

        <section style={{ marginTop: '2rem' }}>
          <h2 style={{ fontSize: '1.3rem', marginBottom: '1rem', borderBottom: '2px solid var(--primary)', paddingBottom: '0.5rem' }}>Core Competencies</h2>
          <ul style={{ columns: 2, columnGap: '2rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>iOS Development (Swift, Objective-C)</li>
            <li style={{ marginBottom: '0.5rem' }}>Android Development (Kotlin, Java)</li>
            <li style={{ marginBottom: '0.5rem' }}>Mobile Security Architecture</li>
            <li style={{ marginBottom: '0.5rem' }}>Enterprise Identity & SSO</li>
            <li style={{ marginBottom: '0.5rem' }}>DevSecOps & CI/CD</li>
            <li style={{ marginBottom: '0.5rem' }}>Threat Modeling & Risk Analysis</li>
          </ul>
        </section>
      </section>
    </main>
  )
}

export default CV
