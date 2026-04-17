const seccionesTecnologia = [
  {
    titulo: '1. Lenguajes de Programacion.',
    elementos: [
      'Java',
      'JavaScript',
      'Kotlin',
      'Python',
    ],
  },
  {
    titulo: '2. Frameworks y Librerias.',
    elementos: [
      'React',
      'Room',
    ],
  },
  {
    titulo: '3. Tecnologias de Base de Datos.',
    elementos: [
      'MySQL',
      'PostgreSQL',
      'SQLite',
    ],
  },
  {
    titulo: '4. Servicios y Herramientas en la Nube.',
    elementos: [
      'AWS',
      'GitHub',
    ],
  },
]

const certificaciones = [
  {
    titulo: 'Grado Superior en Desarrollo de Aplicaciones Multiplataforma',
    entidad: 'Universidad Internacional de La Rioja',
    anio: '2026'
  }
]

import './App.css'

function App() {
  return (
    <div className="portfolio">
      <header className="header">
        <div className="container">
          <h1>Alvaro Perez</h1>
          <p className="subtitle">
            Estudiante de 2º DAM | Java • React • Vue • Python
          </p>
        </div>
      </header>

      <main className="container">
        <section className="section">
          <h2>Tecnologías</h2>
          
          {seccionesTecnologia.map((seccion) => (
            <div className="tech-category" key={seccion.titulo}>
              <h3>{seccion.titulo}</h3>
              <p>{seccion.subtitulo}</p>
              <div className="tech-grid">
                {seccion.elementos.map((elemento) => (
                  <span key={elemento} className="tech-tag">
                    {elemento}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section className="section">
          <h2>Sobre mí</h2>
          <p>
            Estudiante de 2º de DAM con muchas ganas de dar el salto al mercado laboral. Durante mi formación he aprendido a construir aplicaciones completas, priorizando siempre el código limpio y estructurado. Busco un equipo donde pueda aplicar lo aprendido, aportar valor desde el primer día y seguir creciendo profesionalmente.
          </p>
        </section>

        <section className="section">
          <h2>Certificaciones</h2>
          <div className="certifications-list">
            {certificaciones.map((certificacion) => (
              <div key={certificacion.titulo} className="certification-card">
                <h3>{certificacion.titulo}</h3>
                <p className="issuer">{certificacion.entidad}</p>
                <p className="year">{certificacion.anio}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <h2>Contacto</h2>
          <div className="contact-links">
            <a href="mailto:apy122@gmail.com" className="link">
              📧 apy122@gmail.com
            </a>
            <a href="https://github.com/apy122" target="_blank" rel="noreferrer" className="link">
              💻 GitHub
            </a>
            <a href="https://www.linkedin.com/in/apy122" target="_blank" rel="noreferrer" className="link">
              💼 LinkedIn
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2026 Portfolio DAM</p>
      </footer>
    </div>
  )
}

export default App
