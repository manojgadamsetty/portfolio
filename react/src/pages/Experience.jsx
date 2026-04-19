function Experience() {
  const experiences = [
    {
      company: 'Palo Alto Networks',
      role: 'Staff Software Engineer',
      date: '2023 - Present',
      description: 'Leading mobile security initiatives for enterprise identity platform'
    },
    {
      company: 'CyberArk',
      role: 'Senior Software Engineer',
      date: '2021 - 2023',
      description: 'Developed enterprise identity and access management solutions'
    },
    {
      company: 'Frost Interactive',
      role: 'Lead iOS Engineer',
      date: '2019 - 2021',
      description: 'Architected and built mobile applications'
    },
    {
      company: 'Edwisely',
      role: 'Senior Mobile Developer',
      date: '2017 - 2019',
      description: 'Developed mobile learning platforms'
    },
    {
      company: 'Proxim Quest / BRN Infotech',
      role: 'iOS Developer',
      date: '2014 - 2017',
      description: 'Built enterprise mobile applications'
    }
  ]

  return (
    <main id="main-content" style={{ maxWidth: '900px' }}>
      <section style={{ padding: '2rem 0' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '3rem', animation: 'fadeInUp 0.8s ease-out' }}>Experience</h1>

        <div className="timeline">
          {experiences.map((exp, idx) => (
            <div key={idx} className="timeline-entry animate-on-scroll" style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{exp.company}</h3>
              <p style={{ color: 'var(--primary)', fontWeight: '600', marginBottom: '0.25rem' }}>{exp.role}</p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '0.75rem' }}>{exp.date}</p>
              <p>{exp.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Experience
