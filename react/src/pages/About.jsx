function About() {
  return (
    <main id="main-content" style={{ maxWidth: '900px' }}>
      <section style={{ padding: '2rem 0' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', animation: 'fadeInUp 0.8s ease-out' }}>About Me</h1>

        <div style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '1rem', animation: 'fadeInUp 0.8s ease-out 0.1s both' }}>
          <p style={{ marginBottom: '1.5rem' }}>
            Hello! I'm Manoj Gadamsetty, a Staff Software Engineer based in Hyderabad, India, with 10+ years of experience at the 
            intersection of mobile development and cybersecurity. I'm passionate about building secure, scalable solutions that protect 
            millions of users worldwide while maintaining exceptional user experience.
          </p>

          <p style={{ marginBottom: '1.5rem' }}>
            Currently at Palo Alto Networks, I lead mobile security initiatives for the next-generation enterprise identity platform 
            with Workforce Password Manager, pioneering secure architectures for password management with offline data management, 
            sync optimization, and adversarial-resistant components.
          </p>

          <p style={{ marginBottom: '1.5rem' }}>
            My background spans iOS and Android development, enterprise mobile security, zero-trust architecture, and system security. 
            I've published security research, conducted 100+ Root Cause Analyses (RCAs), and spoken at industry conferences on mobile 
            security best practices.
          </p>

          <h2 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>Core Values</h2>
          <ul style={{ paddingLeft: '1.5rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>Security First: Building systems with threat modeling and defense-in-depth</li>
            <li style={{ marginBottom: '0.5rem' }}>Performance Excellence: Optimizing for speed and efficiency at scale</li>
            <li style={{ marginBottom: '0.5rem' }}>User Experience: Creating intuitive interfaces with minimal friction</li>
            <li style={{ marginBottom: '0.5rem' }}>Knowledge Sharing: Contributing to the developer community through talks and publications</li>
          </ul>
        </div>
      </section>
    </main>
  )
}

export default About
