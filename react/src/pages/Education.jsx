function Education() {
  const education = [
    {
      school: 'BITS Pilani',
      degree: 'B.E. Electronics & Communication',
      year: '2010-2014'
    },
    {
      school: 'QIS College',
      degree: 'Intermediate in Mathematics & Physics',
      year: '2008-2010'
    },
    {
      school: "St. Ann's High School",
      degree: 'Secondary Education',
      year: 'Completed'
    }
  ]

  return (
    <main id="main-content" style={{ maxWidth: '900px' }}>
      <section style={{ padding: '2rem 0' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', animation: 'fadeInUp 0.8s ease-out' }}>Education</h1>

        <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', animation: 'fadeInUp 0.8s ease-out 0.1s both' }}>Education</h2>
        <div className="timeline">
          {education.map((edu, idx) => (
            <div key={idx} className="timeline-entry animate-on-scroll" style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>{edu.school}</h3>
              <p style={{ color: 'var(--primary)', fontWeight: '600', marginBottom: '0.25rem' }}>{edu.degree}</p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{edu.year}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Education
