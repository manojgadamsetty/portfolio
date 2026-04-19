function Home() {
  return (
    <section id="hero" style={{ paddingTop: '6rem', textAlign: 'center' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem', animation: 'fadeInUp 0.8s ease-out' }}>
        Hi, I'm Manoj Gadamsetty
      </h1>
      <p style={{ 
        fontSize: '1.3rem', 
        color: 'var(--text-secondary)',
        marginBottom: '2rem',
        animation: 'fadeInUp 0.8s ease-out 0.1s both'
      }}>
        Staff Software Engineer | Mobile Security & Enterprise Identity Expert
      </p>
      
      <section id="expertise" className="expertise-section" style={{ marginTop: '4rem' }}>
        <h2 style={{ animation: 'fadeInUp 0.8s ease-out;' }}>Core Expertise</h2>
        <div className="expertise-grid">
          <div className="expertise-item animate-on-scroll">
            <h3>Mobile App Security</h3>
            <p>Expert in threat modeling, vulnerability assessments, and implementing OWASP Mobile Top 10 protections. Architecture security from the ground up.</p>
          </div>
          <div className="expertise-item animate-on-scroll">
            <h3>iOS Development</h3>
            <p>10+ years building production-grade iOS applications with Swift and Objective-C. Delivered apps serving millions with 99.99% crash-free stability.</p>
          </div>
          <div className="expertise-item animate-on-scroll">
            <h3>Android Development</h3>
            <p>Expert in secure Android applications with Kotlin and Java. Specialized in material design, performance optimization, and enterprise security.</p>
          </div>
          <div className="expertise-item animate-on-scroll">
            <h3>Enterprise Identity & Authentication</h3>
            <p>OAuth 2.0, OpenID Connect (OIDC), SAML 2.0, FIDO2/WebAuthn, Enterprise SSO (Entra ID, AD), Platform SSO, and zero-trust architecture.</p>
          </div>
          <div className="expertise-item animate-on-scroll">
            <h3>DevSecOps & Security Integration</h3>
            <p>Architect CI/CD pipelines with security integration, SAST/DAST tools, threat modeling, code scanning, and automated compliance checks.</p>
          </div>
          <div className="expertise-item animate-on-scroll">
            <h3>Code & Security Review</h3>
            <p>Conduct security code reviews, penetration testing, vulnerability assessments, and DREAD risk analysis aligned with industry standards.</p>
          </div>
          <div className="expertise-item animate-on-scroll">
            <h3>Cross-Platform Development</h3>
            <p>React Native, Kotlin Multiplatform (KMM), Flutter for enterprise POCs. macOS development. Advanced media handling and DRM integration.</p>
          </div>
          <div className="expertise-item animate-on-scroll">
            <h3>Security Research & Tools</h3>
            <p>100+ RCAs, CVE analysis, iOS jailbreak detection, frida instrumentation, network analysis, and publishing findings to technical communities.</p>
          </div>
        </div>
      </section>

      <section style={{ marginTop: '4rem', maxWidth: '900px', margin: '4rem auto', padding: '2rem' }}>
        <h2 style={{ animation: 'fadeInUp 0.8s ease-out', marginBottom: '2rem' }}>Featured Work</h2>
        <p style={{ 
          color: 'var(--text-secondary)',
          lineHeight: '1.8',
          animation: 'fadeInUp 0.8s ease-out 0.1s both'
        }}>
          I specialize in building secure, scalable mobile applications and enterprise identity platforms. 
          Currently at Palo Alto Networks leading mobile security initiatives for next-generation enterprise identity platforms.
        </p>
      </section>
    </section>
  )
}

export default Home
