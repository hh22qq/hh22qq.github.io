// src/App.tsx
import CONFIG from './config';
import './styles.css';

export default function App() {
  const name = CONFIG.github.username || 'Your Name';
  const external = CONFIG.projects?.external?.projects || [];
  const skills = CONFIG.skills || [];
  const social = CONFIG.social || {};

  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <img className="avatar" src="https://avatars.githubusercontent.com/u/9919?s=200&v=4" alt="avatar" />
        <div>
          <h1 className="title">{name}</h1>
          <p className="subtitle">Developer • Portfolio</p>
          <div className="actions">
            <a className="btn primary" href={`https://github.com/${name}`} target="_blank" rel="noreferrer">GitHub</a>
            {social.linkedin && <a className="btn" href={`https://www.linkedin.com/in/${social.linkedin}`} target="_blank" rel="noreferrer">LinkedIn</a>}
            {social.website && <a className="btn" href={social.website} target="_blank" rel="noreferrer">Website</a>}
            {social.email && <a className="btn" href={`mailto:${social.email}`}>Email</a>}
          </div>
        </div>
      </header>

      <hr className="sep" />

      {/* Skills */}
      {skills.length > 0 && (
        <section className="section">
          <h2>Skills</h2>
          <div className="tags">
            {skills.map((s) => <span key={s} className="tag">{s}</span>)}
          </div>
        </section>
      )}

      {/* Projects */}
      {external.length > 0 && (
        <section className="section">
          <h2>Projects</h2>
          <div className="card-grid">
            {external.map((p) => (
              <article key={p.title} className="card">
                <h3>{p.title}</h3>
                {p.description && <p>{p.description}</p>}
                <div style={{marginTop:12}}>
                  <a className="btn" href={p.link} target="_blank" rel="noreferrer">Visit →</a>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      <footer className="footer">© {new Date().getFullYear()} {name}. Powered by Vite • GitHub Pages</footer>
    </div>
  );
}
